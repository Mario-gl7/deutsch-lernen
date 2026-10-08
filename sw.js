// Service worker — Deutsch Lernen
// Estrategia: network-first para la app (HTML/JS/CSS) con fallback a caché, así nunca se queda con código viejo.
// No intercepta Supabase, /api ni peticiones que no sean GET.
const SHELL = 'deutsch-shell-v4';
const FONTS = 'deutsch-fonts-v1';
const ASSETS = ['./', 'index.html', 'app.css', 'app.js', 'manifest.webmanifest',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png', 'icons/apple-touch-icon.png',
  'icons/favicon-32.png', 'favicon.ico'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL)
      .then(c => Promise.all(ASSETS.map(a => c.add(a).catch(() => {}))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== SHELL && k !== FONTS).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Google Fonts: stale-while-revalidate
  if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
    e.respondWith(caches.open(FONTS).then(c => c.match(req).then(hit => {
      const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) c.put(req, r.clone()); return r; }).catch(() => hit);
      return hit || net;
    })));
    return;
  }

  // Todo lo que no sea de nuestro origen (Supabase, DeepL…) o sea /api: directo a red
  if (url.origin !== location.origin || url.pathname.includes('/api/')) return;

  // App: network-first, fallback a caché (y a index.html en navegación)
  e.respondWith(
    fetch(req).then(r => {
      if (r && r.ok) { const copy = r.clone(); caches.open(SHELL).then(c => c.put(req, copy)); }
      return r;
    }).catch(() => caches.match(req).then(hit =>
      hit || (req.mode === 'navigate' ? caches.match('index.html') : undefined) ||
      new Response('Offline', { status: 503 })))
  );
});
