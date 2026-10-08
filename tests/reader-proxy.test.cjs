const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const root = path.resolve(__dirname, '..');

test('reader proxy resolves page resources without relying on an external base tag', async () => {
  const { absolutizePageUrls } = await import('../api/_reader-html.js');
  const html = '<head><link rel="stylesheet" href="/_next/app.css"><style>.hero{background:url("/img/bg.png")}</style></head>' +
    '<img src="images/cover.png" srcset="/img/small.png 1x, /img/large.png 2x" style="mask:url(../img/mask.svg)">' +
    '<a href="../related.html">Related</a><img src="//cdn.example.test/photo.png">';
  const result = absolutizePageUrls(html, 'https://www.zdfheute.de/politik/story/page.html');

  assert.match(result, /href="https:\/\/www\.zdfheute\.de\/_next\/app\.css"/);
  assert.match(result, /src="https:\/\/www\.zdfheute\.de\/politik\/story\/images\/cover\.png"/);
  assert.match(result, /srcset="https:\/\/www\.zdfheute\.de\/img\/small\.png 1x, https:\/\/www\.zdfheute\.de\/img\/large\.png 2x"/);
  assert.match(result, /background:url\("https:\/\/www\.zdfheute\.de\/img\/bg\.png"\)/);
  assert.match(result, /mask:url\(https:\/\/www\.zdfheute\.de\/politik\/img\/mask\.svg\)/);
  assert.match(result, /href="https:\/\/www\.zdfheute\.de\/politik\/related\.html"/);
  assert.match(result, /src="https:\/\/cdn\.example\.test\/photo\.png"/);
});

test('app CSP permits only the reader helper hash while keeping inline handlers blocked', () => {
  const config = JSON.parse(fs.readFileSync(path.join(root, 'vercel.json'), 'utf8'));
  const csp = config.headers[0].headers.find(h => h.key === 'Content-Security-Policy').value;
  assert.match(csp, /sha256-7rYhdcic\+j\+lmnfBxAM51JhX2CCvK6M9nhbWBbqyi6U=/);
  assert.match(csp, /script-src-attr 'none'/);
  assert.doesNotMatch(csp, /script-src[^;]*'unsafe-inline'/);
});
