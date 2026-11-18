import { describe, expect, it } from "vitest";
import { allGlossaryTerms, termSlug } from "@/data/glossary";

describe("Marketing glossary", () => {
  it("gives every term an https source link", () => {
    for (const t of allGlossaryTerms()) expect(t.src[1], t.term).toMatch(/^https:\/\//);
  });
  it("gives every term a unique anchor", () => {
    const slugs = allGlossaryTerms().map((t) => termSlug(t.term));
    expect(new Set(slugs).size).toBe(slugs.length);
  });
});
