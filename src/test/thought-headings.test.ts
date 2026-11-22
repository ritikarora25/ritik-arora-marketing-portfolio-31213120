import { describe, expect, it } from "vitest";

import { thoughts } from "@/data/thoughts";
import { thoughtHeadingTag } from "@/lib/thought-headings";

describe("Article heading levels", () => {
  it("renders a ### heading as h2 when no earlier h2 exists", () => {
    const paragraphs = ["Intro paragraph.", "### Standalone question?"];
    expect(thoughtHeadingTag(paragraphs, 1)).toBe("h2");
  });

  it("renders a ### heading as h3 only beneath an existing h2", () => {
    const paragraphs = ["## Section", "### Sub question?"];
    expect(thoughtHeadingTag(paragraphs, 1)).toBe("h3");
  });

  it("treats numbered ### sections as peer h2 headings", () => {
    const paragraphs = ["### 1. First", "### Follow-up?"];
    expect(thoughtHeadingTag(paragraphs, 0)).toBe("h2");
    expect(thoughtHeadingTag(paragraphs, 1)).toBe("h3");
  });

  it("never skips from h1 to h3 in any published article", () => {
    for (const t of thoughts) {
      const paragraphs = t.body.split(/\n\s*\n/);
      let seenH2 = false;
      paragraphs.forEach((p, i) => {
        if (p.startsWith("## ") || /^### \d+\.\s/.test(p) || /^\d+\.\s+[^\n]+\n/.test(p)) {
          seenH2 = true;
          return;
        }
        if (p.startsWith("### ")) {
          const tag = thoughtHeadingTag(paragraphs, i);
          expect(
            tag === "h3" ? seenH2 : true,
            `${t.slug} paragraph ${i} skips a heading level`,
          ).toBe(true);
        }
      });
    }
  });
});
