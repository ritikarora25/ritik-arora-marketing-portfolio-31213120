# Fix title and description lengths across the site

## What I found (measured today)
| Page | Title length | Description length | Problem |
|---|---|---|---|
| Home | 32 | 94 | Fine for Bing; title could carry a keyword |
| Thoughts | 41 | 79 | Fine; could be slightly richer |
| Marketing glossary | 75 | 215 | Both too long |
| Retention rate formula | 82 | 254 | Both too long |
| Lifecycle marketing strategy | 80 | 245 | Both too long |
| Best CRM for 2027 | 74 | 157 | Title too long |
| Customer reactivation | 80 | 205 | Both too long |
| Why CRM fails | 88 | 198 | Both too long |

The main cause: every article page adds " — Ritik Arora" to the title, pushing it past the limit.

## Step 1 — Confirm the limits
Search Google and Bing guidance to confirm the target ranges. Working targets until confirmed:
- Title: 50–60 characters (Google cuts at about 600px; Bing flags over ~70)
- Description: 120–155 characters (Google cuts around 155–160; Bing flags under 25 or over 160)

## Step 2 — Find the high-traffic wording
For each article, use Semrush keyword data (India and US) plus your Search Console queries to pick the phrase people actually search, and put it at the start of the title and inside the description.

## Step 3 — Rewrite the search title and description only
- Shorten each search title to fit, keeping the main keyword first. Drop " — Ritik Arora" where it doesn't fit (your name stays in the site name and author details).
- Rewrite each description to 120–155 characters with the keyword and a clear reason to click.
- The headline readers see on the page stays the same, so the articles look unchanged.
- Best CRM for 2027: keep the page headline exactly as saved; only the search title gets shortened, still starting with "Best CRM for 2027".
- Home and Thoughts: light tweak only if the keyword research shows a better phrase.

## Step 4 — Lock it in
Add an automated check that fails if any page's title or description goes outside the limits, so future articles can't break it. Then re-measure every page, and after you publish, notify Bing.

## Technical details
- Add optional `seoTitle` / `seoDescription` fields to Thoughts data; route head uses them, falling back to current values.
- Test in src/test asserts every route's title ≤ 60 and description 120–160.
