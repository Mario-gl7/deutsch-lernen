// Vercel serverless: devuelve la página web original (sin scripts propios) con un script
// mínimo inyectado que detecta la palabra tocada y la envía al lector por postMessage.
import { randomBytes } from 'crypto';
import { fetchSafe } from './_net.js';
import { requireUser } from './_auth.js';

const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function errorPage(msg) {
  return '<!DOCTYPE html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">' +
    '<body style="font-family:-apple-system,Segoe UI,sans-serif;background:#f7f7f5;color:#1a1a1a;display:flex;align-items:center;justify-content:center;min-height:80vh;text-align:center;padding:24px">' +
    '<div><div style="font-size:40px">⚠️</div><p style="margin-top:12px;line-height:1.5">' + esc(msg) + '</p></div></body>';
}

function send(res, status, html, nonce) {
  const csp = [
    "default-src 'none'",
    nonce ? `script-src 'nonce-${nonce}'` : "script-src 'none'",
    "style-src https: 'unsafe-inline'", "img-src https: data: blob:", "font-src https: data:", "media-src https:",
    "connect-src 'none'", "frame-src 'none'", "object-src 'none'", "form-action 'none'",
    'base-uri https:',
    'upgrade-insecure-requests',
    'sandbox allow-scripts',
  ].join('; ');
  if (status === 200) {
    const meta = `<meta http-equiv="Content-Security-Policy" content="${csp}">`;
    html = /<head[^>]*>/i.test(html) ? html.replace(/<head[^>]*>/i, match => match + meta) : '<head>' + meta + '</head>' + html;
  }
  res.setHeader('Content-Security-Policy', csp);
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Referrer-Policy', 'no-referrer');
  res.setHeader('Cache-Control', 'private, no-store');
  res.status(status).send(html);
}

// ── Se ejecuta DENTRO del iframe (sandbox sin allow-same-origin) ──
function clientScript() {
  var LET = /[A-Za-z\u00c0-\u024f\u1e00-\u1eff]/;
  var cur = null;
  function post(m) { m.__vo = 1; parent.postMessage(m, '*'); }
  function clear() {
    if (!cur) return;
    var p = cur.parentNode;
    if (p) { while (cur.firstChild) p.insertBefore(cur.firstChild, cur); p.removeChild(cur); p.normalize(); }
    cur = null;
  }
  function apos(c) { return c === '-' || c === "'" || c === '\u2019'; }
  function wordAt(x, y) {
    var n, o;
    if (document.caretRangeFromPoint) {
      var r = document.caretRangeFromPoint(x, y);
      if (!r) return null;
      n = r.startContainer; o = r.startOffset;
    } else if (document.caretPositionFromPoint) {
      var p = document.caretPositionFromPoint(x, y);
      if (!p) return null;
      n = p.offsetNode; o = p.offset;
    } else return null;
    if (!n || n.nodeType !== 3) return null;
    var t = n.nodeValue, i = o;
    if (!(i < t.length && LET.test(t[i]))) i--;
    if (i < 0 || !LET.test(t[i])) return null;
    var a = i, b = i + 1;
    while (a > 0 && (LET.test(t[a - 1]) || (apos(t[a - 1]) && a > 1 && LET.test(t[a - 2]) && LET.test(t[a])))) a--;
    while (b < t.length && (LET.test(t[b]) || (apos(t[b]) && b + 1 < t.length && LET.test(t[b + 1]) && LET.test(t[b - 1])))) b++;
    var range = document.createRange();
    range.setStart(n, a); range.setEnd(n, b);
    var rects = range.getClientRects(), hit = false;
    for (var k = 0; k < rects.length; k++) {
      var q = rects[k];
      if (x >= q.left - 3 && x <= q.right + 3 && y >= q.top - 3 && y <= q.bottom + 3) { hit = true; break; }
    }
    if (!hit) return null;
    return { word: t.slice(a, b), range: range };
  }
  document.addEventListener('click', function (e) {
    e.preventDefault(); e.stopPropagation();
    var a = e.target && e.target.closest ? e.target.closest('a[href]') : null;
    var href = a ? a.href : null;
    if (typeof href !== 'string') href = null;
    if (a && (a.getAttribute('href') || '').charAt(0) === '#') {
      try {
        var id = decodeURIComponent(a.getAttribute('href').slice(1));
        var tg = id && (document.getElementById(id) || document.getElementsByName(id)[0]);
        if (tg) tg.scrollIntoView();
      } catch (err) {}
      href = null;
    }
    var w = wordAt(e.clientX, e.clientY);
    if (w) {
      clear();
      var s = document.createElement('span');
      s.className = '__lw';
      try { w.range.surroundContents(s); cur = s; } catch (err) {}
      var rc = (cur || w.range).getBoundingClientRect();
      post({ type: 'word', word: w.word, l: rc.left, t: rc.top, b: rc.bottom, href: href });
    } else if (href) {
      post({ type: 'nav', href: href });
    } else {
      clear(); post({ type: 'close' });
    }
  }, true);
  window.addEventListener('message', function (e) {
    if (e.source !== parent) return;
    if (e.data && e.data.__vo && e.data.type === 'clear') clear();
  });
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return send(res, 405, errorPage('Método no permitido'));
  if (!(await requireUser(req, res))) return;
  const { url } = req.query;
  if (!url || typeof url !== 'string') return send(res, 400, errorPage('Falta el enlace'));
  if (url.length > 2048) return send(res, 400, errorPage('Enlace demasiado largo'));

  try {
    let cur = url, r = null;
    for (let i = 0; i < 5; i++) {
      let u;
      try { u = new URL(cur); } catch { return send(res, 400, errorPage('Enlace no válido')); }
      r = await fetchSafe(u, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; DeutschLernen/1.0)',
          'Accept': 'text/html,application/xhtml+xml',
          'Accept-Language': 'de,es;q=0.8,en;q=0.5',
        },
      }, 3.5 * 1024 * 1024);
      const loc = r.headers.get('location');
      if (r.status >= 300 && r.status < 400 && loc) { cur = new URL(loc, cur).href; continue; }
      break;
    }
    if (!r || (r.status >= 300 && r.status < 400)) return send(res, 502, errorPage('Demasiadas redirecciones'));
    if (!r.ok) return send(res, 502, errorPage('La web respondió con error ' + r.status));
    const ct = r.headers.get('content-type') || '';
    if (!/html/i.test(ct)) return send(res, 415, errorPage('Solo se pueden abrir páginas web'));

    const buf = Buffer.from(await r.arrayBuffer());
    const cs = (ct.match(/charset=([\w-]+)/i) || [])[1]
      || (buf.subarray(0, 2048).toString('latin1').match(/<meta[^>]+charset=["']?([\w-]+)/i) || [])[1]
      || 'utf-8';
    let html;
    try { html = new TextDecoder(cs).decode(buf); } catch { html = buf.toString('utf-8'); }

    // Limpiar: sin scripts, sin CSP/refresh propios, sin <base> ni iframes/objetos
    html = html
      .replace(/<script\b[^>]*>[\s\S]*?<\/script\s*>/gi, '')
      .replace(/<(iframe|object|embed)\b[\s\S]*?<\/\1\s*>/gi, '')
      .replace(/<base\b[^>]*>/gi, '')
      .replace(/<meta[^>]+http-equiv=["']?(content-security-policy|refresh)["']?[^>]*>/gi, '')
      .replace(/<meta[^>]+charset=[^>]*>/gi, '');

    const nonce = randomBytes(16).toString('base64');
    const hasViewport = /<meta[^>]+name=["']viewport/i.test(html);
    const headInject =
      '<meta charset="utf-8">' +
      `<base href="${esc(cur)}">` +
      '<meta name="referrer" content="no-referrer">' +
      (hasViewport ? '' : '<meta name="viewport" content="width=device-width,initial-scale=1">') +
      '<style>html,body,body *{cursor:pointer;-webkit-tap-highlight-color:transparent}' +
      '.__lw{background:rgba(96,165,250,.4);border-radius:2px}</style>';
    if (/<head[^>]*>/i.test(html)) html = html.replace(/<head[^>]*>/i, m => m + headInject);
    else html = '<head>' + headInject + '</head>' + html;
    html += `<script nonce="${nonce}">(${clientScript.toString()})();</script>`;

    if (Buffer.byteLength(html) > 4.2 * 1024 * 1024) return send(res, 413, errorPage('Página demasiado grande'));
    send(res, 200, html, nonce);
  } catch (e) {
    if (e.name === 'UnsafeUrlError') return send(res, 400, errorPage('Enlace no permitido'));
    if (e.name === 'TooLargeError') return send(res, 413, errorPage('Página demasiado grande'));
    send(res, 500, errorPage(e.name === 'TimeoutError' ? 'La web tarda demasiado' : 'No se pudo descargar la página'));
  }
}
