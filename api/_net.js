// Descargas HTTP(S) con validación DNS y conexión fijada a una IP pública.
// Así se evita que una segunda resolución DNS permita un ataque de rebinding.
import { lookup } from 'dns/promises';
import http from 'http';
import https from 'https';
import { isIP } from 'net';

function privateV4(a, b, c) {
  return a === 0 || a === 10 || a === 127 || a >= 224 ||
    (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
    (a === 172 && b >= 16 && b <= 31) || (a === 192 && (b === 0 || b === 168 || (b === 88 && c === 99) || (b === 0 && c === 2))) ||
    (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) || (a === 203 && b === 0 && c === 113);
}

function privateAddr(address, family) {
  if (family === 4) {
    const p = address.split('.').map(Number);
    return p.length !== 4 || privateV4(p[0], p[1], p[2]);
  }
  const a = address.toLowerCase();
  if (a.startsWith('::ffff:')) return true;
  // Deniega direcciones no globales, IPv4 compatibles, 6to4 y Teredo.
  return a === '::' || a === '::1' || /^::$/.test(a) || /^::[0-9a-f]/.test(a) ||
    /^f[cd]/.test(a) || /^fe[89ab]/.test(a) || /^ff/.test(a) || /^fec[0-9a-f]:/.test(a) ||
    /^2001:db8:/.test(a) || /^2001:0:/.test(a) || /^2002:/.test(a) || /^64:ff9b:/.test(a);
}

function privateHost(host) {
  const h = host.toLowerCase().replace(/\.$/, '').replace(/^\[|\]$/g, '');
  return h === 'localhost' || h.endsWith('.localhost') || h.endsWith('.local') || h.endsWith('.internal');
}

function headerValue(headers, name) {
  const key = Object.keys(headers).find(k => k.toLowerCase() === name.toLowerCase());
  const value = key ? headers[key] : undefined;
  return Array.isArray(value) ? value[0] : value;
}

// Similar a fetch(), pero resuelve una vez, valida todas las respuestas DNS y
// fija el socket a una de ellas. El cuerpo nunca supera maxBytes en memoria.
export async function fetchSafe(rawUrl, options = {}, maxBytes = 4 * 1024 * 1024) {
  const url = rawUrl instanceof URL ? rawUrl : new URL(rawUrl);
  if (!/^https?:$/.test(url.protocol) || url.username || url.password || privateHost(url.hostname)) {
    const error = new Error('URL no permitida'); error.name = 'UnsafeUrlError'; throw error;
  }

  const host = url.hostname.replace(/^\[|\]$/g, '');
  let addresses;
  try {
    const family = isIP(host);
    addresses = family ? [{ address: host, family }] : await lookup(host, { all: true, verbatim: true });
  } catch { const error = new Error('No se pudo resolver el host'); error.name = 'UnsafeUrlError'; throw error; }
  if (!addresses.length || addresses.some(a => privateAddr(a.address, a.family))) {
    const error = new Error('Host no permitido'); error.name = 'UnsafeUrlError'; throw error;
  }
  const address = addresses[0];
  const transport = url.protocol === 'https:' ? https : http;
  const timeout = options.timeout || 10000;

  const body = await new Promise((resolve, reject) => {
    const req = transport.request({
      protocol: url.protocol,
      hostname: host,
      port: url.port || undefined,
      path: url.pathname + url.search,
      method: options.method || 'GET',
      headers: options.headers || {},
      lookup: (_hostname, opts, callback) => {
        // Node requests all records when auto-selecting IPv4/IPv6. Return the
        // matching shape while still pinning the socket to the validated IP.
        if (opts?.all) callback(null, [address]);
        else callback(null, address.address, address.family);
      },
      servername: isIP(host) ? undefined : host,
    }, res => {
      res.on('error', reject);
      const contentLength = Number(headerValue(res.headers, 'content-length'));
      if (Number.isFinite(contentLength) && contentLength > maxBytes) {
        const error = new Error('Respuesta demasiado grande'); error.name = 'TooLargeError';
        res.destroy(error);
        return;
      }
      const chunks = [];
      let size = 0;
      res.on('data', chunk => {
        size += chunk.length;
        if (size > maxBytes) {
          const error = new Error('Respuesta demasiado grande'); error.name = 'TooLargeError';
          res.destroy(error); return;
        }
        chunks.push(chunk);
      });
      res.on('end', () => resolve({ status: res.statusCode || 0, headers: res.headers, body: Buffer.concat(chunks) }));
    });
    req.setTimeout(timeout, () => {
      const error = new Error('La web tarda demasiado'); error.name = 'TimeoutError'; req.destroy(error);
    });
    req.on('error', reject);
    req.end();
  });

  return {
    status: body.status,
    ok: body.status >= 200 && body.status < 300,
    headers: { get: name => headerValue(body.headers, name) || null },
    arrayBuffer: async () => body.body.buffer.slice(body.body.byteOffset, body.body.byteOffset + body.body.byteLength),
  };
}
