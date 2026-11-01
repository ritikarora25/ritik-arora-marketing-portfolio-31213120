import { describe, expect, it } from "vitest";
import { getRelatedThoughts, thoughts } from "@/data/thoughts";

describe("Related thoughts", () => {
  it("never lists the current post as related to itself", () => {
    for (const t of thoughts) expect(getRelatedThoughts(t.slug).map((r) => r.slug)).not.toContain(t.slug);
  });
  it("returns nothing for an unknown post", () => {
    expect(getRelatedThoughts("does-not-exist")).toEqual([]);
  });
});
