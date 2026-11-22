const ORIGIN = "https://ritik-arora-marketing-portfolio.lovable.app";

export const escapeXml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&apos;" })[c] ?? c,
  );

/** RFC 822 date from an ISO date (YYYY-MM-DD), at 00:00 GMT. */
export const rfc822 = (iso: string) => new Date(`${iso}T00:00:00Z`).toUTCString();

export function rssXml(
  posts: { slug: string; title: string; date: string; summary: string }[],
): string {
  const items = posts
    .map((p) => {
      const url = `${ORIGIN}/thoughts/${encodeURIComponent(p.slug)}`;
      return `    <item>\n      <title>${escapeXml(p.title)}</title>\n      <link>${escapeXml(url)}</link>\n      <guid isPermaLink="true">${escapeXml(url)}</guid>\n      <pubDate>${rfc822(p.date)}</pubDate>\n      <description>${escapeXml(p.summary)}</description>\n    </item>`;
    })
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<rss version="2.0">\n  <channel>\n    <title>Ritik Arora — Thoughts</title>\n    <link>${ORIGIN}/thoughts</link>\n    <description>Field notes on CRM, lifecycle marketing, retention and growth.</description>\n    <language>en</language>\n${items}\n  </channel>\n</rss>\n`;
}
