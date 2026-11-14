import { describe, it, expect } from "vitest";
import { thoughts } from "@/data/thoughts";
import { llmsFullText } from "@/routes/llms-full[.]txt";

describe("AEO content", () => {
  it("every article has takeaways", () => {
    for (const t of thoughts) expect(t.takeaways?.length ?? 0).toBeGreaterThanOrEqual(3);
  });
  it("llms-full includes every article URL", () => {
    const txt = llmsFullText();
    for (const t of thoughts) expect(txt).toContain(`/thoughts/${t.slug}`);
  });
});
