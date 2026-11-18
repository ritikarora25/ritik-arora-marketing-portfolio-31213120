# Glossary: a source for every term, plus stronger search and AI visibility

## 1. A source link for each of the 131 terms
- Every definition and formula gets one "Source" link to a trusted page that backs it up. Wherever possible, that is the official help page for the metric, such as Google Ads Help for CTR, CPC and CPM, GA4 Help for bounce rate, and Bain for NPS.
- Where no official page exists, the link goes to a well-known reference: HubSpot, Amplitude, Mixpanel, Investopedia, Moz, Google Search Central, Meta, Klaviyo or Braze.
- Each link is checked automatically to confirm the page loads. Each definition is then compared with what the source says. If the wording or formula differs, the definition is changed to match the source, never the other way around.
- Tool links stay as they are; they point to each tool's own site.
- The sources list at the end of the article grows into a full list grouped by publisher, so readers can see where everything came from.
- A short note says that formulas follow the linked source and that platforms can define them slightly differently.

## 2. Search (SEO)
- The title is adjusted to include "marketing terms", which gets about 1,300 searches a month in the US. Proposed title: "Marketing terms glossary A–Z: definitions, formulas and tools". The page address stays the same.
- The description mentions marketing terms, a glossary and formulas.
- Each term gets its own link, for example /thoughts/marketing-glossary#cac, so it can be shared and shown in search results.
- Your other articles link back to the glossary, for example where they mention CAC, churn or cohort.

## 3. AI answers (AEO and GEO)
- Each term is marked as a definition, with its own link and its source attached, so ChatGPT, Perplexity and Google can quote one term and credit both you and the source.
- A short "What is a marketing glossary?" answer and a "Most-used formulas" table at the top (CAC, LTV, churn, retention, ROAS, CTR, NPS, NRR). These are the formats AI answers most often pull from.
- The full-text version for AI tools and the llms.txt line include the per-term sources.
- After you publish, Bing gets notified.

## Technical details
- `GlossaryTerm` gains `source: [label, url]` (required). `glossaryBody()` adds "Source: [label](url)" per line and builds an anchor slug per term.
- The renderer turns `- **Term:**` lines in the glossary into `<li id="term-slug">`.
- `content-jsonld.ts`: each DefinedTerm gets `url` (anchor) and `subjectOf`/`citation` set to the source.
- `thoughts.ts`: new title, ogTitle and summary, and `sources` built from the unique term sources. The glossary is linked from the retention, reactivation and lifecycle bodies.
- Research notes are updated with the source list and the URL check results in `.lovable/research/marketing-glossary-2026-11-18.md`.
- New test: every glossary term has an https source and a unique anchor. Run all tests, then check desktop and phone.
