import { describe, expect, it } from "vitest";
import { rssXml } from "../../scripts/rss-xml";
import { thoughts } from "@/data/thoughts";

describe("RSS feed", () => {
  it("includes every published Thoughts post with link and guid", () => {
    const xml = rssXml(thoughts);
    for (const t of thoughts) {
      const url = `https://ritik-arora-marketing-portfolio.lovable.app/thoughts/${t.slug}`;
      expect(xml).toContain(`<link>${url}</link>`);
      expect(xml).toContain(`<guid isPermaLink="true">${url}</guid>`);
    }
  });
  it("uses the original date as an RFC 822 pubDate", () => {
    const xml = rssXml([{ slug: "a", title: "A", date: "2026-11-20", summary: "s" }]);
    expect(xml).toContain("<pubDate>Fri, 20 Nov 2026 00:00:00 GMT</pubDate>");
  });
  it("XML-escapes titles and descriptions", () => {
    const xml = rssXml([
      { slug: "a", title: "CRM & <Retention>", date: "2026-11-20", summary: `"x" & y` },
    ]);
    expect(xml).toContain("<title>CRM &amp; &lt;Retention&gt;</title>");
    expect(xml).toContain("<description>&quot;x&quot; &amp; y</description>");
  });
});
