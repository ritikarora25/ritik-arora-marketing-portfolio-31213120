# Other places to improve your visibility

You're now set up with Google (Search Console) and Bing (which also feeds Yahoo, DuckDuckGo, Ecosia and ChatGPT search). These are the other places that are worth your time, in order.

## 1. Search engine tools (one-time setup)
- **Yandex Webmaster** (webmaster.yandex.com): free, and it uses the same IndexNow system. When Bing gets your pages, Yandex is told automatically. Verifying your site there also gives you a second crawl report. You sign up, choose the "meta tag" method and send me the code, and I add it to the site.
- **Brave Search, DuckDuckGo, Perplexity:** none of these has a place to submit your site. Your site already lets their crawlers in, and DuckDuckGo uses Bing results, so there's nothing to do.
- **Not worth it for you:** Naver (Korea) and Baidu (China), because your audience isn't there.

## 2. Profiles that show up when people search your name (biggest gain)
Your name is shared by other people, so profiles that link back to your site help Google show *you*.
- **LinkedIn:** put the site in the Website field and in the Featured section, with the article links.
- **GitHub:** paste the README I drafted earlier.
- **Peerlist, Medium, The Org:** update your experience to 5+ years and Freo, and add the site link. These are already listed on your site as your profiles, so they need to say the same things.
- **Medium:** repost each article with the "originally published at" link pointing to your site, so Google treats your site as the original.

## 3. Places your articles can be shared
- **Communities for marketers:** GrowthX and the WebEngage/MoEngage/CleverTap user communities. Share an article only where the community rules allow it.
- **Answer sites:** answer real questions about CRM and retention on Quora and Reddit (r/marketing, r/CRM), with a link to your article only when it actually answers the question.

## What I would change on the site
- Add the Yandex verification tag once you send the code. Nothing else on the site needs to change; all the other steps happen on your accounts.

## Technical details
- Yandex `<meta name="yandex-verification">` goes in `src/routes/__root.tsx` head next to the Google tag.
- After you've verified Yandex, I can send a ping to `yandex.com/indexnow` with the same key and URL list (optional; api.indexnow.org already shares submissions).
