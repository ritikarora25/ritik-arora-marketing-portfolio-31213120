# Improve SEO, AEO and GEO across the site

The basics already pass (indexable pages, unique titles, sitemap, structured data, share previews). This round makes every page easier for Google, AI answer engines (ChatGPT, Perplexity, Gemini, Google AI Overviews) and readers to quote and trust.

## 1. Answer-first content on every article (AEO)
- Add a short "Key takeaways" box (3-5 bullets) under each article title, written from the article's existing content only.
- Make the first paragraph after each main heading a direct 1-2 sentence answer, so engines can lift it as a snippet.
- Make sure each article has one clear question-style heading matching how people search (e.g. "What is a customer engagement platform?").

## 2. AI-engine discovery (GEO)
- Rewrite `llms.txt` with full absolute links, a one-paragraph bio with verifiable facts (role, city, years, companies) and article summaries.
- Add `llms-full.txt` containing the full plain text of all four articles so AI tools can read them in one fetch.
- List well-known AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot, Google-Extended) explicitly as allowed in robots.txt.

## 3. Trust and authorship signals (E-E-A-T)
- Add an author box at the end of every article: name, role, short bio, LinkedIn link, link to the homepage experience.
- Show "Published" date on each article (dates only where we already have them; no invented "updated" dates).
- Strengthen the Person structured data with job title, areas of expertise (CRM, lifecycle, retention) and past companies from the portfolio.

## 4. Homepage and Thoughts page
- Add a short, plain-text "About Ritik" summary near the top of the homepage that clearly states who you are and what you do (engines quote this for "who is Ritik Arora").
- Give the Thoughts list page an intro sentence describing the topics covered, plus each article's takeaway line.

## 5. Internal links
- Add in-text links between related articles (reactivation, lifecycle, CRM vs product, best CRM) where the text naturally refers to the other topic.

## Not included
- No FAQ structured data (Google no longer shows it for this kind of site), no new articles, no domain purchase.
- Rankings and AI citations can't be guaranteed; changes reach Google after publishing.

## Technical details
- Takeaways stored as a `takeaways: string[]` field in `src/data/thoughts.ts`, rendered in `ThoughtPost.tsx`; also emitted as `abstract` in BlogPosting JSON-LD.
- `llms-full.txt` served by a server route generated from Thoughts data so it never goes stale.
- Person JSON-LD extended in `src/lib/profile-jsonld.ts` with `jobTitle`, `knowsAbout`, `alumniOf`/`worksFor` history from existing data.
- Update existing JSON-LD tests for the new fields.
