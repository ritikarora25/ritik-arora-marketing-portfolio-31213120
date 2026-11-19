/**
 * Decides whether a "### " source heading renders as h2 or h3.
 * Numbered sections ("### 1. Foo") are always peer h2 headings.
 * Any other "### " heading is an h3 only when an earlier paragraph already
 * produced an h2 — otherwise it would skip a level (h1 straight to h3).
 */
export function thoughtHeadingTag(paragraphs: string[], index: number): "h2" | "h3" {
  const p = paragraphs[index] ?? "";
  if (/^### \d+\.\s/.test(p)) return "h2";
  const hasH2Before = paragraphs
    .slice(0, index)
    .some((q) => q.startsWith("## ") || /^### \d+\.\s/.test(q) || /^\d+\.\s+[^\n]+\n/.test(q));
  return hasH2Before ? "h3" : "h2";
}
