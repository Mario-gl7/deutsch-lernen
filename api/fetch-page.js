import { isSafeUrl } from './_net.js';
import { requireUser } from './_auth.js';

// Vercel serverless: descarga una página web y devuelve su texto legible
const ENT = { amp:'&', lt:'<', gt:'>', quot:'"', apos:"'", nbsp:' ', auml:'ä', ouml:'ö', uuml:'ü', Auml:'Ä', Ouml:'Ö', Uuml:'Ü', szlig:'ß',
  ndash:'–', mdash:'—', hellip:'…', laquo:'«', raquo:'»', bdquo:'„', ldquo:'“', rdquo:'”', lsquo:'‘', rsquo:'’', euro:'€', copy:'©',
  eacute:'é', egrave:'è', aacute:'á', iacute:'í', oacute:'ó', uacute:'ú', ntilde:'ñ' };

function decode(s) {
  return s.replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
    if (e[0] === '#') {
      try { return String.fromCodePoint(e[1].toLowerCase() === 'x' ? parseInt(e.slice(2), 16) : parseInt(e.slice(1), 10)); } catch { return m; }
    }
    return ENT[e] ?? m;
  });
}

function extract(html) {
  const tm = html.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)/i) || html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = decode((tm?.[1] || '').replace(/\s+/g, ' ').trim());

  let h = html.replace(/<!--[\s\S]*?-->/g, '')
    .replace(/<(script|style|noscript|svg|iframe|form|nav|footer|aside|template|button|select)\b[\s\S]*?<\/\1>/gi, '');
  const art = h.match(/<article\b[\s\S]*?<\/article>/i);
  const main = h.match(/<main\b[\s\S]*?<\/main>/i);
  if (art && art[0].length > 1500) h = art[0];
  else if (main && main[0].length > 1500) h = main[0];

  let text = h.replace(/\s+/g, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|h[1-6]|li|tr|blockquote|section|article|figure|figcaption|ul|ol|table|pre)>/gi, '\n\n')
    .replace(/<[^>]+>/g, '');
  text = decode(text)
    .split('\n').map(l => l.replace(/[ \t\u00a0]+/g, ' ').trim()).join('\n')
    .replace(/\n{3,}/g, '\n\n').trim();
  return { title, text: text.slice(0, 200000) };
}

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Método no permitido' });
  if (!(await requireUser(req, res))) return;

  const { url } = req.query;
  if (!url || typeof url !== 'string') return res.status(400).json({ error: 'Falta el enlace' });

  try {
    let cur = url, r = null;
    for (let i = 0; i < 5; i++) {
      let u;
      try { u = new URL(cur); } catch { return res.status(400).json({ error: 'Enlace no válido' }); }
      if (!(await isSafeUrl(u))) return res.status(400).json({ error: 'Enlace no permitido' });
      r = await fetch(cur, {
        redirect: 'manual',
        headers: {
          'User-Agent': 'Mozilla/5.0 (compatible; DeutschLernen/1.0)',
          'Accept': 'text/html,application/xhtml+xml,text/plain;q=0.8',
          'Accept-Language': 'de,es;q=0.8,en;q=0.5',
        },
        signal: AbortSignal.timeout(10000),
      });
      const loc = r.headers.get('location');
      if (r.status >= 300 && r.status < 400 && loc) { cur = new URL(loc, cur).href; continue; }
      break;
    }
    if (!r || (r.status >= 300 && r.status < 400)) return res.status(502).json({ error: 'Demasiadas redirecciones' });
    if (!r.ok) return res.status(502).json({ error: 'La web respondió con error ' + r.status });

    const ct = r.headers.get('content-type') || '';
    if (!/html|text\/plain/i.test(ct)) return res.status(415).json({ error: 'Solo páginas web o texto' });

    const buf = Buffer.from(await r.arrayBuffer());
    if (buf.length > 3 * 1024 * 1024) return res.status(413).json({ error: 'Página demasiado grande' });

    let cs = (ct.match(/charset=([\w-]+)/i) || [])[1]
      || (buf.subarray(0, 2048).toString('latin1').match(/<meta[^>]+charset=["']?([\w-]+)/i) || [])[1]
      || 'utf-8';
    let html;
    try { html = new TextDecoder(cs).decode(buf); } catch { html = buf.toString('utf-8'); }

    const { title, text } = /html/i.test(ct) ? extract(html) : { title: '', text: html };
    if (text.length < 200) return res.status(422).json({ error: 'No se encontró texto legible (¿web que carga con JavaScript?)' });

    res.setHeader('Cache-Control', 'private, no-store');
    res.json({ title, text, url: cur });
  } catch (e) {
    res.status(500).json({ error: e.name === 'TimeoutError' ? 'La web tarda demasiado' : 'No se pudo descargar la página' });
  }
}
