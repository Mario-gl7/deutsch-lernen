// Comprueba que la petición viene de un usuario con sesión válida de Supabase.
// (Los archivos que empiezan por _ no se exponen como ruta en Vercel.)
const SB_URL = process.env.SUPABASE_URL || 'https://rplehltqclmdcmwkqxko.supabase.co';
// Clave publishable: pública por diseño (la misma que usa el navegador)
const SB_KEY = process.env.SUPABASE_ANON_KEY || 'sb_publishable_iF3ivUafJrJmDUKc2U0pfw_CWqnGnYf';

export async function requireUser(req, res) {
  const h = req.headers.authorization || '';
  const token = h.startsWith('Bearer ') ? h.slice(7).trim() : '';
  if (!token || token.length > 4096) { res.status(401).json({ error: 'No autorizado' }); return null; }
  try {
    const r = await fetch(SB_URL + '/auth/v1/user', {
      headers: { apikey: SB_KEY, Authorization: 'Bearer ' + token },
      signal: AbortSignal.timeout(5000),
    });
    if (!r.ok) { res.status(401).json({ error: 'No autorizado' }); return null; }
    return await r.json();
  } catch {
    res.status(401).json({ error: 'No autorizado' });
    return null;
  }
}
