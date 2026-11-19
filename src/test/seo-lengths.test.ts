import { describe, expect, it } from "vitest";
import { thoughts } from "@/data/thoughts";

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
