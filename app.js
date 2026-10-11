// ═══════════════════ i18n ═══════════════════
const TRANSLATIONS = {
  es: {
    // Login
    loginTitle: 'Iniciar sesión',
    loginEmailLabel: 'Correo electrónico',
    loginEmailPh: 'tu@correo.com',
    loginPassLabel: 'Contraseña',
    loginBtn: 'Entrar →',
    connecting: 'Conectando…',
    // Dropdown
    myAccount: 'Mi cuenta',
    profile: 'Mi perfil',
    darkMode: 'Modo oscuro',
    language: 'Idioma',
    logout: 'Cerrar sesión',
    // Home
    workspace: '🇩🇪 Workspace',
    greeting: 'Hola,',
    homeSub: '¿Qué quieres practicar hoy?',
    vocabTitle: 'Vocabulario',
    vocabDesc: 'Lista · Parejas · Crucigrama',
    grammarTitle: 'Gramática',
    grammarDesc: 'Casos, conjugaciones y más',
    comingSoon: 'Próximamente',
    words: 'palabras',
    hard: 'difícil',
    pending: 'Pendiente',
    mastered: 'Dominada',
    offlineNote: 'Tu workspace personal · offline',
    // Vocab hub
    vocabHubSub: 'Elige cómo quieres practicar',
    listTitle: 'Lista',
    listDesc: 'Explora y gestiona tus palabras',
    pairsTitle: 'Parejas',
    pairsDesc: 'Une alemán con español',
    crossTitle: 'Crucigrama',
    crossDesc: 'Rellena la cuadrícula con pistas en español',
    // Top-bar breadcrumbs
    inicio: 'Inicio',
    // Lista
    addBtn: '＋ Añadir',
    importBtn: '⬆ Importar',
    // Filters
    filterAll: 'Todos',
    diffAll: 'Todas',
    diffHard: '🔴 Difícil',
    diffEasy: '🟢 Fácil',
    diffNormal: '📊 Normal',
    diffNew: '🆕 Nuevas',
    // Modals
    addWordTitle: 'Añadir palabra',
    addTipoLabel: 'Tipo',
    addArticleLabel: 'Artículo',
    addDeLabel: 'Alemán',
    addDePh: 'ej. Schule',
    addEsLabel: 'Español',
    addEsPh: 'ej. Escuela',
    saveWordBtn: 'Guardar palabra',
    cancel: 'Cancelar',
    importTitle: 'Importar vocabulario',
    importFmt: 'Formato CSV: Tipo, Artículo, Alemán, Español',
    importZone: 'Toca para elegir tu archivo CSV',
    importAdd: 'Añadir',
    importReplace: 'Reemplazar',
    importBtn2: 'Importar',
    installTitle: 'Añadir a pantalla de inicio',
    installSub: 'Instala la app para usarla offline en iPhone / iPad:',
    installStep1: 'Abre esta página en Safari (no Chrome)',
    installStep2: 'Toca el botón Compartir ⬆️ en la barra',
    installStep3: 'Pulsa "Añadir a pantalla de inicio"',
    installStep4: 'Confirma con "Añadir" — ¡listo!',
    understood: 'Entendido',
    // Crossword
    cwSmart: '🧠 Inteligente',
    cwBag: '🎒 Bolsa',
    cwBagEmpty: 'La bolsa está vacía',
    cwBagEmptySub: 'Juega a Parejas primero.\nLas palabras que aciertes se añaden aquí.',
    cwCheck: 'Comprobar ✓',
    cwReveal: 'Revelar solución',
    cwNew: 'Nuevo crucigrama ↺',
    cwEmptyBag: '🗑 Vaciar bolsa',
    cwHint: 'Pistas en español · toca para ver en alemán',
    cwHintTitle: 'Pistas',
    cwWords: 'palabras',
    // Match
    matchTitle: 'Parejas',
    matchNewRound: 'Nueva ronda →',
    matchNoWords: 'No hay suficientes palabras',
    // Errors
    errEmail: 'Introduce tu correo',
    errPass: 'Introduce tu contraseña',
    errBadLogin: 'Correo o contraseña incorrectos',
    errConnection: 'Error de conexión.',
    errDeRequired: 'El campo Alemán es obligatorio',
    errEsRequired: 'El campo Español es obligatorio',
    // Toast
    toastAdded: '✓ Palabra añadida: ',
    toastImported: ' palabras importadas',
    toastImportFail: '❌ No se pudo leer el archivo',
    navHome: 'Inicio',
    navProgress: 'Progresión',
    navVocab: 'Vocabulario',
    navSettings: 'Ajustes',
    navReading: 'Lectura',
  },
  de: {
    loginTitle: 'Anmelden',
    loginEmailLabel: 'E-Mail-Adresse',
    loginEmailPh: 'deine@email.de',
    loginPassLabel: 'Passwort',
    loginBtn: 'Einloggen →',
    connecting: 'Verbinden…',
    myAccount: 'Mein Konto',
    profile: 'Mein Profil',
    darkMode: 'Dunkelmodus',
    language: 'Sprache',
    logout: 'Abmelden',
    workspace: '🇩🇪 Workspace',
    greeting: 'Hallo,',
    homeSub: 'Was möchtest du heute üben?',
    vocabTitle: 'Vokabeln',
    vocabDesc: 'Liste · Paare · Kreuzwort',
    grammarTitle: 'Grammatik',
    grammarDesc: 'Fälle, Konjugationen und mehr',
    comingSoon: 'Demnächst',
    words: 'Wörter',
    hard: 'schwer',
    pending: 'Ausstehend',
    mastered: 'Gemeistert',
    offlineNote: 'Dein persönlicher Workspace · offline',
    vocabHubSub: 'Wie möchtest du üben?',
    listTitle: 'Liste',
    listDesc: 'Deine Wörter erkunden und verwalten',
    pairsTitle: 'Paare',
    pairsDesc: 'Deutsch mit Spanisch verbinden',
    crossTitle: 'Kreuzwort',
    crossDesc: 'Gitter mit spanischen Hinweisen füllen',
    inicio: 'Start',
    addBtn: '＋ Hinzufügen',
    importBtn: '⬆ Importieren',
    filterAll: 'Alle',
    diffAll: 'Alle',
    diffHard: '🔴 Schwer',
    diffEasy: '🟢 Leicht',
    diffNormal: '📊 Normal',
    diffNew: '🆕 Neu',
    addWordTitle: 'Wort hinzufügen',
    addTipoLabel: 'Typ',
    addArticleLabel: 'Artikel',
    addDeLabel: 'Deutsch',
    addDePh: 'z.B. Schule',
    addEsLabel: 'Spanisch',
    addEsPh: 'z.B. Escuela',
    saveWordBtn: 'Wort speichern',
    cancel: 'Abbrechen',
    importTitle: 'Vokabeln importieren',
    importFmt: 'CSV-Format: Typ, Artikel, Deutsch, Spanisch',
    importZone: 'Tippe, um deine CSV-Datei auszuwählen',
    importAdd: 'Hinzufügen',
    importReplace: 'Ersetzen',
    importBtn2: 'Importieren',
    installTitle: 'Zum Startbildschirm hinzufügen',
    installSub: 'Installiere die App für die Offline-Nutzung auf iPhone / iPad:',
    installStep1: 'Öffne diese Seite in Safari (nicht Chrome)',
    installStep2: 'Tippe auf die Schaltfläche Teilen ⬆️',
    installStep3: 'Tippe auf „Zum Startbildschirm"',
    installStep4: 'Bestätige mit „Hinzufügen" — fertig!',
    understood: 'Verstanden',
    cwSmart: '🧠 Intelligent',
    cwBag: '🎒 Beutel',
    cwBagEmpty: 'Der Beutel ist leer',
    cwBagEmptySub: 'Spiele zuerst Paare.\nRichtige Wörter werden hier gesammelt.',
    cwCheck: 'Prüfen ✓',
    cwReveal: 'Lösung anzeigen',
    cwNew: 'Neues Kreuzwort ↺',
    cwEmptyBag: '🗑 Beutel leeren',
    cwHint: 'Hinweise auf Spanisch · tippen für Deutsch',
    cwHintTitle: 'Hinweise',
    cwWords: 'Wörter',
    matchTitle: 'Paare',
    matchNewRound: 'Neue Runde →',
    matchNoWords: 'Nicht genug Wörter',
    errEmail: 'Gib deine E-Mail ein',
    errPass: 'Gib dein Passwort ein',
    errBadLogin: 'E-Mail oder Passwort falsch',
    errConnection: 'Verbindungsfehler.',
    errDeRequired: 'Das Feld Deutsch ist pflichtangabe',
    errEsRequired: 'Das Feld Spanisch ist pflichtangabe',
    toastAdded: '✓ Wort hinzugefügt: ',
    toastImported: ' Wörter importiert',
    toastImportFail: '❌ Datei konnte nicht gelesen werden',
    navHome: 'Start',
    navProgress: 'Fortschritt',
    navVocab: 'Vokabeln',
    navSettings: 'Einstellungen',
    navReading: 'Lesen',
  }
};

let currentLang = localStorage.getItem('lang') || 'es';
function t(key) { return TRANSLATIONS[currentLang][key] || TRANSLATIONS['es'][key] || key; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  // Update pill states
  document.querySelectorAll('[data-ui-click="lang-es"]').forEach(b => b.classList.toggle('active', lang === 'es'));
  document.querySelectorAll('[data-ui-click="lang-de"]').forEach(b => b.classList.toggle('active', lang === 'de'));
  applyTranslations();
  if (typeof updateAppNav === 'function' && currentUser) updateAppNav();
}

function applyTranslations() {
  const lang = currentLang;
  // data-i18n static elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (TRANSLATIONS[lang][key]) el.textContent = TRANSLATIONS[lang][key];
  });
  // Login page
  const loginCard = document.querySelector('#page-login .login-card h2');
  if (loginCard) loginCard.textContent = t('loginTitle');
  setPlaceholder('loginEmail', t('loginEmailPh'));
  setPlaceholder('loginPass', '••••••••');
  setText('loginBtn', t('loginBtn'));
  setFieldLabel(0, t('loginEmailLabel'));
  setFieldLabel(1, t('loginPassLabel'));
  // Home hero
  const heroTitle = document.querySelector('.home-hero-title');
  if (heroTitle) heroTitle.innerHTML = t('greeting') + ' <em id="greetName">' + (document.getElementById('greetName')?.textContent || '…') + '</em>';
  setText2('.home-hero-sub', t('homeSub'));
  // Workspace cards
  const wsCards = document.querySelectorAll('.ws-card:not(.coming) .ws-card-title');
  if (wsCards[0]) wsCards[0].textContent = t('vocabTitle');
  const wsDescs = document.querySelectorAll('.ws-card:not(.coming) .ws-card-desc');
  if (wsDescs[0]) wsDescs[0].textContent = t('vocabDesc');
  if (wsCards[2]) wsCards[2].textContent = t('grammarTitle');
  if (wsDescs[2]) wsDescs[2].textContent = t('grammarDesc');
  const comingTitle = document.querySelector('.ws-card.coming .ws-card-title');
  if (comingTitle) comingTitle.textContent = t('grammarTitle');
  const comingDesc = document.querySelector('.ws-card.coming .ws-card-desc');
  if (comingDesc) comingDesc.textContent = t('grammarDesc');
  document.querySelectorAll('.ws-badge.soon').forEach(el => el.textContent = t('comingSoon'));
  // Stat labels
  const statLabels = document.querySelectorAll('.stat-lbl');
  const labelKeys = ['pending','mastered'];
  statLabels.forEach((el, i) => { if (labelKeys[i]) el.textContent = t(labelKeys[i]); });
  // Vocab hub
  setText2('.hub-hero-sub', t('vocabHubSub'));
  const hubCards = document.querySelectorAll('.hub-card-title');
  const hubDescs = document.querySelectorAll('.hub-card-desc');
  const hubTitles = [t('listTitle'), t('pairsTitle'), t('crossTitle')];
  const hubDescsList = [t('listDesc'), t('pairsDesc'), t('crossDesc')];
  hubCards.forEach((el,i) => { if(hubTitles[i]) el.textContent = hubTitles[i]; });
  hubDescs.forEach((el,i) => { if(hubDescsList[i]) el.textContent = hubDescsList[i]; });
  // Back buttons / breadcrumbs
  document.querySelectorAll('.top-bar-back').forEach(btn => {
    const txt = btn.textContent.trim();
    // Identify by current text in either language
    if (['Inicio','Start'].includes(txt)) btn.childNodes[btn.childNodes.length-1].textContent = ' ' + t('inicio');
    if (['Vocabulario','Vokabeln'].includes(txt)) btn.childNodes[btn.childNodes.length-1].textContent = ' ' + t('vocabTitle');
  });
  document.querySelectorAll('.breadcrumb-dim').forEach(el => {
    if (['Inicio','Start'].includes(el.textContent)) el.textContent = t('inicio');
    if (['Vocabulario','Vokabeln'].includes(el.textContent)) el.textContent = t('vocabTitle');
  });
  // CW source buttons
  setText('cwSrcBtn-smart', t('cwSmart'));
  // Bag button text node
  const bagBtn = document.getElementById('cwSrcBtn-bag');
  if (bagBtn) {
    const badge = bagBtn.querySelector('.bag-badge');
    bagBtn.textContent = t('cwBag') + ' ';
    if (badge) bagBtn.appendChild(badge);
  }
  // install modal
  setText2('#installModal h3', t('installTitle'));
  const installSteps = document.querySelectorAll('.step-text');
  [t('installStep1'),t('installStep2'),t('installStep3'),t('installStep4')].forEach((s,i) => { if(installSteps[i]) installSteps[i].textContent = s; });
  // Words badge in vocab card
  const wordsBadge = document.querySelector('#page-home .ws-card:not(.coming) .ws-card-body span:first-child');
  const hardBadge  = document.querySelector('#page-home .ws-card:not(.coming) .ws-card-body span:last-child');
  if (wordsBadge) { const n=document.getElementById('statTotal')?.textContent||'0'; wordsBadge.innerHTML = `<span id="statTotal">${n}</span> ${t('words')}`; }
  if (hardBadge)  { const n=document.getElementById('statHard')?.textContent||'0'; hardBadge.innerHTML  = `<span id="statHard">${n}</span> ${t('hard')}`; }
  // offline note
  const offlineNote = document.querySelector('.home-stats .stat-tile:last-child span');
  if (offlineNote) offlineNote.textContent = t('offlineNote');
  // Refresh dynamic screens if visible
  if (currentPage === 'lista') renderLista();
  if (currentPage === 'parejas') renderMatchFilters();
  if (currentPage === 'crucigrama') buildCrossword();
}

function setText(id, val) { const el=document.getElementById(id); if(el) el.textContent=val; }
function setText2(sel, val) { const el=document.querySelector(sel); if(el) el.textContent=val; }
function setPlaceholder(id, val) { const el=document.getElementById(id); if(el) el.placeholder=val; }
function setFieldLabel(idx, val) { const els=document.querySelectorAll('#page-login .field-label'); if(els[idx]) els[idx].textContent=val; }

// ═══════════════════ SUPABASE ═══════════════════
// Config split to deter trivial scraping (not security through obscurity alone)
const _cfg = (() => {
  const p = ['rplehltqclmd', 'cmwkqxko'];
  const h = 'supabase.co';
  const k1 = 'sb_publishable_iF3ivUaf';
  const k2 = 'JrJmDUKc2U0pfw_CWqnGnYf';
  return { url: `https://${p.join('')}.${h}`, key: k1 + k2 };
})();

let _supabase = null;
async function getSupabase() {
  if (_supabase) return _supabase;
  await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.117.3/dist/umd/supabase.js', 'sha384-BWcjm9OdFth9TbhCxZPdm+gAOUMAzQy9nmTs12ioXdCcbVnJaPMn+fMUoQCLt60R');
  _supabase = window.supabase.createClient(_cfg.url, _cfg.key);
  return _supabase;
}
// Cabecera con el token de sesión para las funciones /api (verificado en el servidor)
async function _apiAuthHeaders() {
  try {
    const sb = await getSupabase();
    const { data: { session } } = await sb.auth.getSession();
    return session?.access_token ? { Authorization: 'Bearer ' + session.access_token } : {};
  } catch(e) { return {}; }
}
// integrity = hash SRI: el navegador rechaza el script si el CDN lo modifica
function loadScript(src, integrity) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = () => { s.remove(); rej(new Error(`No se pudo cargar ${src}`)); };
    if (integrity) { s.integrity = integrity; s.crossOrigin = 'anonymous'; }
    document.head.appendChild(s);
  });
}

// ═══════════════════ CLOUDFLARE TURNSTILE ═══════════════════
const _turnstileSiteKey = '0x4AAAAAAFRgbJ5pNmOfxPbX';
let _turnstileWidgetId = null;
let _turnstileToken = '';
let _turnstileReady = null;
function initLoginTurnstile() {
  if (_turnstileReady) return _turnstileReady;
  _turnstileReady = loadScript('https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit')
    .then(() => {
      _turnstileWidgetId = window.turnstile.render('#loginTurnstile', {
        sitekey: _turnstileSiteKey,
        theme: document.body.classList.contains('light') ? 'light' : 'dark',
        callback: token => { _turnstileToken = token; },
        'expired-callback': () => { _turnstileToken = ''; },
        'error-callback': () => { _turnstileToken = ''; }
      });
    })
    .catch(error => { _turnstileReady = null; throw error; });
  return _turnstileReady;
}
initLoginTurnstile().catch(error => console.error('[Turnstile] No se pudo cargar:', error));

// ═══════════════════ SESSION ═══════════════════
let currentUser = null, currentEmail = '';

// ═══════════════════ THEME ═══════════════════
function applyTheme(isDark) {
  document.body.classList.toggle('light', !isDark);
  const chk = document.getElementById('themeToggleCheck');
  if (chk) chk.checked = isDark;
  const loginBtn = document.getElementById('loginThemeBtn');
  if (loginBtn) loginBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', isDark ? '#0f1117' : '#f4efe4');
}
function toggleTheme() { applyTheme(document.body.classList.contains('light')); }
applyTheme(localStorage.getItem('theme') !== 'light');

// ═══════════════════ AUTH GUARD ═══════════════════
const PROTECTED_PAGES = new Set(['home','vocab-hub','lista','parejas','crucigrama','velocidad','perfil','progreso','grammar','lectura']);

// ═══════════════════ RATE LIMITER ═══════════════════
const _rl = (() => {
  const MAX = 5, WINDOW_MS = 15 * 60 * 1000; // 5 attempts per 15 min
  let attempts = 0, lockedUntil = 0;
  return {
    check() {
      const now = Date.now();
      if (now < lockedUntil) {
        const secs = Math.ceil((lockedUntil - now) / 1000);
        const mins = Math.ceil(secs / 60);
        return { ok: false, msg: `Demasiados intentos. Espera ${mins} min.` };
      }
      return { ok: true };
    },
    record() {
      attempts++;
      if (attempts >= MAX) {
        lockedUntil = Date.now() + WINDOW_MS;
        attempts = 0;
      }
    },
    reset() { attempts = 0; lockedUntil = 0; }
  };
})();

// ═══════════════════ ROUTER ═══════════════════
let currentPage = 'login';   // must be declared before applyTranslations()
// ── Transición de página con física de muelle (al cambiar de pestaña en la barra) ──
// La página que entra llega con un muelle sub-amortiguado (se pasa un poco y rebota); la que sale se aparta con uno más rígido.
// Durante la animación las dos páginas van en position:fixed: no añaden alto/ancho al documento, así que no aparece la barra de
// desplazamiento ni se ensancha el viewport, y solo se anima transform+opacity (compositor, sin repintar).
// Eje: horizontal en móvil, vertical en PC (igual que el selector); sentido según el orden de las pestañas.
let _pgT = null;
function _pageSpringEnd() {
  if (!_pgT) return;
  cancelAnimationFrame(_pgT.raf);
  const { inEl, outEl } = _pgT;
  _pgT = null;
  [inEl, outEl].forEach(e => {
    if (!e) return;
    e.style.transform = e.style.opacity = e.style.top = '';
    e.classList.remove('leaving', 'springing');
  });
}
function _pageSpring(inEl, outEl, sign, sy) {
  if (_navReduce.matches || !outEl || outEl === inEl) return;
  const vert = _navMQ.matches, dist = vert ? 44 : 56;
  outEl.classList.add('leaving');
  outEl.style.top = (-(sy || 0)) + 'px';           // la página que sale se queda donde estaba
  inEl.classList.add('springing');
  const A = { p: 0, v: 0, k: 210, d: 17 }, B = { p: 0, v: 0, k: 300, d: 30 };
  const T = { inEl, outEl, raf: 0 };
  _pgT = T;
  let last = 0, outGone = false;
  const tf = o => vert ? `translate3d(0,${o}px,0)` : `translate3d(${o}px,0,0)`;
  const apply = () => {
    inEl.style.transform = tf((1 - A.p) * dist * sign);
    inEl.style.opacity = Math.max(0, Math.min(1, A.p * 1.6));
    if (!outGone) {
      outEl.style.transform = tf(-B.p * dist * .8 * sign);
      outEl.style.opacity = Math.max(0, 1 - B.p * 1.4);
    }
  };
  apply();
  const step = ts => {
    if (_pgT !== T) return;
    const dt = Math.min(.032, (ts - (last || ts)) / 1000);
    last = ts;
    let moving = false;
    for (const s of [A, B]) {
      s.v += (-s.k * (s.p - 1) - s.d * s.v) * dt;
      s.p += s.v * dt;
      if (Math.abs(s.v) > .002 || Math.abs(s.p - 1) > .002) moving = true; else { s.p = 1; s.v = 0; }
    }
    if (!outGone && B.p > .72) {
      outGone = true;
      outEl.style.transform = outEl.style.opacity = outEl.style.top = '';
      outEl.classList.remove('leaving');
    }
    apply();
    if (moving) T.raf = requestAnimationFrame(step); else _pageSpringEnd();
  };
  T.raf = requestAnimationFrame(step);
}
function showPage(id) {
  _pageSpringEnd();
  document.querySelectorAll('.page').forEach(p => { p.classList.remove('active','anim-in','anim-back'); });
  document.getElementById('page-' + id).classList.add('active');
  currentPage = id;
  updateAppNav();
}
function navigate(to, dir = 'forward', opts = {}) {
  // AUTH GUARD — block unauthenticated access to protected pages
  if (PROTECTED_PAGES.has(to) && !currentUser) {
    console.warn('[Auth] Blocked navigation to', to, '— not authenticated');
    showPage('login');
    return;
  }
  _pageSpringEnd();
  const sy = opts.spring ? window.scrollY : 0;   // leer antes de tocar el DOM (no fuerza layout)
  const outEl = document.getElementById('page-' + currentPage);
  const inEl  = document.getElementById('page-' + to);
  if (!inEl) return;
  // Instantly hide old
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active','anim-in','anim-back'));
  if (opts.spring) {
    inEl.classList.add('active');
    _pageSpring(inEl, outEl, opts.sign || 1, sy);   // transición con muelles (barra de navegación)
  } else {
    inEl.classList.add('active', dir === 'forward' ? 'anim-in' : 'anim-back');
  }
  currentPage = to;
  // Page-specific setup (con muelles se hace tras pintar el primer frame, cuando la página aún es invisible, para no bloquear el clic)
  const setup = () => {
    if (to === 'lista') renderLista();
    if (to === 'parejas') { renderMatchFilters(); }
    if (to === 'crucigrama') { updateBagCount(); buildCrossword(); }
    if (to === 'velocidad') { stopSpeedGame(); renderSpeedSetup(); }
    if (to === 'perfil') { renderPerfil(); }
    if (to === 'progreso') { renderProgreso(); }
    if (to === 'lectura') { onLecturaEnter(); }
  };
  if (opts.spring) requestAnimationFrame(() => setTimeout(() => { if (currentPage === to) setup(); }, 0)); else setup();
  updateAppNav();
}

// ═══════════════════ NAV BAR · Liquid Glass (móvil) / rail lateral (PC) ═══════════════════
// Pestañas fijas: Inicio · Vocabulario · Lectura · Progresión · Ajustes. Las páginas de vocabulario (lista, parejas…) marcan "Vocabulario".
const NAV_ICONS = {
  home:     '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>',
  vocab:    '<path d="M12 3 3 8l9 5 9-5-9-5z"/><path d="M3 12.5l9 5 9-5"/><path d="M3 17l9 5 9-5"/>',
  reading:  '<path d="M12 6.5C10.5 5.3 8.3 4.7 5 4.7v13c3.3 0 5.5.6 7 1.8 1.5-1.2 3.7-1.8 7-1.8v-13c-3.3 0-5.5.6-7 1.8z"/><path d="M12 6.5v13"/>',
  progress: '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
  settings: '<path d="M4 7h9"/><path d="M19 7h1"/><circle cx="16" cy="7" r="2.2"/><path d="M4 17h1"/><path d="M11 17h9"/><circle cx="8" cy="17" r="2.2"/>'
};
const NAV_TABS = [
  { page: 'home',      key: 'navHome',     icon: 'home' },
  { page: 'vocab-hub', key: 'navVocab',    icon: 'vocab' },
  { page: 'lectura',   key: 'navReading',  icon: 'reading' },
  { page: 'progreso',  key: 'navProgress', icon: 'progress' },
  { page: 'perfil',    key: 'navSettings', icon: 'settings' }
];
const NAV_VOCAB_PAGES = new Set(['vocab-hub', 'lista', 'parejas', 'crucigrama', 'velocidad']);
const NAV_SHOW_PAGES  = new Set(['home', 'perfil', 'grammar', 'progreso', 'lectura', 'vocab-hub', 'lista', 'parejas', 'crucigrama', 'velocidad']); // en el login no se muestra
function _navTabFor(page) { return NAV_VOCAB_PAGES.has(page) ? 'vocab-hub' : (page === 'grammar' ? 'home' : page); }
const _navMQ = window.matchMedia('(min-width:700px)');                 // PC: rail vertical
const _navReduce = window.matchMedia('(prefers-reduced-motion:reduce)');
let _navBuiltKey = '';
let _navRaf = 0, _navLast = 0, _navPress = null, _navSuppress = false;
// Selector "líquido": cada borde (inicio y fin en cada eje) es un muelle propio.
// El borde delantero corre y el trasero se rezaga, así el selector se estira hacia la otra pestaña y luego se recoge como una gota.
const _navLEAD = { k: 300, d: 20 }, _navLAG = { k: 85, d: 13 }, _navEVEN = { k: 240, d: 21 };
const _navAx = {
  x0: { p: 0, v: 0, t: 0, k: 240, d: 21, e: .4 }, x1: { p: 0, v: 0, t: 0, k: 240, d: 21, e: .4 },
  y0: { p: 0, v: 0, t: 0, k: 240, d: 21, e: .4 }, y1: { p: 0, v: 0, t: 0, k: 240, d: 21, e: .4 },
  s:  { p: 1, v: 0, t: 1, k: 520, d: 28, e: .002 }   // escala al pulsar
};
const _navSz = { w: 0, h: 0 };   // tamaño de reposo del selector
let _navRects = {};              // posición de cada pestaña, en caché para no forzar layout al pulsar

function _navPaint() {
  const pill = document.getElementById('appNavPill');
  if (!pill) return;
  const A = _navAx, vert = _navMQ.matches;
  if (vert) {
    // PC: el selector es UNA sola forma de gelatina (cápsula + cuello cóncavo hasta el borde, del color del fondo) dibujada con clip-path.
    // Sus extremos son los muelles y=y0/y1: al moverse se estira y se afina, y las curvas de unión viajan pegadas a los extremos.
    const F = 20, body = Math.max(8, A.y1.p - A.y0.p), base = _navSz.h || body;
    const thin = Math.max(-6, Math.min(16, (body / base - 1) * 14));   // volumen constante: más largo = más fino
    const L = A.x0.p + thin, W = Math.max(F + 8, A.x1.p - L), H = body + 2 * F;
    const r = Math.min(26, body / 2);
    pill.style.width = W + 'px';
    pill.style.height = H + 'px';
    pill.style.transform = `translate3d(${L}px,${A.y0.p - F}px,0)`;
    pill.style.clipPath = `path('M ${r} ${F} H ${W - F} A ${F} ${F} 0 0 0 ${W} 0 V ${H} A ${F} ${F} 0 0 0 ${W - F} ${H - F} H ${r} A ${r} ${r} 0 0 1 0 ${H - F - r} V ${F + r} A ${r} ${r} 0 0 1 ${r} ${F} Z')`;
    return;
  }
  pill.style.clipPath = '';
  const w = Math.max(4, A.x1.p - A.x0.p), h = Math.max(4, A.y1.p - A.y0.p);
  const base = _navSz.w || w;
  const cross = Math.max(.8, Math.min(1.05, Math.sqrt(base / Math.max(w, 1))));   // volumen constante: al estirarse se afina
  const pr = A.s.p;
  pill.style.width = w + 'px';
  pill.style.height = h + 'px';
  pill.style.transform = `translate3d(${A.x0.p}px,${A.y0.p}px,0) scale(${pr},${cross * pr})`;
}
function _navStep(ts) {
  const dt = Math.min(.032, (ts - (_navLast || ts)) / 1000);
  _navLast = ts;
  let moving = false;
  for (const a of Object.values(_navAx)) {
    a.v += (-a.k * (a.p - a.t) - a.d * a.v) * dt;
    a.p += a.v * dt;
    if (Math.abs(a.v) > a.e * 8 || Math.abs(a.p - a.t) > a.e) moving = true; else { a.p = a.t; a.v = 0; }
  }
  _navPaint();
  if (moving) _navRaf = requestAnimationFrame(_navStep); else { _navRaf = 0; _navLast = 0; }
}
function _navKick() {
  if (_navReduce.matches) { for (const a of Object.values(_navAx)) { a.p = a.t; a.v = 0; } _navPaint(); return; }
  if (!_navRaf) _navRaf = requestAnimationFrame(_navStep);
}
function _navMeasure() {
  const nav = document.getElementById('appNav'), track = document.getElementById('appNavTrack');
  if (!nav || !track || nav.hidden) return;
  const vert = _navMQ.matches;
  _navRects = {};
  track.querySelectorAll('.app-nav-tab').forEach(tb => {
    const l = tb.offsetLeft, t = tb.offsetTop, w = tb.offsetWidth, h = tb.offsetHeight;
    // PC: el selector se prolonga hasta el borde del rail para fundirse con el fondo de la página
    const extra = vert ? Math.max(0, track.clientWidth - (l + w)) + 1 : 0;
    _navRects[tb.dataset.page] = { l, t, w: w + extra, h };
  });
}
function _navTarget(tab, snap) {
  const pill = document.getElementById('appNavPill');
  if (!pill) return;
  if (!tab) { pill.classList.remove('on'); return; }
  let r = _navRects[tab.dataset.page];
  if (!r) { _navMeasure(); r = _navRects[tab.dataset.page]; }
  if (!r) return;
  const first = !pill.classList.contains('on');
  pill.classList.add('on');
  const A = _navAx, vert = _navMQ.matches;
  const t0x = r.l, t1x = r.l + r.w, t0y = r.t, t1y = r.t + r.h;
  _navSz.w = r.w; _navSz.h = r.h;
  if (!first && !snap && (vert ? t0y !== A.y0.t : t0x !== A.x0.t)) {
    const fwd = vert ? t0y > A.y0.t : t0x > A.x0.t;
    const [s0, s1] = vert ? [A.y0, A.y1] : [A.x0, A.x1], [c0, c1] = vert ? [A.x0, A.x1] : [A.y0, A.y1];
    Object.assign(fwd ? s1 : s0, _navLEAD);     // el borde que va por delante corre
    Object.assign(fwd ? s0 : s1, _navLAG);      // el de atrás se queda estirando
    Object.assign(c0, _navEVEN); Object.assign(c1, _navEVEN);
  }
  A.x0.t = t0x; A.x1.t = t1x; A.y0.t = t0y; A.y1.t = t1y;
  if (snap || first) {
    for (const k of ['x0', 'x1', 'y0', 'y1']) { A[k].p = A[k].t; A[k].v = 0; }
    _navPaint();
  } else _navKick();
}
function _navSyncActive(snap) {
  const nav = document.getElementById('appNav');
  if (!nav || nav.hidden) return;
  _navTarget(nav.querySelector('.app-nav-tab.active'), snap);
}
function updateAppNav() {
  const nav = document.getElementById('appNav');
  if (!nav) return;
  document.body.dataset.page = currentPage;   // p. ej. la versión solo se ve en Ajustes
  const show = !!currentUser && NAV_SHOW_PAGES.has(currentPage);
  document.body.classList.toggle('has-nav', show);
  if (!show) { nav.hidden = true; return; }
  const wasHidden = nav.hidden;
  nav.hidden = false;
  const navName = (document.getElementById('ddName')?.textContent || '').trim();
  const userEl = document.getElementById('appNavUser');
  if (userEl) userEl.textContent = navName;
  const logoEl = nav.querySelector('.app-nav-logo');
  if (logoEl) logoEl.title = navName;
  const track = document.getElementById('appNavTrack');
  const key = currentLang;
  let rebuilt = false;
  if (key !== _navBuiltKey) {
    rebuilt = true;
    _navBuiltKey = key;
    track.querySelectorAll('.app-nav-tab').forEach(b => b.remove());
    NAV_TABS.forEach(tab => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'app-nav-tab';
      b.dataset.uiClick = 'nav-tab';
      b.dataset.page = tab.page;
      b.title = t(tab.key);
      b.setAttribute('aria-label', t(tab.key));
      b.innerHTML = `<svg class="app-nav-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${NAV_ICONS[tab.icon]}</svg><span class="app-nav-lbl">${t(tab.key)}</span>`;
      track.appendChild(b);
    });
  }
  track.querySelectorAll('.app-nav-tab').forEach(b => {
    const on = b.dataset.page === _navTabFor(currentPage);
    b.classList.toggle('active', on);
    if (on) b.setAttribute('aria-current', 'page'); else b.removeAttribute('aria-current');
  });
  if (rebuilt || wasHidden || !Object.keys(_navRects).length) _navMeasure();
  _navSyncActive(wasHidden);
}
function _navNavigate(page) {
  if (page === currentPage) {
    if (page === 'lectura' && _lectura.current) closeLecturaBook();   // pulsar Lectura con un libro abierto vuelve a la biblioteca
    _navSyncActive(false);
    return;
  }
  const tabs = NAV_TABS.map(t => t.page);
  const cur = tabs.indexOf(_navTabFor(currentPage)), nxt = tabs.indexOf(page);
  const sign = (cur >= 0 && nxt >= 0 && nxt > cur) ? 1 : -1;     // hacia una pestaña posterior entra desde abajo/derecha
  navigate(page, sign < 0 ? 'back' : 'forward', { spring: true, sign });
}
function _navClick(page) { if (!_navSuppress) _navNavigate(page); }
function toggleNavCollapsed() {
  const c = document.body.classList.toggle('nav-collapsed');
  try { localStorage.setItem('navCollapsed', c ? '1' : '0'); } catch (_) {}
  const btn = document.getElementById('appNavCollapse');
  if (btn) btn.setAttribute('aria-label', c ? 'Expandir menú' : 'Contraer menú');
}
function _navRipple(tab, e) {
  const r = tab.getBoundingClientRect();
  const s = document.createElement('span');
  s.className = 'app-nav-ripple';
  s.style.left = (e.clientX - r.left) + 'px';
  s.style.top = (e.clientY - r.top) + 'px';
  tab.appendChild(s);
  s.addEventListener('animationend', () => s.remove());
}
(function initAppNav() {
  const track = document.getElementById('appNavTrack');
  if (!track) return;
  try { if (localStorage.getItem('navCollapsed') === '1') document.body.classList.add('nav-collapsed'); } catch (_) {}
  const cbtn = document.getElementById('appNavCollapse');
  if (cbtn) cbtn.setAttribute('aria-label', document.body.classList.contains('nav-collapsed') ? 'Expandir menú' : 'Contraer menú');
  // Pulsar: el cristal se comprime, la onda sale del dedo y el selector se desliza bajo la pestaña pulsada
  track.addEventListener('pointerdown', e => {
    const tab = e.target.closest('.app-nav-tab');
    if (!tab) return;
    _navPress = { id: e.pointerId, x: e.clientX, y: e.clientY, tab, drag: false };
    _navAx.s.t = .93;
    _navRipple(tab, e);
    _navTarget(tab, false);
    _navKick();
  });
  // Arrastrar: el selector sigue al dedo con inercia y al soltar se queda en la pestaña más cercana
  track.addEventListener('pointermove', e => {
    const pr = _navPress;
    if (!pr || e.pointerId !== pr.id) return;
    if (!pr.drag) {
      if (Math.hypot(e.clientX - pr.x, e.clientY - pr.y) < 7) return;
      pr.drag = true;
      try { track.setPointerCapture(e.pointerId); } catch (_) {}
    }
    const tabs = track.querySelectorAll('.app-nav-tab');
    const first = tabs[0], last = tabs[tabs.length - 1], r = track.getBoundingClientRect();
    if (_navMQ.matches) {
      const c = e.clientY - r.top - _navSz.h / 2;
      const y = Math.max(first.offsetTop, Math.min(c, last.offsetTop + last.offsetHeight - _navSz.h));
      _navAx.y0.t = y; _navAx.y1.t = y + _navSz.h;
    } else {
      const c = e.clientX - r.left - _navSz.w / 2;
      const x = Math.max(first.offsetLeft, Math.min(c, last.offsetLeft + last.offsetWidth - _navSz.w));
      _navAx.x0.t = x; _navAx.x1.t = x + _navSz.w;
    }
    for (const k of ['x0', 'x1', 'y0', 'y1']) Object.assign(_navAx[k], _navEVEN);
    _navKick();
  });
  const release = e => {
    const pr = _navPress;
    if (!pr || e.pointerId !== pr.id) return;
    _navPress = null;
    _navAx.s.t = 1;
    if (pr.drag) {
      _navSuppress = true;
      setTimeout(() => { _navSuppress = false; }, 80);
      if (e.type === 'pointerup') {
        const vert = _navMQ.matches;
        const cx = (_navAx.x0.t + _navAx.x1.t) / 2, cy = (_navAx.y0.t + _navAx.y1.t) / 2;
        let best = null, bd = Infinity;
        track.querySelectorAll('.app-nav-tab').forEach(tb => {
          const d = vert ? Math.abs(tb.offsetTop + tb.offsetHeight / 2 - cy) : Math.abs(tb.offsetLeft + tb.offsetWidth / 2 - cx);
          if (d < bd) { bd = d; best = tb; }
        });
        if (best) _navNavigate(best.dataset.page);
      }
    }
    setTimeout(() => _navSyncActive(false), 120);   // si no hubo cambio de página, vuelve a la pestaña activa
    _navKick();
  };
  track.addEventListener('pointerup', release);
  track.addEventListener('pointercancel', release);
  // Cambios de tamaño (contraer/expandir el rail, girar el móvil, PC ↔ móvil)
  if ('ResizeObserver' in window) new ResizeObserver(() => { if (!_navPress) { _navMeasure(); _navSyncActive(true); } }).observe(track);   // snap: el rail ya se anima por CSS; el selector debe seguirlo pegado, sin muelle
  _navMQ.addEventListener?.('change', () => { _navMeasure(); _navSyncActive(true); });
})();

// Apply initial language (currentPage is now defined)
applyTranslations();
document.getElementById('langBtnEs')?.classList.toggle('active', currentLang === 'es');
document.getElementById('langBtnDe')?.classList.toggle('active', currentLang === 'de');

// ═══════════════════ LOGIN ═══════════════════
async function doLogin() {
  const email = (document.getElementById('loginEmail').value || '').trim().toLowerCase();
  const pass  = document.getElementById('loginPass').value;
  const err   = document.getElementById('loginError');
  const btn   = document.getElementById('loginBtn');
  if (!email) { err.textContent = t('errEmail'); return; }
  if (!pass)  { err.textContent = t('errPass'); return; }
  // Rate limit check
  const rl = _rl.check();
  if (!rl.ok) { err.textContent = rl.msg; return; }
  err.textContent = ''; btn.textContent = '…'; btn.disabled = true;
  try {
    if (!_turnstileReady) await initLoginTurnstile();
    else await _turnstileReady;
    if (!_turnstileToken) {
      err.textContent = 'Completa la verificación de seguridad.';
      return;
    }
    const sb = await getSupabase();
    const { data, error } = await sb.auth.signInWithPassword({
      email, password: pass, options: { captchaToken: _turnstileToken }
    });
    _turnstileToken = '';
    if (error) {
      _rl.record();
      err.textContent = error.message === 'Invalid login credentials' ? t('errBadLogin') : error.message;
      if (_turnstileWidgetId !== null) window.turnstile.reset(_turnstileWidgetId);
      return;
    }
    _rl.reset();
    onLoginSuccess(data.user);
  } catch(e) {
    _turnstileToken = '';
    err.textContent = t('errConnection');
    if (_turnstileWidgetId !== null && window.turnstile) window.turnstile.reset(_turnstileWidgetId);
  }
  finally { btn.textContent = t('loginBtn'); btn.disabled = false; }
}

function onLoginSuccess(user) {
  currentUser = user; currentEmail = user.email;
  const storedName = localStorage.getItem('nombre_' + user.email) || '';
  const name = storedName || user.email.split('@')[0];
  document.getElementById('homeUserName').textContent = name;
  document.getElementById('greetName').textContent = name;
  document.getElementById('ddName').textContent = name;
  document.getElementById('ddEmail').textContent = user.email;
  document.getElementById('userAvatar').textContent = name[0].toUpperCase();
  const chk = document.getElementById('themeToggleCheck');
  if (chk) chk.checked = !document.body.classList.contains('light');
  // Sync lang pills
  document.getElementById('langBtnEs')?.classList.toggle('active', currentLang === 'es');
  document.getElementById('langBtnDe')?.classList.toggle('active', currentLang === 'de');
  applyTranslations();
  updateStats();
  updateBagCount();
  // Restore saved state OR fall back to home
  const restored = _restoreAppState();
  if (!restored) navigate('home', 'forward');
  // Load + sync data from DB in background
  loadUserData();
}

// Borra del dispositivo las cachés que se vuelven a descargar de Supabase al entrar
function _clearLocalUserCache(uid) {
  if (!uid) return;
  ['words_', 'prog_', 'folders_'].forEach(k => { try { localStorage.removeItem(k + uid); } catch(e) {} });
}

async function doLogout() {
  closeDropdown();
  const _uid = currentUser?.id;
  _onLoginSuccessFired = false;
  try { localStorage.removeItem(STATE_KEY); } catch(e) {}
  try { const sb = await getSupabase(); await sb.auth.signOut(); } catch(e) {}
  // Clear all sensitive state
  _clearLocalUserCache(_uid);
  currentUser = null; currentEmail = '';
  matchState = {}; currentBatch = []; cwData = null; importParsed = null;
  // Sanitize DOM — clear any user data rendered in the UI
  const sanitize = (id, val='') => { const el=document.getElementById(id); if(el) el.textContent=val; };
  sanitize('homeUserName'); sanitize('greetName','…'); sanitize('ddName'); sanitize('ddEmail');
  sanitize('userAvatar','?'); sanitize('perfilEmail'); sanitize('perfilAvatar','?');
  const perfilNombre = document.getElementById('perfilNombre'); if(perfilNombre) perfilNombre.value='';
  const perfilStats  = document.getElementById('perfilStats');  if(perfilStats) perfilStats.innerHTML='';
  // Clear word/match/crossword rendered content
  const clearContent = id => { const el=document.getElementById(id); if(el) el.innerHTML=''; };
  clearContent('wordList'); clearContent('matchContent'); clearContent('crossContent');
  // Reset form
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPass').value = '';
  document.getElementById('loginError').textContent = '';
  // Reset password field visibility
  const passInp = document.getElementById('loginPass');
  if (passInp) passInp.type = 'password';
  document.getElementById('eyeIcon').style.display = '';
  document.getElementById('eyeOffIcon').style.display = 'none';
  // Always show form, hide spinner
  document.getElementById('loginSpinner').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
  showPage('login');
}

(async function initSession() {
  document.getElementById('loginSpinner').style.display = 'block';
  document.getElementById('loginForm').style.display = 'none';
  try {
    const sb = await getSupabase();
    sb.auth.onAuthStateChange((event, session) => {
      // Only react to SIGNED_IN if we haven't already handled this session
      if (event === 'SIGNED_IN' && session?.user && !_onLoginSuccessFired) {
        _onLoginSuccessFired = true;
        onLoginSuccess(session.user);
      } else if (event === 'SIGNED_OUT') {
        _onLoginSuccessFired = false;
        document.getElementById('loginSpinner').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
        showPage('login');
      }
    });
    const { data: { session } } = await sb.auth.getSession();
    if (session?.user) {
      _onLoginSuccessFired = true;
      onLoginSuccess(session.user);
      return;
    }
  } catch(e) {}
  document.getElementById('loginSpinner').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
})();

// ═══════════════════ USER DROPDOWN ═══════════════════
function toggleUserDropdown() {
  const pill = document.getElementById('userPill');
  const dd   = document.getElementById('userDropdown');
  const open = dd.classList.contains('open');
  dd.classList.toggle('open', !open);
  pill.classList.toggle('open', !open);
}
function closeDropdown() {
  document.getElementById('userDropdown')?.classList.remove('open');
  document.getElementById('userPill')?.classList.remove('open');
}
document.addEventListener('click', e => {
  const pill = document.getElementById('userPill');
  if (pill && !pill.contains(e.target)) closeDropdown();
});

// ═══════════════════ BAG ═══════════════════
function getBag() { try { return JSON.parse(localStorage.getItem('bag_'+(currentEmail||'default')))||[]; } catch(e) { return []; } }
function saveBag(b) { localStorage.setItem('bag_'+(currentEmail||'default'), JSON.stringify(b)); }
function addToBag(wordDE) { const b=getBag(); if(!b.includes(wordDE)){b.push(wordDE);saveBag(b);} updateBagCount(); }
function clearBag() { saveBag([]); updateBagCount(); }
function updateBagCount() { const el=document.getElementById('cwBagCount'); if(el) el.textContent=getBag().length; }

// ═══════════════════ CW SOURCE ═══════════════════
let cwSource = 'smart';
function setCwSource(src) {
  cwSource = src;
  document.querySelectorAll('[id^="cwSrcBtn-"]').forEach(b=>b.classList.remove('active'));
  document.getElementById('cwSrcBtn-'+src)?.classList.add('active');
  buildCrossword();
}

// ═══════════════════ VOCAB DATA ═══════════════════
// Words stored in Supabase (base_words table).

function displayDE(w) { return (w.articulo && w.articulo !== '') ? w.articulo + ' ' + w.de : w.de; }

// ═══════════════════ SYNC LAYER ═══════════════════
// Architecture: localStorage = instant read cache · Supabase = source of truth
//
// ┌─ SQL to run once in Supabase Dashboard → SQL Editor ──────────────────────┐
// │ CREATE TABLE IF NOT EXISTS user_words (                                   │
// │   id uuid DEFAULT gen_random_uuid() PRIMARY KEY,                          │
// │   user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,      │
// │   tipo text DEFAULT '', articulo text DEFAULT '',                          │
// │   de text NOT NULL, es text NOT NULL,                                     │
// │   created_at timestamptz DEFAULT now()                                    │
// │ );                                                                        │
// │ ALTER TABLE user_words ENABLE ROW LEVEL SECURITY;                         │
// │ CREATE POLICY "own_words" ON user_words                                   │
// │   USING (auth.uid()=user_id) WITH CHECK (auth.uid()=user_id);             │
// │                                                                           │
// │ CREATE TABLE IF NOT EXISTS user_progress (                                │
// │   user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,     │
// │   word_de text NOT NULL,                                                  │
// │   seen int DEFAULT 0, correct int DEFAULT 0,                              │
// │   difficulty int DEFAULT 0, next_review bigint DEFAULT 0,                 │
// │   updated_at timestamptz DEFAULT now(),                                   │
// │   PRIMARY KEY (user_id, word_de)                                          │
// │ );                                                                        │
// │ ALTER TABLE user_progress ENABLE ROW LEVEL SECURITY;                      │
// │ CREATE POLICY "own_progress" ON user_progress                             │
// │   USING (auth.uid()=user_id) WITH CHECK (auth.uid()=user_id);             │
// └───────────────────────────────────────────────────────────────────────────┘

let _pendingProgressSave = {};
let _progressDebounceTimer = null;
let _wordsDebounceTimer = null;
let _dbReady = false;  // true once tables confirmed to exist

// ── LS key scoped by user id (not email, safer) ──
function _lsKey(kind) { return kind + '_' + (currentUser?.id || 'anon'); }
function _cacheWords(w)    { try { localStorage.setItem(_lsKey('words'), JSON.stringify(w)); } catch(e){} }
function _cacheProgress(p) { try { localStorage.setItem(_lsKey('prog'),  JSON.stringify(p)); } catch(e){} }
function _cachedWords()    { try { const s=localStorage.getItem(_lsKey('words')); return s ? JSON.parse(s) : null; } catch(e){ return null; } }
function _cachedProgress() { try { const s=localStorage.getItem(_lsKey('prog'));  return s ? JSON.parse(s) : null; } catch(e){ return null; } }

// ── Sync status indicator ──
function setSyncState(state, msg) {
  const el   = document.getElementById('syncDot');
  const txt  = document.getElementById('syncDotText');
  const spin = document.getElementById('syncSpinner');
  const tick = document.getElementById('syncTick');
  if (!el) return;
  el.className = 'sync-dot';
  if (state === 'hidden') { el.style.display = 'none'; return; }
  el.style.display = 'flex';
  if (state === 'syncing') {
    el.classList.add('syncing');
    if (spin) spin.style.display = '';
    if (tick) tick.style.display = 'none';
    if (txt) txt.textContent = msg || 'Sincronizando…';
  } else if (state === 'ok') {
    el.classList.add('ok');
    if (spin) spin.style.display = 'none';
    if (tick) { tick.style.display = ''; tick.textContent = '✓'; }
    if (txt) txt.textContent = msg || 'Sincronizado ✓';
    setTimeout(() => setSyncState('hidden'), 2200);
  } else if (state === 'error') {
    el.classList.add('error');
    if (spin) spin.style.display = 'none';
    if (tick) { tick.style.display = ''; tick.textContent = '⚠'; }
    if (txt) txt.textContent = msg || 'Sin conexión · modo local';
    setTimeout(() => setSyncState('hidden'), 4000);
  }
}

// ── Copy SQL helper ──
function copySql() {
  const el = document.getElementById('setupSql');
  if (!el) return;
  navigator.clipboard?.writeText(el.textContent).then(() => showToast('✓ SQL copiado')).catch(() => showToast('Selecciona el SQL manualmente'));
}

// ── Read (cache-first, background sync) ──
function getWords() {
  return _cachedWords() || [];
}
function getProgress() {
  return _cachedProgress() || {};
}

// ── Initial full load after login ──
async function loadUserData() {
  setSyncState('syncing', 'Cargando datos…');
  try {
    const [words, prog] = await Promise.all([_fetchWordsFromDB(), _fetchProgressFromDB()]);
    const ok = words !== null || prog !== null;
    setSyncState(ok ? 'ok' : 'hidden');
  } catch(e) {
    setSyncState('error');
  }
  updateStats();
  _actBaseline();
  await _fetchActivityFromDB();
  if (currentPage === 'progreso') renderProgreso();
  if (currentPage === 'lista') renderLista();
  if (currentPage === 'vocab-hub' || currentPage === 'home') updateStats();
}

// ── Fetch words from DB ──
async function _fetchWordsFromDB() {
  if (!currentUser) return null;
  try {
    const sb = await getSupabase();
    const { data, error } = await sb
      .from('user_words')
      .select('id,tipo,articulo,de,es,folder_id')
      .eq('user_id', currentUser.id)
      .order('created_at');
    if (error) {
      // Table might not exist yet
      if (error.code === '42P01') { _dbReady = false; showSetupBanner(); return null; }
      throw error;
    }
    _dbReady = true;
    _setSynced(data);
    if (data.length === 0) {
      const baseWords = await _fetchBaseWords();
      if (baseWords && baseWords.length > 0) { await _seedWords(baseWords); return baseWords; }
      return [];
    }
    const words = data.map(r => ({ tipo:r.tipo||'', articulo:r.articulo||'', de:r.de, es:r.es, _id:r.id, folder_id:r.folder_id||null }));
    _cacheWords(words);
    return words;
  } catch(e) {
    console.warn('[sync] fetchWords:', e.message);
    return null;
  }
}

// ── Seed default words on first login ──
async function _seedWords(words) {
  if (!currentUser) return;
  try {
    const sb = await getSupabase();
    const rows = words.map(w => ({ user_id:currentUser.id, tipo:w.tipo||'', articulo:w.articulo||'', de:w.de, es:w.es }));
    const { data, error } = await sb.from('user_words').insert(rows).select('id,tipo,articulo,de,es');
    if (error) throw error;
    if (data) {
      const withIds = data.map(r => ({ tipo:r.tipo||'', articulo:r.articulo||'', de:r.de, es:r.es, _id:r.id }));
      _cacheWords(withIds);
      _setSynced(data);
    }
  } catch(e) { console.warn('[sync] seed:', e.message); }
}

// ── Save words — cache instantly, flush to DB debounced ──
function saveWords(words) {
  _cacheWords(words);
  updateStats();
  if (!_dbReady) return;
  _wordsPending = true;
  clearTimeout(_wordsDebounceTimer);
  _wordsDebounceTimer = setTimeout(() => { _wordsPending = false; _flushWords(words); }, 900);
}

// Si la app pasa a segundo plano con un guardado pendiente, se envía ya (iOS puede cerrarla)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden' && _wordsPending) {
    clearTimeout(_wordsDebounceTimer);
    _wordsPending = false;
    _flushWords(getWords());
  }
});

// ── Sincronización incremental de palabras ──────────────────────
// Antes: borrar todo + reinsertar (un fallo a mitad podía perder datos).
// Ahora: solo se insertan las nuevas, se actualizan las modificadas y se borran las eliminadas,
// y el borrado va siempre el último. Un fallo nunca deja la BD con menos palabras de las debidas.
let _wordsPending = false;
let _synced = null;          // Map id -> huella de lo que sabemos que hay en la BD
let _syncedUser = null;
let _flushChain = Promise.resolve();
let _flushRetries = 0;

function _wordFp(w) { return [w.tipo || '', w.articulo || '', w.de || '', w.es || '', w.folder_id || ''].join('\u0001'); }
function _setSynced(rows) {
  _synced = new Map((rows || []).map(r => [r.id, _wordFp(r)]));
  _syncedUser = currentUser ? currentUser.id : null;
}

// Asigna a la caché local los ids que acaba de dar la BD a las palabras nuevas
function _assignIds(rows) {
  const cached = _cachedWords();
  if (!cached) return;
  const pool = rows.slice();
  let changed = false;
  cached.forEach(w => {
    if (w._id && _synced.has(w._id)) return;
    const k = pool.findIndex(r => _wordFp(r) === _wordFp(w));
    if (k >= 0) { w._id = pool[k].id; pool.splice(k, 1); changed = true; }
  });
  if (changed) _cacheWords(cached);
}

function _flushWords(words) {
  _flushChain = _flushChain.then(() => _flushWordsNow(words)).catch(() => {});
  return _flushChain;
}

async function _flushWordsNow(words) {
  if (!currentUser || !_dbReady) return;
  setSyncState('syncing', 'Guardando…');
  try {
    const sb  = await getSupabase();
    const uid = currentUser.id;
    // Si no sabemos qué hay en la BD (p. ej. tras cambiar de usuario), lo consultamos antes de tocar nada
    if (!_synced || _syncedUser !== uid) {
      const { data, error } = await sb.from('user_words').select('id,tipo,articulo,de,es,folder_id').eq('user_id', uid);
      if (error) throw error;
      _setSynced(data);
    }
    const toInsert = words.filter(w => !w._id || !_synced.has(w._id));
    const toUpdate = words.filter(w => w._id && _synced.has(w._id) && _synced.get(w._id) !== _wordFp(w));
    const keep     = new Set(words.filter(w => w._id).map(w => w._id));
    const toDelete = [..._synced.keys()].filter(id => !keep.has(id));

    // Freno de seguridad: si de golpe faltaran más de la mitad de las palabras (p. ej. caché local vacía por error), no se borra nada
    if (toDelete.length > 20 && toDelete.length > _synced.size * 0.5) {
      console.warn('[sync] borrado masivo bloqueado:', toDelete.length, 'de', _synced.size);
      setSyncState('error', 'Cambio sospechoso: recarga la app');
      return;
    }

    // 1) Insertar nuevas
    for (let i = 0; i < toInsert.length; i += 200) {
      const rows = toInsert.slice(i, i + 200).map(w => ({ user_id:uid, tipo:w.tipo||'', articulo:w.articulo||'', de:w.de, es:w.es, folder_id:w.folder_id||null }));
      const { data, error } = await sb.from('user_words').insert(rows).select('id,tipo,articulo,de,es,folder_id');
      if (error) throw error;
      (data || []).forEach(r => _synced.set(r.id, _wordFp(r)));
      _assignIds(data || []);
    }
    // 2) Actualizar modificadas
    for (let i = 0; i < toUpdate.length; i += 10) {
      await Promise.all(toUpdate.slice(i, i + 10).map(async w => {
        const { error } = await sb.from('user_words')
          .update({ tipo:w.tipo||'', articulo:w.articulo||'', de:w.de, es:w.es, folder_id:w.folder_id||null })
          .eq('id', w._id).eq('user_id', uid);
        if (error) throw error;
        _synced.set(w._id, _wordFp(w));
      }));
    }
    // 3) Borrar eliminadas (siempre lo último)
    for (let i = 0; i < toDelete.length; i += 100) {
      const ids = toDelete.slice(i, i + 100);
      const { error } = await sb.from('user_words').delete().in('id', ids).eq('user_id', uid);
      if (error) throw error;
      ids.forEach(id => _synced.delete(id));
    }
    _flushRetries = 0;
    setSyncState('ok', 'Guardado ✓');
  } catch(e) {
    console.warn('[sync] flushWords:', e.message);
    setSyncState('error', 'Error al guardar');
    if (_flushRetries < 3) { _flushRetries++; setTimeout(() => _flushWords(getWords()), 8000 * _flushRetries); }
  }
}

// ── Fetch progress from DB ──
async function _fetchProgressFromDB() {
  if (!currentUser) return null;
  try {
    const sb = await getSupabase();
    const { data, error } = await sb
      .from('user_progress')
      .select('word_de,seen,correct,difficulty,next_review')
      .eq('user_id', currentUser.id);
    if (error) { if (error.code === '42P01') return null; throw error; }
    if (!data || data.length === 0) return {};
    const p = {};
    data.forEach(r => { p[r.word_de] = { seen:r.seen||0, correct:r.correct||0, difficulty:r.difficulty||0, nextReview:r.next_review||0 }; });
    _cacheProgress(p);
    return p;
  } catch(e) {
    console.warn('[sync] fetchProgress:', e.message);
    return null;
  }
}

// ── Save progress — cache instantly, batch upsert debounced ──
function saveProgress(p) {
  _cacheProgress(p);
  Object.assign(_pendingProgressSave, p);
  if (!_dbReady) return;
  clearTimeout(_progressDebounceTimer);
  _progressDebounceTimer = setTimeout(_flushProgress, 1500);
}

async function _flushProgress() {
  if (!currentUser || !_dbReady || Object.keys(_pendingProgressSave).length === 0) return;
  const batch = { ..._pendingProgressSave };
  _pendingProgressSave = {};
  try {
    const sb = await getSupabase();
    const rows = Object.entries(batch).map(([de, e]) => ({
      user_id: currentUser.id, word_de: de,
      seen: e.seen||0, correct: e.correct||0,
      difficulty: e.difficulty||0, next_review: e.nextReview||0,
      updated_at: new Date().toISOString()
    }));
    const { error } = await sb.from('user_progress').upsert(rows, { onConflict: 'user_id,word_de' });
    if (error) throw error;
  } catch(e) {
    console.warn('[sync] flushProgress:', e.message);
    Object.assign(_pendingProgressSave, batch); // retry next time
  }
}

// ═══════════════════ ACTIVIDAD DIARIA (gráfica de Progresión) ═══════════════════
// Local: act_<uid> = { init, m:[palabras ya dominadas], d:{ 'AAAA-MM-DD': {l: aprendidas, p: practicadas} } }.
// "Aprendida" = la palabra pasa a dominada (3+ intentos y 80 % de aciertos). Cada palabra cuenta una sola vez.
// Nube: tabla user_activity (ver supabase-migration-1.07.49.sql); si no existe, todo sigue funcionando en local.
let _actDirty = {}, _actTimer = 0, _actNoTable = false;
const _actEmpty = () => ({ init: false, m: [], d: {} });
function _actGet() { try { const s = localStorage.getItem(_lsKey('act')); const o = s ? JSON.parse(s) : null; return (o && o.d) ? o : _actEmpty(); } catch (e) { return _actEmpty(); } }
function _actSave(a) { try { localStorage.setItem(_lsKey('act'), JSON.stringify(a)); } catch (e) {} }
function _dayKey(ts) { const d = new Date(ts || Date.now()); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); }
const _isMastered = e => !!e && e.seen >= 3 && e.correct / e.seen >= 0.8;
function _actMark(day) {
  _actDirty[day] = 1;
  if (!_dbReady || _actNoTable) return;
  clearTimeout(_actTimer);
  _actTimer = setTimeout(_flushActivity, 2500);
}
function _actRecordAnswer() {
  const a = _actGet(), k = _dayKey();
  const x = a.d[k] || (a.d[k] = { l: 0, p: 0 });
  x.p++;
  // palabras que acaban de pasar a dominadas (solo cuenta si ya se hizo la carga inicial)
  const p = getProgress(), set = new Set(a.m);
  let newly = 0;
  for (const [w, e] of Object.entries(p)) if (_isMastered(e) && !set.has(w)) { set.add(w); newly++; }
  if (newly) { a.m = [...set]; if (a.init) x.l += newly; }
  _actSave(a);
  _actMark(k);
}
// Carga inicial / otro dispositivo: marca como ya dominadas sin contarlas como aprendidas hoy
function _actBaseline() {
  const a = _actGet(), set = new Set(a.m);
  for (const [w, e] of Object.entries(getProgress())) if (_isMastered(e)) set.add(w);
  a.m = [...set]; a.init = true;
  _actSave(a);
}
async function _fetchActivityFromDB() {
  if (!currentUser || _actNoTable) return;
  try {
    const sb = await getSupabase();
    const { data, error } = await sb.from('user_activity').select('day,learned,practiced').eq('user_id', currentUser.id);
    if (error) throw error;
    const a = _actGet();
    (data || []).forEach(r => {
      const x = a.d[r.day] || (a.d[r.day] = { l: 0, p: 0 });
      x.l = Math.max(x.l, r.learned || 0); x.p = Math.max(x.p, r.practiced || 0);
    });
    _actSave(a);
    // lo que solo existe en local se sube
    const remote = new Set((data || []).map(r => r.day));
    Object.keys(a.d).forEach(k => { if (!remote.has(k)) _actDirty[k] = 1; });
    if (Object.keys(_actDirty).length) _flushActivity();
  } catch (e) {
    _actNoTable = true;
    console.warn('[sync] activity:', e.message);
  }
}
async function _flushActivity() {
  if (!currentUser || !_dbReady || _actNoTable) return;
  const keys = Object.keys(_actDirty);
  if (!keys.length) return;
  const a = _actGet();
  const rows = keys.filter(k => a.d[k]).map(k => ({ user_id: currentUser.id, day: k, learned: a.d[k].l || 0, practiced: a.d[k].p || 0, updated_at: new Date().toISOString() }));
  _actDirty = {};
  try {
    const sb = await getSupabase();
    const { error } = await sb.from('user_activity').upsert(rows, { onConflict: 'user_id,day' });
    if (error) throw error;
  } catch (e) {
    console.warn('[sync] flushActivity:', e.message);
    if (/user_activity|42P01|PGRST205/i.test((e.code || '') + ' ' + (e.message || ''))) _actNoTable = true;
    else keys.forEach(k => { _actDirty[k] = 1; });
  }
}

// ── Manual sync (pull latest from DB) ──
async function manualSync() {
  setSyncState('syncing', 'Sincronizando…');
  try {
    const [words] = await Promise.all([_fetchWordsFromDB(), _fetchProgressFromDB()]);
    setSyncState('ok', 'Sincronizado ✓');
    updateStats();
    if (currentPage === 'lista') renderLista();
  } catch(e) {
    setSyncState('error', 'Sin conexión');
  }
}

// ── Setup banner (when tables don't exist yet) ──
function showSetupBanner() {
  const el = document.getElementById('setupBanner');
  if (el) { el.style.display = 'block'; }
  setSyncState('error', 'Tablas no configuradas');
}

// ═══════════════════ STATS ═══════════════════
function updateStats() {
  const words = getWords(), p = getProgress(), now = Date.now();
  const total = words.length;
  const hard = Object.values(p).filter(e=>e.difficulty===1).length;
  const due = Object.values(p).filter(e=>e.seen>0&&e.nextReview<=now).length;
  const mastered = Object.values(p).filter(e=>e.seen>=3&&e.correct/e.seen>=0.8).length;
  const setEl = (id,v) => { const el=document.getElementById(id); if(el) el.textContent=v; };
  setEl('statTotal', total);
  setEl('statHard', hard);
  setEl('statDue', due);
  setEl('statMastered', mastered);
}

// ═══════════════════ PROGRESS ═══════════════════
function updateWordProgress(wordDE, wasCorrect) {
  const p = getProgress(), now = Date.now();
  if (!p[wordDE]) p[wordDE] = {seen:0,correct:0,difficulty:0,nextReview:now};
  const e = p[wordDE]; e.seen++;
  if (wasCorrect) e.correct++;
  const ratio = e.seen > 0 ? e.correct / e.seen : 0;
  let h;
  if (e.difficulty===1) h = wasCorrect ? Math.max(1,ratio*12) : 0.5;
  else if (e.difficulty===2) h = wasCorrect ? ratio*72+24 : 6;
  else h = wasCorrect ? ratio*48+6 : 2;
  e.nextReview = now + h*3600*1000;
  saveProgress(p);
  _actRecordAnswer();
}
function setDifficulty(wordDE, level) {
  const p = getProgress();
  if (!p[wordDE]) p[wordDE] = {seen:0,correct:0,difficulty:0,nextReview:Date.now()};
  p[wordDE].difficulty = level; p[wordDE].nextReview = Date.now();
  saveProgress(p);
}
function getSortedWords(words) {
  const p = getProgress(), now = Date.now();
  return [...words].sort((a,b) => {
    const pa = p[a.de]||{difficulty:0,nextReview:0,seen:0,correct:0};
    const pb = p[b.de]||{difficulty:0,nextReview:0,seen:0,correct:0};
    if (pa.difficulty===1&&pb.difficulty!==1) return -1;
    if (pb.difficulty===1&&pa.difficulty!==1) return 1;
    if (pa.difficulty===2&&pb.difficulty!==2) return 1;
    if (pb.difficulty===2&&pa.difficulty!==2) return -1;
    const aDue = pa.nextReview<=now ? 0 : 1;
    const bDue = pb.nextReview<=now ? 0 : 1;
    if (aDue!==bDue) return aDue-bDue;
    return (pa.seen||0)-(pb.seen||0);
  });
}

// ═══════════════════ LISTA ═══════════════════
const TIPOS_KEYS = ['Todos','Nomen','Verb','Adjektive','Redewendung','Adverb'];
const DIFF_FILTER_KEYS = ['Todas','🔴 Difícil','🟢 Fácil','📊 Normal','🆕 Nuevas'];
let activeFilter = 'Todos', vocabDiffFilter = 'Todas';
let _editingIdx = null;



function _esc(s) { return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); }

function _buildFilterLabel() {
  const tipoPart = activeFilter !== 'Todos' ? activeFilter : '';
  const diffLabels = { '🔴 Difícil': 'Difícil', '🟢 Fácil': 'Fácil', '📊 Normal': 'Normal', '🆕 Nuevas': 'Nuevas' };
  const diffPart = vocabDiffFilter !== 'Todas' ? (diffLabels[vocabDiffFilter] || vocabDiffFilter) : '';
  const parts = [tipoPart, diffPart].filter(Boolean);
  const btn = document.getElementById('listaFilterBtn');
  const lbl = document.getElementById('listaFilterBtnLabel');
  if (lbl) lbl.textContent = parts.length ? `Filtros: ${parts.join(' · ')}` : 'Filtros';
  if (btn) btn.classList.toggle('has-active', parts.length > 0);
}

function _buildFilterPanelChips() {
  const TIPOS = TIPOS_KEYS.map((k,i) => i===0 ? t('filterAll') : k);
  const DIFF_FILTERS = [t('diffAll'), t('diffHard'), t('diffEasy'), t('diffNormal'), t('diffNew')];
  const diffActiveClass = { '🔴 Difícil': 'active-red', '🟢 Fácil': 'active-green', '📊 Normal': 'active-blue', 'Todas': '' };

  const tipoEl = document.getElementById('fdpTipoChips');
  if (tipoEl) tipoEl.innerHTML = TIPOS_KEYS.map((k,i) => {
    const isActive = k === activeFilter;
    return `<button class="fdp-chip ${isActive ? 'active' : ''}" data-ui-click="list-filter-type" data-value="${k}">${TIPOS[i]}</button>`;
  }).join('');

  const diffEl = document.getElementById('fdpDiffChips');
  if (diffEl) diffEl.innerHTML = DIFF_FILTER_KEYS.map((k,i) => {
    const isActive = k === vocabDiffFilter;
    const cls = isActive ? (diffActiveClass[k] || 'active') : '';
    return `<button class="fdp-chip ${cls}" data-ui-click="list-filter-diff" data-value="${k}">${DIFF_FILTERS[i]}</button>`;
  }).join('');
}

function toggleListaFilterPanel(e) {
  e.stopPropagation();
  const panel = document.getElementById('listaFilterPanel');
  const btn   = document.getElementById('listaFilterBtn');
  if (!panel || !btn) return;
  const isOpen = panel.classList.contains('open');
  if (!isOpen) {
    _buildFilterPanelChips();
    panel.classList.add('open');
    btn.classList.add('open');
    // Calcular posición fixed para no salirse de pantalla
    const rect = btn.getBoundingClientRect();
    const panelW = 220;
    const top = rect.bottom + 5;
    let left = rect.left;
    if (left + panelW > window.innerWidth - 8) left = window.innerWidth - panelW - 8;
    if (left < 8) left = 8;
    panel.style.top  = top + 'px';
    panel.style.left = left + 'px';
  } else {
    panel.classList.remove('open');
    btn.classList.remove('open');
  }
}

function resetListaFilters() {
  activeFilter = 'Todos'; vocabDiffFilter = 'Todas';
  _buildFilterPanelChips();
  _buildFilterLabel();
  renderLista();
}

// Close filter panel on outside click
document.addEventListener('click', e => {
  const wrap = document.getElementById('listaFilterWrap');
  if (wrap && !wrap.contains(e.target)) {
    document.getElementById('listaFilterPanel')?.classList.remove('open');
    document.getElementById('listaFilterBtn')?.classList.remove('open');
  }
});

function renderLista() {
  _buildFilterLabel();
  if (document.getElementById('listaFilterPanel')?.classList.contains('open')) {
    _buildFilterPanelChips();
  }

  const allWords = getWords();
  let words = activeFilter==='Todos' ? allWords : allWords.filter(w=>w.tipo===activeFilter);
  const p = getProgress();
  if (vocabDiffFilter==='🔴 Difícil') words = words.filter(w=>p[w.de]?.difficulty===1);
  else if (vocabDiffFilter==='🟢 Fácil') words = words.filter(w=>p[w.de]?.difficulty===2);
  else if (vocabDiffFilter==='📊 Normal') words = words.filter(w=>!p[w.de]||p[w.de].difficulty===0);
  else if (vocabDiffFilter==='🆕 Nuevas') words = words.filter(w=>!p[w.de]||p[w.de].seen===0);
  words = getSortedWords(words);

  document.getElementById('listaCountLbl').textContent = `${words.length} ${t('words')}`;

  const TIPO_OPT = ['','Nomen','Verb','Adjektive','Redewendung','Adverb'];
  const ART_OPT  = ['','der','die','das'];

  const thead = `<thead>
    <tr>
      <th class="col-tipo">Tipo</th>
      <th class="col-art">Art.</th>
      <th class="col-de">Alemán</th>
      <th class="col-es">Español</th>
      <th class="col-act" style="text-align:center">⚙</th>
    </tr>
  </thead>`;

  const rows = words.map(w => {
    const gIdx = allWords.findIndex(x => x === w || (x.de===w.de&&x.es===w.es&&x.tipo===w.tipo&&x.articulo===w.articulo));
    const pe = p[w.de]||{};
    const pct = pe.seen>0 ? Math.round(pe.correct/pe.seen*100) : -1;
    const col = pct>=75?'var(--green)':pct>=40?'var(--orange)':'var(--red)';
    const diffDot = pe.difficulty===1
      ? '<span class="diff-dot" style="background:var(--red)"></span>'
      : pe.difficulty===2
        ? '<span class="diff-dot" style="background:var(--green)"></span>'
        : '';
    const progMini = pct>=0
      ? `<div class="prog-mini"><div class="prog-mini-track"><div class="prog-mini-fill" style="width:${pct}%;background:${col}"></div></div><span class="prog-mini-pct" style="color:${col}">${pct}%</span></div>`
      : '';

    if (_editingIdx === gIdx) {
      const tipoOpts = TIPO_OPT.map(o=>`<option value="${o}" ${w.tipo===o?'selected':''}>${o||'—'}</option>`).join('');
      const artOpts  = ART_OPT.map(o =>`<option value="${o}" ${w.articulo===o?'selected':''}>${o||'—'}</option>`).join('');
      return `<tr class="row-editing" id="row-${gIdx}">
        <td class="td-tipo"><select class="cell-select" id="edit-tipo">${tipoOpts}</select></td>
        <td class="td-art"><select class="cell-select" id="edit-art">${artOpts}</select></td>
        <td class="td-de"><input class="cell-input" id="edit-de" value="${_esc(w.de)}"></td>
        <td class="td-es"><input class="cell-input" id="edit-es" value="${_esc(w.es)}"></td>
        <td class="td-actions">
          <button class="row-btn save-btn" data-ui-click="row-save" data-index="${gIdx}" title="Guardar">✓</button>
          <button class="row-btn cancel-btn" data-ui-click="row-cancel" title="Cancelar">✕</button>
        </td>
      </tr>`;
    }

    return `<tr id="row-${gIdx}">
      <td class="td-tipo">${w.tipo?`<span class="tipo-badge ${_esc(w.tipo)}">${_esc(w.tipo)}</span>`:'<span style="color:var(--text3);font-size:11px">—</span>'}</td>
      <td class="td-art" style="color:var(--text2);font-size:12px">${_esc(w.articulo)||'<span style="color:var(--text3)">—</span>'}</td>
      <td class="td-de">${diffDot}<span>${_esc(w.de)}</span>${progMini}</td>
      <td class="td-es">${_esc(w.es)}</td>
      <td class="td-actions" data-ui-stop>
        <button class="row-btn" data-ui-click="row-edit" data-index="${gIdx}" title="Editar">✏️</button>
        <button class="row-btn delete-btn" data-ui-click="row-delete" data-index="${gIdx}" title="Eliminar">🗑</button>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('wordList').innerHTML =
    `<table class="vocab-table">${thead}<tbody>${rows}</tbody></table>`;
}

function startEditRow(gIdx) {
  _editingIdx = gIdx;
  renderLista();
  setTimeout(() => document.getElementById('edit-de')?.focus(), 60);
}
function cancelEditRow() { _editingIdx = null; renderLista(); }

async function saveEditRow(gIdx) {
  const tipo     = document.getElementById('edit-tipo')?.value.trim()||'';
  const articulo = document.getElementById('edit-art')?.value.trim()||'';
  const de       = (document.getElementById('edit-de')?.value||'').trim();
  const es       = (document.getElementById('edit-es')?.value||'').trim();
  if (!de||!es) { showToast('⚠ Alemán y Español son obligatorios'); return; }
  const allWords = getWords();
  const oldWord  = allWords[gIdx];
  if (!oldWord) return;
  const oldDE = oldWord.de;
  allWords[gIdx] = { ...oldWord, tipo, articulo, de, es };
  if (oldDE !== de) {
    const prog = getProgress();
    if (prog[oldDE]) { prog[de]=prog[oldDE]; delete prog[oldDE]; saveProgress(prog); }
  }
  _editingIdx = null;
  saveWords(allWords);
  renderLista();
  updateStats();
  showToast('✓ Guardado');
}

async function deleteRow(gIdx) {
  const allWords = getWords();
  const w = allWords[gIdx];
  if (!w) return;
  if (!confirm(`¿Eliminar "${displayDE(w)}"?`)) return;
  allWords.splice(gIdx,1);
  if (_editingIdx===gIdx) _editingIdx=null;
  saveWords(allWords);
  renderLista();
  showToast('🗑 Eliminada');
}

// ── Column resize ──
function quickDiff(wordDE, level) { setDifficulty(wordDE, level); renderLista(); }
function setListaFilter(typ) { activeFilter = typ; renderLista(); }
function setListaDiff(d) { vocabDiffFilter = d; renderLista(); }

// ═══════════════════ ADD WORD ═══════════════════
function showAddModal() {
  ['addTipo','addArticle','addDE','addES'].forEach(id => document.getElementById(id).value = '');
  document.getElementById('addError').textContent = '';
  openModal('addModal');
}
function saveWord() {
  const tipo = document.getElementById('addTipo').value.trim();
  const articulo = document.getElementById('addArticle').value.trim();
  const de = document.getElementById('addDE').value.trim();
  const es = document.getElementById('addES').value.trim();
  const err = document.getElementById('addError');
  if (!de) { err.textContent = t('errDeRequired'); return; }
  if (!es) { err.textContent = t('errEsRequired'); return; }
  err.textContent = '';
  const words = getWords(); words.push({tipo, articulo, de, es}); saveWords(words);
  closeModal('addModal'); renderLista(); updateStats();
  if (typeof _highlightSavedWords === 'function') _highlightSavedWords();
  showToast(t('toastAdded') + (articulo ? articulo + ' ' : '') + de);
}

// ═══════════════════ IMPORT ═══════════════════
let importParsed = null;
function showImportModal() {
  importParsed = null;
  document.getElementById('importPreview').style.display = 'none';
  document.getElementById('importConfirmBtn').disabled = true;
  document.getElementById('importConfirmBtn').style.opacity = '.5';
  document.getElementById('importFileInput').value = '';
  openModal('importModal');
}
function handleImportDrop(e) { e.preventDefault(); document.getElementById('importZone').classList.remove('drag'); const f=e.dataTransfer.files[0]; if(f) processImportFile(f); }
function handleImportFile(e) { const f=e.target.files[0]; if(f) processImportFile(f); }
function processImportFile(file) {
  const reader = new FileReader();
  reader.onload = e => {
    const parsed = parseCSV(e.target.result);
    if (!parsed||parsed.length===0) { showToast(t('toastImportFail')); return; }
    importParsed = parsed;
    const prev = document.getElementById('importPreview');
    prev.style.display = 'block';
    prev.innerHTML = `✓ <b>${parsed.length} palabras</b> encontradas · Ej: ${_esc(displayDE(parsed[0]))} → ${_esc(parsed[0].es)}`;
    document.getElementById('importConfirmBtn').disabled = false;
    document.getElementById('importConfirmBtn').style.opacity = '1';
  };
  reader.readAsText(file, 'utf-8');
}
function parseCSV(text) {
  text = text.replace(/^\uFEFF/, '');
  const lines = text.split(/\r?\n/).filter(l=>l.trim());
  if (lines.length < 2) return null;
  const headers = lines[0].split(',').map(h=>h.trim().toLowerCase().replace(/['"]/g,''));
  const idxTipo = headers.findIndex(h=>/tipo|type/.test(h));
  const idxArt  = headers.findIndex(h=>/art[ií]culo|article|artikel|art/.test(h));
  const idxDE   = headers.findIndex(h=>/alem[aá]n|deutsch|german|de/.test(h));
  const idxES   = headers.findIndex(h=>/espa[nñ]ol|spanish|es|traducci/.test(h));
  if (idxDE<0||idxES<0) return null;
  const result = [];
  for (let i=1;i<lines.length;i++) {
    const cols = parseCSVLine(lines[i]);
    const de = (cols[idxDE]||'').trim(), es = (cols[idxES]||'').trim();
    if (!de||!es) continue;
    let tipo = idxTipo>=0?(cols[idxTipo]||'').trim():'';
    let articulo = idxArt>=0?(cols[idxArt]||'').trim():'';
    let finalDE = de, finalArt = articulo;
    if (!finalArt&&/^(der|die|das)\s+/i.test(de)) { const m=de.match(/^(der|die|das)\s+(.+)$/i); if(m){finalArt=m[1].toLowerCase();finalDE=m[2];} }
    result.push({tipo, articulo:finalArt, de:finalDE, es});
  }
  return result;
}
function parseCSVLine(line) {
  const cols=[]; let cur='', inQ=false;
  for (let i=0;i<line.length;i++) { const ch=line[i]; if(ch==='"'){inQ=!inQ;} else if(ch===','&&!inQ){cols.push(cur);cur='';} else{cur+=ch;} }
  cols.push(cur);
  return cols.map(c=>c.replace(/^"|"$/g,''));
}
function confirmImport() {
  if (!importParsed||importParsed.length===0) return;
  const mode = document.querySelector('input[name="importMode"]:checked').value;
  let words = mode==='replace' ? [] : getWords();
  words = words.concat(importParsed); saveWords(words);
  closeModal('importModal'); renderLista(); updateStats();
  showToast(`✓ ${importParsed.length} ${t('words')} ${t('toastImported')}`);
  importParsed = null;
}

// ═══════════════════ MATCHING ═══════════════════
let matchFilter = 'Todos', matchMode = 'smart', matchState = {}, currentBatch = [];
let matchCfgOpen = false;
let roundSession = { current: 0, total: 0, active: false };

// Match config persisted
function getMatchCfg() { try { return JSON.parse(localStorage.getItem('matchCfg')) || {}; } catch(e) { return {}; } }
function saveMatchCfg(cfg) { localStorage.setItem('matchCfg', JSON.stringify(cfg)); }
const MATCH_DEFAULTS = { wordsPerRound: 6, totalRounds: 3 };
function getMatchSetting(key) { const cfg=getMatchCfg(); return cfg[key]!==undefined?cfg[key]:MATCH_DEFAULTS[key]; }
function setMatchSetting(key, val) { const cfg=getMatchCfg(); cfg[key]=val; saveMatchCfg(cfg); }

function toggleMatchCfg() {
  matchCfgOpen = !matchCfgOpen;
  const btn = document.getElementById('matchCfgBtn');
  if (btn) { btn.classList.toggle('active', matchCfgOpen); btn.classList.add('spinning'); setTimeout(()=>btn.classList.remove('spinning'),400); }
  renderMatchCfgDrawer();
}

function renderMatchCfgDrawer() {
  const drawer = document.getElementById('matchCfgDrawer');
  if (!drawer) return;
  if (!matchCfgOpen) { drawer.style.display='none'; return; }
  drawer.style.display = 'block';
  const wordsPerRound = getMatchSetting('wordsPerRound');
  const totalRounds   = getMatchSetting('totalRounds');
  const modeOptions = [['smart','🧠 Inteligente'],['hard','🔴 Difícil'],['all','🔀 Aleatorio']];
  const tipoOptions = TIPOS_KEYS.map((k,i)=>[k, i===0?t('filterAll'):k]);
  drawer.innerHTML = `<div class="match-cfg-drawer">
    <div class="cfg-section">
      <div class="cfg-section-title">Modo de selección</div>
      <div class="cfg-chips">${modeOptions.map(([v,l])=>`<button class="cfg-chip ${matchMode===v?'active':''}" data-ui-click="match-mode" data-value="${v}">${l}</button>`).join('')}</div>
    </div>
    <div class="cfg-section">
      <div class="cfg-section-title">Filtro por tipo</div>
      <div class="cfg-chips">${tipoOptions.map(([v,l])=>`<button class="cfg-chip ${matchFilter===v?'active':''}" data-ui-click="match-filter" data-value="${v}">${l}</button>`).join('')}</div>
    </div>
    <div class="cfg-section" style="display:flex;gap:20px;align-items:flex-start">
      <div>
        <div class="cfg-section-title">Palabras / ronda</div>
        <div class="cfg-stepper">
          <button class="cfg-step-btn" data-ui-click="match-adjust" data-setting="wordsPerRound" data-delta="-2">−</button>
          <div class="cfg-step-val" id="cfgWordsVal">${wordsPerRound}</div>
          <button class="cfg-step-btn" data-ui-click="match-adjust" data-setting="wordsPerRound" data-delta="2">+</button>
        </div>
      </div>
      <div>
        <div class="cfg-section-title">Rondas seguidas</div>
        <div class="cfg-stepper">
          <button class="cfg-step-btn" data-ui-click="match-adjust" data-setting="totalRounds" data-delta="-1">−</button>
          <div class="cfg-step-val" id="cfgRoundsVal">${totalRounds}</div>
          <button class="cfg-step-btn" data-ui-click="match-adjust" data-setting="totalRounds" data-delta="1">+</button>
        </div>
      </div>
    </div>
    <button class="btn-primary" style="margin-top:14px" data-ui-click="match-apply">▶ Empezar</button>
  </div>`;
}

function adjustMatchSetting(key, delta) {
  const min=key==='wordsPerRound'?2:1, max=key==='wordsPerRound'?12:10;
  let val=Math.max(min,Math.min(max, getMatchSetting(key)+delta));
  setMatchSetting(key, val);
  const el=document.getElementById(key==='wordsPerRound'?'cfgWordsVal':'cfgRoundsVal');
  if (el) el.textContent=val;
}

function applyMatchCfg() {
  matchCfgOpen=false;
  const btn=document.getElementById('matchCfgBtn'); if(btn) btn.classList.remove('active');
  renderMatchCfgDrawer();
  startRoundSession();
}

function renderMatchFilters() { startRoundSession(); }
function setMatchMode(m) { matchMode=m; renderMatchCfgDrawer(); }
function setMatchFilter(typ) { matchFilter=typ; renderMatchCfgDrawer(); }

function shuffle(arr) { return [...arr].sort(()=>Math.random()-.5); }

function pickBatch(pool, count) {
  const p=getProgress(), now=Date.now();
  let candidates;
  if (matchMode==='hard') { candidates=pool.filter(w=>p[w.de]?.difficulty===1); if(candidates.length<2) candidates=pool; }
  else if (matchMode==='smart') {
    const scored=pool.map(w=>{ const e=p[w.de]||{seen:0,correct:0,difficulty:0,nextReview:0}; let score=(e.difficulty===1?1000:0)+(e.nextReview<=now?500:0)+(e.seen===0?800:0)+(1-(e.seen>0?e.correct/e.seen:.5))*300+Math.random()*100; return {w,score}; });
    scored.sort((a,b)=>b.score-a.score); candidates=scored.map(x=>x.w);
  } else { candidates=shuffle(pool); }
  return candidates.slice(0, Math.min(count, candidates.length));
}

function startRoundSession() {
  roundSession = { current:0, total:getMatchSetting('totalRounds'), active:true };
  startMatch();
}

function startMatch() {
  const pool = matchFilter==='Todos' ? getWords() : getWords().filter(w=>w.tipo===matchFilter);
  if (pool.length<2) { document.getElementById('matchContent').innerHTML=`<div style="text-align:center;padding:40px;color:var(--text2)">${t('matchNoWords')}</div>`; return; }
  currentBatch = pickBatch(pool, getMatchSetting('wordsPerRound'));
  matchState = {selectedDE:null, selectedES:null, matched:new Set(), total:currentBatch.length, errors:0, wrongMap:{}};
  renderMatch();
}

function renderRoundsBar() {
  if (!roundSession.active || roundSession.total<=1) return '';
  const pct=Math.round((roundSession.current/roundSession.total)*100);
  return `<div class="rounds-progress">
    <div class="rounds-prog-header">
      <span class="rounds-prog-label">Rondas</span>
      <span class="rounds-prog-count">${roundSession.current} / ${roundSession.total}</span>
    </div>
    <div class="rounds-prog-track"><div class="rounds-prog-fill" style="width:${pct}%"></div></div>
  </div>`;
}

function renderMatch() {
  const s=matchState, c=document.getElementById('matchContent');
  if (s.matched.size===s.total) {
    roundSession.current++;
    const p=getProgress();
    const summary=currentBatch.map(w=>{ const e=p[w.de]||{}, acc=e.seen>0?Math.round(e.correct/e.seen*100):0, wrong=s.wrongMap[w.de]||0;
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);margin-bottom:5px">
        <div style="font-size:13px;font-weight:500;color:var(--text)">${displayDE(w)}</div>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:11px;color:var(--text2)">${wrong===0?'✅':'❌×'+wrong}</span>
          <div style="width:40px;height:4px;background:var(--border);border-radius:2px;overflow:hidden">
            <div style="width:${acc}%;height:100%;background:${acc>=75?'var(--green)':acc>=40?'var(--orange)':'var(--red)'}"></div>
          </div>
          <span style="font-size:10px;color:var(--text3)">${acc}%</span>
        </div>
      </div>`;
    }).join('');
    const allDone = roundSession.current>=roundSession.total;
    const errMsg = s.errors===0?'¡Sin errores! 🌟':s.errors+' error'+(s.errors>1?'es':'');
    if (allDone) {
      c.innerHTML=`${renderRoundsBar()}<div class="complete-msg"><div class="trophy">🏆</div>
        <h2>¡Sesión completa!</h2>
        <p style="color:var(--text2);margin-bottom:4px">${roundSession.total} ronda${roundSession.total>1?'s':''} terminadas</p>
        <p style="color:var(--text2);margin-bottom:16px">${errMsg}</p>
        <div style="text-align:left;margin-bottom:16px">${summary}</div>
        <button class="btn-primary" data-ui-click="match-round-start">${t('matchNewRound')}</button></div>`;
    } else {
      c.innerHTML=`${renderRoundsBar()}<div class="complete-msg"><div class="trophy" style="font-size:36px">⭐</div>
        <h2 style="color:var(--blue)">Ronda ${roundSession.current} ✓</h2>
        <p style="color:var(--text2);margin-bottom:16px">${errMsg}</p>
        <div style="text-align:left;margin-bottom:16px">${summary}</div>
        <button class="btn-primary" data-ui-click="match-next">Siguiente ronda →</button></div>`;
    }
    return;
  }
  const pct=Math.round(s.matched.size/s.total*100);
  const p=getProgress();
  const dew=shuffle(currentBatch.map((w,i)=>({...w,idx:i})));
  const esw=shuffle(currentBatch.map((w,i)=>({...w,idx:i})));
  let rows='';
  for (let i=0;i<currentBatch.length;i++) {
    const d=dew[i], e=esw[i], pe=p[d.de]||{};
    const dot=pe.difficulty===1?'<span style="position:absolute;top:3px;right:4px;font-size:8px">🔴</span>':pe.difficulty===2?'<span style="position:absolute;top:3px;right:4px;font-size:8px">🟢</span>':'';
    rows+=`<div class="word-card ${s.matched.has(d.idx)?'matched':''}" id="de-${d.idx}" data-ui-click="match-card" data-language="de" data-index="${d.idx}" style="position:relative">${dot}${displayDE(d)}</div>
           <div class="word-card ${s.matched.has(e.idx)?'matched':''}" id="es-${e.idx}" data-ui-click="match-card" data-language="es" data-index="${e.idx}">${e.es}</div>`;
  }
  c.innerHTML=`${renderRoundsBar()}
    <div class="match-header"><h2>${t('matchTitle')}</h2><div class="score-badge">${s.matched.size}/${s.total}</div></div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px">
      <div class="col-label">Alemán 🇩🇪</div><div class="col-label">Español 🇪🇸</div></div>
    <div class="columns-grid">${rows}</div>`;
}

function selectCard(lang, idx) {
  const s=matchState;
  if (s.matched.has(idx)) return;
  const el=document.getElementById(`${lang}-${idx}`);
  if (!el||el.classList.contains('matched')) return;
  if (lang==='de') { if(s.selectedDE!==null){const p=document.getElementById(`de-${s.selectedDE}`);if(p)p.classList.remove('selected');}; s.selectedDE=idx; el.classList.add('selected'); }
  else { if(s.selectedES!==null){const p=document.getElementById(`es-${s.selectedES}`);if(p)p.classList.remove('selected');}; s.selectedES=idx; el.classList.add('selected'); }
  if (s.selectedDE!==null&&s.selectedES!==null) {
    const deEl=document.getElementById(`de-${s.selectedDE}`), esEl=document.getElementById(`es-${s.selectedES}`);
    const isMatch=s.selectedDE===s.selectedES;
    const wordDE=currentBatch[s.selectedDE]?.de;
    updateWordProgress(wordDE, isMatch);
    if (isMatch) {
      s.matched.add(s.selectedDE);
      [deEl,esEl].forEach(x=>{x.classList.remove('selected');x.classList.add('matched');});
      if (wordDE) addToBag(wordDE);
      s.selectedDE=null; s.selectedES=null;
      if (s.matched.size===s.total) setTimeout(renderMatch,600);
    } else {
      s.errors++; if(wordDE) s.wrongMap[wordDE]=(s.wrongMap[wordDE]||0)+1;
      [deEl,esEl].forEach(x=>x.classList.add('wrong'));
      setTimeout(()=>{[deEl,esEl].forEach(x=>x.classList.remove('wrong','selected'));s.selectedDE=null;s.selectedES=null;},700);
    }
  }
}

// ═══════════════════ VELOCIDAD (SPEED MODE) ═══════════════════
const SPEED_BONUS_EVERY   = 3;   // aciertos seguidos para bonus
const SPEED_BONUS_SECS    = 10;  // segundos de bonus
const SPEED_WORDS_VISIBLE = 5;   // parejas en pantalla a la vez

let _speedTimer   = null;   // setInterval handle
let _speedState   = null;   // objeto de estado completo
let _speedPool    = [];     // palabras disponibles (shuffled)
let _speedPoolIdx = 0;      // siguiente palabra del pool

function _speedDefaultDuration() {
  return parseInt(localStorage.getItem('speedDuration') || '30');
}

// ── Pantalla de configuración ──
function renderSpeedSetup() {
  const dur = _speedDefaultDuration();
  const c = document.getElementById('speedContent');
  if (!c) return;
  const pool = getWords();
  if (pool.length < 4) {
    c.innerHTML = `<div style="text-align:center;padding:48px 20px;color:var(--text2)">
      <div style="font-size:40px;margin-bottom:12px">😅</div>
      <div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:6px">Pocas palabras</div>
      <div style="font-size:13px">Añade al menos 4 palabras para jugar.</div>
    </div>`;
    return;
  }

  c.innerHTML = `
    <div style="text-align:center;padding:32px 0 20px;animation:fadeUp .3s ease both">
      <div style="font-size:52px;margin-bottom:10px">⚡</div>
      <div style="font-size:22px;font-weight:800;color:var(--text);letter-spacing:-.5px;margin-bottom:6px">Modo Velocidad</div>
      <div style="font-size:13px;color:var(--text2);line-height:1.6;max-width:260px;margin:0 auto 28px">
        Une el máximo de parejas antes de que acabe el tiempo.<br>
        <span style="color:var(--orange);font-weight:600">${SPEED_BONUS_EVERY} seguidas</span> = <span style="color:var(--green);font-weight:600">+${SPEED_BONUS_SECS}s ⏱</span>
      </div>

      <div style="display:flex;flex-direction:column;gap:10px;max-width:300px;margin:0 auto">
        <div style="font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:var(--text3);margin-bottom:2px">Duración</div>
        <div style="display:flex;gap:8px;justify-content:center">
          ${[30,60,90].map(s=>`<button data-ui-click="speed-duration" data-value="${s}" id="sdBtn${s}"
            style="flex:1;padding:10px 6px;border-radius:var(--r);border:1px solid ${dur===s?'rgba(251,146,60,.5)':'var(--border)'};
            background:${dur===s?'rgba(251,146,60,.1)':'var(--surface)'};
            color:${dur===s?'var(--orange)':'var(--text2)'};
            font-family:Inter,sans-serif;font-size:13px;font-weight:700;cursor:pointer;
            transition:all .15s">${s}s</button>`).join('')}
        </div>

        <div style="font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:var(--text3);margin-top:8px;margin-bottom:2px">Tipo de palabras</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;justify-content:center" id="speedTipoWrap">
          ${['Todos',...['Nomen','Verb','Adjektive','Redewendung','Adverb']].map(k=>{
            const active = (localStorage.getItem('speedTipo')||'Todos') === k;
            return `<button data-ui-click="speed-type" data-value="${k}" id="speedTipo_${k}"
              style="padding:5px 12px;border-radius:20px;border:1px solid ${active?'rgba(251,146,60,.4)':'var(--border)'};
              background:${active?'rgba(251,146,60,.1)':'var(--surface)'};
              color:${active?'var(--orange)':'var(--text2)'};
              font-family:Inter,sans-serif;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s">${k==='Todos'?'Todos':k}</button>`;
          }).join('')}
        </div>

        <button data-ui-click="speed-start"
          style="margin-top:12px;width:100%;background:var(--orange);color:#fff;border:none;
          padding:14px;border-radius:var(--r);font-family:Inter,sans-serif;
          font-size:15px;font-weight:700;cursor:pointer;letter-spacing:.2px;
          transition:opacity .15s;box-shadow:0 4px 20px rgba(251,146,60,.35)"
          class="speed-hover-button">
          ▶ Empezar
        </button>
      </div>
    </div>`;
}

function setSpeedDuration(s) {
  localStorage.setItem('speedDuration', s);
  [30,60,90].forEach(v => {
    const btn = document.getElementById(`sdBtn${v}`);
    if (!btn) return;
    const active = v === s;
    btn.style.borderColor = active ? 'rgba(251,146,60,.5)' : 'var(--border)';
    btn.style.background  = active ? 'rgba(251,146,60,.1)' : 'var(--surface)';
    btn.style.color       = active ? 'var(--orange)' : 'var(--text2)';
  });
}

function setSpeedTipo(k) {
  localStorage.setItem('speedTipo', k);
  ['Todos',...['Nomen','Verb','Adjektive','Redewendung','Adverb']].forEach(v => {
    const btn = document.getElementById(`speedTipo_${v}`);
    if (!btn) return;
    const active = v === k;
    btn.style.borderColor = active ? 'rgba(251,146,60,.4)' : 'var(--border)';
    btn.style.background  = active ? 'rgba(251,146,60,.1)' : 'var(--surface)';
    btn.style.color       = active ? 'var(--orange)' : 'var(--text2)';
  });
}

// ── Countdown 3-2-1-GO ──
function startSpeedGame() {
  const tipo = localStorage.getItem('speedTipo') || 'Todos';
  let pool = tipo === 'Todos' ? getWords() : getWords().filter(w => w.tipo === tipo);
  if (pool.length < 4) { showToast('Pocas palabras para este filtro'); return; }

  // Ordenar por dificultad/SRS y mezclar
  _speedPool = shuffle(pool);
  _speedPoolIdx = 0;

  const overlay = document.createElement('div');
  overlay.className = 'speed-countdown';
  overlay.id = 'speedCountdown';
  document.body.appendChild(overlay);

  let n = 3;
  function tick() {
    overlay.innerHTML = `<div class="${n > 0 ? 'speed-countdown-num' : 'speed-countdown-go'}" style="animation:popIn .4s both">${n > 0 ? n : '¡YA!'}</div>`;
    if (n === 0) {
      setTimeout(() => {
        overlay.remove();
        _launchSpeedGame();
      }, 600);
      return;
    }
    n--;
    setTimeout(tick, 800);
  }
  tick();
}

function _launchSpeedGame() {
  const dur = _speedDefaultDuration();
  _speedState = {
    timeLeft:   dur,
    totalTime:  dur,
    score:      0,
    streak:     0,
    errors:     0,
    pairs:      0,
    matched:    new Set(),    // idx dentro de currentSpeedBatch
    selectedDE: null,
    selectedES: null,
    batch:      [],
    running:    true,
  };
  _fillSpeedBatch();
  _renderSpeedGame();
  _speedTimer = setInterval(_speedTick, 100);
}

function _fillSpeedBatch() {
  // Coge SPEED_WORDS_VISIBLE palabras del pool (cíclico)
  const s = _speedState;
  const needed = SPEED_WORDS_VISIBLE;
  s.batch = [];
  for (let i = 0; i < needed; i++) {
    s.batch.push(_speedPool[_speedPoolIdx % _speedPool.length]);
    _speedPoolIdx++;
    // Si dimos la vuelta completa, re-shuffle
    if (_speedPoolIdx % _speedPool.length === 0) _speedPool = shuffle(_speedPool);
  }
  s.matched = new Set();
  s.selectedDE = null;
  s.selectedES = null;
}

function _speedTick() {
  if (!_speedState || !_speedState.running) return;
  _speedState.timeLeft = Math.max(0, _speedState.timeLeft - 0.1);
  _updateSpeedTimer();
  if (_speedState.timeLeft <= 0) {
    _speedState.running = false;
    clearInterval(_speedTimer);
    setTimeout(_renderSpeedGameOver, 300);
  }
}

function _updateSpeedTimer() {
  const s = _speedState;
  const pct = s.timeLeft / s.totalTime * 100;
  const secs = Math.ceil(s.timeLeft);
  const el = document.getElementById('speedTimerFill');
  const num = document.getElementById('speedTimeNum');
  if (el) {
    el.style.width = pct + '%';
    el.classList.toggle('danger', s.timeLeft <= 10);
  }
  if (num) {
    num.textContent = secs;
    num.classList.toggle('danger', s.timeLeft <= 10);
  }
}

function _renderSpeedGame() {
  const s = _speedState;
  const c = document.getElementById('speedContent');
  if (!c) return;

  const dew = shuffle(s.batch.map((w,i) => ({...w, idx:i})));
  const esw = shuffle(s.batch.map((w,i) => ({...w, idx:i})));

  let deCards = '', esCards = '';
  for (let i = 0; i < s.batch.length; i++) {
    const d = dew[i], e = esw[i];
    const dm = s.matched.has(d.idx) ? 'matched' : '';
    const em = s.matched.has(e.idx) ? 'matched' : '';
    deCards += `<div class="word-card ${dm}" id="spd-de-${d.idx}" data-ui-click="speed-card" data-language="de" data-index="${d.idx}" style="position:relative;min-height:52px">${displayDE(d)}</div>`;
    esCards += `<div class="word-card ${em}" id="spd-es-${e.idx}" data-ui-click="speed-card" data-language="es" data-index="${e.idx}" style="position:relative;min-height:52px">${e.es}</div>`;
  }

  c.innerHTML = `
    <div id="speedTimerDisplay" class="speed-timer-display">
      <div id="speedTimeNum" class="speed-time-num">${Math.ceil(s.timeLeft)}</div>
      <div class="speed-streak ${s.streak >= 2 ? 'hot' : ''}" id="speedStreak">
        🔥 ${s.streak} seguidas
      </div>
      <div class="speed-score-big" id="speedScore">${s.score}</div>
    </div>
    <div class="speed-timer-bar">
      <div class="speed-timer-fill ${s.timeLeft <= 10 ? 'danger' : ''}" id="speedTimerFill" style="width:${s.timeLeft/s.totalTime*100}%"></div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px;margin-bottom:8px">
      <div class="col-label">Alemán 🇩🇪</div>
      <div class="col-label">Español 🇪🇸</div>
    </div>
    <div class="columns-grid" id="speedGrid">
      ${dew.map((_,i) => `${deCards.split('</div>')[i]}</div>`).join('')}
    </div>`;

  // Re-render grid limpio
  const grid = document.getElementById('speedGrid');
  if (!grid) return;
  grid.innerHTML = '';
  // Intercalar de/es columna a columna (grid 2 cols)
  for (let i = 0; i < s.batch.length; i++) {
    const d = dew[i], e = esw[i];
    const dm = s.matched.has(d.idx) ? 'matched' : '';
    const em = s.matched.has(e.idx) ? 'matched' : '';
    const dDiv = document.createElement('div');
    dDiv.className = `word-card ${dm}`;
    dDiv.id = `spd-de-${d.idx}`;
    dDiv.style.cssText = 'position:relative;min-height:52px';
    dDiv.textContent = displayDE(d);
    dDiv.onclick = () => speedSelect('de', d.idx);

    const eDiv = document.createElement('div');
    eDiv.className = `word-card ${em}`;
    eDiv.id = `spd-es-${e.idx}`;
    eDiv.style.cssText = 'position:relative;min-height:52px';
    eDiv.textContent = e.es;
    eDiv.onclick = () => speedSelect('es', e.idx);

    grid.appendChild(dDiv);
    grid.appendChild(eDiv);
  }

  // Guardar orden actual para lookups
  s._dew = dew;
  s._esw = esw;
}

function speedSelect(lang, idx) {
  const s = _speedState;
  if (!s || !s.running) return;
  if (s.matched.has(idx)) return;

  const elId = `spd-${lang}-${idx}`;
  const el = document.getElementById(elId);
  if (!el || el.classList.contains('matched')) return;

  if (lang === 'de') {
    if (s.selectedDE !== null) {
      const prev = document.getElementById(`spd-de-${s.selectedDE}`);
      if (prev) prev.classList.remove('selected');
    }
    s.selectedDE = idx;
    el.classList.add('selected');
  } else {
    if (s.selectedES !== null) {
      const prev = document.getElementById(`spd-es-${s.selectedES}`);
      if (prev) prev.classList.remove('selected');
    }
    s.selectedES = idx;
    el.classList.add('selected');
  }

  if (s.selectedDE !== null && s.selectedES !== null) {
    const deEl = document.getElementById(`spd-de-${s.selectedDE}`);
    const esEl = document.getElementById(`spd-es-${s.selectedES}`);
    const isMatch = s.selectedDE === s.selectedES;
    const wordDE = s.batch[s.selectedDE]?.de;

    if (isMatch) {
      // ✅ ACIERTO
      s.matched.add(s.selectedDE);
      s.score++;
      s.pairs++;
      s.streak++;
      [deEl, esEl].forEach(x => {
        if (x) { x.classList.remove('selected'); x.classList.add('matched'); }
      });
      // Chip flotante +1
      _spawnChip(deEl, '+1', 'ok');
      // Flash verde
      _screenFlash('green');
      // Bonus streak
      if (s.streak > 0 && s.streak % SPEED_BONUS_EVERY === 0) {
        s.timeLeft = Math.min(s.timeLeft + SPEED_BONUS_SECS, s.totalTime * 2);
        _spawnBonus(`+${SPEED_BONUS_SECS}s ⚡`);
      }
      s.selectedDE = null; s.selectedES = null;
      updateWordProgress(wordDE, true);
      // Actualizar marcador
      _updateSpeedHUD();
      // Si se completó el lote, cargar nuevo
      if (s.matched.size === s.batch.length) {
        setTimeout(() => { _fillSpeedBatch(); _renderSpeedGame(); }, 350);
      }
    } else {
      // ❌ ERROR — penalización -2s
      s.errors++;
      s.streak = 0;
      s.timeLeft = Math.max(0, s.timeLeft - 2);
      [deEl, esEl].forEach(x => { if (x) x.classList.add('wrong'); });
      _screenFlash('red');
      _spawnChip(deEl, '-2s', 'err');
      updateWordProgress(wordDE, false);
      setTimeout(() => {
        [deEl, esEl].forEach(x => { if (x) x.classList.remove('wrong', 'selected'); });
        s.selectedDE = null; s.selectedES = null;
        _updateSpeedHUD();
      }, 600);
    }
  }
}

function _updateSpeedHUD() {
  const s = _speedState;
  const score = document.getElementById('speedScore');
  const streak = document.getElementById('speedStreak');
  if (score) score.textContent = s.score;
  if (streak) {
    streak.textContent = `🔥 ${s.streak} seguidas`;
    streak.className = `speed-streak ${s.streak >= 2 ? 'hot' : ''}`;
  }
}

function _spawnChip(parentEl, text, type) {
  if (!parentEl) return;
  const chip = document.createElement('div');
  chip.className = `score-chip ${type}`;
  chip.textContent = text;
  chip.style.cssText = 'position:fixed;pointer-events:none;z-index:9500;font-size:12px;font-weight:800;padding:3px 7px;border-radius:8px;animation:floatUp .7s ease both';
  const rect = parentEl.getBoundingClientRect();
  chip.style.left = (rect.left + rect.width / 2 - 16) + 'px';
  chip.style.top  = (rect.top - 8) + 'px';
  if (type === 'ok') {
    chip.style.background = 'var(--green-bg)';
    chip.style.color = 'var(--green-t)';
    chip.style.border = '1px solid rgba(74,222,128,.4)';
  } else {
    chip.style.background = 'var(--red-bg)';
    chip.style.color = 'var(--red)';
    chip.style.border = '1px solid rgba(248,113,113,.4)';
  }
  document.body.appendChild(chip);
  setTimeout(() => chip.remove(), 750);
}

function _spawnBonus(text) {
  const el = document.createElement('div');
  el.className = 'bonus-pop';
  el.textContent = text;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 750);
}

function _screenFlash(type) {
  const el = document.createElement('div');
  el.className = type === 'green' ? 'speed-flash-green' : 'speed-flash-red';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 380);
}

function _renderSpeedGameOver() {
  clearInterval(_speedTimer);
  const s = _speedState;
  const c = document.getElementById('speedContent');
  if (!c) return;

  const accuracy = (s.pairs + s.errors) > 0
    ? Math.round(s.pairs / (s.pairs + s.errors) * 100)
    : 0;
  const bestKey = `speedBest_${currentEmail || 'default'}`;
  const prev = parseInt(localStorage.getItem(bestKey) || '0');
  const isNew = s.score > prev;
  if (isNew) localStorage.setItem(bestKey, s.score);

  c.innerHTML = `<div class="speed-gameover">
    <div style="font-size:44px;margin-bottom:8px">🏁</div>
    <div style="font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.8px;color:var(--text3);margin-bottom:4px">Puntuación final</div>
    <div class="speed-gameover-score">${s.score}</div>
    <div class="speed-gameover-label">pares completados</div>
    ${isNew ? `<div style="display:inline-flex;align-items:center;gap:6px;background:rgba(251,146,60,.1);border:1px solid rgba(251,146,60,.35);border-radius:20px;padding:5px 14px;font-size:12px;font-weight:700;color:var(--orange);margin-bottom:16px">🏆 ¡Nuevo récord!</div>` : `<div style="font-size:12px;color:var(--text3);margin-bottom:16px">Récord: ${prev}</div>`}
    <div class="speed-stat-row">
      <div class="speed-stat"><div class="speed-stat-num">${s.pairs}</div><div class="speed-stat-lbl">Aciertos</div></div>
      <div class="speed-stat"><div class="speed-stat-num" style="color:var(--red)">${s.errors}</div><div class="speed-stat-lbl">Errores</div></div>
      <div class="speed-stat"><div class="speed-stat-num" style="color:var(--blue)">${accuracy}%</div><div class="speed-stat-lbl">Precisión</div></div>
    </div>
    <button data-ui-click="speed-setup"
      style="width:100%;background:var(--orange);color:#fff;border:none;padding:13px;
      border-radius:var(--r);font-family:Inter,sans-serif;font-weight:700;font-size:14px;
      cursor:pointer;margin-bottom:8px;transition:opacity .15s"
      class="speed-hover-button">
      ↺ Jugar de nuevo
    </button>
    <button data-ui-click="speed-back"
      style="width:100%;background:var(--surface);color:var(--text2);border:1px solid var(--border);
      padding:11px;border-radius:var(--r);font-family:Inter,sans-serif;font-weight:500;font-size:13px;
      cursor:pointer;transition:all .15s">
      Volver al menú
    </button>
  </div>`;
}

function stopSpeedGame() {
  clearInterval(_speedTimer);
  if (_speedState) _speedState.running = false;
  _speedState = null;
  // Limpiar overlays huérfanos
  document.querySelectorAll('.speed-flash-red,.speed-flash-green,.bonus-pop,.speed-countdown').forEach(e=>e.remove());
}

// ═══════════════════ CROSSWORD ═══════════════════
let cwData = null;
function buildCrossword() {
  const allWords = getWords();
  let pool;
  if (cwSource==='bag') {
    const bag=getBag();
    if (bag.length===0) { document.getElementById('crossContent').innerHTML=`<div style="text-align:center;padding:40px;color:var(--text2)"><div style="font-size:32px;margin-bottom:12px">🎒</div><div style="font-size:15px;font-weight:600;color:var(--text);margin-bottom:8px">${t('cwBagEmpty')}</div><div style="font-size:13px;color:var(--text2);line-height:1.5">${t('cwBagEmptySub').replace('\n',"<br>")}</div></div>`; return; }
    pool=allWords.filter(w=>bag.includes(w.de));
  } else {
    const p=getProgress(), now=Date.now();
    pool=[...allWords].sort((a,b)=>{
      const pa=p[a.de]||{}, pb=p[b.de]||{};
      const sa=(pa.difficulty===1?100:0)+(pa.nextReview<=now?50:0)+(1-(pa.seen>0?pa.correct/pa.seen:.5))*30+Math.random()*10;
      const sb=(pb.difficulty===1?100:0)+(pb.nextReview<=now?50:0)+(1-(pb.seen>0?pb.correct/pb.seen:.5))*30+Math.random()*10;
      return sb-sa;
    });
  }
  const seenGW = new Set();
  const candidates = shuffle(pool.map(w=>({...w,display_de:displayDE(w),grid_word:w.de.replace(/[^a-zA-ZäöüÄÖÜß]/g,'')}))
    .filter(w=>w.grid_word.length>=3&&w.grid_word.length<=11))
    .filter(w=>{ if(seenGW.has(w.grid_word.toUpperCase())) return false; seenGW.add(w.grid_word.toUpperCase()); return true; })
    .slice(0,12);
  if (candidates.length<3) { document.getElementById('crossContent').innerHTML=`<div style="text-align:center;padding:40px;color:var(--text2)">No hay suficientes palabras válidas para el crucigrama.</div>`; return; }
  cwData = generateCrossword(candidates);
  renderCrossword();
}

function generateCrossword(words) {
  const GRID=22, grid=Array.from({length:GRID},()=>Array(GRID).fill(null)), placed=[];
  const cw=w=>w.grid_word.toUpperCase();
  const fw=cw(words[0]), sc=Math.floor((GRID-fw.length)/2), sr=Math.floor(GRID/2);
  for(let i=0;i<fw.length;i++) grid[sr][sc+i]=fw[i];
  placed.push({word:words[0],cleaned:fw,row:sr,col:sc,dir:'H'});
  for(let wi=1;wi<words.length&&placed.length<9;wi++){
    const w=words[wi],wc=cw(w); let best=null;
    outer: for(const p of placed){
      for(let li=0;li<wc.length;li++){
        for(let pi=0;pi<p.cleaned.length;pi++){
          if(wc[li]!==p.cleaned[pi]) continue;
          let nr,nc,dir;
          if(p.dir==='H'){nr=p.row-li;nc=p.col+pi;dir='V';}
          else{nr=p.row+pi;nc=p.col-li;dir='H';}
          if(dir==='V'){
            if(nr<0||nr+wc.length>GRID) continue;
            let ok=true;
            for(let k=0;k<wc.length&&ok;k++){const cell=grid[nr+k][nc];if(cell&&cell!==wc[k]){ok=false;break;}if(k!==li){if(nc>0&&grid[nr+k][nc-1])ok=false;if(nc<GRID-1&&grid[nr+k][nc+1])ok=false;}}
            if(nr>0&&grid[nr-1][nc])ok=false;if(nr+wc.length<GRID&&grid[nr+wc.length][nc])ok=false;
            if(ok){best={word:w,cleaned:wc,row:nr,col:nc,dir:'V'};break outer;}
          } else {
            if(nc<0||nc+wc.length>GRID) continue;
            let ok=true;
            for(let k=0;k<wc.length&&ok;k++){const cell=grid[nr][nc+k];if(cell&&cell!==wc[k]){ok=false;break;}if(k!==li){if(nr>0&&grid[nr-1][nc+k])ok=false;if(nr<GRID-1&&grid[nr+1][nc+k])ok=false;}}
            if(nc>0&&grid[nr][nc-1])ok=false;if(nc+wc.length<GRID&&grid[nr][nc+wc.length])ok=false;
            if(ok){best={word:w,cleaned:wc,row:nr,col:nc,dir:'H'};break outer;}
          }
        }
      }
    }
    if(best){for(let i=0;i<best.cleaned.length;i++){if(best.dir==='H')grid[best.row][best.col+i]=best.cleaned[i];else grid[best.row+i][best.col]=best.cleaned[i];}placed.push(best);}
  }
  let minR=GRID,maxR=0,minC=GRID,maxC=0;
  for(let r=0;r<GRID;r++) for(let c=0;c<GRID;c++) if(grid[r][c]){minR=Math.min(minR,r);maxR=Math.max(maxR,r);minC=Math.min(minC,c);maxC=Math.max(maxC,c);}
  const pad=1; minR=Math.max(0,minR-pad);maxR=Math.min(GRID-1,maxR+pad);minC=Math.max(0,minC-pad);maxC=Math.min(GRID-1,maxC+pad);
  const trimmed=[]; for(let r=minR;r<=maxR;r++){const row=[];for(let c=minC;c<=maxC;c++)row.push(grid[r][c]);trimmed.push(row);}
  const adjusted=placed.map(p=>({...p,row:p.row-minR,col:p.col-minC}));
  const numMap={};let n=1;const clues=[];
  for(const p of adjusted){const key=`${p.row},${p.col}`;if(!numMap[key])numMap[key]=n++;clues.push({...p,num:numMap[key]});}
  return{grid:trimmed,clues,rows:maxR-minR+1,cols:maxC-minC+1};
}

// ── Estado de navegación del crucigrama ──
let _cwActiveClue = null;  // { clue, pos } — pista activa y posición del cursor

function _cwGetCluesAt(r, c) {
  // Devuelve todas las pistas que pasan por la celda (r,c)
  if (!cwData) return [];
  return cwData.clues.filter(cl => {
    if (cl.dir === 'H') return cl.row === r && c >= cl.col && c < cl.col + cl.cleaned.length;
    else                return cl.col === c && r >= cl.row && r < cl.row + cl.cleaned.length;
  });
}

function _cwHighlight(activeClue, cursorR, cursorC) {
  // Quitar highlight anterior
  document.querySelectorAll('#crossContent input.cw-cell').forEach(inp => {
    inp.classList.remove('active-word','active-cursor');
  });
  // Quitar active-clue de todas las cards
  document.querySelectorAll('.clue-front').forEach(f => f.classList.remove('active-clue'));
  if (!activeClue) return;
  // Pintar celdas de la pista activa
  const cl = activeClue;
  for (let i = 0; i < cl.cleaned.length; i++) {
    const r = cl.dir === 'H' ? cl.row       : cl.row + i;
    const c = cl.dir === 'H' ? cl.col + i   : cl.col;
    const inp = document.querySelector(`input[data-r="${r}"][data-c="${c}"]`);
    if (inp) inp.classList.add('active-word');
  }
  // Pintar cursor
  const cur = document.querySelector(`input[data-r="${cursorR}"][data-c="${cursorC}"]`);
  if (cur) { cur.classList.remove('active-word'); cur.classList.add('active-cursor'); }
  // Highlight de la card de pista
  const front = document.querySelector(`.clue-front[data-clue-num="${cl.num}"][data-clue-dir="${cl.dir}"]`);
  if (front) {
    front.classList.add('active-clue');
    front.closest('.clue-card')?.scrollIntoView({behavior:'smooth', block:'nearest', inline:'center'});
  }
}

function _cwNextCell(cl, pos) {
  // Siguiente celda vacía (o fin) siguiendo la dirección de la pista, saltando intersecciones rellenas
  for (let i = pos + 1; i < cl.cleaned.length; i++) {
    const r = cl.dir === 'H' ? cl.row       : cl.row + i;
    const c = cl.dir === 'H' ? cl.col + i   : cl.col;
    const inp = document.querySelector(`input[data-r="${r}"][data-c="${c}"]`);
    // Saltar si ya tiene letra (intersección con otra palabra completada)
    if (inp && !inp.value) return i;
  }
  // Si todas rellenas, ir a la última
  return cl.cleaned.length - 1;
}

function cwFocusCell(r, c) {
  const cluesHere = _cwGetCluesAt(r, c);
  if (!cluesHere.length) return;

  const sameClue = _cwActiveClue && cluesHere.find(cl => cl.num === _cwActiveClue.num && cl.dir === _cwActiveClue.dir);

  if (sameClue) {
    // Ya estamos en esta pista — solo mover el cursor
    _cwActiveClueCursor = { r, c };
    _cwHighlight(_cwActiveClue, r, c);
  } else if (_cwActiveClue && cluesHere.length > 1) {
    // Intersección: alternar a la otra pista
    const other = cluesHere.find(cl => !(cl.num === _cwActiveClue.num && cl.dir === _cwActiveClue.dir));
    _cwActiveClue = other || cluesHere[0];
    _cwActiveClueCursor = { r, c };
    _cwHighlight(_cwActiveClue, r, c);
  } else {
    // Nueva celda sin pista activa previa, o solo hay una pista aquí
    _cwActiveClue = cluesHere[0];
    _cwActiveClueCursor = { r, c };
    _cwHighlight(_cwActiveClue, r, c);
  }
}

// Cursor global para saber dónde estamos
let _cwActiveClueCursor = null;

function renderCrossword() {
  if (!cwData) return;
  _cwActiveClue = null;
  _cwActiveClueCursor = null;
  const {grid,clues,rows,cols} = cwData;
  const numMap = {};
  for (const c of clues) numMap[`${c.row},${c.col}`] = c.num;
  const cs = Math.min(30, Math.floor((window.innerWidth - 40) / cols));

  // Grid
  let gHTML = `<div class="cw-wrapper"><div class="crossword-grid" style="grid-template-columns:repeat(${cols},${cs}px);grid-template-rows:repeat(${rows},${cs}px)">`;
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const val = grid[r][c], num = numMap[`${r},${c}`];
    if (!val) {
      gHTML += `<div class="cw-cell black" style="width:${cs}px;height:${cs}px"></div>`;
    } else {
      gHTML += `<div class="cell-wrap" style="width:${cs}px;height:${cs}px">
        ${num ? `<span class="cell-number">${num}</span>` : ''}
        <input class="cw-cell"
          style="width:${cs}px;height:${cs}px;font-size:${Math.max(10,cs-14)}px"
          maxlength="1" data-r="${r}" data-c="${c}" data-answer="${val}"
          data-ui-input="crossword-input"
          data-ui-keydown="crossword-navigation"
          data-ui-focus="crossword-focus" data-row="${r}" data-col="${c}">
      </div>`;
    }
  }
  gHTML += `</div></div>`;

  // Clue flip cards
  const cluesHTML = `<div class="clues-row">${clues.map(cl => `
    <div class="clue-card" id="clue-card-${cl.num}-${cl.dir}" data-ui-click="crossword-clue" data-number="${cl.num}" data-direction="${cl.dir}">
      <div class="clue-card-inner">
        <div class="clue-front" data-clue-num="${cl.num}" data-clue-dir="${cl.dir}">
          <div class="clue-card-num">${cl.num}</div>
          <div class="clue-card-dir">${cl.dir === 'H' ? '→' : '↓'}</div>
          <div class="clue-card-es">${cl.word.es}</div>
        </div>
        <div class="clue-back">
          <div class="clue-card-num" style="color:var(--green-t)">${cl.num}</div>
          <div class="clue-card-de">${cl.word.display_de || displayDE(cl.word)}</div>
        </div>
      </div>
    </div>`).join('')}</div>`;

  document.getElementById('crossContent').innerHTML = `
    <div class="match-header"><h2>Crucigrama</h2><div class="score-badge">${clues.length} palabras</div></div>
    <div class="crossword-container">${gHTML}</div>
    <button class="btn-primary" data-ui-click="crossword-check">${t('cwCheck')}</button>
    <button class="btn-secondary" data-ui-click="crossword-reveal">${t('cwReveal')}</button>
    <button class="btn-blue" data-ui-click="crossword-new">${t('cwNew')}</button>
    ${cwSource === 'bag' ? `<button class="btn-secondary" style="color:var(--red);border-color:rgba(248,113,113,.35);margin-top:8px" data-ui-click="crossword-clear-bag">🗑 Vaciar bolsa</button>` : ''}
    <div class="clues-section">
      <div class="clues-title">${t('cwHintTitle')} · toca para revelar</div>
      ${cluesHTML}
    </div>`;
}

function cwClueCardClick(num, dir, cardEl) {
  // Flip la card
  cardEl.classList.toggle('flipped');
  // Mover el foco a la primera celda vacía de esa pista
  if (!cwData) return;
  const cl = cwData.clues.find(c => c.num === num && c.dir === dir);
  if (!cl) return;
  _cwActiveClue = cl;
  // Buscar primera celda vacía
  let targetR = cl.row, targetC = cl.col;
  for (let i = 0; i < cl.cleaned.length; i++) {
    const r = cl.dir === 'H' ? cl.row       : cl.row + i;
    const c = cl.dir === 'H' ? cl.col + i   : cl.col;
    const inp = document.querySelector(`input[data-r="${r}"][data-c="${c}"]`);
    if (inp && !inp.value) { targetR = r; targetC = c; break; }
    if (i === cl.cleaned.length - 1) { targetR = r; targetC = c; } // última si todas llenas
  }
  _cwActiveClueCursor = { r: targetR, c: targetC };
  _cwHighlight(cl, targetR, targetC);
  document.querySelector(`input[data-r="${targetR}"][data-c="${targetC}"]`)?.focus();
}

function cwInput(el) {
  const raw = el.value.replace(/[^a-zA-ZäöüÄÖÜß]/g, '').toUpperCase();
  el.value = raw.slice(-1);

  if (!el.value) return;

  const r = parseInt(el.dataset.r), c = parseInt(el.dataset.c);

  // Si no hay pista activa, activar la primera que pase por aquí
  if (!_cwActiveClue) {
    const cluesHere = _cwGetCluesAt(r, c);
    if (cluesHere.length) _cwActiveClue = cluesHere[0];
  }

  if (!_cwActiveClue) return;

  const cl = _cwActiveClue;
  const pos = cl.dir === 'H' ? c - cl.col : r - cl.row;

  // Buscar siguiente celda vacía en la pista (saltando intersecciones ya rellenas)
  let moved = false;
  for (let i = pos + 1; i < cl.cleaned.length; i++) {
    const nr = cl.dir === 'H' ? cl.row       : cl.row + i;
    const nc = cl.dir === 'H' ? cl.col + i   : cl.col;
    const inp = document.querySelector(`input[data-r="${nr}"][data-c="${nc}"]`);
    if (inp && !inp.value) {
      inp.focus(); // onfocus → cwFocusCell → _cwHighlight
      moved = true;
      break;
    }
  }
  // Si no movió (todas rellenas o fin), actualizar highlight en celda actual
  if (!moved) {
    _cwActiveClueCursor = { r, c };
    _cwHighlight(cl, r, c);
  }
}

function cwNav(e, r, c) {
  if (e.key === 'Backspace') {
    const inp = document.querySelector(`input[data-r="${r}"][data-c="${c}"]`);
    if (inp && inp.value) { inp.value = ''; _cwHighlight(_cwActiveClue, r, c); return; }
    // Retroceder al anterior de la pista activa
    if (_cwActiveClue) {
      const cl = _cwActiveClue;
      const pos = cl.dir === 'H' ? c - cl.col : r - cl.row;
      if (pos > 0) {
        const pr = cl.dir === 'H' ? cl.row       : cl.row + pos - 1;
        const pc = cl.dir === 'H' ? cl.col + pos - 1 : cl.col;
        const prev = document.querySelector(`input[data-r="${pr}"][data-c="${pc}"]`);
        if (prev) { prev.value = ''; prev.focus(); }
      }
    }
    return;
  }
  // Flechas — mover dentro de la pista activa
  if (!_cwActiveClue) return;
  const cl = _cwActiveClue;
  const pos = cl.dir === 'H' ? c - cl.col : r - cl.row;
  if ((e.key === 'ArrowRight' && cl.dir === 'H') || (e.key === 'ArrowDown' && cl.dir === 'V')) {
    e.preventDefault();
    if (pos < cl.cleaned.length - 1) {
      const nr = cl.dir === 'H' ? cl.row       : cl.row + pos + 1;
      const nc = cl.dir === 'H' ? cl.col + pos + 1 : cl.col;
      document.querySelector(`input[data-r="${nr}"][data-c="${nc}"]`)?.focus();
    }
  }
  if ((e.key === 'ArrowLeft' && cl.dir === 'H') || (e.key === 'ArrowUp' && cl.dir === 'V')) {
    e.preventDefault();
    if (pos > 0) {
      const pr = cl.dir === 'H' ? cl.row       : cl.row + pos - 1;
      const pc = cl.dir === 'H' ? cl.col + pos - 1 : cl.col;
      document.querySelector(`input[data-r="${pr}"][data-c="${pc}"]`)?.focus();
    }
  }
}

function checkCrossword() {
  const inputs = document.querySelectorAll('#crossContent input.cw-cell');
  let correct = 0, total = 0;
  inputs.forEach(inp => {
    total++;
    inp.classList.remove('correct','wrong-cell');
    if (inp.value && inp.value.toUpperCase() === inp.dataset.answer) {
      inp.classList.add('correct'); correct++;
    } else if (inp.value) {
      inp.classList.add('wrong-cell');
    }
  });
  if (cwData) {
    cwData.clues.forEach(cl => {
      const allOk = [...cl.cleaned].every((ch, i) => {
        const inp = document.querySelector(cl.dir === 'H'
          ? `input[data-r="${cl.row}"][data-c="${cl.col+i}"]`
          : `input[data-r="${cl.row+i}"][data-c="${cl.col}"]`);
        return inp && inp.value.toUpperCase() === ch;
      });
      updateWordProgress(cl.word.de, allOk);
      // Auto-flip la card de pista si la palabra es correcta
      if (allOk) {
        const card = document.getElementById(`clue-card-${cl.num}-${cl.dir}`);
        if (card && !card.classList.contains('flipped')) card.classList.add('flipped');
      }
    });
  }
  const pct = Math.round(correct / total * 100);
  const btn = document.querySelector('#crossContent .btn-primary');
  const orig = btn.textContent;
  btn.textContent = `${correct}/${total} (${pct}%)${pct === 100 ? ' 🎉' : ''}`;
  setTimeout(() => btn.textContent = orig, 2800);
}

function revealCrossword() {
  document.querySelectorAll('#crossContent input.cw-cell').forEach(inp => {
    inp.value = inp.dataset.answer;
    inp.classList.add('correct');
    inp.classList.remove('wrong-cell');
  });
  // Flip todas las cards
  document.querySelectorAll('.clue-card').forEach(c => c.classList.add('flipped'));
}

// ═══════════════════ MODALS ═══════════════════
function openModal(id)  { document.getElementById(id).classList.add('show'); }
function closeModal(id) { document.getElementById(id).classList.remove('show'); }
function showInstallModal() { closeDropdown(); openModal('installModal'); }

// ═══════════════════ TOAST ═══════════════════
let toastTimer;
function showToast(msg) {
  const t=document.getElementById('toast');
  t.textContent=msg; t.classList.remove('hide');
  clearTimeout(toastTimer);
  toastTimer=setTimeout(()=>t.classList.add('hide'),2500);
}

// ═══════════════════ PASSWORD TOGGLE ═══════════════════
function togglePassVis() {
  const inp = document.getElementById('loginPass');
  if (!inp) return;
  const isHidden = inp.type === 'password';
  inp.type = isHidden ? 'text' : 'password';
  document.getElementById('eyeIcon').style.display = isHidden ? 'none' : '';
  document.getElementById('eyeOffIcon').style.display = isHidden ? '' : 'none';
}

// ═══════════════════ PROFILE PAGE ═══════════════════
function getNombre() {
  return localStorage.getItem('nombre_' + (currentEmail || 'default')) || '';
}
function setNombreStored(n) {
  localStorage.setItem('nombre_' + (currentEmail || 'default'), n);
}
function getDisplayName() {
  return getNombre() || (currentEmail ? currentEmail.split('@')[0] : '…');
}

function renderPerfil() {
  const nombre = getNombre();
  const email = currentEmail || '';
  const initial = (nombre || email)[0]?.toUpperCase() || '?';
  const el = id => document.getElementById(id);
  if (el('perfilAvatar')) el('perfilAvatar').textContent = initial;
  if (el('perfilEmail')) el('perfilEmail').textContent = email;
  if (el('perfilNombre')) el('perfilNombre').value = nombre;
  if (el('perfilNombreMsg')) el('perfilNombreMsg').textContent = '';

  // Stats
  if (el('perfilStats')) el('perfilStats').innerHTML = _statsCardsHtml().html;
}

function _statsCardsHtml() {
  const words = getWords(), p = getProgress();
  const total = words.length;
  const seen  = Object.values(p).filter(e => e.seen > 0).length;
  const hard  = Object.values(p).filter(e => e.difficulty === 1).length;
  const mastered = Object.values(p).filter(_isMastered).length;
  const statsData = [
    { label: 'Palabras', val: total, color: 'var(--green)' },
    { label: 'Vistas', val: seen, color: 'var(--blue)' },
    { label: 'Dominadas', val: mastered, color: 'var(--green)' },
    { label: 'Difíciles', val: hard, color: 'var(--red)' },
  ];
  const html = statsData.map(s =>
    `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--r);padding:14px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:${s.color}">${s.val}</div>
      <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text3);margin-top:3px">${s.label}</div>
    </div>`
  ).join('');
  return { html, total, seen, hard, mastered };
}

// ═══════════════════ PROGRESIÓN: anillo, racha y gráfica viva ═══════════════════
let _progRange = 'day', _progSel = -1;
const _MESES = { es: ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'], de: ['Jan','Feb','Mär','Apr','Mai','Jun','Jul','Aug','Sep','Okt','Nov','Dez'] };
const _dayIdx = k => { const [y, m, d] = k.split('-').map(Number); return Math.round(Date.UTC(y, m - 1, d) / 864e5); };

function _progSeries(range) {
  const a = _actGet(), now = new Date();
  const cols = [];
  if (range === 'day') {
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - i), k = _dayKey(d);
      cols.push({ lbl: d.getDate(), l: a.d[k]?.l || 0, p: a.d[k]?.p || 0, tip: d.toLocaleDateString(currentLang === 'de' ? 'de-DE' : 'es-ES', { weekday: 'short', day: 'numeric', month: 'short' }) });
    }
    return { cols, sub: 'en los últimos 14 días' };
  }
  if (range === 'month') {
    for (let i = 11; i >= 0; i--) {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1), pre = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0');
      let l = 0, p = 0;
      for (const [k, x] of Object.entries(a.d)) if (k.startsWith(pre)) { l += x.l || 0; p += x.p || 0; }
      cols.push({ lbl: (_MESES[currentLang] || _MESES.es)[d.getMonth()], l, p, tip: (_MESES[currentLang] || _MESES.es)[d.getMonth()] + ' ' + d.getFullYear() });
    }
    return { cols, sub: 'en los últimos 12 meses' };
  }
  const first = Math.min(now.getFullYear() - 4, ...Object.keys(a.d).map(k => +k.slice(0, 4)));
  const from = Math.max(first, now.getFullYear() - 4);
  for (let y = from; y <= now.getFullYear(); y++) {
    let l = 0, p = 0;
    for (const [k, x] of Object.entries(a.d)) if (k.startsWith(y + '-')) { l += x.l || 0; p += x.p || 0; }
    cols.push({ lbl: y, l, p, tip: String(y) });
  }
  return { cols, sub: 'en los últimos ' + cols.length + ' años' };
}

function _progStreaks() {
  const a = _actGet();
  const on = k => { const x = a.d[k]; return !!x && (x.p > 0 || x.l > 0); };
  const keys = Object.keys(a.d).filter(on).map(_dayIdx).sort((x, y) => x - y);
  let best = 0, run = 0, prev = null;
  keys.forEach(i => { run = (prev !== null && i === prev + 1) ? run + 1 : 1; best = Math.max(best, run); prev = i; });
  const now = new Date();
  const c = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  if (!on(_dayKey(c))) c.setDate(c.getDate() - 1);          // la racha sigue viva hasta que acabe el día
  let streak = 0;
  while (on(_dayKey(c))) { streak++; c.setDate(c.getDate() - 1); }
  return { streak, best: Math.max(best, streak), on };
}

function _countUp(el, to, ms = 700) {
  if (!el) return;
  if (_navReduce.matches) { el.textContent = to; return; }
  const from = +el.textContent || 0, t0 = performance.now();
  const step = t => {
    const k = Math.min(1, (t - t0) / ms), e = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(from + (to - from) * e);
    if (k < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

function renderProgreso() {
  const s = _statsCardsHtml(), $ = id => document.getElementById(id);
  const pct = s.total ? Math.round(s.mastered / s.total * 100) : 0;
  // anillo
  const ring = $('progRing');
  if (ring) { ring.style.strokeDashoffset = '100'; requestAnimationFrame(() => requestAnimationFrame(() => { ring.style.strokeDashoffset = String(100 - pct); })); }
  _countUp($('progPct'), pct);
  ['progMastered:mastered', 'progTotal:total', 'progSeen:seen', 'progHard:hard'].forEach(x => { const [id, k] = x.split(':'); if ($(id)) $(id).textContent = s[k]; });
  // racha + semana tipo Duolingo (L→D)
  const st = _progStreaks();
  _countUp($('progStreak'), st.streak, 600);
  if ($('progBest')) $('progBest').textContent = st.best;
  const wk = $('progWeek');
  if (wk) {
    const now = new Date(), dow = (now.getDay() + 6) % 7, today = _dayKey(now), L = ['L', 'M', 'X', 'J', 'V', 'S', 'D'];
    wk.innerHTML = L.map((l, i) => {
      const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() - dow + i), k = _dayKey(d);
      const cls = k === today ? 'today' : (d > now ? 'future' : '');
      const done = st.on(k);
      return `<div class="prog-day ${cls} ${done ? 'done' : ''}" style="--i:${i}"><div class="prog-dot">${done ? '<svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>' : ''}</div><span>${l}</span></div>`;
    }).join('');
  }
  _renderProgChart(true);
}

function progSetRange(r) { _progRange = r; _progSel = -1; _renderProgChart(true); }
function progSelectBar(i) {
  _progSel = i;
  document.querySelectorAll('#progChart .prog-col').forEach((c, k) => c.classList.toggle('sel', k === i));
}
function _renderProgChart(animate) {
  const box = document.getElementById('progChart');
  if (!box) return;
  const { cols, sub } = _progSeries(_progRange);
  const max = Math.max(5, ...cols.map(c => c.l)), total = cols.reduce((n, c) => n + c.l, 0);
  if (_progSel < 0 || _progSel >= cols.length) _progSel = cols.length - 1;
  document.getElementById('progSumLbl').textContent = sub;
  _countUp(document.getElementById('progSum'), total, 500);
  document.querySelectorAll('.prog-seg-btn').forEach(b => b.classList.toggle('active', b.dataset.range === _progRange));
  const grid = [1, .5, 0].map(f => `<div class="prog-gl" style="--y:${1 - f}"><span>${Math.round(max * f)}</span></div>`).join('');
  const bars = cols.map((c, i) => `
    <button type="button" class="prog-col ${i === _progSel ? 'sel' : ''} ${i < cols.length * .25 ? 'el' : (i > cols.length * .75 ? 'er' : '')}" data-ui-click="prog-bar" data-i="${i}" style="--i:${i}" aria-label="${c.tip}: ${c.l} palabras aprendidas">
      <span class="prog-tip"><b>${c.l}</b> ${c.l === 1 ? 'palabra' : 'palabras'}<small>${c.tip}${c.p ? ' · ' + c.p + ' resp.' : ''}</small></span>
      <span class="prog-bar" data-h="${c.l ? Math.max(6, c.l / max * 100) : 0}"></span>
      <span class="prog-lbl">${c.lbl}</span>
    </button>`).join('');
  const empty = total === 0 ? '<div class="prog-hint">Todavía no hay palabras aprendidas registradas. Se cuenta una palabra cuando pasa a <b>dominada</b> (3 intentos o más y 80 % de aciertos).</div>' : '';
  box.innerHTML = `<div class="prog-plot" style="--n:${cols.length}">${grid}<div class="prog-cols">${bars}</div></div>${empty}`;
  const set = () => box.querySelectorAll('.prog-bar').forEach(b => { b.style.height = `calc((100% - 50px) * ${(+b.dataset.h) / 100})`; });
  if (animate && !_navReduce.matches) requestAnimationFrame(() => requestAnimationFrame(set)); else { box.classList.add('no-anim'); set(); requestAnimationFrame(() => box.classList.remove('no-anim')); }
}

function saveNombre() {
  const val = (document.getElementById('perfilNombre')?.value || '').trim();
  setNombreStored(val);
  const displayName = val || (currentEmail ? currentEmail.split('@')[0] : '');
  // Update all name references
  document.getElementById('homeUserName').textContent = displayName;
  document.getElementById('greetName').textContent = displayName;
  document.getElementById('ddName').textContent = displayName;
  document.getElementById('userAvatar').textContent = displayName[0]?.toUpperCase() || '?';
  document.getElementById('perfilAvatar').textContent = displayName[0]?.toUpperCase() || '?';
  const msg = document.getElementById('perfilNombreMsg');
  if (msg) { msg.textContent = '✓ Nombre guardado'; setTimeout(() => msg.textContent = '', 2000); }
  showToast('✓ ¡Hola, ' + displayName + '!');
  updateAppNav();
}


// ═══════════════════ STATE PERSISTENCE (Page Visibility) ═══════════════════
// Saves navigation state when user switches app/tab; restores on return.
// _restoreAppState() returns true if it navigated somewhere, false otherwise.
const STATE_KEY = 'appState_v1';
let _onLoginSuccessFired = false; // prevents double-fire from onAuthStateChange

function _saveAppState() {
  if (!currentUser) return;
  const state = {
    uid: currentUser.id,          // scope state per user
    page: currentPage,
    activeFilter,
    vocabDiffFilter,
    matchFilter,
    matchMode,
    cwSource,
    ts: Date.now()
  };
  try { localStorage.setItem(STATE_KEY, JSON.stringify(state)); } catch(e) {}
}

function _restoreAppState() {
  if (!currentUser) return false;
  try {
    const raw = localStorage.getItem(STATE_KEY);
    if (!raw) return false;
    const state = JSON.parse(raw);
    // Validate: must belong to same user and be recent (< 4 hours)
    if (!state || state.uid !== currentUser.id) return false;
    if (Date.now() - state.ts > 4 * 60 * 60 * 1000) return false;
    // Restore filter/mode state silently
    if (state.activeFilter)    activeFilter    = state.activeFilter;
    if (state.vocabDiffFilter) vocabDiffFilter = state.vocabDiffFilter;
    if (state.matchFilter)     matchFilter     = state.matchFilter;
    if (state.matchMode)       matchMode       = state.matchMode;
    if (state.cwSource)        cwSource        = state.cwSource;
    // Navigate to saved page
    const target = state.page;
    if (target && PROTECTED_PAGES.has(target)) {
      // Use showPage directly to skip animation on restore, then trigger setup
      _origNavigate(target, 'forward');
      return true;
    }
  } catch(e) {}
  return false;
}

// Wrap navigate to always persist state (must be defined before first use)
const _origNavigate = navigate;
navigate = function(to, dir, opts) {
  _origNavigate(to, dir, opts);
  try { document.body.classList.toggle('lectura-reading', to === 'lectura' && !!_lectura.current); } catch(e) {}
  if (opts && opts.spring) requestAnimationFrame(() => setTimeout(_saveAppState, 0));
  else _saveAppState();
};

// Save on tab hide / app background (works on desktop + Android)
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'hidden') _saveAppState();
});

// pagehide fires on iOS Safari before the page is suspended (more reliable than beforeunload)
window.addEventListener('pagehide', _saveAppState);

// On resume: if page was hidden and comes back visible, we're still in JS memory
// (no reload needed). Just make sure the current page is still rendered correctly.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && currentUser) {
    // Re-render current page in case DOM was partially wiped by browser memory pressure
    if (currentPage === 'lista')      renderLista();
    if (currentPage === 'parejas')    renderMatchFilters();
    if (currentPage === 'crucigrama') { updateBagCount(); buildCrossword(); }
    if (currentPage === 'velocidad')  { stopSpeedGame(); renderSpeedSetup(); }
    if (currentPage === 'perfil')     renderPerfil();
    if (currentPage === 'lectura')    { _highlightSavedWords(); _renderLecturaLibrary(); }
  }
});


// ═══════════════════════════════════════════════════════════════════
// LECTURA — Lector inmersivo PDF / EPUB
// ═══════════════════════════════════════════════════════════════════

let _lectura = {
  books: [], current: null,
  fontSize: 16, width: 'narrow', theme: 'dark', fullscreen: false,
  popup: { word: null, el: null, translation: null },
};
let _lecturaTranslateCache = {};

const _LCFG  = () => 'lectura_cfg_'   + (currentUser?.id || 'anon');
const _LBOOKS = () => 'lectura_books_' + (currentUser?.id || 'anon');

// ── Config persistence ──────────────────────────────────────────
function _loadLecturaCfg() {
  try {
    const c = JSON.parse(localStorage.getItem(_LCFG()) || '{}');
    _lectura.fontSize = c.fontSize || 16;
    _lectura.width    = c.width    || 'narrow';
    _lectura.theme    = c.theme    || 'dark';
  } catch(e) {}
}
function _saveLecturaCfg() {
  try { localStorage.setItem(_LCFG(), JSON.stringify({ fontSize: _lectura.fontSize, width: _lectura.width, theme: _lectura.theme })); } catch(e) {}
}

// ── Entry point ─────────────────────────────────────────────────
function onLecturaEnter() {
  _loadLecturaCfg();
  _applyLecturaSettings();
  _renderLecturaLibrary();
  if (_lectura.current) {
    _showReader();
  } else {
    document.getElementById('lecturaUpload').style.display = '';
    document.getElementById('lecturaReader').style.display = 'none';
  }
  _updateLecturaTopBar();
}

// Atrás: desde un archivo abierto → biblioteca; desde la biblioteca → inicio
function exitLectura() {
  if (_lectura.current) { closeLecturaBook(); return; }
  closeLecturaPopup();
  if (_lectura.fullscreen) toggleLecturaFull();
  navigate('home', 'back');
}

function closeLecturaBook() {
  _bkFlushSave();
  _saveLecturaProgress();
  closeLecturaPopup();
  if (_lectura.fullscreen) toggleLecturaFull();
  _hideLecturaLoader();
  _lectura.current = null;
  _lectura.webView = false;
  _lectura.frameBook = null;
  _lectura.frameUrl = null;
  _bkClose();
  const f = document.getElementById('lecturaFrame');
  if (f) { f.onload = null; f.src = 'about:blank'; f.style.display = 'none'; }
  document.getElementById('lecturaReader').style.display = 'none';
  document.getElementById('lecturaUpload').style.display = '';
  _updateLecturaTopBar();
  _renderLecturaLibrary();
}

// Barra superior: en la biblioteca "Inicio / Lectura"; con un archivo abierto "Biblioteca" y su título
function _updateLecturaTopBar() {
  const inReader = !!_lectura.current;
  document.body.classList.toggle('lectura-reading', inReader && currentPage === 'lectura');   // oculta la barra de navegación mientras se lee
  const set = (id, t) => { const el = document.getElementById(id); if (el) el.textContent = t; };
  set('lecturaBackLabel', inReader ? 'Biblioteca' : 'Inicio');
  set('lecturaCrumbDim',  inReader ? 'Lectura'    : 'Inicio');
  set('lecturaBookTitle', inReader ? _lectura.current.title : 'Lectura');
  const vb = document.getElementById('lecturaViewBtn');
  if (vb && !inReader) vb.style.display = 'none';
  document.getElementById('lecturaTopBar')?.classList.toggle('in-reader', inReader);   // con un libro abierto se ve el botón «Biblioteca»
}

// ── File upload ─────────────────────────────────────────────────
async function handleLecturaFile(e) {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const ext = file.name.split('.').pop().toLowerCase();
  if (!['pdf','epub'].includes(ext)) { showToast('Solo PDF o EPUB'); return; }
  _showLecturaLoader('Procesando libro…');
  try {
    const pages = ext === 'pdf' ? await _extractPdfPages(file) : await _extractEpubPages(file);
    if (!pages || pages.length === 0) throw new Error('Sin contenido extraíble');
    const title  = file.name.replace(/\.(pdf|epub)$/i, '');
    const bookId = 'book_' + Date.now();
    const bookData = { id: bookId, title, ext, pages, pageIdx: 0, ts: Date.now() };
    _saveBooksLS(bookData);
    _lecAssign(bookId, _lecFolder);
    _uploadBookToSupabase(file, bookId, title, pages.length);
    _lectura.current = bookData;
    _hideLecturaLoader();
    document.getElementById('lecturaUpload').style.display = 'none';
    _showReader();
  } catch(err) {
    _hideLecturaLoader();
    showToast('❌ Error: ' + err.message);
    console.error('[Lectura]', err);
  }
}

// ── Abrir enlace web (vía /api/fetch-page) ──────────────────────
function _splitTextToPages(text, chunk = 3000) {
  const pages = []; let cur = '';
  for (const para of text.split(/\n\n+/)) {
    cur += para + '\n\n';
    if (cur.length >= chunk) { pages.push(cur.trim()); cur = ''; }
  }
  if (cur.trim()) pages.push(cur.trim());
  return pages;
}

// textView=true abre directamente la vista de texto; por defecto se abre la página original
async function openLecturaUrl(raw, textView, reuse) {
  let url = (raw || '').trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  if (_lectura.current) _saveLecturaProgress();
  _showLecturaLoader('Cargando página…');
  try {
    const r = await fetch('/api/fetch-page?url=' + encodeURIComponent(url), { headers: await _apiAuthHeaders(), signal: AbortSignal.timeout(20000) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || 'No se pudo cargar la página');
    const pages = _splitTextToPages(j.text || '');
    if (!pages.length) throw new Error('Sin contenido legible');
    let host = ''; try { host = new URL(j.url || url).hostname; } catch(e) {}
    const bookData = { id: reuse?.id || 'web_' + Date.now(), title: reuse?.title || j.title || host || url, ext: 'web', url: j.url || url, pages, pageIdx: 0, ts: Date.now() };
    _saveBooksLS(bookData);
    if (!reuse) { _lecAssign(bookData.id, _lecFolder); _lecAddLink(bookData); }
    _lectura.webView = !textView;
    _lectura.current = bookData;
    _hideLecturaLoader();
    const inp = document.getElementById('lecturaUrlIn'); if (inp) inp.value = '';
    document.getElementById('lecturaUpload').style.display = 'none';
    _showReader();
  } catch(err) {
    _hideLecturaLoader();
    showToast('❌ ' + err.message);
  }
}

// ── PDF extraction ──────────────────────────────────────────────
async function _extractPdfPages(file) {
  if (!window.pdfjsLib) {
    await loadScript('https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.min.js', 'sha384-/1qUCSGwTur9vjf/z9lmu/eCUYbpOTgSjmpbMQZ1/CtX2v/WcAIKqRv+U1DUCG6e');
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/build/pdf.worker.min.js';
  }
  const pdf = await window.pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
  const pages = [];
  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const tc = await page.getTextContent();
    let text = '', lastY = null;
    for (const item of tc.items) {
      if ('str' in item) {
        const y = item.transform ? Math.round(item.transform[5]) : null;
        if (lastY !== null && y !== null && Math.abs(y - lastY) > 5) text += '\n';
        text += item.str;
        lastY = y;
      }
    }
    const t = text.trim();
    if (t) pages.push(t);
  }
  return pages;
}

// ── EPUB extraction ─────────────────────────────────────────────
async function _extractEpubPages(file) {
  if (!window.JSZip) await loadScript('https://cdn.jsdelivr.net/npm/jszip@3.10.1/dist/jszip.min.js', 'sha384-+mbV2IY1Zk/X1p/nWllGySJSUN8uMs+gUAN10Or95UBH0fpj6GfKgPmgC5EXieXG');
  const zip = await JSZip.loadAsync(await file.arrayBuffer());
  let opfPath = '';
  try {
    const c = await zip.file('META-INF/container.xml').async('string');
    const m = c.match(/full-path="([^"]+\.opf)"/i);
    if (m) opfPath = m[1];
  } catch(e) {}
  if (!opfPath) zip.forEach((_, f) => { if (!opfPath && f.name.endsWith('.opf')) opfPath = f.name; });
  const opfBase = opfPath.includes('/') ? opfPath.substring(0, opfPath.lastIndexOf('/') + 1) : '';
  let spine = [], manifest = {};
  if (opfPath) {
    try {
      const opf = await zip.file(opfPath).async('string');
      for (const it of opf.matchAll(/<item[^>]+id="([^"]+)"[^>]+href="([^"]+)"[^>]*>/gi)) manifest[it[1]] = it[2];
      spine = [...opf.matchAll(/<itemref[^>]+idref="([^"]+)"/gi)].map(s => manifest[s[1]]).filter(Boolean);
    } catch(e) {}
  }
  if (!spine.length) zip.forEach((_, f) => { if (/\.(html|xhtml|htm)$/i.test(f.name)) spine.push(f.name.replace(opfBase,'')); });
  const pages = [], CHUNK = 3000;
  for (const href of spine) {
    const f = zip.file(opfBase + href) || zip.file(href);
    if (!f) continue;
    try {
      const raw = await f.async('string');
      // DOMParser crea un documento inerte (no ejecuta onerror/onload ni carga recursos)
      const doc = new DOMParser().parseFromString(raw, 'text/html');
      doc.querySelectorAll('style,script,head').forEach(n => n.remove());
      const text = (doc.body?.textContent||'').replace(/\n{3,}/g,'\n\n').trim();
      if (!text) continue;
      let chunk = '';
      for (const para of text.split(/\n\n+/)) {
        chunk += para + '\n\n';
        if (chunk.length >= CHUNK) { pages.push(chunk.trim()); chunk = ''; }
      }
      if (chunk.trim()) pages.push(chunk.trim());
    } catch(e) {}
  }
  return pages.filter(p => p.length > 10);
}

// ── LocalStorage books ──────────────────────────────────────────
function _saveBooksLS(bookData) {
  try {
    const all = _getAllBooksLS();
    const idx = all.findIndex(b => b.id === bookData.id);
    if (idx >= 0) all[idx] = bookData; else all.push(bookData);
    try { localStorage.setItem(_LBOOKS(), JSON.stringify(all)); }
    catch(q) {
      // Si lleno, guardar solo metadatos
      const meta = all.map(b => ({ id:b.id, title:b.title, ext:b.ext, pageIdx:b.pageIdx, ts:b.ts, totalPages:b.pages?.length||0 }));
      localStorage.setItem(_LBOOKS()+'_meta', JSON.stringify(meta));
    }
  } catch(e) {}
}
function _getAllBooksLS() { try { return JSON.parse(localStorage.getItem(_LBOOKS())||'[]'); } catch(e) { return []; } }
function _saveProgressLS(bookId, pageIdx, frac) {
  try {
    const all = _getAllBooksLS();
    const b = all.find(x => x.id === bookId);
    if (b) { b.pageIdx = pageIdx; if (frac !== undefined) b.frac = frac; localStorage.setItem(_LBOOKS(), JSON.stringify(all)); }
  } catch(e) {}
}

// ── Supabase book storage ───────────────────────────────────────
async function _uploadBookToSupabase(file, bookId, title, totalPages) {
  if (!currentUser || !_dbReady) return;
  try {
    const sb = await getSupabase();
    const path = currentUser.id + '/' + bookId + '.' + file.name.split('.').pop();
    await sb.storage.from('books').upload(path, file, { upsert: true });
    await sb.from('user_books').upsert({ user_id: currentUser.id, book_id: bookId, title, total_pages: totalPages, storage_path: path, updated_at: new Date().toISOString() }, { onConflict: 'user_id,book_id' });
  } catch(e) { console.warn('[Lectura] upload:', e.message); }
}

async function _saveLecturaProgress() {
  if (!_lectura.current) return;
  const { id, pageIdx } = _lectura.current;
  _saveProgressLS(id, pageIdx || 0);
  if (_lectura.current.ext === 'web') return; // las webs solo viven en localStorage
  if (!currentUser || !_dbReady) return;
  try {
    const sb = await getSupabase();
    await sb.from('user_books').upsert({ user_id: currentUser.id, book_id: id, page_idx: pageIdx || 0, updated_at: new Date().toISOString() }, { onConflict: 'user_id,book_id' });
  } catch(e) {}
}

// ── Library render ──────────────────────────────────────────────
async function _renderLecturaLibrary() {
  const section = document.getElementById('lecturaLibrarySection');
  if (!section) return;
  const cached = _getAllBooksLS();
  let books = [...cached];
  _lecBooksCache = cached; _lecDraw();   // pinta ya con lo local; luego se completa con la nube
  if (_dbReady) {
    try {
      const sb = await getSupabase();
      const { data } = await sb.from('user_books').select('book_id,title,total_pages,page_idx,storage_path').eq('user_id', currentUser.id).order('updated_at', { ascending: false });
      if (data) {
        for (const db of data) {
          const local = books.find(b => b.id === db.book_id);
          if (local) { local.pageIdx = db.page_idx || local.pageIdx; }
          else books.push({ id: db.book_id, title: db.title, totalPages: db.total_pages, pageIdx: db.page_idx||0, storagePath: db.storage_path, noCache: true });
        }
      }
    } catch(e) {}
  }
  await _lecPull();
  _lecReconcileLinks();
  const _ld = _lecLoad();
  books = books.filter(b => b.ext !== 'web' || _ld.links.some(l => l.id === b.id));   // enlaces borrados en otro dispositivo
  books.forEach(b => { const l = b.ext === 'web' && _ld.links.find(x => x.id === b.id); if (l) b.title = l.title; });
  _ld.links.forEach(l => { if (!books.some(b => b.id === l.id)) books.push({ id: l.id, title: l.title, ext: 'web', url: l.url, pageIdx: 0, totalPages: l.tp || 1 }); });
  _lecBooksCache = books;
  _lecDraw();
}

async function openBookFromLibrary(bookId) {
  const cached = _getAllBooksLS();
  const book = cached.find(b => b.id === bookId);
  if (book && book.pages && book.pages.length > 0) {
    _lectura.webView = (book.ext === 'web');   // enlaces: página original por defecto
    _lectura.current = book;
    document.getElementById('lecturaUpload').style.display = 'none';
    _showReader();
    return;
  }
  if (String(bookId).startsWith('web_')) {   // enlace sincronizado desde otro dispositivo: se vuelve a cargar la página
    const l = _lecLoad().links.find(x => x.id === bookId);
    if (l) { openLecturaUrl(l.url, false, { id: l.id, title: l.title }); return; }
  }
  if (!_dbReady) { showToast('Libro no en caché. Súbelo de nuevo.'); return; }
  _showLecturaLoader('Descargando libro…');
  try {
    const sb = await getSupabase();
    const { data: meta } = await sb.from('user_books').select('storage_path,title,total_pages,page_idx').eq('user_id', currentUser.id).eq('book_id', bookId).single();
    if (!meta?.storage_path) throw new Error('No encontrado en Supabase');
    const { data: blob, error } = await sb.storage.from('books').download(meta.storage_path);
    if (error) throw error;
    const ext = meta.storage_path.split('.').pop().toLowerCase();
    const file = new File([blob], meta.title + '.' + ext);
    const pages = ext === 'pdf' ? await _extractPdfPages(file) : await _extractEpubPages(file);
    const bookData = { id: bookId, title: meta.title, ext, pages, pageIdx: meta.page_idx||0, ts: Date.now() };
    _saveBooksLS(bookData);
    _lectura.webView = false;
    _lectura.current = bookData;
    _hideLecturaLoader();
    document.getElementById('lecturaUpload').style.display = 'none';
    _showReader();
  } catch(e) {
    _hideLecturaLoader();
    showToast('❌ ' + e.message);
  }
}

async function deleteBook(bookId) {
  const _bk = _getAllBooksLS().find(x => x.id === bookId);
  const _isWeb = String(bookId).startsWith('web_') || _bk?.ext === 'web';
  const _what = _isWeb ? 'este enlace' : (_bk?.ext === 'epub' ? 'este EPUB' : 'este PDF');
  if (!confirm('¿Eliminar ' + _what + ' de la biblioteca?' + (_isWeb ? '' : ' También se borrará de la nube.'))) return;
  try { const all = _getAllBooksLS().filter(b => b.id !== bookId); localStorage.setItem(_LBOOKS(), JSON.stringify(all)); } catch(e) {}
  _lecAssign(bookId, null);
  if (String(bookId).startsWith('web_')) _lecRemoveLink(bookId);
  if (_dbReady) {
    try {
      const sb = await getSupabase();
      const { data: meta } = await sb.from('user_books').select('storage_path').eq('user_id', currentUser.id).eq('book_id', bookId).single();
      if (meta?.storage_path) await sb.storage.from('books').remove([meta.storage_path]);
      await sb.from('user_books').delete().eq('user_id', currentUser.id).eq('book_id', bookId);
    } catch(e) {}
  }
  if (_lectura.current?.id === bookId) {
    _lectura.current = null;
    _bkClose();
    document.getElementById('lecturaUpload').style.display = '';
    document.getElementById('lecturaReader').style.display = 'none';
    _updateLecturaTopBar();
  }
  _renderLecturaLibrary();
  showToast('🗑 Eliminado');
}

// ── Reader render ───────────────────────────────────────────────
function _showReader() {
  const reader = document.getElementById('lecturaReader');
  reader.style.display = 'flex';
  reader.style.flexDirection = 'column';
  reader.style.height = '100%';
  _updateLecturaTopBar();
  // Tap en zona vacía del scroll → mostrar botón exit en fullscreen
  const scroll = document.getElementById('lecturaScroll');
  if (scroll && !scroll._lecturaListenerSet) {
    scroll.addEventListener('click', e => {
      if (_lectura.fullscreen && !e.target.classList.contains('lw')) {
        _showExitFullBtn();
      }
    });
    scroll._lecturaListenerSet = true;
  }
  _applyLecturaView();
}

function _renderLecturaPage() {
  const book = _lectura.current;
  if (!book) return;
  const pages = book.pages || [], idx = book.pageIdx || 0, total = pages.length;
  const pct = total > 1 ? Math.round(idx / (total - 1) * 100) : 100;
  const fill = document.getElementById('lecturaProgFill');
  if (fill) fill.style.width = pct + '%';
  const info = document.getElementById('lecturaPageInfo');
  if (info) info.textContent = 'p. ' + (idx + 1) + ' / ' + total;
  const content = document.getElementById('lecturaContent');
  if (!content) return;
  content.innerHTML = _buildLecturaHTML(pages[idx] || '');
  content.className = 'lectura-content w-' + _lectura.width;
  content.style.fontSize = _lectura.fontSize + 'px';
  const scroll = document.getElementById('lecturaScroll');
  if (scroll) scroll.scrollTop = 0;
  _highlightSavedWords();
}

function _buildLecturaHTML(text) {
  return text.split(/\n\n+/).map(para =>
    '<p style="margin-bottom:1.1em">' +
    para.split(/\n/).map(line =>
      line.replace(/([a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+(?:[-'][a-zA-Z\u00c0-\u024f]+)*)|([^a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+)/g, (m, word, nonword) => {
        if (word) { const s = _esc(word); return '<span class="lw" data-w="' + s + '" data-ui-click="reading-word">' + s + '</span>'; }
        return _esc(nonword || '');
      })
    ).join('<br>') + '</p>'
  ).join('');
}

function _highlightSavedWords() {
  const saved = new Set(getWords().map(w => w.de.toLowerCase()));
  document.querySelectorAll('#lecturaContent .lw, #bkFlow .lw').forEach(span => {
    span.classList.toggle('lw-saved', saved.has((span.dataset.w||'').toLowerCase()));
  });
}

// ── Page navigation ─────────────────────────────────────────────
function lecturaChangePage(delta) {
  const book = _lectura.current;
  if (!book) return;
  if (book.ext !== 'web') { bookTurn(delta); return; }
  if (book.ext === 'web' && _lectura.webView) return;
  book.pageIdx = Math.max(0, Math.min(book.pages.length - 1, (book.pageIdx||0) + delta));
  _saveProgressLS(book.id, book.pageIdx);
  _saveLecturaProgress();
  _renderLecturaPage();
}

// ── Word tap + translate popup ──────────────────────────────────
async function lecturaWordTap(el) {
  const word = el.dataset.w || el.textContent;
  document.querySelectorAll('#lecturaContent .lw-selected, #bkFlow .lw-selected').forEach(e => e.classList.remove('lw-selected'));
  el.classList.add('lw-selected');
  return _openWordPopup(word, el.getBoundingClientRect(), null);
}

async function _openWordPopup(word, rect, href) {
  _lectura.popup.word = word;
  _lectura.popup.href = href || null;

  const popup   = document.getElementById('lecturaPopup');
  const overlay = document.getElementById('lecturaPopupOverlay');
  const lpWord  = document.getElementById('lpWord');
  const lpTrans = document.getElementById('lpTrans');
  const lpSave  = document.getElementById('lpSaveBtn');

  lpWord.textContent = word;
  lpTrans.innerHTML = '<div style="display:inline-block;width:14px;height:14px;border:2px solid var(--border);border-top-color:var(--purple);border-radius:50%;animation:spin .7s linear infinite;vertical-align:middle"></div>';
  lpSave.style.display = 'none';
  lpSave.disabled = false;
  const lpLink = document.getElementById('lpLinkBtn');
  if (lpLink) lpLink.style.display = href ? '' : 'none';

  // Posicionar
  const pw = 270;
  let top  = rect.bottom + 8;
  let left = Math.max(8, Math.min(rect.left, window.innerWidth - pw - 8));
  if (top + 120 > window.innerHeight) top = Math.max(8, rect.top - 120);
  popup.style.top  = top  + 'px';
  popup.style.left = left + 'px';
  popup.style.display = 'block';
  // En vista original el overlay taparía el iframe: se deja pasar el toque (el propio iframe cierra/cambia el popup)
  overlay.style.display = (_lectura.webView && _lectura.current?.ext === 'web') ? 'none' : 'block';

  // Traducir
  let trans = _lecturaTranslateCache[word.toLowerCase()];
  if (!trans) {
    trans = await _translateWord(word);
    if (trans) _lecturaTranslateCache[word.toLowerCase()] = trans;
  }
  if (_lectura.popup.word !== word) return; // el popup cambió mientras traducía
  _lectura.popup.translation = trans;
  lpTrans.textContent = trans || '(sin traducción disponible)';

  const alreadySaved = getWords().some(w => w.de.toLowerCase() === word.toLowerCase());
  lpSave.style.display = '';
  if (alreadySaved) {
    lpSave.textContent = '✓ Ya está en tu lista';
    lpSave.disabled = true;
  } else {
    lpSave.textContent = '＋ Guardar en lista';
  }
}

function closeLecturaPopup() {
  document.getElementById('lecturaPopup').style.display = 'none';
  document.getElementById('lecturaPopupOverlay').style.display = 'none';
  document.querySelectorAll('#lecturaContent .lw-selected, #bkFlow .lw-selected').forEach(e => e.classList.remove('lw-selected'));
  _lectura.popup.word = null;
  _lectura.popup.href = null;
  const lpLink = document.getElementById('lpLinkBtn'); if (lpLink) lpLink.style.display = 'none';
  try { document.getElementById('lecturaFrame')?.contentWindow?.postMessage({ __vo: 1, type: 'clear' }, '*'); } catch(e) {}
}

function savePopupWord() {
  const word = _lectura.popup.word;
  const trans = _lectura.popup.translation || '';
  if (!word) return;
  if (getWords().some(w => w.de.toLowerCase() === word.toLowerCase())) { showToast('Ya está en tu lista'); return; }
  const words = getWords();
  words.push({ tipo: '', articulo: '', de: word, es: trans });
  saveWords(words);
  _highlightSavedWords();
  showToast('✓ Guardada: ' + word);
  const btn = document.getElementById('lpSaveBtn');
  if (btn) { btn.textContent = '✓ Guardada'; btn.disabled = true; }
}

// ── Translation API (DeepL via proxy /api/translate) ────────────
async function _translateWord(word) {
  try {
    const r = await fetch('/api/translate?word=' + encodeURIComponent(word), { headers: await _apiAuthHeaders(), signal: AbortSignal.timeout(6000) });
    if (!r.ok) return null;
    const j = await r.json();
    return j?.translation || null;
  } catch(e) { return null; }
}

// ── Vista de página original (iframe vía /api/proxy-page) ───────
function _applyLecturaView() {
  const book = _lectura.current;
  const _bookMode = !!book && book.ext !== 'web';
  _bkEl('lecturaReader')?.classList.toggle('bk-on', _bookMode);
  _bkEl('page-lectura')?.classList.toggle('bk-mode', _bookMode);
  if (_bookMode) {                       // PDF / EPUB → lector estilo Apple Books
    const vb0 = _bkEl('lecturaViewBtn'); if (vb0) vb0.style.display = 'none';
    _bkOpen();
    if (!_lectura.fullscreen) toggleLecturaFull();   // los libros siempre se leen en pantalla completa
    return;
  }
  _bkClose();
  const isWeb = book?.ext === 'web';
  const orig = isWeb && !!_lectura.webView;
  const $ = id => document.getElementById(id);
  const vb = $('lecturaViewBtn');
  if (vb) { vb.style.display = isWeb ? 'flex' : 'none'; vb.classList.toggle('active', orig); }
  if ($('lecturaFrame')) $('lecturaFrame').style.display = orig ? 'block' : 'none';
  if ($('lecturaScroll')) $('lecturaScroll').style.display = orig ? 'none' : '';
  if ($('lecturaNavBtns')) $('lecturaNavBtns').style.visibility = orig ? 'hidden' : '';
  if ($('lecturaProgBar')) $('lecturaProgBar').style.display = orig ? 'none' : '';
  if (orig) {
    const info = $('lecturaPageInfo'); if (info) info.textContent = 'Original';
    if (_lectura.frameBook !== book.id) {
      _lectura.frameBook = book.id;
      _lectura.frameUrl = book.url;
      _loadLecturaFrame(book.url);
    }
  } else if (book) {
    _renderLecturaPage();
  }
}

function _loadLecturaFrame(url) {
  const f = document.getElementById('lecturaFrame');
  if (!f) return;
  const loadId = (_lecturaFrameLoadId || 0) + 1;
  _lecturaFrameLoadId = loadId;
  _showLecturaLoader('Cargando página…');
  (async () => {
    const r = await fetch('/api/proxy-page?url=' + encodeURIComponent(url), {
      headers: await _apiAuthHeaders(),
      signal: AbortSignal.timeout(20000),
    });
    if (!r.ok) {
      const responseText = await r.text().catch(() => '');
      let detail = '';
      try { detail = new DOMParser().parseFromString(responseText, 'text/html').body?.textContent?.replace(/\s+/g, ' ').trim() || ''; } catch(e) {}
      throw new Error(r.status === 401 ? 'Inicia sesión de nuevo para abrir páginas.' : (detail || `No se pudo descargar la página (HTTP ${r.status}).`));
    }
    const html = await r.text();
    if (loadId !== _lecturaFrameLoadId) return;
    const nextUrl = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
    const previousUrl = _lecturaFrameObjectUrl;
    f.onload = () => {
      if (loadId !== _lecturaFrameLoadId) return;
      _hideLecturaLoader();
      if (previousUrl) URL.revokeObjectURL(previousUrl);
    };
    f.src = nextUrl;
    _lecturaFrameObjectUrl = nextUrl;
  })().catch(error => {
    if (loadId !== _lecturaFrameLoadId) return;
    _hideLecturaLoader();
    showToast(error.name === 'TimeoutError' ? 'La web tarda demasiado.' : error.message || 'No se pudo abrir la página.');
  });
}

let _lecturaFrameLoadId = 0;
let _lecturaFrameObjectUrl = null;

function _lecturaFrameNavigate(href) {
  if (!/^https?:\/\//i.test(href || '')) return;
  _lectura.frameUrl = href;
  _loadLecturaFrame(href);
}

function toggleLecturaView() {
  const book = _lectura.current;
  if (!book || book.ext !== 'web') return;
  closeLecturaPopup();
  // Si en la vista original navegó a otro enlace, al volver a "Texto" se abre el texto de esa página
  if (_lectura.webView && _lectura.frameBook === book.id && _lectura.frameUrl && _lectura.frameUrl !== book.url) {
    openLecturaUrl(_lectura.frameUrl, true);
    return;
  }
  _lectura.webView = !_lectura.webView;
  _applyLecturaView();
}

function openPopupLink() {
  const h = _lectura.popup.href;
  closeLecturaPopup();
  if (h) _lecturaFrameNavigate(h);
}

window.addEventListener('message', e => {
  const f = document.getElementById('lecturaFrame');
  if (!f || e.source !== f.contentWindow) return;
  const d = e.data;
  if (!d || !d.__vo) return;
  if (d.type === 'word' && d.word) {
    const fr = f.getBoundingClientRect();
    _openWordPopup(d.word, { left: fr.left + d.l, top: fr.top + d.t, bottom: fr.top + d.b }, d.href || null);
  } else if (d.type === 'nav') {
    closeLecturaPopup();
    _lecturaFrameNavigate(d.href);
  } else if (d.type === 'close') {
    closeLecturaPopup();
  }
});

// ── Visual settings ─────────────────────────────────────────────
function adjLecturaFont(delta) {
  _lectura.fontSize = Math.max(12, Math.min(28, _lectura.fontSize + delta));
  const lbl = document.getElementById('lecturaFontSizeLabel');
  if (lbl) lbl.textContent = _lectura.fontSize + 'px';
  const c = document.getElementById('lecturaContent');
  if (c) c.style.fontSize = _lectura.fontSize + 'px';
  _saveLecturaCfg();
}

function setLecturaWidth(w) {
  _lectura.width = w;
  ['narrow','medium','wide'].forEach(v => {
    const id = 'lw' + v[0].toUpperCase() + v.slice(1);
    document.getElementById(id)?.classList.toggle('active', v === w);
  });
  const c = document.getElementById('lecturaContent');
  if (c) c.className = 'lectura-content w-' + w;
  _saveLecturaCfg();
}

function setLecturaTheme(theme) {
  _lectura.theme = theme;
  const borders = { dark: 'var(--green)', light: 'var(--border)', sepia: 'var(--border)' };
  ['dark','light','sepia'].forEach(v => {
    const btn = document.getElementById('lt' + v[0].toUpperCase() + v.slice(1));
    if (btn) { btn.style.borderColor = borders[v === theme ? theme : v]; btn.style.borderWidth = v === theme ? '2px' : '1px'; }
  });
  const shell = document.getElementById('lecturaShell');
  if (shell) {
    shell.classList.remove('lectura-theme-sepia','lectura-theme-light');
    if (theme === 'sepia')  shell.classList.add('lectura-theme-sepia');
    if (theme === 'light')  shell.classList.add('lectura-theme-light');
  }
  _saveLecturaCfg();
}

function _applyLecturaSettings() {
  setLecturaTheme(_lectura.theme);
  setLecturaWidth(_lectura.width);
  const lbl = document.getElementById('lecturaFontSizeLabel');
  if (lbl) lbl.textContent = _lectura.fontSize + 'px';
}

function toggleLecturaFontPanel() {
  if (_isBookMode()) { _bkTogglePanel(); return; }
  const panel = document.getElementById('lecturaFontPanel');
  if (!panel) return;
  const open = panel.style.display !== 'none';
  panel.style.display = open ? 'none' : '';
  document.getElementById('lecturaFontBtn')?.classList.toggle('active', !open);
}

document.addEventListener('click', e => {
  const panel = document.getElementById('lecturaFontPanel');
  const btn   = document.getElementById('lecturaFontBtn');
  if (panel && btn && panel.style.display !== 'none' && !panel.contains(e.target) && !btn.contains(e.target)) {
    panel.style.display = 'none';
    btn.classList.remove('active');
  }
});

// ── Fullscreen ──────────────────────────────────────────────────
let _lecturaHideExitTimer = null;

function _showExitFullBtn() {
  if (_isBookMode()) { _bkShowChrome(false); return; }
  const btn = document.getElementById('lecturaExitFullBtn');
  if (!btn || !_lectura.fullscreen) return;
  btn.style.display = 'flex';
  btn.style.opacity = '1';
  btn.classList.remove('fading');
  clearTimeout(_lecturaHideExitTimer);
  _lecturaHideExitTimer = setTimeout(() => {
    if (btn) { btn.classList.add('fading'); setTimeout(() => { if (_lectura.fullscreen) btn.style.display = 'none'; }, 2000); }
  }, 3000);
}

function toggleLecturaFull() {
  _lectura.fullscreen = !_lectura.fullscreen;
  const page = document.getElementById('page-lectura');
  page.classList.toggle('fullscreen-reader', _lectura.fullscreen);
  const btn = document.getElementById('lecturaFullBtn');
  if (btn) {
    btn.classList.toggle('active', _lectura.fullscreen);
    btn.innerHTML = _lectura.fullscreen
      ? '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="10" y1="14" x2="3" y2="21"/><line x1="21" y1="3" x2="14" y2="10"/></svg>'
      : '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg>';
  }
  document.body.classList.toggle('lectura-fs', _lectura.fullscreen);
  if (!_lectura.fullscreen) _bkHideChrome(true);
  const exitBtn = document.getElementById('lecturaExitFullBtn');
  if (exitBtn) exitBtn.style.display = 'none';
  clearTimeout(_lecturaHideExitTimer);
  if (_lectura.fullscreen) {
    // Mostrar botón al entrar y luego ocultarlo
    setTimeout(_showExitFullBtn, 400);
    if (document.documentElement.requestFullscreen) document.documentElement.requestFullscreen().catch(() => {});
  } else {
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  }
}

document.addEventListener('keydown', e => {
  if (currentPage !== 'lectura') return;
  if (/^(INPUT|TEXTAREA|SELECT)$/.test((e.target && e.target.tagName) || '')) return;
  if (e.key === 'Escape') {
    if (_isBookMode() && _bkEl('bkPanel')?.classList.contains('open')) { _bkTogglePanel(false); return; }
    if (_isBookMode()) { closeLecturaBook(); return; }   // en libros, Esc = salir del libro
    if (_lectura.fullscreen) toggleLecturaFull();
    return;
  }
  const book = _isBookMode();
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown' || (book && (e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)))) {
    if (book) e.preventDefault();
    lecturaChangePage(1);
  }
  if (e.key === 'ArrowLeft' || e.key === 'ArrowUp' || (book && (e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)))) {
    if (book) e.preventDefault();
    lecturaChangePage(-1);
  }
});

// ── Loader overlay ──────────────────────────────────────────────
function _showLecturaLoader(msg) {
  let loader = document.getElementById('lecturaLoader');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'lecturaLoader';
    loader.className = 'lectura-loader';
    document.getElementById('lecturaShell')?.appendChild(loader);
  }
  loader.innerHTML = '<div class="lectura-loader-spin"></div><div style="font-size:13px;color:var(--text2);margin-top:4px">' + (msg||'Cargando…') + '</div>';
  loader.style.display = 'flex';
}
function _hideLecturaLoader() {
  const l = document.getElementById('lecturaLoader');
  if (l) l.style.display = 'none';
}


// ═══════════════════════════════════════════════════════════════════
// LECTURA · MODO LIBRO (PDF / EPUB) — estilo Apple Books
// Paginación con columnas CSS, animaciones al pasar página, tipografía y temas.
// Las páginas web (ext === 'web') NO usan este modo: siguen con el lector de siempre.
// ═══════════════════════════════════════════════════════════════════
const _BK_THEMES  = ['light', 'sepia', 'gray', 'night'];
const _BK_FONTS   = ['georgia', 'palatino', 'sans', 'times'];
const _BK_LINES   = { compact: 1.55, normal: 1.8, loose: 2.1 };
const _BK_MARGINS = { narrow: 16, normal: 28, wide: 52 };
const _BK_TURNS   = ['slide', 'flip', 'fade', 'scroll'];
const _bk = { theme: 'night', font: 'georgia', size: 19, line: 'normal', margin: 'normal', turn: 'slide',
  sec: -1, col: 0, cols: 1, n: 1, W: 0, H: 0, M: 28, busy: false,
  chromeTimer: null, hoverTop: false, saveT: null, rt: null, wheelLast: 0, touch: null, wired: false };
const _bkEl = id => document.getElementById(id);
function _isBookMode() { const b = _lectura.current; return !!b && b.ext !== 'web'; }

const _BKCFG = () => 'lectura_bk_cfg_' + (currentUser?.id || 'anon');
function _loadBkCfg() {
  try {
    const c = JSON.parse(localStorage.getItem(_BKCFG()) || '{}');
    if (_BK_THEMES.includes(c.theme)) _bk.theme = c.theme;
    if (_BK_FONTS.includes(c.font)) _bk.font = c.font;
    if (Object.hasOwn(_BK_LINES, c.line)) _bk.line = c.line;
    if (Object.hasOwn(_BK_MARGINS, c.margin)) _bk.margin = c.margin;
    if (_BK_TURNS.includes(c.turn)) _bk.turn = c.turn;
    if (Number.isFinite(c.size)) _bk.size = Math.max(13, Math.min(36, Math.round(c.size)));
  } catch(e) {}
}
function _saveBkCfg() {
  try { localStorage.setItem(_BKCFG(), JSON.stringify({ theme: _bk.theme, font: _bk.font, size: _bk.size, line: _bk.line, margin: _bk.margin, turn: _bk.turn })); } catch(e) {}
}

// ── Eventos (una sola vez) ──────────────────────────────────────
function _bkWire() {
  if (_bk.wired) return;
  const vp = _bkEl('bkViewport'), page = _bkEl('page-lectura');
  if (!vp || !page) return;
  _bk.wired = true;

  // Clic fuera de las letras (pantalla completa) → muestra/oculta la barra con el botón de salir
  vp.addEventListener('click', e => {
    if (!_isBookMode() || !_lectura.fullscreen || e.target.closest('.lw')) return;
    if (_bkEl('bkPanel')?.classList.contains('open')) return;   // ese clic solo cierra el panel
    _bkToggleChrome();
  });
  // Ratón por la parte de arriba → barra visible mientras esté ahí
  page.addEventListener('pointermove', e => {
    if (e.pointerType !== 'mouse' || !_lectura.fullscreen || !_isBookMode()) return;
    const top = e.clientY < 90;
    if (top && !_bk.hoverTop) { _bk.hoverTop = true; _bkShowChrome(true); }
    else if (!top && _bk.hoverTop) { _bk.hoverTop = false; _bkShowChrome(false, 1200); }
  });
  // Deslizar con el dedo
  vp.addEventListener('touchstart', e => {
    _bk.touch = e.touches.length === 1 ? { x: e.touches[0].clientX, y: e.touches[0].clientY } : null;
  }, { passive: true });
  vp.addEventListener('touchend', e => {
    const t0 = _bk.touch; _bk.touch = null;
    const t = e.changedTouches && e.changedTouches[0];
    if (!t0 || !t || !_isBookMode() || _bk.turn === 'scroll') return;
    const dx = t.clientX - t0.x, dy = t.clientY - t0.y;
    if (Math.abs(dx) < 50 || Math.abs(dx) < Math.abs(dy) * 1.5) return;
    if (String(window.getSelection ? window.getSelection() : '')) return;
    bookTurn(dx < 0 ? 1 : -1);
  }, { passive: true });
  // Rueda / trackpad: un gesto = una página (la inercia no cuenta)
  vp.addEventListener('wheel', e => {
    if (_bk.turn === 'scroll' || !_isBookMode()) return;
    const now = Date.now(), gap = now - _bk.wheelLast;
    _bk.wheelLast = now;
    if (gap < 200 || _bk.busy) return;
    const d = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    if (Math.abs(d) < 8) return;
    bookTurn(d > 0 ? 1 : -1);
  }, { passive: true });
  vp.addEventListener('scroll', () => { if (_bk.turn === 'scroll' && _bk.sec >= 0) _bkSaveProgress(); }, { passive: true });
  if (window.ResizeObserver) {
    new ResizeObserver(() => { clearTimeout(_bk.rt); _bk.rt = setTimeout(() => _bkRelayout(), 120); }).observe(vp);
  }
}

// ── Apertura / cierre ───────────────────────────────────────────
function _bkOpen() {
  _bkWire();
  _loadBkCfg();
  _bkApplyAttrs();
  _bk.sec = -1; _bk.busy = false;
  _bkEl('bkViewport')?.querySelectorAll('.bk-ghost').forEach(g => g.remove());
  _bkRelayout();
  requestAnimationFrame(() => _bkRelayout());   // 2.º pase por si el layout aún no estaba medido
}
function _bkClose() {
  clearTimeout(_bk.chromeTimer); clearTimeout(_bk.rt);
  _bk.sec = -1; _bk.busy = false; _bk.hoverTop = false;
  const flow = _bkEl('bkFlow'); if (flow) flow.innerHTML = '';
  _bkEl('bkViewport')?.querySelectorAll('.bk-ghost').forEach(g => g.remove());
  _bkEl('bkChrome')?.classList.remove('show');
  _bkEl('bkPanel')?.classList.remove('open');
  _bkEl('lecturaReader')?.classList.remove('bk-on');
  _bkEl('page-lectura')?.classList.remove('bk-mode');
}
function _bkApplyAttrs() {
  const page = _bkEl('page-lectura'); if (page) page.dataset.bkTheme = _bk.theme;
  const bk = _bkEl('lecturaBook'); if (bk) bk.dataset.turn = _bk.turn;
  _bkEl('bkViewport')?.classList.toggle('bk-vscroll', _bk.turn === 'scroll');
  const t = _bkEl('bkChromeTitle'); if (t) t.textContent = _lectura.current?.title || '';
  _bkSyncPanel();
}

// ── Maquetación ─────────────────────────────────────────────────
function _bkMeasure(vp) {
  const W = vp.clientWidth, H = vp.clientHeight;
  const n = (_bk.turn !== 'scroll' && W >= 820) ? 2 : 1;      // pantallas anchas: dos páginas como un libro abierto
  let M = _BK_MARGINS[_bk.margin];
  if (W / n - 2 * M > 680) M = (W / n - 680) / 2;             // líneas nunca más largas de ~680px
  if (_bk.turn !== 'scroll' && window.matchMedia && window.matchMedia('(hover:hover)').matches) M = Math.max(M, 56);   // con ratón: hueco para las flechas laterales
  _bk.W = W; _bk.H = H; _bk.n = n; _bk.M = Math.round(M);
}
function _bkStyle(el) {
  const s = el.style, scroll = _bk.turn === 'scroll';
  el.className = 'bk-flow bk-ff-' + _bk.font + (scroll ? ' bk-flow-scroll' : '');
  el.lang = 'de';
  s.fontSize = _bk.size + 'px';
  s.lineHeight = String(_BK_LINES[_bk.line]);
  s.paddingLeft = s.paddingRight = _bk.M + 'px';
  if (scroll) { s.columnCount = ''; s.columnGap = ''; s.transform = ''; }
  else { s.columnCount = String(_bk.n); s.columnGap = (2 * _bk.M) + 'px'; }
}
function _lwWrap(line) {
  return line.replace(/([a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+(?:[-'][a-zA-Z\u00c0-\u024f]+)*)|([^a-zA-Z\u00c0-\u024f\u1e00-\u1eff]+)/g, (m, word, nonword) => {
    if (word) { const s = _esc(word); return '<span class="lw" data-w="' + s + '" data-ui-click="reading-word">' + s + '</span>'; }
    return _esc(nonword || '');
  });
}
// Párrafos: EPUB → cada línea es un párrafo; PDF → se unen las líneas cortadas por el ancho original
function _bkParas(text, ext) {
  const lines = String(text).split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean);
  if (ext !== 'pdf' || lines.length < 2) return lines;
  const lens = lines.map(l => l.length).sort((a, b) => a - b);
  const ref = lens[Math.floor(lens.length * 0.9)] || 1;
  const out = []; let cur = lines[0];
  for (let i = 1; i < lines.length; i++) {
    const prev = lines[i - 1], next = lines[i];
    if (prev.length < ref * 0.6 || (/[.!?:;»"”)]$/.test(prev) && prev.length < ref * 0.92)) { out.push(cur); cur = next; }
    else if (/[A-Za-zÀ-ÿ]-$/.test(prev) && /^[a-zà-ÿ]/.test(next)) cur = cur.slice(0, -1) + next;
    else cur += ' ' + next;
  }
  out.push(cur);
  return out;
}
function _bkHTML(book, sec) {
  return _bkParas(book.pages[sec] || '', book.ext).map(p => '<p>' + _lwWrap(p) + '</p>').join('');
}
// Nº de columnas/páginas de la sección: posición de la última palabra (robusto en Safari)
function _bkCountCols(flow) {
  const words = flow.querySelectorAll('.lw');
  const last = words[words.length - 1];
  if (!last) return 1;
  const rects = last.getClientRects();
  const r = rects.length ? rects[rects.length - 1] : last.getBoundingClientRect();
  const rel = r.left - flow.getBoundingClientRect().left;
  return Math.max(1, Math.floor(rel / _bk.W) + 1);
}
// where: 'start' | 'end' | { frac }
function _bkRenderSection(sec, where) {
  const book = _lectura.current, flow = _bkEl('bkFlow'), vp = _bkEl('bkViewport');
  if (!book || !flow || !vp || !vp.clientWidth || !vp.clientHeight) return;
  sec = Math.max(0, Math.min(book.pages.length - 1, sec));
  _bkMeasure(vp);
  _bkStyle(flow);
  if (_bk.sec !== sec) { flow.innerHTML = _bkHTML(book, sec); _bk.sec = sec; _highlightSavedWords(); }
  const frac = where && typeof where === 'object' ? where.frac : 0;
  if (_bk.turn === 'scroll') {
    _bk.cols = 1; _bk.col = 0;
    const max = Math.max(0, vp.scrollHeight - vp.clientHeight);
    vp.scrollTop = where === 'end' ? max : frac * max;
    _bkUpdateFoot(); _bkSaveProgress();
  } else {
    vp.scrollTop = 0;
    _bk.cols = _bkCountCols(flow);
    _bkSetCol(where === 'end' ? _bk.cols - 1 : Math.floor(frac * _bk.cols + 1e-6));
  }
}
function _bkSetCol(c) {
  _bk.col = Math.max(0, Math.min(_bk.cols - 1, c));
  const flow = _bkEl('bkFlow');
  if (flow) flow.style.transform = 'translate3d(' + (-_bk.col * _bk.W) + 'px,0,0)';
  _bkUpdateFoot(); _bkSaveProgress();
}
function _bkFrac() {
  if (_bk.turn === 'scroll') {
    const vp = _bkEl('bkViewport'), max = vp.scrollHeight - vp.clientHeight;
    return max > 0 ? vp.scrollTop / max : 0;
  }
  return _bk.cols > 1 ? _bk.col / _bk.cols : 0;
}
function _bkRelayout(fracOverride) {
  if (!_isBookMode()) return;
  const vp = _bkEl('bkViewport');
  if (!vp || !vp.clientWidth || !vp.clientHeight) return;
  if (_bk.busy) { clearTimeout(_bk.rt); _bk.rt = setTimeout(() => _bkRelayout(fracOverride), 200); return; }
  const book = _lectura.current;
  if (_bk.sec < 0) { _bkRenderSection(Math.max(0, Math.min(book.pages.length - 1, book.pageIdx || 0)), { frac: book.frac || 0 }); return; }
  _bkRenderSection(_bk.sec, { frac: fracOverride !== undefined ? fracOverride : _bkFrac() });
}
function _bkUpdateFoot() {
  const book = _lectura.current, el = _bkEl('bkFootTxt');
  if (!book || !el) return;
  el.textContent = (_bk.sec + 1) + ' / ' + book.pages.length + (_bk.turn !== 'scroll' && _bk.cols > 1 ? ' · ' + (_bk.col + 1) + '/' + _bk.cols : '');
}

// ── Progreso (se guarda con retardo para no escribir en cada página) ──
function _bkSaveProgress() {
  const book = _lectura.current;
  if (!book || book.ext === 'web' || _bk.sec < 0) return;
  book.pageIdx = _bk.sec; book.frac = _bkFrac();
  clearTimeout(_bk.saveT);
  _bk.saveT = setTimeout(() => { _bkFlushSave(); _saveLecturaProgress(); }, 900);
}
function _bkFlushSave() {
  clearTimeout(_bk.saveT); _bk.saveT = null;
  const book = _lectura.current;
  if (book && book.ext !== 'web' && _bk.sec >= 0) _saveProgressLS(book.id, book.pageIdx || 0, book.frac || 0);
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden') _bkFlushSave(); });

// ── Pasar página ────────────────────────────────────────────────
function bookTurn(dir) {
  const book = _lectura.current;
  if (!book || book.ext === 'web' || _bk.sec < 0 || _bk.busy) return;
  const last = book.pages.length - 1, vp = _bkEl('bkViewport');
  closeLecturaPopup();
  _bkHideChrome();
  if (_bk.turn === 'scroll') {
    const max = vp.scrollHeight - vp.clientHeight;
    if (dir > 0 && vp.scrollTop < max - 4) { vp.scrollBy({ top: vp.clientHeight * 0.9, behavior: 'smooth' }); return; }
    if (dir < 0 && vp.scrollTop > 4) { vp.scrollBy({ top: -vp.clientHeight * 0.9, behavior: 'smooth' }); return; }
    if (dir > 0 && _bk.sec < last) _bkRenderSection(_bk.sec + 1, 'start');
    else if (dir < 0 && _bk.sec > 0) _bkRenderSection(_bk.sec - 1, 'end');
    else if (dir > 0) showToast('Has llegado al final');
    return;
  }
  let nextSec = _bk.sec, nextCol = _bk.col, where;
  if (dir > 0) {
    if (_bk.col < _bk.cols - 1) nextCol++;
    else if (_bk.sec < last) { nextSec++; where = 'start'; }
    else { showToast('Has llegado al final'); return; }
  } else {
    if (_bk.col > 0) nextCol--;
    else if (_bk.sec > 0) { nextSec--; where = 'end'; }
    else return;
  }
  _bkAnimate(dir, () => { if (nextSec !== _bk.sec) _bkRenderSection(nextSec, where); else _bkSetCol(nextCol); });
}
// La página saliente se clona en una "capa fantasma" que se anima mientras la nueva ya está debajo
function _bkAnimate(dir, update) {
  const flow = _bkEl('bkFlow'), vp = _bkEl('bkViewport');
  const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce || !flow.animate) { update(); return; }
  const W = _bk.W;
  const wrap = document.createElement('div');
  wrap.className = 'bk-ghost bk-ghost-' + _bk.turn;
  const ghost = flow.cloneNode(true);
  ghost.removeAttribute('id');
  ghost.querySelectorAll('[data-ui-click]').forEach(n => n.removeAttribute('data-ui-click'));
  wrap.appendChild(ghost);
  vp.appendChild(wrap);
  _bk.busy = true;
  update();
  const anims = [];
  const opt = (ms, easing) => ({ duration: ms, easing, fill: 'forwards' });
  try {
    if (_bk.turn === 'fade') {
      anims.push(wrap.animate([{ opacity: 1 }, { opacity: 0 }], opt(280, 'ease')));
    } else if (_bk.turn === 'flip') {
      wrap.style.transformOrigin = dir > 0 ? 'left center' : 'right center';
      anims.push(wrap.animate([
        { transform: 'rotateY(0deg)', filter: 'brightness(1)' },
        { transform: 'rotateY(' + (dir > 0 ? -100 : 100) + 'deg)', filter: 'brightness(.55)' },
      ], opt(560, 'cubic-bezier(.45,.05,.35,1)')));
    } else {
      const ease = 'cubic-bezier(.22,.8,.3,1)';
      anims.push(wrap.animate([{ transform: 'translate3d(0,0,0)' }, { transform: 'translate3d(' + (-dir * W) + 'px,0,0)' }], opt(340, ease)));
      anims.push(flow.animate([
        { transform: 'translate3d(' + (-_bk.col * W + dir * W) + 'px,0,0)' },
        { transform: 'translate3d(' + (-_bk.col * W) + 'px,0,0)' },
      ], { duration: 340, easing: ease }));
    }
  } catch(e) {}
  let finished = false;
  const done = () => { if (finished) return; finished = true; wrap.remove(); _bk.busy = false; };
  Promise.all(anims.map(a => a.finished)).then(done, done);
  setTimeout(done, 900);
}

// ── Barra de pantalla completa (botón de salir) ─────────────────
function _bkShowChrome(sticky, delay) {
  const c = _bkEl('bkChrome');
  if (!c || !_lectura.fullscreen || !_isBookMode()) return;
  c.classList.add('show');
  clearTimeout(_bk.chromeTimer);
  if (!sticky) _bk.chromeTimer = setTimeout(() => _bkHideChrome(), delay || 4000);
}
function _bkHideChrome(force) {
  const c = _bkEl('bkChrome'); if (!c) return;
  clearTimeout(_bk.chromeTimer);
  if (!force && (_bk.hoverTop || _bkEl('bkPanel')?.classList.contains('open'))) return;   // se mantiene con el ratón arriba o el panel abierto
  c.classList.remove('show');
}
function _bkToggleChrome() {
  if (_bkEl('bkChrome')?.classList.contains('show')) _bkHideChrome(true);
  else _bkShowChrome(false);
}

// ── Panel de ajustes ────────────────────────────────────────────
function _bkSyncPanel() {
  document.querySelectorAll('#bkPanel [data-key]').forEach(b => b.classList.toggle('active', String(_bk[b.dataset.key]) === b.dataset.value));
  const l = _bkEl('bkSizeLabel'); if (l) l.textContent = _bk.size;
}
function _bkTogglePanel(force) {
  const p = _bkEl('bkPanel'); if (!p) return;
  const open = force === undefined ? !p.classList.contains('open') : !!force;
  p.classList.toggle('open', open);
  _bkEl('lecturaFontBtn')?.classList.toggle('active', open);
  if (open) { _bkSyncPanel(); _bkShowChrome(true); }
  else if (_lectura.fullscreen) _bkShowChrome(false);
}
function bkSetOpt(key, value) {
  const valid = {
    theme: _BK_THEMES.includes(value), font: _BK_FONTS.includes(value),
    line: Object.hasOwn(_BK_LINES, value), margin: Object.hasOwn(_BK_MARGINS, value), turn: _BK_TURNS.includes(value),
  };
  if (!Object.hasOwn(valid, key) || !valid[key]) return;
  const frac = _bk.sec >= 0 ? _bkFrac() : 0;   // se calcula con el modo anterior
  _bk[key] = value;
  _saveBkCfg();
  _bkApplyAttrs();
  if (key !== 'theme') _bkRelayout(frac);
}
function bkAdjSize(delta) {
  const frac = _bk.sec >= 0 ? _bkFrac() : 0;
  _bk.size = Math.max(13, Math.min(36, _bk.size + (Number(delta) || 0)));
  _saveBkCfg(); _bkSyncPanel(); _bkRelayout(frac);
}
document.addEventListener('click', e => {
  const p = _bkEl('bkPanel');
  if (!p || !p.classList.contains('open')) return;
  if (p.contains(e.target) || e.target.closest('[data-ui-click="reading-font-panel"]')) return;
  _bkTogglePanel(false);
});
// Si el navegador sale de pantalla completa por su cuenta (Esc), se sincroniza el estado
document.addEventListener('fullscreenchange', () => {
  if (document.fullscreenElement || !_lectura.fullscreen || currentPage !== 'lectura') return;
  if (_isBookMode()) closeLecturaBook(); else toggleLecturaFull();
});


// ═══════════════════════════════════════════════════════════════════
// LECTURA · CARPETAS DE LA BIBLIOTECA (carpetas, subcarpetas, renombrar, mover)
// Se guardan en localStorage por usuario: { folders:[{id,name,parent}], map:{bookId:folderId} }
// ═══════════════════════════════════════════════════════════════════
const _LFOLD = () => 'lectura_folders_' + (currentUser?.id || 'anon');
let _lecFolder = null;        // carpeta abierta (null = raíz)
let _lecBooksCache = [];      // libros/enlaces visibles en la biblioteca
let _lecSel = null;           // { kind:'folder'|'book', id } elemento del menú
let _lecEdit = null;          // { mode:'new-folder'|'rename' }

function _lecSanitize(d) {
  d = (d && typeof d === 'object') ? d : {};
  const folders = (Array.isArray(d.folders) ? d.folders : []).filter(f => f && f.id && typeof f.name === 'string')
    .map(f => ({ id: String(f.id), name: f.name.slice(0, 60), parent: f.parent || null, color: _safeFolderColor(f.color) }));
  const ids = new Set(folders.map(f => f.id));
  folders.forEach(f => { if (!ids.has(f.parent) || f.parent === f.id) f.parent = null; });
  const links = (Array.isArray(d.links) ? d.links : []).filter(l => l && typeof l.id === 'string' && typeof l.url === 'string')
    .map(l => ({ id: l.id, title: String(l.title || l.url).slice(0, 300), url: l.url, tp: Number(l.tp) || 1 }));
  const del = (Array.isArray(d.del) ? d.del : []).filter(x => typeof x === 'string').slice(-300);
  return { folders, map: (d.map && typeof d.map === 'object') ? d.map : {}, links, del, ts: Number(d.ts) || 0 };
}
function _lecLoad() {
  let d = {};
  try { d = JSON.parse(localStorage.getItem(_LFOLD()) || '{}'); } catch(e) {}
  return _lecSanitize(d);
}
function _lecSave(d) {
  d.ts = Date.now();
  try { localStorage.setItem(_LFOLD(), JSON.stringify({ folders: d.folders, map: d.map, links: d.links, del: d.del, ts: d.ts })); }
  catch(e) { showToast('No se pudo guardar'); }
  _lecSchedulePush();
}

// ── Sincronización con Supabase (un documento por usuario; gana el más reciente) ──
let _lecPushT = null;
function _lecSchedulePush() { clearTimeout(_lecPushT); _lecPushT = setTimeout(_lecPush, 800); }
async function _lecPush() {
  if (!_dbReady || !currentUser) return;
  try {
    const d = _lecLoad(), sb = await getSupabase();
    const { error } = await sb.from('user_reading_library').upsert({ user_id: currentUser.id, data: d, updated_at: new Date().toISOString() }, { onConflict: 'user_id' });
    if (error) throw error;
  } catch(e) { console.warn('[Lectura] no se pudo sincronizar las carpetas', e); }
}
// Trae el documento de la nube; devuelve true si había uno más reciente y se ha aplicado
async function _lecPull() {
  if (!_dbReady || !currentUser) return false;
  try {
    const sb = await getSupabase();
    const { data: row, error } = await sb.from('user_reading_library').select('data').eq('user_id', currentUser.id).maybeSingle();
    if (error) return false;
    const local = _lecLoad();
    if (!row || !row.data) { if (local.ts) _lecSchedulePush(); return false; }
    const remote = _lecSanitize(row.data);
    if (remote.ts > local.ts) {
      localStorage.setItem(_LFOLD(), JSON.stringify(remote));
      if (remote.del.length) {   // enlaces borrados en otro dispositivo
        try { const all = _getAllBooksLS().filter(b => !remote.del.includes(b.id)); localStorage.setItem(_LBOOKS(), JSON.stringify(all)); } catch(e) {}
      }
      return true;
    }
    if (remote.ts < local.ts) _lecSchedulePush();
  } catch(e) {}
  return false;
}
// Enlaces ya guardados en este dispositivo antes de existir la sincronización
function _lecReconcileLinks() {
  const d = _lecLoad(); let ch = false;
  _getAllBooksLS().filter(b => b.ext === 'web' && b.url).forEach(b => {
    if (!d.links.some(l => l.id === b.id) && !d.del.includes(b.id)) { d.links.push({ id: b.id, title: b.title, url: b.url, tp: b.pages?.length || 1 }); ch = true; }
  });
  if (ch) _lecSave(d);
}
function _lecAddLink(b) {
  const d = _lecLoad();
  if (d.links.some(l => l.id === b.id)) return;
  d.links.push({ id: b.id, title: b.title, url: b.url, tp: b.pages?.length || 1 });
  d.del = d.del.filter(x => x !== b.id);
  _lecSave(d);
}
function _lecRemoveLink(id) {
  const d = _lecLoad();
  d.links = d.links.filter(l => l.id !== id);
  if (!d.del.includes(id)) d.del.push(id);
  d.del = d.del.slice(-300);
  _lecSave(d);
}
function _lecBookFolder(d, bookId) {
  const f = d.map[bookId];
  return f && d.folders.some(x => x.id === f) ? f : null;
}
function _lecAssign(bookId, folderId) {
  const d = _lecLoad();
  if (folderId) d.map[bookId] = folderId; else delete d.map[bookId];
  _lecSave(d);
}
function _lecPath(d, id) {
  const out = []; let cur = d.folders.find(f => f.id === id), n = 0;
  while (cur && n++ < 30) { out.unshift(cur); cur = d.folders.find(f => f.id === cur.parent); }
  return out;
}
function _lecDesc(d, id, out = new Set(), depth = 0) {
  out.add(id);
  if (depth < 30) d.folders.filter(f => f.parent === id).forEach(f => _lecDesc(d, f.id, out, depth + 1));
  return out;
}
function _lecCounts(d, id, depth = 0) {
  const subs = d.folders.filter(f => f.parent === id);
  let books = _lecBooksCache.filter(b => _lecBookFolder(d, b.id) === id).length;
  if (depth < 30) subs.forEach(s => { books += _lecCounts(d, s.id, depth + 1).books; });
  return { folders: subs.length, books };
}

function _lecDraw() {
  const section = document.getElementById('lecturaLibrarySection');
  if (!section) return;
  const d = _lecLoad();
  if (_lecFolder && !d.folders.some(f => f.id === _lecFolder)) _lecFolder = null;
  const cur = _lecFolder;
  const curF = cur ? d.folders.find(f => f.id === cur) : null;
  const parentF = curF && curF.parent ? d.folders.find(f => f.id === curF.parent) : null;
  // Cabecera: "Biblioteca" en la raíz; dentro de una carpeta, botón atrás + nombre (como en Lista)
  const head = curF
    ? '<div class="lec-head">' +
        '<button class="lista-back-btn" data-ui-click="lec-open-folder" data-folder-id="' + _esc(parentF ? parentF.id : '') + '">' +
          '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="10,2 4,8 10,14"/></svg>' + _esc(parentF ? parentF.name : 'Biblioteca') +
        '</button>' +
        '<span class="lec-head-title">' + _esc(curF.name) + '</span>' +
      '</div>'
    : '<div class="lec-head"><span class="lec-head-label">Biblioteca</span></div>';
  const subs = d.folders.filter(f => f.parent === cur).sort((a, b) => a.name.localeCompare(b.name, 'es'));
  const items = _lecBooksCache.filter(b => _lecBookFolder(d, b.id) === cur);
  const folderCards = subs.map(f => {
    const c = _lecCounts(d, f.id), col = _safeFolderColor(f.color);
    const meta = (c.folders ? c.folders + (c.folders === 1 ? ' carpeta · ' : ' carpetas · ') : '') + c.books + (c.books === 1 ? ' elemento' : ' elementos');
    return '<div class="folder-card" data-ui-click="lec-open-folder" data-folder-id="' + _esc(f.id) + '">' +
      '<div class="folder-card-cover" style="background:linear-gradient(135deg,' + col + '30,' + col + '18)">' +
        '<span class="folder-card-icon">🗂️</span>' +
        '<button class="folder-edit-btn" data-ui-click="lec-folder-edit" data-id="' + _esc(f.id) + '" title="Editar carpeta">✏️</button>' +
        '<button class="folder-menu-btn" data-ui-click="lec-folder-delete" data-id="' + _esc(f.id) + '" title="Eliminar carpeta">🗑</button>' +
      '</div>' +
      '<div class="folder-card-body"><div class="folder-card-name">' + _esc(f.name) + '</div><div class="folder-card-count">' + meta + '</div></div>' +
    '</div>';
  }).join('');
  const newCard = '<div class="folder-card new-folder" data-ui-click="lec-new-folder">' +
    '<div class="folder-card-new-inner"><div class="folder-card-new-plus">＋</div><div class="folder-card-new-lbl">' + (cur ? 'Nueva subcarpeta' : 'Nueva carpeta') + '</div></div></div>';
  const bookCards = items.map(b => {
    const total = b.pages?.length || b.totalPages || 1;
    const pct = Math.round(((b.pageIdx || 0) / total) * 100);
    const icon = b.noCache ? '☁️' : (b.ext === 'web' ? '🌐' : b.ext === 'epub' ? '📗' : '📕');
    return '<div class="lectura-lib-card" data-ui-click="book-open" data-book-id="' + _esc(b.id) + '">' +
      '<div class="lectura-lib-card-icon">' + icon + '</div>' +
      '<div class="lectura-lib-card-info">' +
        '<div class="lectura-lib-card-title">' + _esc(b.title) + '</div>' +
        '<div class="lectura-lib-card-meta">p. ' + ((b.pageIdx || 0) + 1) + ' de ' + total + ' · ' + pct + '%</div>' +
        '<div class="lectura-lib-prog"><div class="lectura-lib-prog-fill" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      '<div class="lec-actions">' +
        '<button class="lec-more" data-ui-click="lec-menu" data-kind="book" data-id="' + _esc(b.id) + '" title="Más opciones" aria-label="Más opciones">⋯</button>' +
        '<button class="lectura-lib-del" data-ui-click="book-delete" data-book-id="' + _esc(b.id) + '" title="Eliminar">🗑</button>' +
      '</div>' +
    '</div>';
  }).join('');
  const empty = (!items.length && !subs.length)
    ? '<div class="lec-empty">' + (cur ? 'Carpeta vacía. Los PDF, EPUB y enlaces que abras aquí se guardarán en esta carpeta.' : 'Aún no hay nada. Sube un PDF o EPUB, abre un enlace o crea una carpeta.') + '</div>' : '';
  section.innerHTML = head +
    '<div class="folders-grid lec-folders-grid">' + folderCards + newCard + '</div>' +
    (bookCards ? '<div class="lectura-library-grid">' + bookCards + '</div>' : '') + empty;
}

function _lecOpenFolder(id) { _lecFolder = id || null; _lecDraw(); }

function _lecOpenMenu(kind, id) {
  const d = _lecLoad();
  const name = kind === 'folder' ? d.folders.find(f => f.id === id)?.name : _lecBooksCache.find(b => b.id === id)?.title;
  if (name == null) return;
  _lecSel = { kind, id };
  document.getElementById('lecMenuTitle').textContent = name;
  document.getElementById('lecMenuDelete').style.display = kind === 'folder' ? '' : 'none';
  openModal('lecMenuModal');
}

function _lecOpenName(mode) {
  const d = _lecLoad();
  let title, val = '';
  if (mode === 'new-folder') title = _lecFolder ? 'Nueva subcarpeta' : 'Nueva carpeta';
  else {
    if (!_lecSel) return;
    title = _lecSel.kind === 'folder' ? 'Renombrar carpeta' : 'Renombrar';
    val = _lecSel.kind === 'folder' ? (d.folders.find(f => f.id === _lecSel.id)?.name || '') : (_lecBooksCache.find(b => b.id === _lecSel.id)?.title || '');
  }
  _lecEdit = { mode };
  const isFolder = mode === 'new-folder' || _lecSel?.kind === 'folder';
  if (mode !== 'new-folder' && isFolder) title = 'Editar carpeta';
  const curColor = mode !== 'new-folder' && isFolder ? _safeFolderColor(d.folders.find(f => f.id === _lecSel.id)?.color) : FOLDER_DEFAULT_COLOR;
  document.getElementById('lecColorRow').style.display = isFolder ? '' : 'none';
  document.getElementById('lecMoveEditBtn').style.display = (mode !== 'new-folder' && isFolder) ? '' : 'none';
  document.getElementById('lecColorPicker').innerHTML = FOLDER_COLORS.map(c =>
    '<div class="folder-color-swatch ' + (c === curColor ? 'active' : '') + '" style="background:' + c + '" data-color="' + c + '" data-ui-click="folder-color"></div>').join('');
  const inp = document.getElementById('lecNameInput');
  document.getElementById('lecNameTitle').textContent = title;
  document.getElementById('lecNameErr').textContent = '';
  inp.value = val;
  openModal('lecNameModal');
  setTimeout(() => { try { inp.focus(); inp.select(); } catch(e) {} }, 60);
}

async function _lecRenameBook(id, title) {
  try {
    const all = _getAllBooksLS(), b = all.find(x => x.id === id);
    if (b) { b.title = title; localStorage.setItem(_LBOOKS(), JSON.stringify(all)); }
  } catch(e) {}
  const c = _lecBooksCache.find(x => x.id === id); if (c) c.title = title;
  if (_lectura.current?.id === id) _lectura.current.title = title;
  if (String(id).startsWith('web_')) {
    const d = _lecLoad(), l = d.links.find(x => x.id === id);
    if (l) { l.title = title; _lecSave(d); }
  } else if (currentUser && _dbReady) {
    try { const sb = await getSupabase(); await sb.from('user_books').update({ title }).eq('user_id', currentUser.id).eq('book_id', id); } catch(e) {}
  }
}

function _lecSaveName() {
  const name = document.getElementById('lecNameInput').value.replace(/\s+/g, ' ').trim().slice(0, 60);
  if (!name) { document.getElementById('lecNameErr').textContent = 'Escribe un nombre'; return; }
  if (!_lecEdit) return;
  const d = _lecLoad();
  const color = _safeFolderColor(document.querySelector('#lecColorPicker .folder-color-swatch.active')?.dataset.color);
  if (_lecEdit.mode === 'new-folder') {
    d.folders.push({ id: 'lf_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6), name, parent: _lecFolder, color });
    _lecSave(d);
  } else if (_lecSel?.kind === 'folder') {
    const f = d.folders.find(x => x.id === _lecSel.id); if (f) { f.name = name; f.color = color; _lecSave(d); }
  } else if (_lecSel?.kind === 'book') {
    _lecRenameBook(_lecSel.id, name);
  }
  closeModal('lecNameModal');
  _lecDraw();
}

function _lecOpenMove() {
  if (!_lecSel) return;
  closeModal('lecMenuModal');
  const d = _lecLoad(), sel = _lecSel;
  const exclude = sel.kind === 'folder' ? _lecDesc(d, sel.id) : new Set();
  const here = sel.kind === 'folder' ? (d.folders.find(f => f.id === sel.id)?.parent ?? null) : _lecBookFolder(d, sel.id);
  const name = sel.kind === 'folder' ? d.folders.find(f => f.id === sel.id)?.name : _lecBooksCache.find(b => b.id === sel.id)?.title;
  document.getElementById('lecMoveTitle').textContent = 'Mover «' + (name || '') + '»';
  const row = (id, label, depth) => '<button class="btn-secondary lec-move-row" data-ui-click="lec-move-to" data-folder-id="' + _esc(id || '') + '" style="padding-left:' + (14 + depth * 18) + 'px"' + (id === here ? ' disabled' : '') + '>' +
    (id ? '📁 ' : '🏠 ') + _esc(label) + (id === here ? ' · aquí' : '') + '</button>';
  let html = row(null, 'Biblioteca', 0);
  const walk = (parent, depth) => {
    if (depth > 30) return;
    d.folders.filter(f => f.parent === parent && !exclude.has(f.id)).sort((a, b) => a.name.localeCompare(b.name, 'es'))
      .forEach(f => { html += row(f.id, f.name, depth); walk(f.id, depth + 1); });
  };
  walk(null, 1);
  document.getElementById('lecMoveList').innerHTML = html;
  openModal('lecMoveModal');
}

function _lecMoveTo(folderId) {
  if (!_lecSel) return;
  const target = folderId || null, d = _lecLoad();
  if (_lecSel.kind === 'folder') {
    if (target && _lecDesc(d, _lecSel.id).has(target)) return;
    const f = d.folders.find(x => x.id === _lecSel.id); if (!f) return;
    f.parent = target;
    _lecSave(d);
  } else {
    if (target) d.map[_lecSel.id] = target; else delete d.map[_lecSel.id];
    _lecSave(d);
  }
  closeModal('lecMoveModal');
  _lecDraw();
  showToast('✓ Movido');
}

function _lecDeleteFolder() {
  if (_lecSel?.kind !== 'folder') return;
  closeModal('lecMenuModal');
  const d = _lecLoad(), f = d.folders.find(x => x.id === _lecSel.id);
  if (!f) return;
  const dest = f.parent ? d.folders.find(x => x.id === f.parent)?.name : 'Biblioteca';
  if (!confirm('¿Eliminar la carpeta «' + f.name + '»? Su contenido (libros y subcarpetas) pasará a «' + dest + '».')) return;
  d.folders.forEach(x => { if (x.parent === f.id) x.parent = f.parent; });
  Object.keys(d.map).forEach(k => { if (d.map[k] === f.id) { if (f.parent) d.map[k] = f.parent; else delete d.map[k]; } });
  d.folders = d.folders.filter(x => x.id !== f.id);
  _lecSave(d);
  if (_lecFolder === f.id) _lecFolder = f.parent;
  _lecDraw();
  showToast('🗑 Carpeta eliminada');
}


// ═══════════════════════════════════════════════════════════════════
// CARPETAS — Sistema de organización de palabras
// Tablas Supabase: user_folders + columna folder_id en user_words
// ═══════════════════════════════════════════════════════════════════

// ── Estado carpetas ──────────────────────────────────────────────
let _folders = [];           // Array de carpetas cargadas
let _currentFolderId = null; // null = vista carpetas, string = dentro de carpeta
let _selMode = false;        // Modo selección activo
let _selSet  = new Set();    // IDs seleccionados (índice global en getWords())
let _editingFolderId = null; // Para el modal de editar carpeta
const FOLDER_COLORS = ['#4ade80','#60a5fa','#f87171','#fb923c','#a78bfa','#f472b6','#34d399','#fbbf24'];
const FOLDER_DEFAULT_COLOR = '#4ade80';
function _safeFolderColor(color) { return FOLDER_COLORS.includes(color) ? color : FOLDER_DEFAULT_COLOR; }

// ── Caché de carpetas en localStorage ───────────────────────────
function _lsFoldersKey() { return 'folders_' + (currentUser?.id || 'anon'); }
function _cacheFolders(f) { try { localStorage.setItem(_lsFoldersKey(), JSON.stringify((f || []).map(x => ({ ...x, color: _safeFolderColor(x.color) })))); } catch(e) {} }
function _cachedFolders() { try { const s = localStorage.getItem(_lsFoldersKey()); return s ? JSON.parse(s).map(x => ({ ...x, color: _safeFolderColor(x.color) })) : []; } catch(e) { return []; } }

// ── Cargar carpetas de Supabase ──────────────────────────────────
async function loadFolders() {
  _folders = _cachedFolders();
  if (!currentUser || !_dbReady) return;
  try {
    const sb = await getSupabase();
    const { data, error } = await sb
      .from('user_folders')
      .select('id,name,color,created_at')
      .eq('user_id', currentUser.id)
      .order('created_at');
    if (error) { if (error.code === '42P01') return; throw error; }
    _folders = (data || []).map(x => ({ ...x, color: _safeFolderColor(x.color) }));
    _cacheFolders(_folders);
  } catch(e) { console.warn('[folders] load:', e.message); }
}

// ── Crear carpeta ────────────────────────────────────────────────
async function createFolder(name, color) {
  if (!currentUser) return null;
  const tempId = 'tmp_' + Date.now();
  color = _safeFolderColor(color);
  const newF = { id: tempId, name, color };
  _folders.push(newF);
  _cacheFolders(_folders);
  if (!_dbReady) return tempId;
  try {
    const sb = await getSupabase();
    const { data, error } = await sb
      .from('user_folders')
      .insert({ user_id: currentUser.id, name, color: color || FOLDER_DEFAULT_COLOR })
      .select('id,name,color').single();
    if (error) throw error;
    // Reemplazar id temporal
    const idx = _folders.findIndex(f => f.id === tempId);
    if (idx >= 0) _folders[idx] = data;
    _cacheFolders(_folders);
    // Actualizar palabras que apuntaban al id temporal
    const words = getWords();
    words.forEach(w => { if (w.folder_id === tempId) w.folder_id = data.id; });
    saveWords(words);
    return data.id;
  } catch(e) {
    console.warn('[folders] create:', e.message);
    return tempId;
  }
}

async function updateFolder(id, name, color) {
  color = _safeFolderColor(color);
  const f = _folders.find(x => x.id === id);
  if (f) { f.name = name; f.color = color; }
  _cacheFolders(_folders);
  if (!_dbReady) return;
  try {
    const sb = await getSupabase();
    await sb.from('user_folders').update({ name, color }).eq('id', id).eq('user_id', currentUser.id);
  } catch(e) { console.warn('[folders] update:', e.message); }
}

async function deleteFolder(id) {
  // Mover palabras de esa carpeta a sin carpeta
  const words = getWords();
  words.forEach(w => { if (w.folder_id === id) w.folder_id = null; });
  saveWords(words);
  _folders = _folders.filter(f => f.id !== id);
  _cacheFolders(_folders);
  if (!_dbReady) return;
  try {
    const sb = await getSupabase();
    await sb.from('user_folders').delete().eq('id', id).eq('user_id', currentUser.id);
  } catch(e) { console.warn('[folders] delete:', e.message); }
}

// ── Mover palabras a carpeta ─────────────────────────────────────
async function moveWordsToFolder(indices, folderId) {
  const words = getWords();
  indices.forEach(i => { if (words[i]) words[i].folder_id = folderId; });
  saveWords(words);
  // Actualizar en Supabase directamente (por _id)
  if (_dbReady) {
    const ids = indices.map(i => words[i]?._id).filter(Boolean);
    if (ids.length > 0) {
      try {
        const sb = await getSupabase();
        await sb.from('user_words').update({ folder_id: folderId }).in('id', ids);
      } catch(e) { console.warn('[folders] move:', e.message); }
    }
  }
}

// ── renderLista PRINCIPAL — reemplaza la función original ────────
function renderLista() {
  if (_currentFolderId === null) {
    _renderFolderView();
  } else {
    _renderFolderContent(_currentFolderId);
  }
}

// ── Vista de carpetas ────────────────────────────────────────────
function _renderFolderView() {
  _selMode = false; _selSet.clear();

  // Top bar
  const topBar = document.getElementById('listaTopBar');
  if (topBar) topBar.innerHTML = `
    <div class="lista-top-bar-inner">
      <button class="list-action-btn" style="flex:none;padding:7px 14px" data-ui-click="add-open">＋ Añadir</button>
      <button class="list-action-btn" style="flex:none;padding:7px 14px" data-ui-click="import-open">⬆ Importar</button>
    </div>`;

  // Count label
  const lbl = document.getElementById('listaCountLbl');
  if (lbl) lbl.textContent = '';

  // Contar palabras por carpeta
  const words = getWords();
  const countByFolder = {};
  const unassigned = words.filter(w => !w.folder_id).length;
  words.forEach(w => { if (w.folder_id) countByFolder[w.folder_id] = (countByFolder[w.folder_id]||0) + 1; });

  let html = '<div class="folders-grid">';

  // Carpeta "Todas mis palabras"
  html += `<div class="folder-card" data-ui-click="folder-open" data-folder-id="__all__">
    <div class="folder-card-cover" style="background:linear-gradient(135deg,rgba(74,222,128,.18),rgba(96,165,250,.12))">
      <span class="folder-card-icon">📚</span>
    </div>
    <div class="folder-card-body">
      <div class="folder-card-name">Todas</div>
      <div class="folder-card-count">${words.length} palabras</div>
    </div>
  </div>`;

  // Carpeta "Sin carpeta" solo si hay palabras sin asignar
  if (unassigned > 0 || _folders.length === 0) {
    html += `<div class="folder-card" data-ui-click="folder-open" data-folder-id="__none__">
      <div class="folder-card-cover" style="background:linear-gradient(135deg,rgba(122,139,168,.15),rgba(62,79,106,.1))">
        <span class="folder-card-icon">📂</span>
      </div>
      <div class="folder-card-body">
        <div class="folder-card-name">Sin carpeta</div>
        <div class="folder-card-count">${unassigned} palabras</div>
      </div>
    </div>`;
  }

  // Carpetas del usuario
  for (const f of _folders) {
    const count = countByFolder[f.id] || 0;
    const col = _safeFolderColor(f.color);
    const colLight = col + '30';
    html += `<div class="folder-card" data-ui-click="folder-open" data-folder-id="${_esc(f.id)}">
      <div class="folder-card-cover" style="background:linear-gradient(135deg,${colLight},${col}18)">
        <span class="folder-card-icon">🗂️</span>
        <button class="folder-edit-btn" data-ui-click="folder-edit" data-folder-id="${_esc(f.id)}" title="Editar carpeta">✏️</button>
        <button class="folder-menu-btn" data-ui-click="folder-delete" data-folder-id="${_esc(f.id)}" title="Eliminar carpeta">🗑</button>
      </div>
      <div class="folder-card-body">
        <div class="folder-card-name">${_esc(f.name)}</div>
        <div class="folder-card-count">${count} palabras</div>
      </div>
    </div>`;
  }

  // Botón nueva carpeta
  html += `<div class="folder-card new-folder" data-ui-click="folder-new">
    <div class="folder-card-new-inner">
      <div class="folder-card-new-plus">＋</div>
      <div class="folder-card-new-lbl">Nueva carpeta</div>
    </div>
  </div>`;

  html += '</div>';

  document.getElementById('wordList').innerHTML = html;

  // Ocultar sel-bar
  const selBar = document.getElementById('selBar');
  if (selBar) selBar.classList.remove('active');
}

function openFolder(folderId) {
  _currentFolderId = folderId;
  _selMode = false; _selSet.clear();
  _renderFolderContent(folderId);
}

// ── Vista de contenido de carpeta ────────────────────────────────
function _renderFolderContent(folderId) {
  const allWords = getWords();
  const p = getProgress();

  // Filtrar palabras según carpeta
  let words;
  let folderName;
  if (folderId === '__all__') {
    words = allWords; folderName = 'Todas';
  } else if (folderId === '__none__') {
    words = allWords.filter(w => !w.folder_id); folderName = 'Sin carpeta';
  } else {
    const f = _folders.find(x => x.id === folderId);
    folderName = f ? f.name : 'Carpeta';
    words = allWords.filter(w => w.folder_id === folderId);
  }

  // Aplicar filtros tipo/dificultad
  if (activeFilter !== 'Todos') words = words.filter(w => w.tipo === activeFilter);
  if (vocabDiffFilter === '🔴 Difícil') words = words.filter(w => p[w.de]?.difficulty === 1);
  else if (vocabDiffFilter === '🟢 Fácil') words = words.filter(w => p[w.de]?.difficulty === 2);
  else if (vocabDiffFilter === '📊 Normal') words = words.filter(w => !p[w.de] || p[w.de].difficulty === 0);
  else if (vocabDiffFilter === '🆕 Nuevas') words = words.filter(w => !p[w.de] || p[w.de].seen === 0);
  words = getSortedWords(words);

  // Top bar con back + filtros + modo selección
  const topBar = document.getElementById('listaTopBar');
  if (topBar) topBar.innerHTML = `
    <div class="lista-top-bar-inner">
      <button class="lista-back-btn" data-ui-click="folder-close">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="10,2 4,8 10,14"/></svg>
        Carpetas
      </button>
      <span style="font-size:13px;font-weight:600;color:var(--text);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${_esc(folderName)}</span>
      <button class="list-action-btn" style="flex:none;padding:6px 11px;font-size:11px" data-ui-click="add-open">＋</button>
      <button class="list-action-btn" style="flex:none;padding:6px 11px;font-size:11px" data-ui-click="selection-toggle">☑</button>
      <div class="filter-dropdown-wrap" id="listaFilterWrap">
        <button class="filter-dropdown-btn" id="listaFilterBtn" data-ui-click="list-filter-toggle">
          <span id="listaFilterBtnLabel">Filtros</span>
          <span class="fdb-caret">▾</span>
        </button>
        <div class="filter-dropdown-panel" id="listaFilterPanel">
          <div class="fdp-section">
            <div class="fdp-section-label">Tipo</div>
            <div class="fdp-chips" id="fdpTipoChips"></div>
          </div>
          <div class="fdp-divider"></div>
          <div class="fdp-section">
            <div class="fdp-section-label">Dificultad</div>
            <div class="fdp-chips" id="fdpDiffChips"></div>
          </div>
          <div class="fdp-divider"></div>
          <button class="fdp-reset" data-ui-click="list-filter-reset">↺ Quitar filtros</button>
        </div>
      </div>
    </div>`;

  _buildFilterLabel();

  // Etiqueta de conteo
  const lbl = document.getElementById('listaCountLbl');
  if (lbl) lbl.textContent = `${words.length} ${t('words')}`;

  // Tabla
  const TIPO_OPT = ['','Nomen','Verb','Adjektive','Redewendung','Adverb'];
  const ART_OPT  = ['','der','die','das'];
  const allSelChecked = words.length > 0 && words.every(w => {
    const gi = allWords.findIndex(x => x === w);
    return _selSet.has(gi);
  });

  const thead = `<thead>
    <tr>
      ${_selMode ? `<th class="col-act" style="width:36px;padding:0 6px 0 10px"><input type="checkbox" class="row-check" ${allSelChecked?'checked':''} data-ui-change="selection-all" data-indices="${words.map(w=>allWords.findIndex(x=>x===w)).join(',')}" title="Seleccionar todo"></th>` : ''}
      <th class="col-tipo"><span class="th-ico">◉</span>Tipo</th>
      <th class="col-art"><span class="th-ico">◉</span>Art.</th>
      <th class="col-de"><span class="th-ico">Aa</span>Alemán</th>
      <th class="col-es"><span class="th-ico">Aa</span>Español</th>
      <th class="col-act" style="text-align:center"></th>
    </tr>
  </thead>`;

  const rows = words.map(w => {
    const gIdx = allWords.findIndex(x => x === w || (x.de===w.de&&x.es===w.es&&x.tipo===w.tipo&&x.articulo===w.articulo));
    const pe = p[w.de]||{};
    const pct = pe.seen>0 ? Math.round(pe.correct/pe.seen*100) : -1;
    const col = pct>=75?'var(--green)':pct>=40?'var(--orange)':'var(--red)';
    const diffDot = pe.difficulty===1
      ? '<span class="diff-dot" style="background:var(--red)"></span>'
      : pe.difficulty===2 ? '<span class="diff-dot" style="background:var(--green)"></span>' : '';
    const progMini = pct>=0
      ? `<div class="prog-mini"><div class="prog-mini-track"><div class="prog-mini-fill" style="width:${pct}%;background:${col}"></div></div><span class="prog-mini-pct" style="color:${col}">${pct}%</span></div>`
      : '';
    const isSel = _selSet.has(gIdx);
    const selClass = isSel ? 'row-selected' : '';
    const checkCell = _selMode
      ? `<td class="td-check"><input type="checkbox" class="row-check" ${isSel?'checked':''} data-ui-change="selection-row" data-index="${gIdx}"></td>`
      : '';

    if (_editingIdx === gIdx) {
      const tipoOpts = TIPO_OPT.map(o=>`<option value="${o}" ${w.tipo===o?'selected':''}>${o||'—'}</option>`).join('');
      const artOpts  = ART_OPT.map(o =>`<option value="${o}" ${w.articulo===o?'selected':''}>${o||'—'}</option>`).join('');
      return `<tr class="row-editing ${selClass}" id="row-${gIdx}">
        ${checkCell}
        <td class="td-tipo"><select class="cell-select" id="edit-tipo">${tipoOpts}</select></td>
        <td class="td-art"><select class="cell-select" id="edit-art">${artOpts}</select></td>
        <td class="td-de"><input class="cell-input" id="edit-de" value="${_esc(w.de)}"></td>
        <td class="td-es"><input class="cell-input" id="edit-es" value="${_esc(w.es)}"></td>
        <td class="td-actions">
          <button class="row-btn save-btn" data-ui-click="row-save" data-index="${gIdx}">✓</button>
          <button class="row-btn cancel-btn" data-ui-click="row-cancel">✕</button>
        </td>
      </tr>`;
    }

    const tdAct = (f) => `data-ui-click="cell-edit" data-index="${gIdx}" data-field="${f}"`;
    return `<tr id="row-${gIdx}" class="${selClass}" ${_selMode?`data-ui-click="selection-toggle-row" data-index="${gIdx}"`:''} style="${_selMode?'cursor:pointer':''}">
      ${checkCell}
      <td class="td-tipo" ${tdAct('tipo')}>${w.tipo?`<span class="tipo-badge ${_esc(w.tipo)}">${_esc(w.tipo)}</span>`:''}</td>
      <td class="td-art" ${tdAct('articulo')}>${w.articulo?`<span class="art-tag ${_esc(w.articulo)}">${_esc(w.articulo)}</span>`:''}</td>
      <td class="td-de" ${tdAct('de')}>${diffDot}<span>${_esc(w.de)}</span>${progMini}</td>
      <td class="td-es" ${tdAct('es')}>${_esc(w.es)}</td>
      <td class="td-actions">
        <button class="row-btn" data-ui-click="row-menu" data-index="${gIdx}" aria-label="Más opciones">⋯</button>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('wordList').innerHTML =
    `<table class="vocab-table">${thead}<tbody>${rows}</tbody></table>
     <div class="notion-add-row" data-ui-click="add-open">＋ Nueva palabra</div>`;

  // Sel-bar (barra de acciones de selección)
  _renderSelBar();
}

function closeFolder() {
  _currentFolderId = null;
  _selMode = false; _selSet.clear();
  _editingIdx = null;
  loadFolders().then(() => _renderFolderView());
}

// ── Modo selección ───────────────────────────────────────────────
function toggleSelMode() {
  _selMode = !_selMode;
  _selSet.clear();
  _renderFolderContent(_currentFolderId);
}

function toggleSelRow(gIdx, checked) {
  if (checked === undefined) {
    // toggle
    if (_selSet.has(gIdx)) _selSet.delete(gIdx); else _selSet.add(gIdx);
  } else {
    if (checked) _selSet.add(gIdx); else _selSet.delete(gIdx);
  }
  _renderSelBar();
  // Actualizar checkbox de la fila
  const chk = document.querySelector(`#row-${gIdx} .row-check`);
  if (chk) chk.checked = _selSet.has(gIdx);
  const row = document.getElementById(`row-${gIdx}`);
  if (row) row.classList.toggle('row-selected', _selSet.has(gIdx));
  // Actualizar checkbox de cabecera
  _updateHeaderCheck();
}

function toggleSelAll(checked, indices) {
  if (checked) indices.forEach(i => _selSet.add(i));
  else indices.forEach(i => _selSet.delete(i));
  _renderSelBar();
  // Refrescar checkboxes sin re-renderizar tabla
  indices.forEach(i => {
    const chk = document.querySelector(`#row-${i} .row-check`);
    if (chk) chk.checked = checked;
    const row = document.getElementById(`row-${i}`);
    if (row) row.classList.toggle('row-selected', checked);
  });
}

function _updateHeaderCheck() {
  const allWords = getWords();
  const fWords = _getVisibleIndices();
  const allSel = fWords.length > 0 && fWords.every(i => _selSet.has(i));
  const hchk = document.querySelector('thead .row-check');
  if (hchk) hchk.checked = allSel;
}

function _getVisibleIndices() {
  const rows = document.querySelectorAll('#wordList tbody tr');
  const indices = [];
  rows.forEach(r => {
    const id = r.id?.replace('row-','');
    if (id !== undefined && id !== '') indices.push(parseInt(id));
  });
  return indices;
}

function _renderSelBar() {
  // Inyectar sel-bar si no existe
  let bar = document.getElementById('selBar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'selBar';
    bar.className = 'sel-bar';
    document.querySelector('.lista-table-zone')?.appendChild(bar);
  }
  if (!_selMode || _currentFolderId === null) { bar.classList.remove('active'); return; }
  bar.classList.add('active');
  const n = _selSet.size;
  const selArr = [..._selSet];
  bar.innerHTML = `
    <span class="sel-count">${n} seleccionada${n!==1?'s':''}</span>
    <button class="sel-action-btn primary" data-ui-click="selection-move" ${n===0?'disabled':''}>📁 Mover</button>
    <button class="sel-action-btn danger" data-ui-click="selection-delete" ${n===0?'disabled':''}>🗑 Eliminar</button>
    <button class="sel-action-btn" data-ui-click="selection-toggle">✕ Cancelar</button>`;
}

// ── Modal mover palabras ─────────────────────────────────────────
function showMoveModal() {
  if (_selSet.size === 0) return;
  const count = document.getElementById('moveModalCount');
  if (count) count.textContent = _selSet.size + ' palabra' + (_selSet.size!==1?'s':'');
  const cont = document.getElementById('moveModalFolders');
  if (!cont) return;
  const currentFid = _currentFolderId;

  let html = '';
  // Opción "Sin carpeta"
  if (currentFid !== '__none__') {
    html += `<button class="folder-move-opt" data-ui-click="folder-move-none">
      <span style="font-size:20px">📂</span>
      <span style="font-size:13px;font-weight:500;color:var(--text)">Sin carpeta</span>
    </button>`;
  }
  // Carpetas existentes
  for (const f of _folders) {
    if (f.id === currentFid) continue;
    html += `<button class="folder-move-opt" data-ui-click="folder-move" data-folder-id="${_esc(f.id)}">
      <span style="width:14px;height:14px;border-radius:50%;background:${_safeFolderColor(f.color)};display:inline-block;flex-shrink:0"></span>
      <span style="font-size:13px;font-weight:500;color:var(--text)">${_esc(f.name)}</span>
    </button>`;
  }
  // Nueva carpeta
  html += `<button class="folder-move-opt" data-ui-click="folder-move-new">
    <span style="font-size:20px">＋</span>
    <span style="font-size:13px;font-weight:500;color:var(--text2)">Nueva carpeta…</span>
  </button>`;

  cont.innerHTML = html;
  openModal('moveModal');
}

async function confirmMoveWords(folderId) {
  closeModal('moveModal');
  const indices = [..._selSet];
  await moveWordsToFolder(indices, folderId);
  _selMode = false; _selSet.clear();
  showToast(`✓ ${indices.length} palabra${indices.length!==1?'s':''} movida${indices.length!==1?'s':''}`);
  _renderFolderContent(_currentFolderId);
}

async function deleteSelWords() {
  const n = _selSet.size;
  if (!confirm(`¿Eliminar ${n} palabra${n!==1?'s':''}?`)) return;
  const indices = [..._selSet].sort((a,b) => b-a); // mayor primero para no desplazar índices
  const words = getWords();
  indices.forEach(i => words.splice(i, 1));
  saveWords(words);
  _selMode = false; _selSet.clear();
  showToast(`🗑 ${n} palabra${n!==1?'s':''} eliminada${n!==1?'s':''}`);
  _renderFolderContent(_currentFolderId);
  updateStats();
}

// ── Modal carpeta (crear / editar) ───────────────────────────────
let _folderMoveAfterCreate = false;

function showFolderModal(folderId, moveAfter) {
  _editingFolderId = folderId || null;
  _folderMoveAfterCreate = !!moveAfter;
  const isEdit = !!folderId;
  const f = isEdit ? _folders.find(x => x.id === folderId) : null;
  const titleEl = document.getElementById('folderModalTitle');
  if (titleEl) titleEl.textContent = isEdit ? 'Editar carpeta' : 'Nueva carpeta';
  const nameEl = document.getElementById('folderNameInput');
  if (nameEl) { nameEl.value = isEdit ? (f?.name||'') : ''; }
  const errEl = document.getElementById('folderModalErr');
  if (errEl) errEl.textContent = '';
  // Color picker
  const pickerEl = document.getElementById('folderColorPicker');
  const currentColor = isEdit ? _safeFolderColor(f?.color) : FOLDER_DEFAULT_COLOR;
  if (pickerEl) {
    pickerEl.innerHTML = FOLDER_COLORS.map(c =>
      `<div class="folder-color-swatch ${c===currentColor?'active':''}" style="background:${c}" data-color="${c}" data-ui-click="folder-color"></div>`
    ).join('');
  }
  openModal('folderModal');
  setTimeout(() => nameEl?.focus(), 120);
}

function selectFolderColor(el) {
  document.querySelectorAll('.folder-color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
}

async function saveFolderModal() {
  const name = (document.getElementById('folderNameInput')?.value||'').trim();
  const errEl = document.getElementById('folderModalErr');
  if (!name) { if(errEl) errEl.textContent = 'El nombre es obligatorio'; return; }
  const colorEl = document.querySelector('.folder-color-swatch.active');
  const color = _safeFolderColor(colorEl?.dataset.color);
  closeModal('folderModal');
  if (_editingFolderId) {
    await updateFolder(_editingFolderId, name, color);
    showToast('✓ Carpeta actualizada');
    _renderFolderView();
  } else {
    const newId = await createFolder(name, color);
    showToast('✓ Carpeta creada: ' + name);
    if (_folderMoveAfterCreate && _selSet.size > 0) {
      await confirmMoveWords(newId);
    } else {
      _renderFolderView();
    }
  }
}

// ── Menú de opciones de carpeta ──────────────────────────────────
function showFolderMenu(folderId, triggerEl) {
  const f = _folders.find(x => x.id === folderId);
  if (!f) return;
  // Usar un confirm sencillo para no añadir otro modal
  // En su lugar mostrar un pequeño dropdown inline
  const existing = document.getElementById('folderCtxMenu');
  if (existing) existing.remove();

  const menu = document.createElement('div');
  menu.id = 'folderCtxMenu';
  menu.style.cssText = `position:fixed;z-index:500;background:var(--surface);border:1px solid var(--border);
    border-radius:var(--r-lg);box-shadow:var(--shadow-lg);min-width:160px;overflow:hidden;animation:dropIn .12s ease both`;

  menu.innerHTML = `
    <button data-ui-click="folder-menu-edit" data-folder-id="${_esc(folderId)}" class="folder-context-hover" style="display:flex;align-items:center;gap:9px;width:100%;padding:12px 14px;background:none;border:none;font-family:Inter,sans-serif;font-size:13px;font-weight:500;color:var(--text);cursor:pointer;text-align:left">
      ✏️ Editar
    </button>
    <button data-ui-click="folder-menu-delete" data-folder-id="${_esc(folderId)}" class="folder-context-hover" style="display:flex;align-items:center;gap:9px;width:100%;padding:12px 14px;background:none;border:none;font-family:Inter,sans-serif;font-size:13px;font-weight:500;color:var(--red);cursor:pointer;text-align:left">
      🗑 Eliminar
    </button>`;

  // Posicionar cerca del botón que llamó
  document.body.appendChild(menu);
  const rect = (triggerEl || document.activeElement).getBoundingClientRect();
  let top = rect.bottom + 4;
  let left = rect.right - 160;
  if (left < 8) left = 8;
  if (top + 100 > window.innerHeight) top = rect.top - 100;
  menu.style.top = top + 'px';
  menu.style.left = left + 'px';

  setTimeout(() => {
    document.addEventListener('click', function h() {
      menu.remove();
      document.removeEventListener('click', h);
    }, { once: true });
  }, 50);
}

async function confirmDeleteFolder(folderId) {
  const f = _folders.find(x => x.id === folderId);
  if (!f) return;
  const count = getWords().filter(w => w.folder_id === folderId).length;
  const msg = count > 0
    ? `¿Eliminar la carpeta "${f.name}"? Las ${count} palabras pasarán a "Sin carpeta".`
    : `¿Eliminar la carpeta "${f.name}"?`;
  if (!confirm(msg)) return;
  await deleteFolder(folderId);
  showToast('🗑 Carpeta eliminada');
  _renderFolderView();
}

// ── Estilo inline para folder-move-opt ──────────────────────────
(function _injectFolderMoveStyle() {
  const s = document.createElement('style');
  s.textContent = `.folder-move-opt{display:flex;align-items:center;gap:10px;width:100%;padding:12px 14px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);font-family:Inter,sans-serif;cursor:pointer;transition:border-color .13s,background .13s;text-align:left}.folder-move-opt:hover{background:var(--surface2);border-color:var(--border2)}`;
  document.head.appendChild(s);
})();

// ── Integrar loadFolders en el login ────────────────────────────
// Se llama tras loadUserData en onLoginSuccess — hook mínimo
const _origLoadUserData = loadUserData;
loadUserData = async function() {
  await _origLoadUserData();
  await loadFolders();
};

(function(){
  if(!('serviceWorker' in navigator)) return;
  window.addEventListener('load',()=>{
    navigator.serviceWorker.register('sw.js').then(()=>console.log('[SW] ready')).catch(e=>console.warn('[SW]',e));
  });
})();


// ── Edición de celdas en popup (estilo Notion) ───────────────────
const _CELL_FIELDS = {
  tipo:     { label:'Tipo',     kind:'select', opts:['Nomen','Verb','Adjektive','Redewendung','Adverb'] },
  articulo: { label:'Artículo', kind:'select', opts:['der','die','das'] },
  de:       { label:'Alemán',   kind:'text',   required:true },
  es:       { label:'Español',  kind:'text',   required:true }
};
let _cellPop = null, _cellTd = null;

function _cellPopEnsure() {
  if (_cellPop) return _cellPop;
  const ov = document.createElement('div');
  ov.id = 'cellPopOverlay';
  ov.className = 'cell-pop-overlay';
  ov.innerHTML = '<div class="cell-pop" id="cellPop" role="dialog" aria-modal="true"></div>';
  ov.addEventListener('click', e => { if (e.target === ov) closeCellPop(); });
  document.body.appendChild(ov);
  // iOS: con el teclado abierto el visual viewport cambia; el popup se ajusta para no quedar tapado
  const vv = window.visualViewport;
  if (vv) {
    ov._fit = () => { ov.style.top = vv.offsetTop + 'px'; ov.style.height = vv.height + 'px'; };
    vv.addEventListener('resize', ov._fit);
    vv.addEventListener('scroll', ov._fit);
  }
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && ov.classList.contains('show')) closeCellPop(); });
  _cellPop = ov;
  return ov;
}

function _cellTag(field, val) {
  return field === 'tipo'
    ? `<span class="tipo-badge ${_esc(val)}">${_esc(val)}</span>`
    : `<span class="art-tag ${_esc(val)}">${_esc(val)}</span>`;
}

function _cellPopShow(html, td) {
  const ov = _cellPopEnsure();
  ov.querySelector('#cellPop').innerHTML = html;
  if (_cellTd) _cellTd.classList.remove('cell-active');
  _cellTd = td || null;
  if (_cellTd) _cellTd.classList.add('cell-active');
  ov.classList.add('show');
  if (ov._fit) ov._fit();
  return ov;
}

function openCellEdit(gIdx, field, td) {
  if (_selMode) return;
  const w = getWords()[gIdx];
  const cfg = _CELL_FIELDS[field];
  if (!w || !cfg) return;
  const cur = w[field] || '';
  const head = `<div class="cell-pop-head"><span class="cell-pop-prop">${cfg.label}</span><span class="cell-pop-word">${_esc(w.de)}</span></div>`;

  if (cfg.kind === 'select') {
    const rows = ['', ...cfg.opts].map(o => `
      <button type="button" class="cell-opt${o === cur ? ' sel' : ''}" data-ui-click="cell-option" data-index="${gIdx}" data-field="${field}" data-value="${_esc(o)}">
        ${o ? _cellTag(field, o) : '<span class="cell-opt-none">Sin valor</span>'}
        ${o === cur ? '<span class="cell-opt-check">✓</span>' : ''}
      </button>`).join('');
    _cellPopShow(head + `<div class="cell-opt-list">${rows}</div>`, td);
    return;
  }

  _cellPopShow(head + `
    <textarea id="cellPopInput" class="cell-pop-input" rows="3" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false">${_esc(cur)}</textarea>
    <div class="cell-pop-actions">
      <button type="button" class="cell-pop-btn" data-ui-click="cell-close">Cancelar</button>
      <button type="button" class="cell-pop-btn primary" data-ui-click="cell-save" data-index="${gIdx}" data-field="${field}">Guardar</button>
    </div>`, td);
  // focus dentro del gesto del toque: iOS solo abre el teclado así
  const ta = document.getElementById('cellPopInput');
  ta.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); saveCellPop(gIdx, field); }
  });
  ta.focus();
  ta.setSelectionRange(ta.value.length, ta.value.length);
}

function closeCellPop() {
  const ov = _cellPop;
  if (!ov) return;
  if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
  ov.classList.remove('show');
  ov.style.top = ''; ov.style.height = '';
  if (_cellTd) { _cellTd.classList.remove('cell-active'); _cellTd = null; }
}

function pickCellOption(gIdx, field, val) {
  const w = getWords()[gIdx];
  closeCellPop();
  if (w && (w[field] || '') !== val) _commitCell(gIdx, field, val);
}

function saveCellPop(gIdx, field) {
  const cfg = _CELL_FIELDS[field];
  const val = (document.getElementById('cellPopInput')?.value || '').trim();
  if (cfg.required && !val) { showToast(`⚠ ${cfg.label} es obligatorio`); return; }
  const w = getWords()[gIdx];
  closeCellPop();
  if (w && (w[field] || '') !== val) _commitCell(gIdx, field, val);
}

function _commitCell(gIdx, field, value) {
  const allWords = getWords();
  const oldWord = allWords[gIdx];
  if (!oldWord) return;
  const oldDE = oldWord.de;
  allWords[gIdx] = { ...oldWord, [field]: value };
  if (field === 'de' && oldDE !== value) {
    const prog = getProgress();
    if (prog[oldDE]) { prog[value] = prog[oldDE]; delete prog[oldDE]; saveProgress(prog); }
  }
  saveWords(allWords);
  renderLista();
  updateStats();
  showToast('✓ Guardado');
}

function openRowMenu(gIdx) {
  const w = getWords()[gIdx];
  if (!w) return;
  _cellPopShow(`
    <div class="cell-pop-head"><span class="cell-pop-prop">Palabra</span><span class="cell-pop-word">${_esc(displayDE(w))} — ${_esc(w.es)}</span></div>
    <div class="cell-opt-list">
      <button type="button" class="cell-opt danger" data-ui-click="cell-delete" data-index="${gIdx}">🗑 Eliminar palabra</button>
    </div>
    <div class="cell-pop-actions"><button type="button" class="cell-pop-btn" data-ui-click="cell-close">Cerrar</button></div>`, null);
}

// Delegación explícita de eventos: permite bloquear por CSP los atributos onclick.
function _handleUiClick(event) {
  const el = event.target.closest('[data-ui-click]');
  if (!el) return;
  if (el.dataset.uiClick === 'selection-toggle-row' && event.target.closest('[data-ui-change]')) return;
  const index = Number(el.dataset.index);
  switch (el.dataset.uiClick) {
    case 'theme': toggleTheme(); break;
    case 'pass-toggle': togglePassVis(); break;
    case 'login': doLogin(); break;
    case 'install-open': showInstallModal(); break;
    case 'user-dropdown': toggleUserDropdown(); break;
    case 'lang-es': setLang('es'); break;
    case 'lang-de': setLang('de'); break;
    case 'profile-open': closeDropdown(); navigate('perfil', 'forward'); break;
    case 'sync-manual': closeDropdown(); manualSync(); break;
    case 'logout': doLogout(); break;
    case 'logout-confirm': if (confirm('¿Cerrar sesión?')) doLogout(); break;
    case 'nav-vocab': navigate('vocab-hub', 'forward'); break;
    case 'nav-reading': navigate('lectura', 'forward'); break;
    case 'nav-grammar': navigate('grammar', 'forward'); break;
    case 'nav-home-back': navigate('home', 'back'); break;
    case 'nav-tab': _navClick(el.dataset.page); break;
    case 'prog-range': progSetRange(el.dataset.range); break;
    case 'prog-bar': progSelectBar(+el.dataset.i); break;
    case 'nav-collapse': toggleNavCollapsed(); break;
    case 'nav-hub-back': navigate('vocab-hub', 'back'); break;
    case 'nav-lista': navigate('lista', 'forward'); break;
    case 'nav-parejas': navigate('parejas', 'forward'); break;
    case 'nav-crucigrama': navigate('crucigrama', 'forward'); break;
    case 'nav-velocidad': navigate('velocidad', 'forward'); break;
    case 'copy-sql': copySql(); break;
    case 'match-settings': toggleMatchCfg(); break;
    case 'cw-source-smart': setCwSource('smart'); break;
    case 'cw-source-bag': setCwSource('bag'); break;
    case 'speed-back': stopSpeedGame(); navigate('vocab-hub', 'back'); break;
    case 'save-name': saveNombre(); break;
    case 'reading-exit': exitLectura(); break;
    case 'reading-view': toggleLecturaView(); break;
    case 'reading-full': toggleLecturaFull(); break;
    case 'reading-font-panel': toggleLecturaFontPanel(); break;
    case 'reading-font-down': adjLecturaFont(-1); break;
    case 'reading-font-up': adjLecturaFont(1); break;
    case 'reading-width': setLecturaWidth(el.dataset.value); break;
    case 'reading-theme': setLecturaTheme(el.dataset.value); break;
    case 'reading-file-open': document.getElementById('lecturaFileIn').click(); break;
    case 'reading-url-open': openLecturaUrl(document.getElementById('lecturaUrlIn').value); break;
    case 'reading-url-prompt': { const url = prompt('Pega el enlace de la página:'); if (url) openLecturaUrl(url); break; }
    case 'lec-info': openModal('lecturaInfoModal'); break;
    case 'lec-new-folder': _lecOpenName('new-folder'); break;
    case 'lec-open-folder': _lecOpenFolder(el.dataset.folderId); break;
    case 'lec-menu': event.stopPropagation(); _lecOpenMenu(el.dataset.kind, el.dataset.id); break;
    case 'lec-rename': closeModal('lecMenuModal'); _lecOpenName('rename'); break;
    case 'lec-folder-edit': event.stopPropagation(); _lecSel = { kind: 'folder', id: el.dataset.id }; _lecOpenName('rename'); break;
    case 'lec-folder-delete': event.stopPropagation(); _lecSel = { kind: 'folder', id: el.dataset.id }; _lecDeleteFolder(); break;
    case 'lec-move-edit': closeModal('lecNameModal'); _lecOpenMove(); break;
    case 'lec-move': _lecOpenMove(); break;
    case 'lec-move-to': _lecMoveTo(el.dataset.folderId); break;
    case 'lec-delete': _lecDeleteFolder(); break;
    case 'lec-name-save': _lecSaveName(); break;
    case 'bk-prev': bookTurn(-1); break;
    case 'bk-next': bookTurn(1); break;
    case 'bk-opt': bkSetOpt(el.dataset.key, el.dataset.value); break;
    case 'bk-size': bkAdjSize(Number(el.dataset.delta)); break;
    case 'reading-prev': lecturaChangePage(-1); break;
    case 'reading-next': lecturaChangePage(1); break;
    case 'popup-save': savePopupWord(); break;
    case 'popup-link': openPopupLink(); break;
    case 'popup-close': closeLecturaPopup(); break;
    case 'save-folder': saveFolderModal(); break;
    case 'save-word': saveWord(); break;
    case 'import-file-open': document.getElementById('importFileInput').click(); break;
    case 'import-confirm': confirmImport(); break;
    case 'list-filter-type': setListaFilter(el.dataset.value); break;
    case 'list-filter-diff': setListaDiff(el.dataset.value); break;
    case 'row-save': saveEditRow(index); break;
    case 'row-cancel': cancelEditRow(); break;
    case 'row-edit': startEditRow(index); break;
    case 'row-delete': deleteRow(index); break;
    case 'match-mode': setMatchMode(el.dataset.value); break;
    case 'match-filter': setMatchFilter(el.dataset.value); break;
    case 'match-adjust': adjustMatchSetting(el.dataset.setting, Number(el.dataset.delta)); break;
    case 'match-apply': applyMatchCfg(); break;
    case 'match-round-start': startRoundSession(); break;
    case 'match-next': startMatch(); break;
    case 'match-card': selectCard(el.dataset.language, index); break;
    case 'speed-duration': setSpeedDuration(Number(el.dataset.value)); break;
    case 'speed-type': setSpeedTipo(el.dataset.value); break;
    case 'speed-start': startSpeedGame(); break;
    case 'speed-card': speedSelect(el.dataset.language, index); break;
    case 'speed-setup': renderSpeedSetup(); break;
    case 'crossword-clue': cwClueCardClick(Number(el.dataset.number), el.dataset.direction, el); break;
    case 'crossword-check': checkCrossword(); break;
    case 'crossword-reveal': revealCrossword(); break;
    case 'crossword-new': buildCrossword(); break;
    case 'crossword-clear-bag': if (confirm('¿Vaciar la bolsa?')) { clearBag(); buildCrossword(); } break;
    case 'book-open': openBookFromLibrary(el.dataset.bookId); break;
    case 'book-delete': event.stopPropagation(); deleteBook(el.dataset.bookId); break;
    case 'reading-word': lecturaWordTap(el); break;
    case 'add-open': showAddModal(); break;
    case 'import-open': showImportModal(); break;
    case 'folder-open': openFolder(el.dataset.folderId); break;
    case 'folder-edit': event.stopPropagation(); showFolderModal(el.dataset.folderId); break;
    case 'folder-delete': event.stopPropagation(); confirmDeleteFolder(el.dataset.folderId); break;
    case 'folder-new': showFolderModal(null); break;
    case 'folder-close': closeFolder(); break;
    case 'selection-toggle': toggleSelMode(); break;
    case 'list-filter-toggle': toggleListaFilterPanel(event); break;
    case 'list-filter-reset': resetListaFilters(); break;
    case 'selection-move': showMoveModal(); break;
    case 'selection-delete': deleteSelWords(); break;
    case 'folder-move-none': confirmMoveWords(null); break;
    case 'folder-move': confirmMoveWords(el.dataset.folderId); break;
    case 'folder-move-new': closeModal('moveModal'); showFolderModal(null, true); break;
    case 'folder-color': selectFolderColor(el); break;
    case 'folder-menu-edit': showFolderModal(el.dataset.folderId); document.getElementById('folderCtxMenu')?.remove(); break;
    case 'folder-menu-delete': confirmDeleteFolder(el.dataset.folderId); document.getElementById('folderCtxMenu')?.remove(); break;
    case 'cell-edit': if (_selMode) toggleSelRow(index); else openCellEdit(index, el.dataset.field, el); break;
    case 'row-menu': event.stopPropagation(); openRowMenu(index); break;
    case 'selection-toggle-row': toggleSelRow(index); break;
    case 'cell-option': pickCellOption(index, el.dataset.field, el.dataset.value); break;
    case 'cell-close': closeCellPop(); break;
    case 'cell-save': saveCellPop(index, el.dataset.field); break;
    case 'cell-delete': closeCellPop(); deleteRow(index); break;
  }
}

document.addEventListener('click', event => {
  const stopContainer = event.target.closest('[data-ui-stop]');
  if (stopContainer) {
    event.stopPropagation();
    const action = event.target.closest('[data-ui-click]');
    if (!action || !stopContainer.contains(action)) return;
  }
  _handleUiClick(event);
  const closeId = event.target.closest('[data-ui-modal-close]')?.dataset.uiModalClose;
  if (closeId) closeModal(closeId);
  const overlay = event.target.closest('[data-ui-overlay]');
  if (overlay && event.target === overlay) closeModal(overlay.dataset.uiOverlay);
});
document.addEventListener('change', event => {
  const el = event.target.closest('[data-ui-change]');
  if (!el) return;
  switch (el.dataset.uiChange) {
    case 'theme-check': toggleTheme(); break;
    case 'reading-file': handleLecturaFile(event); break;
    case 'import-file': handleImportFile(event); break;
    case 'selection-row': toggleSelRow(Number(el.dataset.index), el.checked); break;
    case 'selection-all': toggleSelAll(el.checked, el.dataset.indices.split(',').filter(Boolean).map(Number)); break;
  }
});
document.addEventListener('keydown', event => {
  const el = event.target.closest('[data-ui-enter], [data-ui-keydown]');
  if (!el) return;
  if (el.dataset.uiEnter && event.key === 'Enter') {
    if (el.dataset.uiEnter === 'login') doLogin();
    if (el.dataset.uiEnter === 'reading-url') openLecturaUrl(el.value);
    if (el.dataset.uiEnter === 'save-folder') saveFolderModal();
    if (el.dataset.uiEnter === 'lec-name') _lecSaveName();
  }
  if (el.dataset.uiKeydown === 'crossword-navigation') cwNav(event, Number(el.dataset.row), Number(el.dataset.col));
});
document.addEventListener('input', event => {
  const el = event.target.closest('[data-ui-input="crossword-input"]');
  if (el) cwInput(el);
});
document.addEventListener('focusin', event => {
  const el = event.target.closest('[data-ui-focus="crossword-focus"]');
  if (el) cwFocusCell(Number(el.dataset.row), Number(el.dataset.col));
});
document.addEventListener('dragover', event => {
  const zone = event.target.closest('[data-ui-dropzone]');
  if (zone) { event.preventDefault(); zone.classList.add('drag'); }
});
document.addEventListener('dragleave', event => {
  event.target.closest('[data-ui-dropzone]')?.classList.remove('drag');
});
document.addEventListener('drop', event => {
  const zone = event.target.closest('[data-ui-dropzone]');
  if (zone) { event.preventDefault(); handleImportDrop(event); }
});
