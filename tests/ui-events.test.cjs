const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const test = require('node:test');

const root = path.resolve(__dirname, '..');
const appSource = fs.readFileSync(path.join(root, 'app.js'), 'utf8');
const indexSource = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const handlerStart = appSource.indexOf('// Delegación explícita de eventos:');
assert.notEqual(handlerStart, -1, 'the delegated event handlers should exist');

function createHarness() {
  const listeners = new Map();
  const calls = [];
  const document = {
    addEventListener(type, handler) {
      const list = listeners.get(type) || [];
      list.push(handler);
      listeners.set(type, list);
    },
    getElementById() { return { remove() {}, click() {} }; },
  };
  const node = (dataset = {}) => ({
    dataset,
    classList: { add() {}, remove() {} },
    closest(selector) {
      for (const part of selector.split(',').map(x => x.trim())) {
        const key = part.match(/\[data-ui-([a-z-]+)/)?.[1];
        if (!key) continue;
        const dataKey = 'ui' + key[0].toUpperCase() + key.slice(1).replace(/-([a-z])/g, (_m, c) => c.toUpperCase());
        const expected = part.match(/="([^"]+)"/)?.[1];
        if (Object.hasOwn(dataset, dataKey) && (expected === undefined || dataset[dataKey] === expected)) return this;
      }
      return null;
    },
    contains(child) { return child === this; },
    remove() {},
  });
  const sandbox = new Proxy({
    document,
    Number,
    confirm: () => false,
    prompt: () => null,
    window: {},
  }, {
    has: () => true,
    get(target, key) {
      if (key in target) return target[key];
      if (typeof key === 'string') return (...args) => calls.push([key, ...args]);
      return undefined;
    },
  });
  vm.runInNewContext(appSource.slice(handlerStart), sandbox, { filename: 'ui-events.js' });
  return {
    calls,
    node,
    registered: [...listeners.keys()],
    dispatch(type, event) { for (const handler of listeners.get(type) || []) handler(event); },
  };
}

test('all declarative click actions have a dispatcher case and no inline JS attributes remain', () => {
  const usedActions = new Set([...`${indexSource}\n${appSource}`.matchAll(/data-ui-click="([^"]+)"/g)].map(m => m[1]));
  const cases = new Set([...appSource.matchAll(/case '([^']+)'/g)].map(m => m[1]));
  for (const action of usedActions) assert.ok(cases.has(action), `missing dispatcher case: ${action}`);

  const inlineEventAttribute = /\son(?:click|dblclick|keydown|keyup|change|input|submit|mouseover|mouseout|focus|blur|load|error|dragover|dragleave|drop)\s*=/i;
  assert.equal(inlineEventAttribute.test(indexSource), false, 'index.html has no inline event attributes');
  assert.equal(inlineEventAttribute.test(appSource), false, 'generated app markup has no inline event attributes');
});

test('click and Enter actions call the expected UI functions', () => {
  const h = createHarness();
  assert.ok(h.registered.includes('click'), `listeners registered: ${h.registered.join(',')}`);
  const clickTarget = h.node({ uiClick: 'match-card', language: 'de', index: '4' });
  assert.equal(clickTarget.closest('[data-ui-click]'), clickTarget);
  h.dispatch('click', { target: clickTarget, stopPropagation() {} });
  assert.equal(h.calls[0][0], 'selectCard');
  assert.deepEqual(Array.from(h.calls[0].slice(1)), ['de', 4]);

  const enterTarget = h.node({ uiEnter: 'login' });
  h.dispatch('keydown', { target: enterTarget, key: 'Enter' });
  assert.equal(h.calls[1][0], 'doLogin');
});

test('action buttons inside stop-propagation cells still run their own action', () => {
  const h = createHarness();
  let stopped = false;
  h.dispatch('click', {
    target: h.node({ uiClick: 'row-menu', uiStop: '', index: '3' }),
    stopPropagation() { stopped = true; },
  });
  assert.equal(stopped, true);
  assert.deepEqual(Array.from(h.calls[0]), ['openRowMenu', 3]);
});

test('every click action can be dispatched without an exception', () => {
  const actions = new Set([...`${indexSource}\n${appSource}`.matchAll(/data-ui-click="([^"]+)"/g)].map(m => m[1]));
  for (const action of actions) {
    const h = createHarness();
    const target = h.node({ uiClick: action, index: '0', value: '', field: 'de', language: 'de', setting: 'totalRounds', delta: '1', folderId: 'x', bookId: 'x' });
    h.dispatch('click', { target, stopPropagation() {} });
  }
});

test('change, crossword keyboard, focus, and drop events are delegated', () => {
  const h = createHarness();
  const checkbox = h.node({ uiChange: 'selection-row', index: '7' });
  checkbox.checked = true;
  h.dispatch('change', { target: checkbox });
  assert.deepEqual(Array.from(h.calls[0]), ['toggleSelRow', 7, true]);

  h.dispatch('keydown', { target: h.node({ uiKeydown: 'crossword-navigation', row: '2', col: '5' }), key: 'ArrowRight' });
  assert.equal(h.calls[1][0], 'cwNav');
  assert.deepEqual(Array.from(h.calls[1].slice(2)), [2, 5]);

  h.dispatch('focusin', { target: h.node({ uiFocus: 'crossword-focus', row: '2', col: '5' }) });
  assert.deepEqual(Array.from(h.calls[2]), ['cwFocusCell', 2, 5]);

  let prevented = false;
  h.dispatch('drop', { target: h.node({ uiDropzone: '' }), preventDefault() { prevented = true; } });
  assert.equal(prevented, true);
  assert.equal(h.calls[3][0], 'handleImportDrop');
});

test('the deployment CSP blocks inline scripts and inline event handlers', () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const csp = config.headers[0].headers.find(h => h.key === 'Content-Security-Policy').value;
  assert.match(csp, /script-src-attr 'none'/);
  assert.match(csp, /script-src 'self'/);
  assert.doesNotMatch(csp, /script-src[^;]*'unsafe-inline'/);
});
