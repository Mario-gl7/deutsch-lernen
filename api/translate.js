import { requireUser } from './_auth.js';

export default async function handler(req, res) {
  // Sin CORS: la app llama desde el mismo origen
  if (req.method !== 'GET') return res.status(405).json({ error: 'method not allowed' });
  if (!(await requireUser(req, res))) return;

  const word = typeof req.query.word === 'string' ? req.query.word.trim() : '';
  if (!word) return res.status(400).json({ error: 'missing word' });
  if (word.length > 100) return res.status(400).json({ error: 'word too long' });

  const apiKey = process.env.DEEPL_API_KEY;
  if (!apiKey) return res.status(500).json({ error: 'API key not configured' });

  try {
    const r = await fetch('https://api-free.deepl.com/v2/translate', {
      method: 'POST',
      headers: {
        'Authorization': 'DeepL-Auth-Key ' + apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: [word],
        source_lang: 'DE',
        target_lang: 'ES',
      }),
      signal: AbortSignal.timeout(6000),
    });

    if (!r.ok) {
      return res.status(502).json({ error: 'translation failed' });
    }

    const j = await r.json();
    const translation = j?.translations?.[0]?.text || null;
    res.json({ translation });
  } catch (e) {
    res.status(500).json({ error: 'translation failed' });
  }
}
