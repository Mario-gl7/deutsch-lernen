function resolvePageUrl(value, pageUrl) {
  const raw = value.trim();
  if (!raw || raw[0] === '#' || /^[a-z][a-z\d+.-]*:/i.test(raw)) return value;
  try { return new URL(raw, pageUrl).href; } catch { return value; }
}

export function absolutizePageUrls(html, pageUrl) {
  // Blob documents inherit the app's base-uri policy, so avoid a <base> tag.
  // Resolve resource and navigation URLs against the source page instead.
  html = html.replace(/\b(href|src|poster|action|xlink:href)\s*=\s*(["'])(.*?)\2/gi,
    (match, attr, quote, value) => `${attr}=${quote}${resolvePageUrl(value, pageUrl)}${quote}`);
  html = html.replace(/\b(srcset|imagesrcset)\s*=\s*(["'])(.*?)\2/gi,
    (match, attr, quote, value) => {
      const resolved = value.replace(/(^|,\s*)(\/[^,\s]+)/g,
        (candidate, prefix, url) => prefix + resolvePageUrl(url, pageUrl));
      return `${attr}=${quote}${resolved}${quote}`;
    });
  const cssUrl = css => css.replace(/url\(\s*(["']?)([^)"']+)\1\s*\)/gi,
    (match, quote, value) => `url(${quote}${resolvePageUrl(value, pageUrl)}${quote})`);
  html = html.replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style\s*>)/gi,
    (_match, open, css, close) => open + cssUrl(css) + close);
  return html.replace(/\bstyle\s*=\s*(["'])(.*?)\1/gi,
    (_match, quote, css) => `style=${quote}${cssUrl(css)}${quote}`);
}
