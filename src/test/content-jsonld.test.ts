import { describe, expect, it } from "vitest";
import { thoughts } from "@/data/thoughts";
import { articleJsonLd, thoughtsJsonLd } from "@/lib/content-jsonld";
import { profileJsonLd } from "@/lib/profile-jsonld";
import { SITE } from "@/lib/seo";

describe("Structured content relationships", () => {
  it("connects every article to the documented author and its own page", () => {
    for (const post of thoughts) {
      const data = JSON.parse(JSON.stringify(articleJsonLd(post)));
      const article = data["@graph"].find((node: Record<string, unknown>) => [node["@type"]].flat().includes("Article"));
      expect(article.author["@id"]).toBe(profileJsonLd.mainEntity["@id"]);
      expect(article.mainEntityOfPage["@id"]).toBe(`${SITE}/thoughts/${post.slug}#webpage`);
      expect(article.datePublished).toBe(post.date);
      expect(article).not.toHaveProperty("dateModified");
      const crumbs = data["@graph"].find((node: Record<string, unknown>) => node["@type"] === "BreadcrumbList");
      expect(crumbs.itemListElement.map((item: { position: number }) => item.position)).toEqual([1, 2, 3]);
      expect(crumbs.itemListElement[2].item).toBe(article.url);
    }
  });

  it("includes each actual post once in the Thoughts collection", () => {
    const data = JSON.parse(JSON.stringify(thoughtsJsonLd(thoughts)));
    const page = data["@graph"].find((node: Record<string, unknown>) => node["@type"] === "CollectionPage");
    expect(page.mainEntity.numberOfItems).toBe(thoughts.length);
    expect(page.mainEntity.itemListElement.map((item: { url: string }) => item.url)).toEqual(thoughts.map((post) => `${SITE}/thoughts/${post.slug}`));
  });
});