import { describe, expect, it } from "vitest";
import { thoughts } from "@/data/thoughts";
import {
  HOME_SEO_DESCRIPTION,
  HOME_SEO_TITLE,
  THOUGHTS_SEO_DESCRIPTION,
  THOUGHTS_SEO_TITLE,
} from "@/lib/seo";

// Google truncates titles near 60 chars; Bing flags descriptions outside 25-160.
describe("Search snippet lengths", () => {
  for (const t of thoughts) {
    it(`${t.slug} title is at most 60 characters`, () => {
      expect((t.seoTitle ?? `${t.title} — Ritik Arora`).length).toBeLessThanOrEqual(60);
    });
    it(`${t.slug} description is 120-160 characters`, () => {
      const d = t.seoDescription ?? t.summary;
      expect(d.length).toBeGreaterThanOrEqual(120);
      expect(d.length).toBeLessThanOrEqual(160);
    });
  }
});

describe("Static page snippet lengths", () => {
  const pages = [
    ["homepage", HOME_SEO_TITLE, HOME_SEO_DESCRIPTION],
    ["thoughts index", THOUGHTS_SEO_TITLE, THOUGHTS_SEO_DESCRIPTION],
  ] as const;
  for (const [name, title, description] of pages) {
    it(`${name} title is at most 60 characters`, () => {
      expect(title.length).toBeLessThanOrEqual(60);
    });
    it(`${name} description is 120-160 characters`, () => {
      expect(description.length).toBeGreaterThanOrEqual(120);
      expect(description.length).toBeLessThanOrEqual(160);
    });
  }
});
