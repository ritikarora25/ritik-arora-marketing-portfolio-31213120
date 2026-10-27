const ORIGIN = "https://ritik-arora-marketing-portfolio.lovable.app";

const escapeXml = (value: string) => value.replace(/[&<>"']/g, (character) => ({
  "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;",
})[character] ?? character);

/** Retain existing page-specific dates; never invent dates for new URLs. */
export function sitemapXml(slugs: string[], existingXml: string) {
  const previousDates = new Map<string, string>();
  for (const entry of existingXml.matchAll(/<url>\s*([\s\S]*?)<\/url>/g)) {
    const location = entry[1]?.match(/<loc>(.*?)<\/loc>/)?.[1];
    const modified = entry[1]?.match(/<lastmod>(.*?)<\/lastmod>/)?.[1];
    if (location && modified) previousDates.set(location, modified);
  }
  const paths = ["/", "/thoughts", ...slugs.map((slug) => `/thoughts/${encodeURIComponent(slug)}`)];
  const entries = [...new Set(paths)].map((path) => {
    const url = `${ORIGIN}${path}`;
    const lastmod = previousDates.get(url);
    return `  <url>\n    <loc>${escapeXml(url)}</loc>${lastmod ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>` : ""}\n  </url>`;
  });
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join("\n")}\n</urlset>\n`;
}