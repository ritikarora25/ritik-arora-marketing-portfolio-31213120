/** Marketing glossary A–Z. Each term: 1–3 line meaning, optional plain-text formula, optional top tools. */
export interface GlossaryTerm {
  term: string;
  meaning: string;
  formula?: string;
  tools?: [string, string][];
  see?: [string, string];
  src: [string, string];
}

const T = (
  term: string,
  meaning: string,
  extra: Omit<GlossaryTerm, "term" | "meaning">,
): GlossaryTerm => ({ term, meaning, ...extra });

/** Stable anchor for a term, e.g. "Customer acquisition cost (CAC)" -> "customer-acquisition-cost-cac". */
export const termSlug = (term: string) =>
  term
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export const glossary: Record<string, GlossaryTerm[]> = {
  A: [
    T(
      "AIDA model",
      "A four-step model of how buyers move: Attention, Interest, Desire, Action. Used to structure ads, emails and landing pages.",
      { src: ["HubSpot: the AIDA model", "https://blog.hubspot.com/marketing/aida-model"] },
    ),
    T(
      "AI marketing",
      "Using artificial intelligence, such as machine learning and generative AI, to analyse data, personalise messages and automate marketing decisions.",
      { src: ["HubSpot: AI marketing", "https://blog.hubspot.com/marketing/ai-marketing"] },
    ),
    T(
      "AEO (answer engine optimization)",
      "Structuring content so AI answer engines and voice assistants can lift it as a direct answer: clear questions, short answers, schema.",
      {
        src: [
          "Search Engine Journal: answer engine optimization",
          "https://www.searchenginejournal.com/answer-engine-optimization-aeo/518451/",
        ],
      },
    ),
    T(
      "A/B testing",
      "Showing two versions of a page, message or offer to random groups to see which performs better on one metric.",
      {
        tools: [
          ["Optimizely", "https://www.optimizely.com"],
          ["VWO", "https://vwo.com"],
          ["AB Tasty", "https://www.abtasty.com"],
        ],
        src: ["Wikipedia: A/B testing", "https://en.wikipedia.org/wiki/A/B_testing"],
      },
    ),
    T(
      "Acquisition",
      "The first funnel stage: getting new people to discover your product and sign up or buy.",
      {
        src: [
          "Wikipedia: Customer acquisition management",
          "https://en.wikipedia.org/wiki/Customer_acquisition_management",
        ],
      },
    ),
    T(
      "Activation",
      "The moment a new user first gets real value, such as a first order or a completed setup. Activation rate = activated users ÷ new sign-ups × 100.",
      { src: ["Amplitude: product activation", "https://amplitude.com/blog/product-activation"] },
    ),
    T("Ad impression", "One showing of an ad on a screen, whether or not anyone clicks it.", {
      src: ["Google Ads Help: impressions", "https://support.google.com/google-ads/answer/6320"],
    }),
    T(
      "Affiliate marketing",
      "Paying partners a commission for sales or leads they send you through a tracked link.",
      {
        src: [
          "Wikipedia: Affiliate marketing",
          "https://en.wikipedia.org/wiki/Affiliate_marketing",
        ],
      },
    ),
    T(
      "Attribution",
      "Deciding which channels or touchpoints get credit for a conversion (first-touch, last-touch, linear, data-driven).",
      {
        tools: [
          ["Google Analytics 4", "https://marketingplatform.google.com/about/analytics/"],
          ["AppsFlyer", "https://www.appsflyer.com"],
          ["Branch", "https://www.branch.io"],
        ],
        src: [
          "Google Analytics Help: attribution models",
          "https://support.google.com/analytics/answer/10596866",
        ],
      },
    ),
    T("Average order value (AOV)", "The average amount spent per order.", {
      formula: "AOV = total revenue ÷ number of orders",
      src: ["Shopify: average order value", "https://www.shopify.com/blog/average-order-value"],
    }),
    T("ARPU", "Average revenue per user over a period.", {
      formula: "ARPU = total revenue ÷ active users",
      src: [
        "Wikipedia: Average revenue per user",
        "https://en.wikipedia.org/wiki/Average_revenue_per_user",
      ],
    }),
    T(
      "Audience segment",
      "A group of users who share traits or behaviour, used to target messages.",
      {
        src: [
          "Wikipedia: Market segmentation",
          "https://en.wikipedia.org/wiki/Market_segmentation",
        ],
      },
    ),
  ],
  B: [
    T(
      "Bounce rate",
      "In GA4, the share of sessions that were not engaged (under 10 seconds, no conversion, one page).",
      {
        formula: "Bounce rate = 1 − engagement rate",
        src: [
          "Google Analytics Help: engagement rate and bounce rate",
          "https://support.google.com/analytics/answer/12195621",
        ],
      },
    ),
    T("Brand awareness", "How many people in your target market recognise or recall your brand.", {
      src: ["Wikipedia: Brand awareness", "https://en.wikipedia.org/wiki/Brand_awareness"],
    }),
    T(
      "Buyer persona",
      "A research-based profile of a typical customer: goals, problems and buying behaviour.",
      {
        src: [
          "Wikipedia: Persona (user experience)",
          "https://en.wikipedia.org/wiki/Persona_(user_experience)",
        ],
      },
    ),
    T(
      "Behavioural targeting",
      "Choosing who gets a message based on what they did, such as viewed, added to cart or stopped ordering.",
      {
        src: [
          "Wikipedia: Behavioral targeting",
          "https://en.wikipedia.org/wiki/Behavioral_targeting",
        ],
      },
    ),
    T("Blended CAC", "Acquisition cost across all channels, including organic sign-ups.", {
      formula: "Blended CAC = total acquisition spend ÷ all new customers",
      src: [
        "Wikipedia: Customer acquisition cost",
        "https://en.wikipedia.org/wiki/Customer_acquisition_cost",
      ],
    }),
  ],
  C: [
    T("Campaign", "A planned set of messages or ads with one goal, audience and time frame.", {
      src: ["Wikipedia: Marketing campaign", "https://en.wikipedia.org/wiki/Marketing_campaign"],
    }),
    T("Churn rate", "The share of customers lost in a period.", {
      formula: "Churn rate = customers lost in period ÷ customers at start × 100",
      see: ["Retention rate formula", "/thoughts/retention-rate-formula"],
      src: ["Wikipedia: Churn rate", "https://en.wikipedia.org/wiki/Churn_rate"],
    }),
    T(
      "Click-through rate (CTR)",
      "The share of people who clicked after seeing an ad, email or search result.",
      {
        formula: "CTR = clicks ÷ impressions × 100",
        src: [
          "Google Ads Help: clickthrough rate (CTR)",
          "https://support.google.com/google-ads/answer/2615875",
        ],
      },
    ),
    T(
      "Cohort",
      "A group of users who started in the same period, tracked together over time to see how behaviour changes.",
      { src: ["Wikipedia: Cohort analysis", "https://en.wikipedia.org/wiki/Cohort_analysis"] },
    ),
    T(
      "Cohort analysis",
      "Comparing cohorts month by month to see whether newer users stay or spend more than older ones.",
      {
        tools: [
          ["Amplitude", "https://amplitude.com"],
          ["Mixpanel", "https://mixpanel.com"],
          ["PostHog", "https://posthog.com"],
        ],
        src: ["Wikipedia: Cohort analysis", "https://en.wikipedia.org/wiki/Cohort_analysis"],
      },
    ),
    T(
      "Content marketing",
      "Attracting customers with useful articles, videos or tools rather than direct ads.",
      { src: ["Wikipedia: Content marketing", "https://en.wikipedia.org/wiki/Content_marketing"] },
    ),
    T(
      "Control group (holdout)",
      "Users deliberately left out of a campaign so you can measure its true lift.",
      {
        src: [
          "Braze: global control groups",
          "https://www.braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement",
        ],
      },
    ),
    T("Conversion rate (CVR)", "The share of visitors or users who complete a target action.", {
      formula: "CVR = conversions ÷ visitors (or clicks) × 100",
      src: [
        "Google Ads Help: conversion rate",
        "https://support.google.com/google-ads/answer/2684489",
      ],
    }),
    T("Cost per acquisition (CPA)", "Ad spend needed to get one conversion.", {
      formula: "CPA = ad spend ÷ conversions",
      src: [
        "Google Ads Help: cost per acquisition (CPA)",
        "https://support.google.com/google-ads/answer/6268632",
      ],
    }),
    T("Cost per click (CPC)", "What you pay on average for one ad click.", {
      formula: "CPC = ad spend ÷ clicks",
      src: [
        "Google Ads Help: cost per click (CPC)",
        "https://support.google.com/google-ads/answer/116495",
      ],
    }),
    T("CPM", "Cost per thousand impressions.", {
      formula: "CPM = ad spend ÷ impressions × 1,000",
      src: [
        "Google Ads Help: cost per thousand impressions (CPM)",
        "https://support.google.com/google-ads/answer/6310",
      ],
    }),
    T(
      "CRM",
      "Customer relationship management: the system and practice of storing customer data and managing every interaction with them.",
      {
        tools: [
          ["HubSpot", "https://www.hubspot.com"],
          ["Salesforce", "https://www.salesforce.com"],
          ["Zoho CRM", "https://www.zoho.com/crm/"],
        ],
        see: ["Best CRM for 2027", "/thoughts/best-crm-for-2027"],
        src: [
          "Wikipedia: Customer relationship management",
          "https://en.wikipedia.org/wiki/Customer_relationship_management",
        ],
      },
    ),
    T(
      "Cross-sell",
      "Offering a related product to an existing customer, such as a case with a phone.",
      { src: ["Wikipedia: Cross-selling", "https://en.wikipedia.org/wiki/Cross-selling"] },
    ),
    T("Customer acquisition cost (CAC)", "What it costs to win one new paying customer.", {
      formula: "CAC = total sales and marketing spend ÷ new customers acquired",
      src: [
        "Wikipedia: Customer acquisition cost",
        "https://en.wikipedia.org/wiki/Customer_acquisition_cost",
      ],
    }),
    T(
      "Customer data platform (CDP)",
      "Software that unifies customer data from every source into one profile per person.",
      {
        tools: [
          ["Segment", "https://segment.com"],
          ["RudderStack", "https://www.rudderstack.com"],
          ["mParticle", "https://www.mparticle.com"],
        ],
        src: [
          "Wikipedia: Customer data platform",
          "https://en.wikipedia.org/wiki/Customer_data_platform",
        ],
      },
    ),
    T(
      "Customer journey",
      "Every step a person takes from first hearing of you to buying and coming back.",
      { src: ["Wikipedia: Customer journey", "https://en.wikipedia.org/wiki/Customer_journey"] },
    ),
    T(
      "Customer lifetime value (CLV / LTV)",
      "The total gross profit you expect from a customer over the whole relationship.",
      {
        formula:
          "LTV = average order value × purchase frequency × gross margin × customer lifespan",
        src: [
          "Wikipedia: Customer lifetime value",
          "https://en.wikipedia.org/wiki/Customer_lifetime_value",
        ],
      },
    ),
    T(
      "Customer retention rate",
      "The share of existing customers still active at the end of a period.",
      {
        formula: "Retention rate = ((E − N) ÷ S) × 100",
        see: ["Retention rate formula", "/thoughts/retention-rate-formula"],
        src: [
          "Zendesk: customer retention rate",
          "https://www.zendesk.com/blog/customer-experience/retention/calculate-customer-retention-rate/",
        ],
      },
    ),
  ],
  D: [
    T(
      "Direct marketing",
      "Reaching customers one-to-one, without a middleman, through channels like email, SMS, mail or calls, and asking for a measurable response.",
      {
        src: [
          "Mailchimp: direct marketing",
          "https://mailchimp.com/marketing-glossary/direct-marketing/",
        ],
      },
    ),
    T(
      "Digital marketing",
      "Promoting a brand or product through online channels such as search, email, social media, websites and apps.",
      {
        src: [
          "Mailchimp: digital marketing",
          "https://mailchimp.com/marketing-glossary/digital-marketing/",
        ],
      },
    ),
    T(
      "DAU / MAU",
      "Daily active users divided by monthly active users; shows how habit-forming a product is.",
      {
        formula: "Stickiness = DAU ÷ MAU × 100",
        src: ["Wikipedia: Active users", "https://en.wikipedia.org/wiki/Active_users"],
      },
    ),
    T(
      "Deep link",
      "A link that opens a specific screen inside an app instead of the home screen.",
      {
        tools: [
          ["Branch", "https://www.branch.io"],
          ["AppsFlyer OneLink", "https://www.appsflyer.com"],
          ["Adjust", "https://www.adjust.com"],
        ],
        src: [
          "Wikipedia: Mobile deep linking",
          "https://en.wikipedia.org/wiki/Mobile_deep_linking",
        ],
      },
    ),
    T(
      "Demand generation",
      "Marketing that builds interest in a problem and your solution before people are ready to buy.",
      { src: ["Wikipedia: Demand generation", "https://en.wikipedia.org/wiki/Demand_generation"] },
    ),
    T("Drip campaign", "A series of automated messages sent on a schedule or after a trigger.", {
      src: ["Wikipedia: Drip marketing", "https://en.wikipedia.org/wiki/Drip_marketing"],
    }),
    T(
      "Dynamic content",
      "Message or page content that changes per user, such as their name or recommended items.",
      { src: ["Wikipedia: Dynamic web page", "https://en.wikipedia.org/wiki/Dynamic_web_page"] },
    ),
  ],
  E: [
    T(
      "Experiential marketing",
      "Marketing that invites people to experience the brand in person or live, such as pop-ups, events or interactive installations.",
      {
        src: [
          "Shopify: experiential marketing",
          "https://www.shopify.com/blog/experiential-marketing",
        ],
      },
    ),
    T(
      "Email marketing",
      "Sending planned or automated emails to subscribers to inform, sell or retain.",
      {
        tools: [
          ["Mailchimp", "https://mailchimp.com"],
          ["Klaviyo", "https://www.klaviyo.com"],
          ["Brevo", "https://www.brevo.com"],
        ],
        src: ["Wikipedia: Email marketing", "https://en.wikipedia.org/wiki/Email_marketing"],
      },
    ),
    T(
      "Engagement",
      "The funnel stage where users return and use the product repeatedly; also any measurable interaction.",
      {
        src: [
          "Wikipedia: Customer engagement",
          "https://en.wikipedia.org/wiki/Customer_engagement",
        ],
      },
    ),
    T("Engagement rate (social)", "Interactions relative to reach.", {
      formula: "Engagement rate = (likes + comments + shares + saves) ÷ reach × 100",
      src: ["Hootsuite: engagement rate", "https://blog.hootsuite.com/calculate-engagement-rate/"],
    }),
    T("Event", "A tracked user action, such as sign_up, add_to_cart or purchase.", {
      src: [
        "Google Analytics Help: about events",
        "https://support.google.com/analytics/answer/9322688",
      ],
    }),
    T(
      "Expansion revenue",
      "Extra revenue from existing customers through upgrades, add-ons or more usage.",
      { src: ["Wikipedia: Upselling", "https://en.wikipedia.org/wiki/Upselling"] },
    ),
  ],
  F: [
    T(
      "Funnel",
      "The stages people pass through toward a goal, with drop-off measured at each step.",
      { src: ["Wikipedia: Purchase funnel", "https://en.wikipedia.org/wiki/Purchase_funnel"] },
    ),
    T("Funnel conversion rate", "The share who move from one stage to the next.", {
      formula: "Step conversion = users at next step ÷ users at this step × 100",
      src: [
        "Google Analytics Help: funnel exploration",
        "https://support.google.com/analytics/answer/9327974",
      ],
    }),
    T("First-party data", "Data you collect directly from your own users and customers.", {
      src: ["Google: first-party data", "https://support.google.com/google-ads/answer/9888656"],
    }),
    T("Frequency cap", "A limit on how many times one person sees an ad or message in a period.", {
      src: [
        "Google Ads Help: frequency capping",
        "https://support.google.com/google-ads/answer/117579",
      ],
    }),
    T(
      "Freemium",
      "A pricing model where the basic product is free and advanced features are paid.",
      { src: ["Wikipedia: Freemium", "https://en.wikipedia.org/wiki/Freemium"] },
    ),
  ],
  G: [
    T(
      "Guerrilla marketing",
      "Low-cost, unconventional and surprising tactics, often in public spaces, designed to grab attention and get people talking.",
      {
        src: [
          "HubSpot: guerrilla marketing",
          "https://blog.hubspot.com/marketing/guerilla-marketing-examples",
        ],
      },
    ),
    T(
      "GEO (generative engine optimization)",
      "Optimizing content so generative AI tools like ChatGPT, Perplexity and Google AI Overviews mention and cite your brand in their answers.",
      {
        src: [
          "Ahrefs: generative engine optimization",
          "https://ahrefs.com/blog/generative-engine-optimization/",
        ],
      },
    ),
    T(
      "Go-to-market (GTM)",
      "The plan for launching a product: target customer, positioning, pricing, channels and sales motion.",
      {
        src: [
          "Wikipedia: Go-to-market strategy",
          "https://en.wikipedia.org/wiki/Go-to-market_strategy",
        ],
      },
    ),
    T("Gross margin", "Share of revenue left after direct costs.", {
      formula: "Gross margin = (revenue − cost of goods sold) ÷ revenue × 100",
      src: ["Wikipedia: Gross margin", "https://en.wikipedia.org/wiki/Gross_margin"],
    }),
    T(
      "Growth loop",
      "A system where one user's action brings in more users, such as referrals or shared content.",
      { src: ["Reforge: growth loops", "https://www.reforge.com/blog/growth-loops"] },
    ),
    T(
      "Growth marketing",
      "Marketing across the full funnel driven by experiments and data, not only acquisition.",
      { src: ["Wikipedia: Growth hacking", "https://en.wikipedia.org/wiki/Growth_hacking"] },
    ),
  ],
  H: [
    T("Heatmap", "A visual of where people click, move or scroll on a page.", {
      tools: [
        ["Microsoft Clarity", "https://clarity.microsoft.com"],
        ["Hotjar", "https://www.hotjar.com"],
        ["Crazy Egg", "https://www.crazyegg.com"],
      ],
      src: [
        "Microsoft Clarity: heatmaps",
        "https://learn.microsoft.com/en-us/clarity/heatmaps/heatmaps-overview",
      ],
    }),
    T(
      "Hook",
      "In advertising, the opening line or visual that makes someone stop and pay attention.",
      { src: ["Wikipedia: Advertising", "https://en.wikipedia.org/wiki/Advertising"] },
    ),
    T(
      "Hyper-personalisation",
      "Tailoring messages using real-time behaviour, not just name or segment.",
      {
        src: [
          "Wikipedia: Personalized marketing",
          "https://en.wikipedia.org/wiki/Personalized_marketing",
        ],
      },
    ),
  ],
  I: [
    T(
      "Integrated marketing communications (IMC)",
      "Coordinating advertising, PR, social, email, sales and other channels so every message tells one consistent brand story.",
      {
        src: [
          "Purdue University: integrated marketing communication",
          "https://online.purdue.edu/blog/communication/what-is-integrated-marketing-communication",
        ],
      },
    ),
    T("Impressions", "The number of times content or an ad was displayed.", {
      src: ["Google Ads Help: impressions", "https://support.google.com/google-ads/answer/6320"],
    }),
    T(
      "Inbound marketing",
      "Bringing people to you through content, search and social rather than outbound outreach.",
      { src: ["Wikipedia: Content marketing", "https://en.wikipedia.org/wiki/Content_marketing"] },
    ),
    T(
      "Incrementality",
      "The extra result caused by a campaign, measured against a control group.",
      {
        formula:
          "Lift = (test conversion rate − control conversion rate) ÷ control conversion rate × 100",
        src: [
          "Think with Google: incrementality",
          "https://www.thinkwithgoogle.com/intl/en-gb/marketing-strategies/data-and-measurement/incrementality-testing/",
        ],
      },
    ),
    T(
      "Influencer marketing",
      "Paying or partnering with creators to promote your product to their audience.",
      {
        src: [
          "Wikipedia: Influencer marketing",
          "https://en.wikipedia.org/wiki/Influencer_marketing",
        ],
      },
    ),
    T("In-app message", "A message shown inside the app while the user is active.", {
      tools: [
        ["CleverTap", "https://clevertap.com"],
        ["Braze", "https://www.braze.com"],
        ["MoEngage", "https://www.moengage.com"],
      ],
      src: [
        "Braze: in-app messages",
        "https://www.braze.com/docs/user_guide/message_building_by_channel/in-app_messages/",
      ],
    }),
  ],
  J: [
    T(
      "Journey orchestration",
      "Automating multi-step, multi-channel customer journeys that react to behaviour.",
      {
        tools: [
          ["Braze Canvas", "https://www.braze.com"],
          ["CleverTap Journeys", "https://clevertap.com"],
          ["MoEngage Flows", "https://www.moengage.com"],
        ],
        src: ["Braze: Canvas", "https://www.braze.com/docs/user_guide/engagement_tools/canvas/"],
      },
    ),
    T(
      "Jobs to be done (JTBD)",
      "A framework that asks what job a customer is hiring your product to do.",
      {
        src: [
          "Wikipedia: Outcome-Driven Innovation",
          "https://en.wikipedia.org/wiki/Outcome-Driven_Innovation",
        ],
      },
    ),
  ],
  K: [
    T(
      "Keyword",
      "A word or phrase people type into search engines, targeted by SEO and paid search.",
      {
        src: [
          "Google Search Central: SEO starter guide",
          "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
        ],
      },
    ),
    T("Keyword difficulty", "An estimate of how hard it is to rank on page one for a keyword.", {
      src: ["Semrush: keyword difficulty", "https://www.semrush.com/kb/1158-what-is-kd"],
    }),
    T("KPI", "Key performance indicator: a metric chosen to show whether a goal is being met.", {
      src: [
        "Wikipedia: Performance indicator",
        "https://en.wikipedia.org/wiki/Performance_indicator",
      ],
    }),
  ],
  L: [
    T("Landing page", "A page built for one campaign goal, such as sign-up or purchase.", {
      src: ["Wikipedia: Landing page", "https://en.wikipedia.org/wiki/Landing_page"],
    }),
    T("Lead", "A person who has shown interest, for example by sharing contact details.", {
      src: ["Wikipedia: Sales lead", "https://en.wikipedia.org/wiki/Sales_lead"],
    }),
    T("Lead scoring", "Ranking leads by fit and behaviour so sales follows up on the best first.", {
      src: ["Wikipedia: Lead scoring", "https://en.wikipedia.org/wiki/Lead_scoring"],
    }),
    T(
      "Lifecycle marketing",
      "Sending the right message at each stage of the customer relationship, from onboarding to win-back.",
      {
        see: ["Lifecycle marketing strategy", "/thoughts/lifecycle-marketing-strategy"],
        src: [
          "Wikipedia: Customer lifecycle management",
          "https://en.wikipedia.org/wiki/Customer_lifecycle_management",
        ],
      },
    ),
    T("Lookalike audience", "An ad audience of new people similar to your existing customers.", {
      src: ["Wikipedia: Lookalike audience", "https://en.wikipedia.org/wiki/Lookalike_audience"],
    }),
    T(
      "LTV:CAC ratio",
      "How much value a customer brings compared with what they cost to win; 3:1 is a common rule of thumb.",
      {
        formula: "LTV:CAC = LTV ÷ CAC",
        src: [
          "Wikipedia: Customer lifetime value",
          "https://en.wikipedia.org/wiki/Customer_lifetime_value",
        ],
      },
    ),
  ],
  M: [
    T(
      "Marketing strategy",
      "A business's long-term plan for reaching target customers and turning them into buyers, based on its value proposition and competitive position.",
      {
        src: [
          "Coursera: marketing strategy",
          "https://www.coursera.org/articles/marketing-strategy",
        ],
      },
    ),
    T(
      "Marketing psychology",
      "Applying how people actually think and decide (biases, social proof, scarcity, framing) to marketing; rooted in behavioural economics.",
      { src: ["APA: behavioral economics", "https://www.apa.org/topics/behavioral-economics"] },
    ),
    T(
      "Marketing plan",
      "A written document setting out marketing goals, target audience, budget, channels, tactics and timelines for a set period.",
      {
        src: [
          "HubSpot: marketing plan",
          "https://blog.hubspot.com/marketing/marketing-plan-template-generator",
        ],
      },
    ),
    T(
      "Marketing",
      "The activity and processes for creating, communicating, delivering and exchanging offerings that have value for customers, clients, partners and society.",
      {
        src: [
          "American Marketing Association: definition of marketing",
          "https://www.ama.org/the-definition-of-marketing-what-is-marketing/",
        ],
      },
    ),
    T(
      "Marketing automation",
      "Software that sends messages and updates data automatically based on rules and triggers.",
      {
        tools: [
          ["HubSpot Marketing Hub", "https://www.hubspot.com"],
          ["Marketo", "https://business.adobe.com/products/marketo.html"],
          ["ActiveCampaign", "https://www.activecampaign.com"],
        ],
        src: [
          "Wikipedia: Marketing automation",
          "https://en.wikipedia.org/wiki/Marketing_automation",
        ],
      },
    ),
    T(
      "Marketing mix (4Ps)",
      "Product, price, place and promotion: the levers a marketer controls.",
      { src: ["Wikipedia: Marketing mix", "https://en.wikipedia.org/wiki/Marketing_mix"] },
    ),
    T(
      "Marketing qualified lead (MQL)",
      "A lead that meets marketing's criteria for being ready for sales follow-up.",
      { src: ["Wikipedia: Lead scoring", "https://en.wikipedia.org/wiki/Lead_scoring"] },
    ),
    T(
      "Monetization",
      "The funnel stage of turning usage into revenue through pricing, upsells and new offers.",
      { src: ["Wikipedia: Monetization", "https://en.wikipedia.org/wiki/Monetization"] },
    ),
    T("MRR / ARR", "Monthly or annual recurring revenue from subscriptions.", {
      formula: "ARR = MRR × 12",
      src: [
        "Wikipedia: Annual recurring revenue",
        "https://en.wikipedia.org/wiki/Annual_recurring_revenue",
      ],
    }),
    T(
      "Multi-touch attribution",
      "Giving partial credit to several touchpoints before a conversion.",
      {
        src: [
          "Wikipedia: Attribution (marketing)",
          "https://en.wikipedia.org/wiki/Attribution_(marketing)",
        ],
      },
    ),
  ],
  N: [
    T(
      "Net Promoter Score (NPS)",
      "Loyalty measure from asking how likely people are to recommend you (0–10).",
      {
        formula: "NPS = % promoters (9–10) − % detractors (0–6)",
        src: [
          "Bain: measuring your NPS",
          "https://www.netpromotersystem.com/about/measuring-your-net-promoter-score/",
        ],
      },
    ),
    T(
      "Net revenue retention (NRR)",
      "Revenue kept from existing customers including upgrades, minus downgrades and churn.",
      {
        formula:
          "NRR = (starting MRR + expansion − contraction − churned MRR) ÷ starting MRR × 100",
        src: [
          "Stripe: net revenue retention",
          "https://stripe.com/resources/more/net-revenue-retention",
        ],
      },
    ),
    T(
      "North Star Metric",
      "The single metric that best captures the value customers get from your product.",
      { src: ["Amplitude: North Star Playbook", "https://amplitude.com/books/north-star"] },
    ),
  ],
  O: [
    T(
      "Omnichannel",
      "A connected experience across every channel, where context carries from one to another.",
      { src: ["Wikipedia: Omnichannel", "https://en.wikipedia.org/wiki/Omnichannel"] },
    ),
    T("Onboarding", "The first steps that guide a new user to their first value.", {
      src: ["Wikipedia: User onboarding", "https://en.wikipedia.org/wiki/User_onboarding"],
    }),
    T(
      "Open rate",
      "The share of delivered emails that were opened; less reliable since Apple Mail Privacy Protection.",
      {
        formula: "Open rate = unique opens ÷ emails delivered × 100",
        src: [
          "Mailchimp: email marketing benchmarks",
          "https://mailchimp.com/resources/email-marketing-benchmarks/",
        ],
      },
    ),
    T("Organic traffic", "Visitors who arrive from unpaid search results.", {
      src: ["Wikipedia: Organic search", "https://en.wikipedia.org/wiki/Organic_search"],
    }),
    T("Opt-in", "A user's explicit permission to receive messages.", {
      src: ["Wikipedia: Opt-in email", "https://en.wikipedia.org/wiki/Opt-in_email"],
    }),
  ],
  P: [
    T(
      "Performance marketing",
      "Online marketing where you pay for, and judge by, measurable results such as clicks, leads, installs or sales.",
      {
        src: [
          "Amplitude: performance marketing",
          "https://amplitude.com/blog/performance-marketing",
        ],
      },
    ),
    T(
      "Paid media",
      "Any channel where you pay for placement, such as search, social or display ads.",
      {
        tools: [
          ["Google Ads", "https://ads.google.com"],
          ["Meta Ads Manager", "https://www.facebook.com/business/ads"],
          ["LinkedIn Ads", "https://business.linkedin.com/marketing-solutions/ads"],
        ],
        src: ["Wikipedia: Online advertising", "https://en.wikipedia.org/wiki/Online_advertising"],
      },
    ),
    T(
      "Payback period",
      "Months it takes for a customer's gross profit to cover their acquisition cost.",
      {
        formula: "Payback = CAC ÷ (monthly ARPU × gross margin)",
        src: ["Wikipedia: Payback period", "https://en.wikipedia.org/wiki/Payback_period"],
      },
    ),
    T("Personalisation", "Changing content or offers based on who the user is and what they did.", {
      src: [
        "Wikipedia: Personalized marketing",
        "https://en.wikipedia.org/wiki/Personalized_marketing",
      ],
    }),
    T(
      "Positioning",
      "The specific place you want your product to hold in customers' minds versus alternatives.",
      {
        src: [
          "Wikipedia: Positioning (marketing)",
          "https://en.wikipedia.org/wiki/Positioning_(marketing)",
        ],
      },
    ),
    T(
      "Product-led growth (PLG)",
      "Growth where the product itself drives acquisition, activation and expansion.",
      { src: ["Wikipedia: Growth hacking", "https://en.wikipedia.org/wiki/Growth_hacking"] },
    ),
    T(
      "Product marketing",
      "Bringing products to market: positioning, messaging, launches and sales enablement.",
      { src: ["Wikipedia: Product marketing", "https://en.wikipedia.org/wiki/Product_marketing"] },
    ),
    T("Push notification", "A message sent to a phone or browser even when the app is closed.", {
      tools: [
        ["CleverTap", "https://clevertap.com"],
        ["OneSignal", "https://onesignal.com"],
        ["Firebase Cloud Messaging", "https://firebase.google.com/products/cloud-messaging"],
      ],
      src: ["Wikipedia: Push technology", "https://en.wikipedia.org/wiki/Push_technology"],
    }),
  ],
  Q: [
    T(
      "Qualified lead",
      "A lead confirmed to fit your target customer and have real buying intent.",
      { src: ["Wikipedia: Sales lead", "https://en.wikipedia.org/wiki/Sales_lead"] },
    ),
    T(
      "Quality Score",
      "Google Ads' 1–10 rating of ad relevance, expected CTR and landing page experience.",
      {
        src: [
          "Google Ads Help: about Quality Score",
          "https://support.google.com/google-ads/answer/6167118",
        ],
      },
    ),
  ],
  R: [
    T(
      "Retail media",
      "Ads sold by retailers on their own sites, apps and stores (like Amazon or Flipkart ads), using their shopper data to target buyers near purchase.",
      {
        src: [
          "HubSpot: retail media networks",
          "https://blog.hubspot.com/marketing/retail-media-networks",
        ],
      },
    ),
    T("Reach", "The number of unique people who saw your content or ad.", {
      src: ["Wikipedia: Reach (advertising)", "https://en.wikipedia.org/wiki/Reach_(advertising)"],
    }),
    T(
      "Reactivation",
      "Bringing lapsed customers back by fixing the reason they stopped, before offering discounts.",
      {
        see: ["Customer reactivation", "/thoughts/customer-reactivation-before-win-back-campaign"],
        src: ["Wikipedia: Customer retention", "https://en.wikipedia.org/wiki/Customer_retention"],
      },
    ),
    T("Referral programme", "Rewarding customers for bringing in new customers.", {
      src: ["Wikipedia: Referral marketing", "https://en.wikipedia.org/wiki/Referral_marketing"],
    }),
    T(
      "Remarketing / retargeting",
      "Showing ads or messages to people who already visited or used your product.",
      {
        src: [
          "Wikipedia: Behavioral retargeting",
          "https://en.wikipedia.org/wiki/Behavioral_retargeting",
        ],
      },
    ),
    T("Repeat purchase rate", "The share of customers who bought more than once.", {
      formula: "Repeat purchase rate = customers with 2+ orders ÷ total customers × 100",
      src: ["Shopify: repeat customer rate", "https://www.shopify.com/blog/repeat-customers"],
    }),
    T("Retention", "The funnel stage of keeping customers coming back over time.", {
      src: ["Wikipedia: Customer retention", "https://en.wikipedia.org/wiki/Customer_retention"],
    }),
    T("Return on ad spend (ROAS)", "Revenue earned per unit of ad spend.", {
      formula: "ROAS = revenue from ads ÷ ad spend",
      src: [
        "Google Ads Help: about Target ROAS bidding",
        "https://support.google.com/google-ads/answer/6268637",
      ],
    }),
    T("Return on investment (ROI)", "Profit compared with what was spent.", {
      formula: "ROI = (gain − cost) ÷ cost × 100",
      src: [
        "Wikipedia: Return on investment",
        "https://en.wikipedia.org/wiki/Return_on_investment",
      ],
    }),
    T(
      "RFM segmentation",
      "Grouping customers by Recency, Frequency and Monetary value of purchases.",
      {
        src: [
          "Wikipedia: RFM (market research)",
          "https://en.wikipedia.org/wiki/RFM_(market_research)",
        ],
      },
    ),
  ],
  S: [
    T(
      "Social commerce",
      "Selling products directly inside social media platforms, so people can discover and buy without leaving the app.",
      { src: ["Shopify: social commerce", "https://www.shopify.com/blog/social-commerce"] },
    ),
    T(
      "Search engine marketing (SEM)",
      "Buying ads on search engines; sometimes used to include SEO.",
      {
        src: [
          "Wikipedia: Search engine marketing",
          "https://en.wikipedia.org/wiki/Search_engine_marketing",
        ],
      },
    ),
    T(
      "SEO",
      "Search engine optimisation: improving pages so they rank higher in unpaid search results.",
      {
        tools: [
          ["Google Search Console", "https://search.google.com/search-console"],
          ["Semrush", "https://www.semrush.com"],
          ["Ahrefs", "https://ahrefs.com"],
        ],
        src: [
          "Google Search Central: SEO starter guide",
          "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
        ],
      },
    ),
    T(
      "Segmentation",
      "Dividing users into groups by traits or behaviour to send relevant messages.",
      {
        src: [
          "Wikipedia: Market segmentation",
          "https://en.wikipedia.org/wiki/Market_segmentation",
        ],
      },
    ),
    T("Session", "A group of user interactions on a site or app within a time frame.", {
      src: [
        "Google Analytics Help: about sessions",
        "https://support.google.com/analytics/answer/9191807",
      ],
    }),
    T("Share of voice", "Your brand's share of conversation or ad visibility versus competitors.", {
      formula: "SOV = your brand mentions ÷ total category mentions × 100",
      src: ["Wikipedia: Share of voice", "https://en.wikipedia.org/wiki/Share_of_voice"],
    }),
    T("Social media marketing", "Using social platforms to build audience, engagement and sales.", {
      tools: [
        ["Buffer", "https://buffer.com"],
        ["Hootsuite", "https://www.hootsuite.com"],
        ["Sprout Social", "https://sproutsocial.com"],
      ],
      src: [
        "Wikipedia: Social media marketing",
        "https://en.wikipedia.org/wiki/Social_media_marketing",
      ],
    }),
    T("Stickiness", "How often users return; usually DAU ÷ MAU.", {
      src: ["Wikipedia: Active users", "https://en.wikipedia.org/wiki/Active_users"],
    }),
  ],
  T: [
    T(
      "Trade marketing",
      "Marketing aimed at retailers, distributors and wholesalers (not end customers) to get them to stock, display and push your product.",
      { src: ["Shopify: trade marketing", "https://www.shopify.com/blog/trade-marketing"] },
    ),
    T("Target audience", "The specific group of people a product or campaign is meant for.", {
      src: ["Wikipedia: Target audience", "https://en.wikipedia.org/wiki/Target_audience"],
    }),
    T("Time to value", "How long a new user takes to reach their first meaningful result.", {
      src: ["Amplitude: time to value", "https://amplitude.com/blog/time-to-value"],
    }),
    T("Touchpoint", "Any point where a customer interacts with your brand.", {
      src: ["Wikipedia: Touchpoint", "https://en.wikipedia.org/wiki/Touchpoint"],
    }),
    T(
      "Trigger-based messaging",
      "Messages sent automatically when a user does, or fails to do, a specific action.",
      {
        src: [
          "Wikipedia: Marketing automation",
          "https://en.wikipedia.org/wiki/Marketing_automation",
        ],
      },
    ),
    T(
      "Total addressable market (TAM)",
      "The total revenue opportunity if you won every possible customer.",
      {
        formula: "TAM = number of potential customers × average annual revenue per customer",
        src: [
          "Wikipedia: Total addressable market",
          "https://en.wikipedia.org/wiki/Total_addressable_market",
        ],
      },
    ),
  ],
  U: [
    T(
      "Unique selling proposition (USP)",
      "The one clear reason a customer should choose you over alternatives.",
      {
        src: [
          "Wikipedia: Unique selling proposition",
          "https://en.wikipedia.org/wiki/Unique_selling_proposition",
        ],
      },
    ),
    T("Unsubscribe rate", "The share of recipients who opted out after a message.", {
      formula: "Unsubscribe rate = unsubscribes ÷ emails delivered × 100",
      src: [
        "Mailchimp: email marketing benchmarks",
        "https://mailchimp.com/resources/email-marketing-benchmarks/",
      ],
    }),
    T("Upsell", "Moving a customer to a higher-priced plan or larger order.", {
      src: ["Wikipedia: Upselling", "https://en.wikipedia.org/wiki/Upselling"],
    }),
    T(
      "UTM parameters",
      "Tags added to a URL (source, medium, campaign) so analytics can tell where a visit came from.",
      {
        tools: [
          ["Google Campaign URL Builder", "https://ga-dev-tools.google/campaign-url-builder/"],
          ["Google Analytics 4", "https://marketingplatform.google.com/about/analytics/"],
        ],
        src: ["Wikipedia: UTM parameters", "https://en.wikipedia.org/wiki/UTM_parameters"],
      },
    ),
    T(
      "User-generated content (UGC)",
      "Content made by customers, such as reviews and posts, used in marketing.",
      {
        src: [
          "Wikipedia: User-generated content",
          "https://en.wikipedia.org/wiki/User-generated_content",
        ],
      },
    ),
  ],
  V: [
    T(
      "Value proposition",
      "A clear statement of the benefit customers get and why it matters to them.",
      { src: ["Wikipedia: Value proposition", "https://en.wikipedia.org/wiki/Value_proposition"] },
    ),
    T("Viral coefficient (K-factor)", "How many new users each user brings in.", {
      formula: "K = invites sent per user × invite conversion rate",
      src: ["Wikipedia: Viral marketing", "https://en.wikipedia.org/wiki/Viral_marketing"],
    }),
    T(
      "Vanity metric",
      "A number that looks good but doesn't guide decisions, such as raw follower count.",
      { src: ["Wikipedia: Vanity metric", "https://en.wikipedia.org/wiki/Vanity_metric"] },
    ),
  ],
  W: [
    T(
      "Win-back campaign",
      "Messages aimed at customers who have stopped buying, often with an incentive.",
      {
        src: ["Wikipedia: Customer retention", "https://en.wikipedia.org/wiki/Customer_retention"],
      },
    ),
    T(
      "WhatsApp marketing",
      "Sending opted-in customers updates and offers via the WhatsApp Business Platform.",
      {
        tools: [
          ["WhatsApp Business Platform", "https://business.whatsapp.com"],
          ["Gupshup", "https://www.gupshup.io"],
          ["Interakt", "https://www.interakt.shop"],
        ],
        src: ["Wikipedia: WhatsApp", "https://en.wikipedia.org/wiki/WhatsApp"],
      },
    ),
    T("Word-of-mouth", "Customers recommending you to others without being paid to.", {
      src: [
        "Wikipedia: Word-of-mouth marketing",
        "https://en.wikipedia.org/wiki/Word-of-mouth_marketing",
      ],
    }),
  ],
  X: [
    T(
      "X (formerly Twitter) marketing",
      "Using X for brand updates, conversation and paid promotion.",
      { src: ["Wikipedia: Twitter", "https://en.wikipedia.org/wiki/Twitter"] },
    ),
    T("XML sitemap", "A file listing a site's pages so search engines can find and crawl them.", {
      src: [
        "Google Search Central: sitemaps",
        "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview",
      ],
    }),
  ],
  Y: [
    T(
      "Year-over-year (YoY) growth",
      "Change in a metric compared with the same period last year.",
      {
        formula: "YoY growth = (this year − last year) ÷ last year × 100",
        src: ["Wikipedia: Year-over-year", "https://en.wikipedia.org/wiki/Year-over-year"],
      },
    ),
    T("Yield", "In ad sales, the revenue earned per impression or per unit of inventory.", {
      src: ["Wikipedia: Yield management", "https://en.wikipedia.org/wiki/Yield_management"],
    }),
  ],
  Z: [
    T(
      "Zero-party data",
      "Data a customer intentionally shares with you, such as preferences in a quiz or survey.",
      {
        src: [
          "Forrester: zero-party data",
          "https://www.forrester.com/blogs/straight-from-the-source-collecting-zero-party-data-from-customers/",
        ],
      },
    ),
    T(
      "Zero-click search",
      "A search answered on the results page, so the user never clicks a website.",
      {
        src: ["Semrush: zero-click searches", "https://www.semrush.com/blog/zero-click-searches/"],
      },
    ),
  ],
};

const TOP_FORMULAS = [
  "Customer acquisition cost (CAC)",
  "Customer lifetime value (CLV / LTV)",
  "Churn rate",
  "Customer retention rate",
  "Return on ad spend (ROAS)",
  "Click-through rate (CTR)",
  "Net Promoter Score (NPS)",
  "Net revenue retention (NRR)",
];

for (const list of Object.values(glossary)) list.sort((a, b) => a.term.localeCompare(b.term));

export const allGlossaryTerms = () => Object.values(glossary).flat();

/** Unique sources across all terms, sorted by publisher. */
export function glossarySources() {
  const seen = new Map<string, string>();
  for (const t of allGlossaryTerms()) if (!seen.has(t.src[1])) seen.set(t.src[1], t.src[0]);
  return [...seen]
    .map(([url, label]) => ({ label, url }))
    .sort((a, b) => a.label.localeCompare(b.label));
}

export function glossaryBody(): string {
  const letters = Object.keys(glossary);
  const jump = letters.map((l) => `[${l}](#letter-${l.toLowerCase()})`).join(" · ");
  const byName = new Map(allGlossaryTerms().map((t) => [t.term, t]));
  const table = [
    "| Metric | Formula | Source |",
    "| --- | --- | --- |",
    ...TOP_FORMULAS.map((n) => {
      const t = byName.get(n)!;
      return `| [${t.term}](#${termSlug(t.term)}) | ${t.formula!.replace(/^[^=]+=\s*/, "")} | [${t.src[0].split(":")[0]}](${t.src[1]}) |`;
    }),
  ].join("\n");
  const sections = letters
    .map((l) => {
      const items = glossary[l]!.map((t) => {
        let line = `- **${t.term}:** ${t.meaning}`;
        if (t.formula) line += ` Formula: ${t.formula}.`;
        if (t.tools) line += ` Top tools: ${t.tools.map(([n, u]) => `[${n}](${u})`).join(", ")}.`;
        if (t.see) line += ` Read more: [${t.see[0]}](${t.see[1]}).`;
        line += ` Source: [${t.src[0]}](${t.src[1]}).`;
        return line;
      }).join("\n");
      return `## ${l}\n\n${items}`;
    })
    .join("\n\n");
  return `> **Quick answer:** a marketing glossary is a reference list of marketing terms with short definitions. This one covers ${glossaryCount()} terms from A to Z in one to three lines each, with the formula where a metric has one, the top tools where a term has its own software category, and a source link for every entry so you can check it.

## What are the most-used marketing formulas?

These eight formulas come up most in growth, CRM and retention work. Each links to its full entry and its source.

${table}

Jump to a letter: ${jump}

${sections}

## How to use this glossary

Every definition and formula links to the page it was checked against, such as Google Ads Help, Google Analytics Help, Google Search Central, Bain, Zendesk, Stripe, Mailchimp or Wikipedia. Formulas follow the linked source, but platforms can define details slightly differently, such as what counts as an active user or a conversion, so check your own tool's definition before comparing numbers. Tools are listed because they are widely used, not because of any partnership.`;
}
export function glossaryCount() {
  return Object.values(glossary).reduce((n, l) => n + l.length, 0);
}
