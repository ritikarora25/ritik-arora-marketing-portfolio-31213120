# Bing Webmaster Guidelines readiness

## Where the site already meets Bing's guidelines
- Pages are rendered on the server, so Bingbot sees the full text of the homepage and every article.
- robots.txt allows Bingbot and points to the sitemap; the sitemap lists Home, Thoughts and all articles.
- Each page has a unique title, description, canonical address and social preview tags.
- Structured data for you (Person), the site and each article; clean headings; alt text on images.
- Internal links between articles; llms.txt files for AI assistants (Bing Copilot included).

## What is missing
1. **Bing site ownership tag**: there is no Bing verification on the site. Without it you can't use Bing Webmaster Tools reports or submit the sitemap there.
2. **IndexNow** (Bing's instant-indexing system): not set up. It tells Bing straight away when a page is added or changed, instead of waiting for a crawl.

## Plan
1. Add Bing verification. Easiest route: in Bing Webmaster Tools, choose "Import from Google Search Console" (no code needed). If you prefer the tag method, send me the `msvalidate.01` code and I'll add it next to the Google tag.
2. Set up IndexNow: publish a key file on the site, and add a small server action that sends the homepage, Thoughts page and all article addresses to Bing, so new and updated articles get noticed quickly.
3. After publishing, submit the sitemap in Bing Webmaster Tools and send the IndexNow ping once.
4. Add a test that checks every article address is included in the IndexNow list.

## Technical details
- Verification meta goes in `src/routes/__root.tsx` head (site-wide).
- IndexNow key file at `public/<key>.txt`; ping via a protected server route posting to `https://api.indexnow.org/indexnow` with host, key, keyLocation and the URL list built from `thoughts` slugs (same source as the sitemap).
