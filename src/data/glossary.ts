/** Marketing glossary A–Z. Each term: 1–3 line meaning, optional plain-text formula, optional top tools. */
export interface GlossaryTerm { term: string; meaning: string; formula?: string; tools?: [string, string][]; see?: [string, string] }

const T = (term: string, meaning: string, extra: Omit<GlossaryTerm, "term" | "meaning"> = {}): GlossaryTerm => ({ term, meaning, ...extra });

export const glossary: Record<string, GlossaryTerm[]> = {
  A: [
    T("A/B testing", "Showing two versions of a page, message or offer to random groups to see which performs better on one metric.", { tools: [["Optimizely", "https://www.optimizely.com"], ["VWO", "https://vwo.com"], ["AB Tasty", "https://www.abtasty.com"]] }),
    T("Acquisition", "The first funnel stage: getting new people to discover your product and sign up or buy."),
    T("Activation", "The moment a new user first gets real value, such as a first order or a completed setup. Activation rate = activated users ÷ new sign-ups × 100."),
    T("Ad impression", "One showing of an ad on a screen, whether or not anyone clicks it."),
    T("Affiliate marketing", "Paying partners a commission for sales or leads they send you through a tracked link."),
    T("Attribution", "Deciding which channels or touchpoints get credit for a conversion (first-touch, last-touch, linear, data-driven).", { tools: [["Google Analytics 4", "https://marketingplatform.google.com/about/analytics/"], ["AppsFlyer", "https://www.appsflyer.com"], ["Branch", "https://www.branch.io"]] }),
    T("Average order value (AOV)", "The average amount spent per order.", { formula: "AOV = total revenue ÷ number of orders" }),
    T("ARPU", "Average revenue per user over a period.", { formula: "ARPU = total revenue ÷ active users" }),
    T("Audience segment", "A group of users who share traits or behaviour, used to target messages."),
  ],
  B: [
    T("Bounce rate", "In GA4, the share of sessions that were not engaged (under 10 seconds, no conversion, one page).", { formula: "Bounce rate = 1 − engagement rate" }),
    T("Brand awareness", "How many people in your target market recognise or recall your brand."),
    T("Buyer persona", "A research-based profile of a typical customer: goals, problems and buying behaviour."),
    T("Behavioural targeting", "Choosing who gets a message based on what they did, such as viewed, added to cart or stopped ordering."),
    T("Blended CAC", "Acquisition cost across all channels, including organic sign-ups.", { formula: "Blended CAC = total acquisition spend ÷ all new customers" }),
  ],
  C: [
    T("Campaign", "A planned set of messages or ads with one goal, audience and time frame."),
    T("Churn rate", "The share of customers lost in a period.", { formula: "Churn rate = customers lost in period ÷ customers at start × 100", see: ["Retention rate formula", "/thoughts/retention-rate-formula"] }),
    T("Click-through rate (CTR)", "The share of people who clicked after seeing an ad, email or search result.", { formula: "CTR = clicks ÷ impressions × 100" }),
    T("Cohort", "A group of users who started in the same period, tracked together over time to see how behaviour changes."),
    T("Cohort analysis", "Comparing cohorts month by month to see whether newer users stay or spend more than older ones.", { tools: [["Amplitude", "https://amplitude.com"], ["Mixpanel", "https://mixpanel.com"], ["PostHog", "https://posthog.com"]] }),
    T("Content marketing", "Attracting customers with useful articles, videos or tools rather than direct ads."),
    T("Control group (holdout)", "Users deliberately left out of a campaign so you can measure its true lift."),
    T("Conversion rate (CVR)", "The share of visitors or users who complete a target action.", { formula: "CVR = conversions ÷ visitors (or clicks) × 100" }),
    T("Cost per acquisition (CPA)", "Ad spend needed to get one conversion.", { formula: "CPA = ad spend ÷ conversions" }),
    T("Cost per click (CPC)", "What you pay on average for one ad click.", { formula: "CPC = ad spend ÷ clicks" }),
    T("CPM", "Cost per thousand impressions.", { formula: "CPM = ad spend ÷ impressions × 1,000" }),
    T("CRM", "Customer relationship management: the system and practice of storing customer data and managing every interaction with them.", { tools: [["HubSpot", "https://www.hubspot.com"], ["Salesforce", "https://www.salesforce.com"], ["Zoho CRM", "https://www.zoho.com/crm/"]], see: ["Best CRM for 2027", "/thoughts/best-crm-for-2027"] }),
    T("Cross-sell", "Offering a related product to an existing customer, such as a case with a phone."),
    T("Customer acquisition cost (CAC)", "What it costs to win one new paying customer.", { formula: "CAC = total sales and marketing spend ÷ new customers acquired" }),
    T("Customer data platform (CDP)", "Software that unifies customer data from every source into one profile per person.", { tools: [["Segment", "https://segment.com"], ["RudderStack", "https://www.rudderstack.com"], ["mParticle", "https://www.mparticle.com"]] }),
    T("Customer journey", "Every step a person takes from first hearing of you to buying and coming back."),
    T("Customer lifetime value (CLV / LTV)", "The total gross profit you expect from a customer over the whole relationship.", { formula: "LTV = average order value × purchase frequency × gross margin × customer lifespan" }),
    T("Customer retention rate", "The share of existing customers still active at the end of a period.", { formula: "Retention rate = ((E − N) ÷ S) × 100", see: ["Retention rate formula", "/thoughts/retention-rate-formula"] }),
  ],
  D: [
    T("DAU / MAU", "Daily active users divided by monthly active users; shows how habit-forming a product is.", { formula: "Stickiness = DAU ÷ MAU × 100" }),
    T("Deep link", "A link that opens a specific screen inside an app instead of the home screen.", { tools: [["Branch", "https://www.branch.io"], ["AppsFlyer OneLink", "https://www.appsflyer.com"], ["Adjust", "https://www.adjust.com"]] }),
    T("Demand generation", "Marketing that builds interest in a problem and your solution before people are ready to buy."),
    T("Drip campaign", "A series of automated messages sent on a schedule or after a trigger."),
    T("Dynamic content", "Message or page content that changes per user, such as their name or recommended items."),
  ],
  E: [
    T("Email marketing", "Sending planned or automated emails to subscribers to inform, sell or retain.", { tools: [["Mailchimp", "https://mailchimp.com"], ["Klaviyo", "https://www.klaviyo.com"], ["Brevo", "https://www.brevo.com"]] }),
    T("Engagement", "The funnel stage where users return and use the product repeatedly; also any measurable interaction."),
    T("Engagement rate (social)", "Interactions relative to reach.", { formula: "Engagement rate = (likes + comments + shares + saves) ÷ reach × 100" }),
    T("Event", "A tracked user action, such as sign_up, add_to_cart or purchase."),
    T("Expansion revenue", "Extra revenue from existing customers through upgrades, add-ons or more usage."),
  ],
  F: [
    T("Funnel", "The stages people pass through toward a goal, with drop-off measured at each step."),
    T("Funnel conversion rate", "The share who move from one stage to the next.", { formula: "Step conversion = users at next step ÷ users at this step × 100" }),
    T("First-party data", "Data you collect directly from your own users and customers."),
    T("Frequency cap", "A limit on how many times one person sees an ad or message in a period."),
    T("Freemium", "A pricing model where the basic product is free and advanced features are paid."),
  ],
  G: [
    T("Go-to-market (GTM)", "The plan for launching a product: target customer, positioning, pricing, channels and sales motion."),
    T("Gross margin", "Share of revenue left after direct costs.", { formula: "Gross margin = (revenue − cost of goods sold) ÷ revenue × 100" }),
    T("Growth loop", "A system where one user's action brings in more users, such as referrals or shared content."),
    T("Growth marketing", "Marketing across the full funnel driven by experiments and data, not only acquisition."),
  ],
  H: [
    T("Heatmap", "A visual of where people click, move or scroll on a page.", { tools: [["Microsoft Clarity", "https://clarity.microsoft.com"], ["Hotjar", "https://www.hotjar.com"], ["Crazy Egg", "https://www.crazyegg.com"]] }),
    T("Hook", "The opening line or visual that makes someone stop and pay attention."),
    T("Hyper-personalisation", "Tailoring messages using real-time behaviour, not just name or segment."),
  ],
  I: [
    T("Impressions", "The number of times content or an ad was displayed."),
    T("Inbound marketing", "Bringing people to you through content, search and social rather than outbound outreach."),
    T("Incrementality", "The extra result caused by a campaign, measured against a control group.", { formula: "Lift = (test conversion rate − control conversion rate) ÷ control conversion rate × 100" }),
    T("Influencer marketing", "Paying or partnering with creators to promote your product to their audience."),
    T("In-app message", "A message shown inside the app while the user is active.", { tools: [["CleverTap", "https://clevertap.com"], ["Braze", "https://www.braze.com"], ["MoEngage", "https://www.moengage.com"]] }),
  ],
  J: [
    T("Journey orchestration", "Automating multi-step, multi-channel customer journeys that react to behaviour.", { tools: [["Braze Canvas", "https://www.braze.com"], ["CleverTap Journeys", "https://clevertap.com"], ["MoEngage Flows", "https://www.moengage.com"]] }),
    T("Jobs to be done (JTBD)", "A framework that asks what job a customer is hiring your product to do."),
  ],
  K: [
    T("Keyword", "A word or phrase people type into search engines, targeted by SEO and paid search."),
    T("Keyword difficulty", "An estimate of how hard it is to rank on page one for a keyword."),
    T("KPI", "Key performance indicator: a metric chosen to show whether a goal is being met."),
  ],
  L: [
    T("Landing page", "A page built for one campaign goal, such as sign-up or purchase."),
    T("Lead", "A person who has shown interest, for example by sharing contact details."),
    T("Lead scoring", "Ranking leads by fit and behaviour so sales follows up on the best first."),
    T("Lifecycle marketing", "Sending the right message at each stage of the customer relationship, from onboarding to win-back.", { see: ["Lifecycle marketing strategy", "/thoughts/lifecycle-marketing-strategy"] }),
    T("Lookalike audience", "An ad audience of new people similar to your existing customers."),
    T("LTV:CAC ratio", "How much value a customer brings compared with what they cost to win; 3:1 is a common rule of thumb.", { formula: "LTV:CAC = LTV ÷ CAC" }),
  ],
  M: [
    T("Marketing automation", "Software that sends messages and updates data automatically based on rules and triggers.", { tools: [["HubSpot Marketing Hub", "https://www.hubspot.com"], ["Marketo", "https://business.adobe.com/products/marketo.html"], ["ActiveCampaign", "https://www.activecampaign.com"]] }),
    T("Marketing mix (4Ps)", "Product, price, place and promotion: the levers a marketer controls."),
    T("Marketing qualified lead (MQL)", "A lead that meets marketing's criteria for being ready for sales follow-up."),
    T("Monetization", "The funnel stage of turning usage into revenue through pricing, upsells and new offers."),
    T("MRR / ARR", "Monthly or annual recurring revenue from subscriptions.", { formula: "ARR = MRR × 12" }),
    T("Multi-touch attribution", "Giving partial credit to several touchpoints before a conversion."),
  ],
  N: [
    T("Net Promoter Score (NPS)", "Loyalty measure from asking how likely people are to recommend you (0–10).", { formula: "NPS = % promoters (9–10) − % detractors (0–6)" }),
    T("Net revenue retention (NRR)", "Revenue kept from existing customers including upgrades, minus downgrades and churn.", { formula: "NRR = (starting MRR + expansion − contraction − churned MRR) ÷ starting MRR × 100" }),
    T("North Star Metric", "The single metric that best captures the value customers get from your product."),
  ],
  O: [
    T("Omnichannel", "A connected experience across every channel, where context carries from one to another."),
    T("Onboarding", "The first steps that guide a new user to their first value."),
    T("Open rate", "The share of delivered emails that were opened; less reliable since Apple Mail Privacy Protection.", { formula: "Open rate = unique opens ÷ emails delivered × 100" }),
    T("Organic traffic", "Visitors who arrive from unpaid search results."),
    T("Opt-in", "A user's explicit permission to receive messages."),
  ],
  P: [
    T("Paid media", "Any channel where you pay for placement, such as search, social or display ads.", { tools: [["Google Ads", "https://ads.google.com"], ["Meta Ads Manager", "https://www.facebook.com/business/ads"], ["LinkedIn Ads", "https://business.linkedin.com/marketing-solutions/ads"]] }),
    T("Payback period", "Months it takes for a customer's gross profit to cover their acquisition cost.", { formula: "Payback = CAC ÷ (monthly ARPU × gross margin)" }),
    T("Personalisation", "Changing content or offers based on who the user is and what they did."),
    T("Positioning", "The specific place you want your product to hold in customers' minds versus alternatives."),
    T("Product-led growth (PLG)", "Growth where the product itself drives acquisition, activation and expansion."),
    T("Product marketing", "Bringing products to market: positioning, messaging, launches and sales enablement."),
    T("Push notification", "A message sent to a phone or browser even when the app is closed.", { tools: [["CleverTap", "https://clevertap.com"], ["OneSignal", "https://onesignal.com"], ["Firebase Cloud Messaging", "https://firebase.google.com/products/cloud-messaging"]] }),
  ],
  Q: [
    T("Qualified lead", "A lead confirmed to fit your target customer and have real buying intent."),
    T("Quality Score", "Google Ads' 1–10 rating of ad relevance, expected CTR and landing page experience."),
  ],
  R: [
    T("Reach", "The number of unique people who saw your content or ad."),
    T("Reactivation", "Bringing lapsed customers back by fixing the reason they stopped, before offering discounts.", { see: ["Customer reactivation", "/thoughts/customer-reactivation-before-win-back-campaign"] }),
    T("Referral programme", "Rewarding customers for bringing in new customers."),
    T("Remarketing / retargeting", "Showing ads or messages to people who already visited or used your product."),
    T("Repeat purchase rate", "The share of customers who bought more than once.", { formula: "Repeat purchase rate = customers with 2+ orders ÷ total customers × 100" }),
    T("Retention", "The funnel stage of keeping customers coming back over time."),
    T("Return on ad spend (ROAS)", "Revenue earned per unit of ad spend.", { formula: "ROAS = revenue from ads ÷ ad spend" }),
    T("Return on investment (ROI)", "Profit compared with what was spent.", { formula: "ROI = (gain − cost) ÷ cost × 100" }),
    T("RFM segmentation", "Grouping customers by Recency, Frequency and Monetary value of purchases."),
  ],
  S: [
    T("Search engine marketing (SEM)", "Buying ads on search engines; sometimes used to include SEO."),
    T("SEO", "Search engine optimisation: improving pages so they rank higher in unpaid search results.", { tools: [["Google Search Console", "https://search.google.com/search-console"], ["Semrush", "https://www.semrush.com"], ["Ahrefs", "https://ahrefs.com"]] }),
    T("Segmentation", "Dividing users into groups by traits or behaviour to send relevant messages."),
    T("Session", "A group of user interactions on a site or app within a time frame."),
    T("Share of voice", "Your brand's share of conversation or ad visibility versus competitors.", { formula: "SOV = your brand mentions ÷ total category mentions × 100" }),
    T("Social media marketing", "Using social platforms to build audience, engagement and sales.", { tools: [["Buffer", "https://buffer.com"], ["Hootsuite", "https://www.hootsuite.com"], ["Sprout Social", "https://sproutsocial.com"]] }),
    T("Stickiness", "How often users return; usually DAU ÷ MAU."),
  ],
  T: [
    T("Target audience", "The specific group of people a product or campaign is meant for."),
    T("Time to value", "How long a new user takes to reach their first meaningful result."),
    T("Touchpoint", "Any point where a customer interacts with your brand."),
    T("Trigger-based messaging", "Messages sent automatically when a user does, or fails to do, a specific action."),
    T("Total addressable market (TAM)", "The total revenue opportunity if you won every possible customer.", { formula: "TAM = number of potential customers × average annual revenue per customer" }),
  ],
  U: [
    T("Unique selling proposition (USP)", "The one clear reason a customer should choose you over alternatives."),
    T("Unsubscribe rate", "The share of recipients who opted out after a message.", { formula: "Unsubscribe rate = unsubscribes ÷ emails delivered × 100" }),
    T("Upsell", "Moving a customer to a higher-priced plan or larger order."),
    T("UTM parameters", "Tags added to a URL (source, medium, campaign) so analytics can tell where a visit came from.", { tools: [["Google Campaign URL Builder", "https://ga-dev-tools.google/campaign-url-builder/"], ["Google Analytics 4", "https://marketingplatform.google.com/about/analytics/"]] }),
    T("User-generated content (UGC)", "Content made by customers, such as reviews and posts, used in marketing."),
  ],
  V: [
    T("Value proposition", "A clear statement of the benefit customers get and why it matters to them."),
    T("Viral coefficient (K-factor)", "How many new users each user brings in.", { formula: "K = invites sent per user × invite conversion rate" }),
    T("Vanity metric", "A number that looks good but doesn't guide decisions, such as raw follower count."),
  ],
  W: [
    T("Win-back campaign", "Messages aimed at customers who have stopped buying, often with an incentive."),
    T("WhatsApp marketing", "Sending opted-in customers updates and offers via the WhatsApp Business Platform.", { tools: [["WhatsApp Business Platform", "https://business.whatsapp.com"], ["Gupshup", "https://www.gupshup.io"], ["Interakt", "https://www.interakt.shop"]] }),
    T("Word-of-mouth", "Customers recommending you to others without being paid to."),
  ],
  X: [
    T("X (formerly Twitter) marketing", "Using X for brand updates, conversation and paid promotion."),
    T("XML sitemap", "A file listing a site's pages so search engines can find and crawl them."),
  ],
  Y: [
    T("Year-over-year (YoY) growth", "Change in a metric compared with the same period last year.", { formula: "YoY growth = (this year − last year) ÷ last year × 100" }),
    T("Yield", "In ad sales, the revenue earned per impression or per unit of inventory."),
  ],
  Z: [
    T("Zero-party data", "Data a customer intentionally shares with you, such as preferences in a quiz or survey."),
    T("Zero-click search", "A search answered on the results page, so the user never clicks a website."),
  ],
};

export function glossaryBody(): string {
  const letters = Object.keys(glossary);
  const jump = letters.map((l) => `[${l}](#letter-${l.toLowerCase()})`).join(" · ");
  const sections = letters.map((l) => {
    const items = glossary[l]!.map((t) => {
      let line = `- **${t.term}:** ${t.meaning}`;
      if (t.formula) line += ` Formula: ${t.formula}.`;
      if (t.tools) line += ` Top tools: ${t.tools.map(([n, u]) => `[${n}](${u})`).join(", ")}.`;
      if (t.see) line += ` Read more: [${t.see[0]}](${t.see[1]}).`;
      return line;
    }).join("\n");
    return `## ${l}\n\n${items}`;
  }).join("\n\n");
  return `> **Quick answer:** this glossary defines ${glossaryCount()} marketing terms from A to Z in one to three lines each, with the formula where a metric has one and the top tools where a term has its own software category. It focuses on growth, CRM, lifecycle and retention terms that broad glossaries often skip.

Jump to a letter: ${jump}

${sections}

## How to use this glossary

Formulas are the standard textbook versions. Check how your own tools define each metric, since platforms differ on details such as what counts as an active user or a conversion. Tools are listed because they are widely used, not because of any partnership.`;
}

export function glossaryCount() { return Object.values(glossary).reduce((n, l) => n + l.length, 0); }
