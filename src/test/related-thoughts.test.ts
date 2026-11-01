import { describe, expect, it } from "vitest";
import { getRelatedThoughts, thoughts } from "@/data/thoughts";

describe("Related thoughts", () => {
  it("never lists the current post as related to itself", () => {
    for (const t of thoughts) expect(getRelatedThoughts(t.slug).map((r) => r.slug)).not.toContain(t.slug);
  });
  it("returns nothing for an unknown post", () => {
    expect(getRelatedThoughts("does-not-exist")).toEqual([]);
  });
  it("connects the CRM field note and the customer reactivation framework in both directions", () => {
    expect(getRelatedThoughts("crm-vs-product-problem").map((t) => t.slug)).toContain("customer-reactivation-before-win-back-campaign");
    expect(getRelatedThoughts("customer-reactivation-before-win-back-campaign").map((t) => t.slug)).toContain("crm-vs-product-problem");
  });
});
