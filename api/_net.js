// Protección SSRF compartida: bloquea hosts privados, también tras resolver el DNS
// (evita dominios públicos que apuntan a 127.0.0.1, 169.254.x.x, etc.).
import { lookup } from 'dns/promises';

function privateV4(a, b) {
  return a === 0 || a === 10 || a === 127 || a >= 224 || (a === 100 && b >= 64 && b <= 127) ||
    (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ||
    (a === 192 && b === 0) || (a === 198 && (b === 18 || b === 19));
}

export function isPrivateHost(h) {
  h = h.toLowerCase();
  if (h === 'localhost' || h.endsWith('.localhost') || h.endsWith('.local') || h.endsWith('.internal')) return true;
  if (h.includes(':')) return true; // literal IPv6
  const m = h.match(/^(\d+)\.(\d+)\.(\d+)\.(\d+)$/);
  return !!m && privateV4(+m[1], +m[2]);
}

function privateAddr(addr, family) {
  if (family === 4) { const p = addr.split('.').map(Number); return privateV4(p[0], p[1]); }
  const a = addr.toLowerCase();
  if (a === '::' || a === '::1') return true;
  if (a.startsWith('::ffff:')) { const v4 = a.slice(7); return v4.includes('.') ? privateAddr(v4, 4) : true; }
  return /^f[cd]/.test(a) || /^fe[89ab]/.test(a);
}

// true si la URL es segura para descargar
export async function isSafeUrl(u) {
  if (!/^https?:$/.test(u.protocol) || u.username || u.password) return false;
  if (isPrivateHost(u.hostname)) return false;
  try {
    const addrs = await lookup(u.hostname, { all: true });
    return addrs.length > 0 && addrs.every(a => !privateAddr(a.address, a.family));
  } catch { return false; }
}
