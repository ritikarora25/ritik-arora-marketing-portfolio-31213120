import { describe, expect, it } from "vitest";
import { sitemapXml } from "../../scripts/sitemap-xml";
import { thoughts } from "@/data/thoughts";

describe("Public sitemap", () => {
  it("includes the homepage and the Thoughts index", () => {
    const xml = sitemapXml([], "");
    expect(xml).toContain("<loc>https://ritik-arora-marketing-portfolio.lovable.app/</loc>");
    expect(xml).toContain("<loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts</loc>");
  });
  it("includes every published Thoughts post and newly added posts", () => {
    const xml = sitemapXml([...thoughts.map((thought) => thought.slug), "next-post"], "");
    for (const slug of [...thoughts.map((thought) => thought.slug), "next-post"]) {
      expect(xml).toContain(`<loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/${slug}</loc>`);
    }
  });
  it("does not invent modification dates for new pages", () => {
    expect(sitemapXml(["new-post"], "")).not.toContain("<lastmod>");
  });
  it("preserves an existing page-specific lastmod", () => {
    const xml = sitemapXml(["existing-post"], "<url><loc>https://ritik-arora-marketing-portfolio.lovable.app/thoughts/existing-post</loc><lastmod>2026-10-07</lastmod></url>");
    expect(xml).toContain("<lastmod>2026-10-07</lastmod>");
  });
});