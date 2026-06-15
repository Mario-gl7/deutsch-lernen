export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { word } = req.query;
  if (!word) return res.status(400).json({ error: 'missing word' });

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
      const err = await r.text();
      return res.status(r.status).json({ error: err });
    }

    const j = await r.json();
    const translation = j?.translations?.[0]?.text || null;
    res.json({ translation });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
