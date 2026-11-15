import { describe, expect, it } from "vitest";
import { existsSync, readFileSync } from "node:fs";
import { thoughts } from "@/data/thoughts";
import { INDEXNOW_KEY, indexNowPayload } from "@/lib/indexnow";

describe("IndexNow", () => {
  it("lists the homepage, Thoughts and every article", () => {
    const urls = indexNowPayload().urlList;
    expect(urls).toContain("https://ritik-arora-marketing-portfolio.lovable.app/");
    expect(urls).toContain("https://ritik-arora-marketing-portfolio.lovable.app/thoughts");
    for (const t of thoughts) expect(urls).toContain(`https://ritik-arora-marketing-portfolio.lovable.app/thoughts/${t.slug}`);
  });
  it("publishes a key file matching the key", () => {
    const file = `public/${INDEXNOW_KEY}.txt`;
    expect(existsSync(file)).toBe(true);
    expect(readFileSync(file, "utf8").trim()).toBe(INDEXNOW_KEY);
  });
});
