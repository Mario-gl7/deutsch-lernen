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
  }
};

let currentLang = localStorage.getItem('lang') || 'es';
function t(key) { return TRANSLATIONS[currentLang][key] || TRANSLATIONS['es'][key] || key; }

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  // Update pill states
  document.getElementById('langBtnEs')?.classList.toggle('active', lang === 'es');
  document.getElementById('langBtnDe')?.classList.toggle('active', lang === 'de');
  applyTranslations();
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
  setText2('.home-hero-eyebrow', t('workspace'));
  const heroTitle = document.querySelector('.home-hero-title');
  if (heroTitle) heroTitle.innerHTML = t('greeting') + '<br><em id="greetName">' + (document.getElementById('greetName')?.textContent || '…') + '</em>';
  setText2('.home-hero-sub', t('homeSub'));
  // Workspace cards
  const wsCards = document.querySelectorAll('.ws-card:not(.coming) .ws-card-title');
  if (wsCards[0]) wsCards[0].textContent = t('vocabTitle');
  const wsDescs = document.querySelectorAll('.ws-card:not(.coming) .ws-card-desc');
  if (wsDescs[0]) wsDescs[0].textContent = t('vocabDesc');
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
  await loadScript('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/dist/umd/supabase.min.js');
  _supabase = window.supabase.createClient(_cfg.url, _cfg.key);
  return _supabase;
}
function loadScript(src) {
  return new Promise((res, rej) => {
    if (document.querySelector(`script[src="${src}"]`)) { res(); return; }
    const s = document.createElement('script');
    s.src = src; s.onload = res; s.onerror = rej;
    document.head.appendChild(s);
  });
}

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
}
function toggleTheme() { applyTheme(document.body.classList.contains('light')); }
applyTheme(localStorage.getItem('theme') !== 'light');

// ═══════════════════ AUTH GUARD ═══════════════════
const PROTECTED_PAGES = new Set(['home','vocab-hub','lista','parejas','crucigrama','velocidad','perfil','grammar','lectura']);

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
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => { p.classList.remove('active','anim-in','anim-back'); });
  document.getElementById('page-' + id).classList.add('active');
  currentPage = id;
}
function navigate(to, dir = 'forward') {
  // AUTH GUARD — block unauthenticated access to protected pages
  if (PROTECTED_PAGES.has(to) && !currentUser) {
    console.warn('[Auth] Blocked navigation to', to, '— not authenticated');
    showPage('login');
    return;
  }
  const outEl = document.getElementById('page-' + currentPage);
  const inEl  = document.getElementById('page-' + to);
  if (!inEl) return;
  // Instantly hide old
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active','anim-in','anim-back'));
  inEl.classList.add('active', dir === 'forward' ? 'anim-in' : 'anim-back');
  currentPage = to;
  // Page-specific setup
  if (to === 'lista') renderLista();
  if (to === 'parejas') { renderMatchFilters(); }
  if (to === 'crucigrama') { updateBagCount(); buildCrossword(); }
  if (to === 'velocidad') { stopSpeedGame(); renderSpeedSetup(); }
  if (to === 'perfil') { renderPerfil(); }
  if (to === 'lectura') { onLecturaEnter(); }
}

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
    const sb = await getSupabase();
    const { data, error } = await sb.auth.signInWithPassword({ email, password: pass });
    if (error) {
      _rl.record();
      err.textContent = error.message === 'Invalid login credentials' ? t('errBadLogin') : error.message;
      return;
    }
    _rl.reset();
    onLoginSuccess(data.user);
  } catch(e) { err.textContent = t('errConnection'); }
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

async function doLogout() {
  closeDropdown();
  _onLoginSuccessFired = false;
  try { localStorage.removeItem(STATE_KEY); } catch(e) {}
  try { const sb = await getSupabase(); await sb.auth.signOut(); } catch(e) {}
  // Clear all sensitive state
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
    }
  } catch(e) { console.warn('[sync] seed:', e.message); }
}

// ── Save words — cache instantly, flush to DB debounced ──
function saveWords(words) {
  _cacheWords(words);
  updateStats();
  if (!_dbReady) return;
  clearTimeout(_wordsDebounceTimer);
  _wordsDebounceTimer = setTimeout(() => _flushWords(words), 900);
}

async function _flushWords(words) {
  if (!currentUser || !_dbReady) return;
  setSyncState('syncing', 'Guardando…');
  try {
    const sb = await getSupabase();
    // Strategy: delete-all + re-insert keeps things simple and consistent
    const { error: delErr } = await sb.from('user_words').delete().eq('user_id', currentUser.id);
    if (delErr) throw delErr;
    if (words.length > 0) {
      const rows = words.map(w => ({ user_id:currentUser.id, tipo:w.tipo||'', articulo:w.articulo||'', de:w.de, es:w.es, folder_id:w.folder_id||null }));
      const { data, error } = await sb.from('user_words').insert(rows).select('id,tipo,articulo,de,es,folder_id');
      if (error) throw error;
      if (data) _cacheWords(data.map(r => ({ tipo:r.tipo||'', articulo:r.articulo||'', de:r.de, es:r.es, _id:r.id, folder_id:r.folder_id||null })));
    }
    setSyncState('ok', 'Guardado ✓');
  } catch(e) {
    console.warn('[sync] flushWords:', e.message);
    setSyncState('error', 'Error al guardar');
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
    return `<button class="fdp-chip ${isActive ? 'active' : ''}" onclick="setListaFilter('${k}')">${TIPOS[i]}</button>`;
  }).join('');

  const diffEl = document.getElementById('fdpDiffChips');
  if (diffEl) diffEl.innerHTML = DIFF_FILTER_KEYS.map((k,i) => {
    const isActive = k === vocabDiffFilter;
    const cls = isActive ? (diffActiveClass[k] || 'active') : '';
    return `<button class="fdp-chip ${cls}" onclick="setListaDiff('${k.replace(/'/g,"\\'")}')">${DIFF_FILTERS[i]}</button>`;
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
          <button class="row-btn save-btn" onclick="saveEditRow(${gIdx})" title="Guardar">✓</button>
          <button class="row-btn cancel-btn" onclick="cancelEditRow()" title="Cancelar">✕</button>
        </td>
      </tr>`;
    }

    return `<tr id="row-${gIdx}">
      <td class="td-tipo">${w.tipo?`<span class="tipo-badge ${_esc(w.tipo)}">${_esc(w.tipo)}</span>`:'<span style="color:var(--text3);font-size:11px">—</span>'}</td>
      <td class="td-art" style="color:var(--text2);font-size:12px">${_esc(w.articulo)||'<span style="color:var(--text3)">—</span>'}</td>
      <td class="td-de">${diffDot}<span>${_esc(w.de)}</span>${progMini}</td>
      <td class="td-es">${_esc(w.es)}</td>
      <td class="td-actions">
        <button class="row-btn" onclick="startEditRow(${gIdx})" title="Editar">✏️</button>
        <button class="row-btn delete-btn" onclick="deleteRow(${gIdx})" title="Eliminar">🗑</button>
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
  setSyncState('syncing','Guardando…');
  _updateWordInDB(allWords[gIdx]).then(()=>setSyncState('ok','Guardado ✓'));
  renderLista();
  updateStats();
  showToast('✓ Guardado');
}

async function deleteRow(gIdx) {
  const allWords = getWords();
  const w = allWords[gIdx];
  if (!w) return;
  if (!confirm(`¿Eliminar "${displayDE(w)}"?`)) return;
  _deleteWordInDB(w);
  allWords.splice(gIdx,1);
  if (_editingIdx===gIdx) _editingIdx=null;
  _cacheWords(allWords);
  updateStats();
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
    prev.innerHTML = `✓ <b>${parsed.length} palabras</b> encontradas · Ej: ${displayDE(parsed[0])} → ${parsed[0].es}`;
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
      <div class="cfg-chips">${modeOptions.map(([v,l])=>`<button class="cfg-chip ${matchMode===v?'active':''}" onclick="setMatchMode('${v}')">${l}</button>`).join('')}</div>
    </div>
    <div class="cfg-section">
      <div class="cfg-section-title">Filtro por tipo</div>
      <div class="cfg-chips">${tipoOptions.map(([v,l])=>`<button class="cfg-chip ${matchFilter===v?'active':''}" onclick="setMatchFilter('${v}')">${l}</button>`).join('')}</div>
    </div>
    <div class="cfg-section" style="display:flex;gap:20px;align-items:flex-start">
      <div>
        <div class="cfg-section-title">Palabras / ronda</div>
        <div class="cfg-stepper">
          <button class="cfg-step-btn" onclick="adjustMatchSetting('wordsPerRound',-2)">−</button>
          <div class="cfg-step-val" id="cfgWordsVal">${wordsPerRound}</div>
          <button class="cfg-step-btn" onclick="adjustMatchSetting('wordsPerRound',2)">+</button>
        </div>
      </div>
      <div>
        <div class="cfg-section-title">Rondas seguidas</div>
        <div class="cfg-stepper">
          <button class="cfg-step-btn" onclick="adjustMatchSetting('totalRounds',-1)">−</button>
          <div class="cfg-step-val" id="cfgRoundsVal">${totalRounds}</div>
          <button class="cfg-step-btn" onclick="adjustMatchSetting('totalRounds',1)">+</button>
        </div>
      </div>
    </div>
    <button class="btn-primary" style="margin-top:14px" onclick="applyMatchCfg()">▶ Empezar</button>
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
        <button class="btn-primary" onclick="startRoundSession()">${t('matchNewRound')}</button></div>`;
    } else {
      c.innerHTML=`${renderRoundsBar()}<div class="complete-msg"><div class="trophy" style="font-size:36px">⭐</div>
        <h2 style="color:var(--blue)">Ronda ${roundSession.current} ✓</h2>
        <p style="color:var(--text2);margin-bottom:16px">${errMsg}</p>
        <div style="text-align:left;margin-bottom:16px">${summary}</div>
        <button class="btn-primary" onclick="startMatch()">Siguiente ronda →</button></div>`;
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
    rows+=`<div class="word-card ${s.matched.has(d.idx)?'matched':''}" id="de-${d.idx}" onclick="selectCard('de',${d.idx})" style="position:relative">${dot}${displayDE(d)}</div>
           <div class="word-card ${s.matched.has(e.idx)?'matched':''}" id="es-${e.idx}" onclick="selectCard('es',${e.idx})">${e.es}</div>`;
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
          ${[30,60,90].map(s=>`<button onclick="setSpeedDuration(${s})" id="sdBtn${s}"
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
            return `<button onclick="setSpeedTipo('${k}')" id="speedTipo_${k}"
              style="padding:5px 12px;border-radius:20px;border:1px solid ${active?'rgba(251,146,60,.4)':'var(--border)'};
              background:${active?'rgba(251,146,60,.1)':'var(--surface)'};
              color:${active?'var(--orange)':'var(--text2)'};
              font-family:Inter,sans-serif;font-size:11px;font-weight:600;cursor:pointer;transition:all .15s">${k==='Todos'?'Todos':k}</button>`;
          }).join('')}
        </div>

        <button onclick="startSpeedGame()"
          style="margin-top:12px;width:100%;background:var(--orange);color:#fff;border:none;
          padding:14px;border-radius:var(--r);font-family:Inter,sans-serif;
          font-size:15px;font-weight:700;cursor:pointer;letter-spacing:.2px;
          transition:opacity .15s;box-shadow:0 4px 20px rgba(251,146,60,.35)"
          onmouseover="this.style.opacity='.88'" onmouseout="this.style.opacity='1'">
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
    deCards += `<div class="word-card ${dm}" id="spd-de-${d.idx}" onclick="speedSelect('de',${d.idx})" style="position:relative;min-height:52px">${displayDE(d)}</div>`;
    esCards += `<div class="word-card ${em}" id="spd-es-${e.idx}" onclick="speedSelect('es',${e.idx})" style="position:relative;min-height:52px">${e.es}</div>`;
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
    <button onclick="renderSpeedSetup()"
      style="width:100%;background:var(--orange);color:#fff;border:none;padding:13px;
      border-radius:var(--r);font-family:Inter,sans-serif;font-weight:700;font-size:14px;
      cursor:pointer;margin-bottom:8px;transition:opacity .15s"
      onmouseover="this.style.opacity='.88'" onmouseout="this.style.opacity='1'">
      ↺ Jugar de nuevo
    </button>
    <button onclick="stopSpeedGame();navigate('vocab-hub','back')"
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
          oninput="cwInput(this)"
          onkeydown="cwNav(event,${r},${c})"
          onfocus="cwFocusCell(${r},${c})">
      </div>`;
    }
  }
  gHTML += `</div></div>`;

  // Clue flip cards
  const cluesHTML = `<div class="clues-row">${clues.map(cl => `
    <div class="clue-card" id="clue-card-${cl.num}-${cl.dir}" onclick="cwClueCardClick(${cl.num},'${cl.dir}',this)">
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
    <button class="btn-primary" onclick="checkCrossword()">${t('cwCheck')}</button>
    <button class="btn-secondary" onclick="revealCrossword()">${t('cwReveal')}</button>
    <button class="btn-blue" onclick="buildCrossword()">${t('cwNew')}</button>
    ${cwSource === 'bag' ? `<button class="btn-secondary" style="color:var(--red);border-color:rgba(248,113,113,.35);margin-top:8px" onclick="if(confirm('¿Vaciar la bolsa?')){clearBag();buildCrossword();}">🗑 Vaciar bolsa</button>` : ''}
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
  const words = getWords(), p = getProgress(), now = Date.now();
  const total = words.length;
  const seen  = Object.values(p).filter(e => e.seen > 0).length;
  const hard  = Object.values(p).filter(e => e.difficulty === 1).length;
  const mastered = Object.values(p).filter(e => e.seen >= 3 && e.correct / e.seen >= 0.8).length;
  const statsData = [
    { label: 'Palabras', val: total, color: 'var(--green)' },
    { label: 'Vistas', val: seen, color: 'var(--blue)' },
    { label: 'Dominadas', val: mastered, color: 'var(--green)' },
    { label: 'Difíciles', val: hard, color: 'var(--red)' },
  ];
  if (el('perfilStats')) el('perfilStats').innerHTML = statsData.map(s =>
    `<div style="background:var(--surface2);border:1px solid var(--border);border-radius:var(--r);padding:14px;text-align:center">
      <div style="font-size:22px;font-weight:700;color:${s.color}">${s.val}</div>
      <div style="font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;color:var(--text3);margin-top:3px">${s.label}</div>
    </div>`
  ).join('');
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
navigate = function(to, dir) {
  _origNavigate(to, dir);
  _saveAppState();
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
}

function exitLectura() {
  _saveLecturaProgress();
  closeLecturaPopup();
  if (_lectura.fullscreen) toggleLecturaFull();
  navigate('vocab-hub', 'back');
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

async function openLecturaUrl(raw) {
  let url = (raw || '').trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) url = 'https://' + url;
  if (_lectura.current) _saveLecturaProgress();
  _showLecturaLoader('Cargando página…');
  try {
    const r = await fetch('/api/fetch-page?url=' + encodeURIComponent(url), { signal: AbortSignal.timeout(20000) });
    const j = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(j.error || 'No se pudo cargar la página');
    const pages = _splitTextToPages(j.text || '');
    if (!pages.length) throw new Error('Sin contenido legible');
    let host = ''; try { host = new URL(j.url || url).hostname; } catch(e) {}
    const bookData = { id: 'web_' + Date.now(), title: j.title || host || url, ext: 'web', url: j.url || url, pages, pageIdx: 0, ts: Date.now() };
    _saveBooksLS(bookData);
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
    await loadScript('https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js');
    window.pdfjsLib.GlobalWorkerOptions.workerSrc =
      'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
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
  if (!window.JSZip) await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js');
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
      const tmp = document.createElement('div');
      tmp.innerHTML = raw.replace(/<style[^>]*>[\s\S]*?<\/style>/gi,'').replace(/<script[^>]*>[\s\S]*?<\/script>/gi,'').replace(/<head[^>]*>[\s\S]*?<\/head>/gi,'');
      const text = (tmp.textContent||'').replace(/\n{3,}/g,'\n\n').trim();
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
function _saveProgressLS(bookId, pageIdx) {
  try {
    const all = _getAllBooksLS();
    const b = all.find(x => x.id === bookId);
    if (b) { b.pageIdx = pageIdx; localStorage.setItem(_LBOOKS(), JSON.stringify(all)); }
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
  if (!books.length) { section.innerHTML = ''; return; }
  section.innerHTML = '<div style="font-size:11px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:var(--text3);margin-bottom:10px;text-align:left">Biblioteca</div>' +
    '<div class="lectura-library-grid">' +
    books.map(b => {
      const total = b.pages?.length || b.totalPages || 1;
      const pct = Math.round(((b.pageIdx||0) / total) * 100);
      const icon = b.noCache ? '☁️' : (b.ext === 'web' ? '🌐' : b.ext === 'epub' ? '📗' : '📕');
      return '<div class="lectura-lib-card" onclick="openBookFromLibrary(\'' + b.id + '\')">' +
        '<div class="lectura-lib-card-icon">' + icon + '</div>' +
        '<div class="lectura-lib-card-info">' +
          '<div class="lectura-lib-card-title">' + _esc(b.title) + '</div>' +
          '<div class="lectura-lib-card-meta">p. ' + ((b.pageIdx||0)+1) + ' de ' + total + ' · ' + pct + '%</div>' +
          '<div class="lectura-lib-prog"><div class="lectura-lib-prog-fill" style="width:' + pct + '%"></div></div>' +
        '</div>' +
        '<button class="lectura-lib-del" onclick="event.stopPropagation();deleteBook(\'' + b.id + '\')" title="Eliminar">🗑</button>' +
      '</div>';
    }).join('') + '</div>';
}

async function openBookFromLibrary(bookId) {
  const cached = _getAllBooksLS();
  const book = cached.find(b => b.id === bookId);
  if (book && book.pages && book.pages.length > 0) {
    _lectura.current = book;
    document.getElementById('lecturaUpload').style.display = 'none';
    _showReader();
    return;
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
  if (!confirm('¿Eliminar este libro de la biblioteca?')) return;
  try { const all = _getAllBooksLS().filter(b => b.id !== bookId); localStorage.setItem(_LBOOKS(), JSON.stringify(all)); } catch(e) {}
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
    document.getElementById('lecturaUpload').style.display = '';
    document.getElementById('lecturaReader').style.display = 'none';
  }
  _renderLecturaLibrary();
  showToast('🗑 Libro eliminado');
}

// ── Reader render ───────────────────────────────────────────────
function _showReader() {
  const reader = document.getElementById('lecturaReader');
  reader.style.display = 'flex';
  reader.style.flexDirection = 'column';
  reader.style.height = '100%';
  document.getElementById('lecturaBookTitle').textContent = _lectura.current.title;
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
  _renderLecturaPage();
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
        if (word) { const s = _esc(word); return '<span class="lw" data-w="' + s + '" onclick="lecturaWordTap(this)">' + s + '</span>'; }
        return _esc(nonword || '');
      })
    ).join('<br>') + '</p>'
  ).join('');
}

function _highlightSavedWords() {
  const saved = new Set(getWords().map(w => w.de.toLowerCase()));
  document.querySelectorAll('#lecturaContent .lw').forEach(span => {
    span.classList.toggle('lw-saved', saved.has((span.dataset.w||'').toLowerCase()));
  });
}

// ── Page navigation ─────────────────────────────────────────────
function lecturaChangePage(delta) {
  const book = _lectura.current;
  if (!book) return;
  book.pageIdx = Math.max(0, Math.min(book.pages.length - 1, (book.pageIdx||0) + delta));
  _saveProgressLS(book.id, book.pageIdx);
  _saveLecturaProgress();
  _renderLecturaPage();
}

// ── Word tap + translate popup ──────────────────────────────────
async function lecturaWordTap(el) {
  const word = el.dataset.w || el.textContent;
  document.querySelectorAll('#lecturaContent .lw-selected').forEach(e => e.classList.remove('lw-selected'));
  el.classList.add('lw-selected');
  _lectura.popup.word = word;

  const popup   = document.getElementById('lecturaPopup');
  const overlay = document.getElementById('lecturaPopupOverlay');
  const lpWord  = document.getElementById('lpWord');
  const lpTrans = document.getElementById('lpTrans');
  const lpSave  = document.getElementById('lpSaveBtn');

  lpWord.textContent = word;
  lpTrans.innerHTML = '<div style="display:inline-block;width:14px;height:14px;border:2px solid var(--border);border-top-color:var(--purple);border-radius:50%;animation:spin .7s linear infinite;vertical-align:middle"></div>';
  lpSave.style.display = 'none';
  lpSave.disabled = false;

  // Posicionar
  const rect = el.getBoundingClientRect();
  const pw = 270;
  let top  = rect.bottom + 8;
  let left = Math.max(8, Math.min(rect.left, window.innerWidth - pw - 8));
  if (top + 120 > window.innerHeight) top = Math.max(8, rect.top - 120);
  popup.style.top  = top  + 'px';
  popup.style.left = left + 'px';
  popup.style.display = 'block';
  overlay.style.display = 'block';

  // Traducir
  let trans = _lecturaTranslateCache[word.toLowerCase()];
  if (!trans) {
    trans = await _translateWord(word);
    if (trans) _lecturaTranslateCache[word.toLowerCase()] = trans;
  }
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
  document.querySelectorAll('#lecturaContent .lw-selected').forEach(e => e.classList.remove('lw-selected'));
  _lectura.popup.word = null;
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
    const r = await fetch('/api/translate?word=' + encodeURIComponent(word), { signal: AbortSignal.timeout(6000) });
    if (!r.ok) return null;
    const j = await r.json();
    return j?.translation || null;
  } catch(e) { return null; }
}

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
  if (e.key === 'Escape' && _lectura.fullscreen) toggleLecturaFull();
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown')  lecturaChangePage(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')    lecturaChangePage(-1);
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

// ── Caché de carpetas en localStorage ───────────────────────────
function _lsFoldersKey() { return 'folders_' + (currentUser?.id || 'anon'); }
function _cacheFolders(f) { try { localStorage.setItem(_lsFoldersKey(), JSON.stringify(f)); } catch(e) {} }
function _cachedFolders() { try { const s = localStorage.getItem(_lsFoldersKey()); return s ? JSON.parse(s) : []; } catch(e) { return []; } }

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
    _folders = data || [];
    _cacheFolders(_folders);
  } catch(e) { console.warn('[folders] load:', e.message); }
}

// ── Crear carpeta ────────────────────────────────────────────────
async function createFolder(name, color) {
  if (!currentUser) return null;
  const tempId = 'tmp_' + Date.now();
  const newF = { id: tempId, name, color: color || FOLDER_DEFAULT_COLOR };
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
      <button class="list-action-btn" style="flex:none;padding:7px 14px" onclick="showAddModal()">＋ Añadir</button>
      <button class="list-action-btn" style="flex:none;padding:7px 14px" onclick="showImportModal()">⬆ Importar</button>
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
  html += `<div class="folder-card" onclick="openFolder('__all__')">
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
    html += `<div class="folder-card" onclick="openFolder('__none__')">
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
    const col = f.color || FOLDER_DEFAULT_COLOR;
    const colLight = col + '30';
    html += `<div class="folder-card" onclick="openFolder('${f.id}')">
      <div class="folder-card-cover" style="background:linear-gradient(135deg,${colLight},${col}18)">
        <span class="folder-card-icon">🗂️</span>
        <button class="folder-edit-btn" onclick="event.stopPropagation();showFolderModal('${f.id}')" title="Editar carpeta">✏️</button>
        <button class="folder-menu-btn" onclick="event.stopPropagation();confirmDeleteFolder('${f.id}')" title="Eliminar carpeta">🗑</button>
      </div>
      <div class="folder-card-body">
        <div class="folder-card-name">${_esc(f.name)}</div>
        <div class="folder-card-count">${count} palabras</div>
      </div>
    </div>`;
  }

  // Botón nueva carpeta
  html += `<div class="folder-card new-folder" onclick="showFolderModal(null)">
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
      <button class="lista-back-btn" onclick="closeFolder()">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="10,2 4,8 10,14"/></svg>
        Carpetas
      </button>
      <span style="font-size:13px;font-weight:600;color:var(--text);flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${_esc(folderName)}</span>
      <button class="list-action-btn" style="flex:none;padding:6px 11px;font-size:11px" onclick="showAddModal()">＋</button>
      <button class="list-action-btn" style="flex:none;padding:6px 11px;font-size:11px" onclick="toggleSelMode()">☑</button>
      <div class="filter-dropdown-wrap" id="listaFilterWrap">
        <button class="filter-dropdown-btn" id="listaFilterBtn" onclick="toggleListaFilterPanel(event)">
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
          <button class="fdp-reset" onclick="resetListaFilters()">↺ Quitar filtros</button>
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
      ${_selMode ? `<th class="col-act" style="width:36px;padding:0 6px 0 10px"><input type="checkbox" class="row-check" ${allSelChecked?'checked':''} onchange="toggleSelAll(this.checked,${JSON.stringify(words.map(w=>allWords.findIndex(x=>x===w)))})" title="Seleccionar todo"></th>` : ''}
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
      : pe.difficulty===2 ? '<span class="diff-dot" style="background:var(--green)"></span>' : '';
    const progMini = pct>=0
      ? `<div class="prog-mini"><div class="prog-mini-track"><div class="prog-mini-fill" style="width:${pct}%;background:${col}"></div></div><span class="prog-mini-pct" style="color:${col}">${pct}%</span></div>`
      : '';
    const isSel = _selSet.has(gIdx);
    const selClass = isSel ? 'row-selected' : '';
    const checkCell = _selMode
      ? `<td class="td-check"><input type="checkbox" class="row-check" ${isSel?'checked':''} onchange="toggleSelRow(${gIdx},this.checked)"></td>`
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
          <button class="row-btn save-btn" onclick="saveEditRow(${gIdx})">✓</button>
          <button class="row-btn cancel-btn" onclick="cancelEditRow()">✕</button>
        </td>
      </tr>`;
    }

    return `<tr id="row-${gIdx}" class="${selClass}" onclick="${_selMode?`toggleSelRow(${gIdx})`:''}" style="${_selMode?'cursor:pointer':''}">
      ${checkCell}
      <td class="td-tipo">${w.tipo?`<span class="tipo-badge ${_esc(w.tipo)}">${_esc(w.tipo)}</span>`:'<span style="color:var(--text3);font-size:11px">—</span>'}</td>
      <td class="td-art" style="color:var(--text2);font-size:12px">${_esc(w.articulo)||'<span style="color:var(--text3)">—</span>'}</td>
      <td class="td-de">${diffDot}<span>${_esc(w.de)}</span>${progMini}</td>
      <td class="td-es">${_esc(w.es)}</td>
      <td class="td-actions" onclick="event.stopPropagation()">
        <button class="row-btn" onclick="startEditRow(${gIdx})">✏️</button>
        <button class="row-btn delete-btn" onclick="deleteRow(${gIdx})">🗑</button>
      </td>
    </tr>`;
  }).join('');

  document.getElementById('wordList').innerHTML =
    `<table class="vocab-table">${thead}<tbody>${rows}</tbody></table>`;

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
    <button class="sel-action-btn primary" onclick="showMoveModal()" ${n===0?'disabled':''}>📁 Mover</button>
    <button class="sel-action-btn danger" onclick="deleteSelWords()" ${n===0?'disabled':''}>🗑 Eliminar</button>
    <button class="sel-action-btn" onclick="toggleSelMode()">✕ Cancelar</button>`;
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
    html += `<button class="folder-move-opt" onclick="confirmMoveWords(null)">
      <span style="font-size:20px">📂</span>
      <span style="font-size:13px;font-weight:500;color:var(--text)">Sin carpeta</span>
    </button>`;
  }
  // Carpetas existentes
  for (const f of _folders) {
    if (f.id === currentFid) continue;
    html += `<button class="folder-move-opt" onclick="confirmMoveWords('${f.id}')">
      <span style="width:14px;height:14px;border-radius:50%;background:${f.color||FOLDER_DEFAULT_COLOR};display:inline-block;flex-shrink:0"></span>
      <span style="font-size:13px;font-weight:500;color:var(--text)">${_esc(f.name)}</span>
    </button>`;
  }
  // Nueva carpeta
  html += `<button class="folder-move-opt" onclick="closeModal('moveModal');showFolderModal(null, true)">
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
  const currentColor = isEdit ? (f?.color || FOLDER_DEFAULT_COLOR) : FOLDER_DEFAULT_COLOR;
  if (pickerEl) {
    pickerEl.innerHTML = FOLDER_COLORS.map(c =>
      `<div class="folder-color-swatch ${c===currentColor?'active':''}" style="background:${c}" data-color="${c}" onclick="selectFolderColor(this)"></div>`
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
  const color = colorEl?.dataset.color || FOLDER_DEFAULT_COLOR;
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
function showFolderMenu(folderId) {
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
    <button onclick="showFolderModal('${folderId}');document.getElementById('folderCtxMenu')?.remove()" style="display:flex;align-items:center;gap:9px;width:100%;padding:12px 14px;background:none;border:none;font-family:Inter,sans-serif;font-size:13px;font-weight:500;color:var(--text);cursor:pointer;text-align:left" onmouseover="this.style.background='var(--surface2)'" onmouseout="this.style.background='none'">
      ✏️ Editar
    </button>
    <button onclick="confirmDeleteFolder('${folderId}');document.getElementById('folderCtxMenu')?.remove()" style="display:flex;align-items:center;gap:9px;width:100%;padding:12px 14px;background:none;border:none;font-family:Inter,sans-serif;font-size:13px;font-weight:500;color:var(--red);cursor:pointer;text-align:left" onmouseover="this.style.background='var(--red-bg)'" onmouseout="this.style.background='none'">
      🗑 Eliminar
    </button>`;

  // Posicionar cerca del botón que llamó
  document.body.appendChild(menu);
  const rect = event.target.getBoundingClientRect();
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
  const swSrc=["const CACHE='deutsch-v2',FONTS='deutsch-fonts-v1';","self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll([self.location.href])).then(()=>self.skipWaiting()));});","self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!==FONTS).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});","self.addEventListener('fetch',e=>{const u=e.request.url;const cacheName=(u.includes('fonts.google')||u.includes('fonts.gstatic'))?FONTS:CACHE;e.respondWith(caches.open(cacheName).then(c=>c.match(e.request).then(cached=>{if(cached)return cached;return fetch(e.request).then(r=>{if(r&&r.ok)c.put(e.request,r.clone());return r;}).catch(()=>cached||new Response('Offline',{status:503}));}))); });"].join('\n');
  try{const blob=new Blob([swSrc],{type:'application/javascript'});const url=URL.createObjectURL(blob);navigator.serviceWorker.register(url,{scope:location.pathname.replace(/\/[^/]*$/,'/')||'/'}).then(()=>console.log('[SW] ready')).catch(e=>console.warn('[SW]',e));}catch(e){console.warn('[SW]',e);}
})();
