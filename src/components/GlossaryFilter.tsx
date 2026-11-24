import { useEffect, useState } from "react";

/** Live filter for the glossary: hides terms that don't match. Server HTML keeps every term. */
export function GlossaryFilter() {
  const [q, setQ] = useState("");
  const [formulas, setFormulas] = useState(false);
  const [shown, setShown] = useState<number | null>(null);

  useEffect(() => {
    const items = Array.from(document.querySelectorAll<HTMLLIElement>(".thought-body li[id]"));
    const needle = q.trim().toLowerCase();
    let n = 0;
    for (const li of items) {
      const text = li.textContent?.toLowerCase() ?? "";
      const ok = (!needle || text.includes(needle)) && (!formulas || text.includes("formula"));
      li.hidden = !ok;
      if (ok) n++;
    }
    setShown(needle || formulas ? n : null);
  }, [q, formulas]);

  return (
    <div className="glossary-filter" role="search">
      <label htmlFor="glossary-q" className="sr-only">
        Search marketing terms
      </label>
      <input
        id="glossary-q"
        type="search"
        placeholder="Search terms, e.g. CAC, churn, SEO"
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />
      <button type="button" aria-pressed={formulas} onClick={() => setFormulas((f) => !f)}>
        Formulas only
      </button>
      <p aria-live="polite" className="glossary-filter-count">
        {shown === null ? "" : `${shown} term${shown === 1 ? "" : "s"} match`}
      </p>
    </div>
  );
}
