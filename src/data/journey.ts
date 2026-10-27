export type Persona = 'default' | 'recruiter' | 'founder' | 'marketer';
export type StageId = 'acquire' | 'activate' | 'engage' | 'retain' | 'monetize';

export const STAGE_ORDER: StageId[] = ['acquire', 'activate', 'engage', 'retain', 'monetize'];

export const stageMeta: Record<StageId, { num: string; label: string; barWidth: string }> = {
  acquire: { num: '01', label: 'Acquire', barWidth: '100%' },
  activate: { num: '02', label: 'Activate', barWidth: '80%' },
  engage: { num: '03', label: 'Engage', barWidth: '60%' },
  retain: { num: '04', label: 'Retain', barWidth: '40%' },
  monetize: { num: '05', label: 'Monetize', barWidth: '20%' },
};

export const personaBanner: Record<Exclude<Persona, 'default'>, string> = {
  recruiter: "Reading as a Recruiter — Journey reordered to lead with what's most hiring-relevant.",
  founder: "Reading as a Founder — Framing shifted toward business impact and go-to-market.",
  marketer: "Reading as a Fellow marketer — Framing shifted toward channels, tools and craft.",
};

export const mostRelevantStage: Record<Exclude<Persona, 'default'>, StageId> = {
  recruiter: 'retain',
  founder: 'monetize',
  marketer: 'engage',
};

export type PersonaCopy = { default: string; recruiter: string; founder: string; marketer: string };

export const stageCopy: Record<StageId, { role: PersonaCopy; problem: PersonaCopy; ran: PersonaCopy; moved: PersonaCopy }> = {
  acquire: {
    role: {
      default: "Getting a niche sports-analytics brand in front of the right people, from zero.",
      recruiter: "Built a brand's audience and market presence from zero across 3 countries.",
      founder: "Turned zero brand presence into a working acquisition channel across 3 markets.",
      marketer: "Zero-to-one organic + paid acquisition build in a niche vertical.",
    },
    problem: {
      default: "Build audience and inbound demand from scratch in a niche sports-analytics market with no existing presence.",
      recruiter: "Stupa had no digital presence and no inbound pipeline in a niche market.",
      founder: "No existing audience or demand signal to build a go-to-market on.",
      marketer: "No baseline data, channel presence, or SEO footprint to work from.",
    },
    ran: {
      default: "Built social channels from zero, ran Google and Facebook ad campaigns across India, the USA and Germany, and layered in off-page SEO and market research to find where demand actually was.",
      recruiter: "Built and grew social channels from scratch, ran paid campaigns across India, the US and Germany, and ran the SEO and market research behind them.",
      founder: "Stood up organic and paid acquisition from scratch — social, Google/Facebook ads, SEO — while using market research to prioritize where to spend.",
      marketer: "Built social channels from scratch (FB/IG/YouTube), ran Google & Facebook ad campaigns across 3 geographies, paired with off-page SEO and primary market research to find where demand actually lived.",
    },
    moved: {
      default: "13K+ followers within a year, presence established in 3 international markets, a lead-gen pipeline running on real data instead of guesswork.",
      recruiter: "13K+ followers in year one and presence in 3 international markets, with a working lead-gen pipeline.",
      founder: "13K+ audience in 12 months across 3 markets, and a repeatable acquisition motion that outlived the launch phase.",
      marketer: "13K+ followers year one, 3-market coverage, and 25+ campaigns with real data to iterate on.",
    },
  },
  activate: {
    role: {
      default: "Getting first-time users through the lending funnel — from approval to disbursal.",
      recruiter: "Leading onboarding + activation for a lending funnel, managing 5 people across teams and agencies.",
      founder: "Owning the AIP-to-disbursal funnel — the most fragile stage of the lending journey.",
      marketer: "Owning activation across ops, product, engineering and data science to move users from approval to disbursal.",
    },
    problem: {
      default: "First-time users were dropping off between approval (AIP) and disbursal — the most fragile stage of the lending funnel.",
      recruiter: "Approved users were dropping off before disbursal — activation was the bottleneck.",
      founder: "The AIP-to-disbursal step was leaking revenue and had no owner, no playbook, and no consistent execution.",
      marketer: "Fragmented onboarding execution across agency + internal teams meant messaging and journeys weren't consistent.",
    },
    ran: {
      default: "Documented customer journeys, agency processes, SOPs and call scripts into one framework; led onboarding execution across 2 agency and 3 internal team members; partnered with Product, Engineering and Data Science to launch an AI-driven customer outreach program.",
      recruiter: "Consolidated SOPs, call scripts and customer journeys into one framework; led a 5-person team across agency and in-house; shipped an AI-driven customer outreach program with Product, Engineering and Data Science.",
      founder: "Built the activation playbook end-to-end and put in place the AI outreach program that scales it — spanning agency ops, in-house teams and product.",
      marketer: "Standardized journeys, scripts and SOPs; ran onboarding execution across 2 agency + 3 internal members; launched AI-led outreach with Product/Eng/DS.",
    },
    moved: {
      default: "A centralized activation playbook now governs onboarding, with AI-led outreach live and running for funnel activation.",
      recruiter: "Onboarding runs on one centralized playbook now, with AI outreach live in production.",
      founder: "The lending funnel now has a single owner-owned activation system, powered by AI outreach.",
      marketer: "One activation playbook governs onboarding across channels, with AI outreach running live for the funnel.",
    },
  },
  engage: {
    role: {
      default: "Owning CRM across five channels for the seller ecosystem, and making every rupee of it count.",
      recruiter: "Owned CRM across 5 channels for CARS24's seller side; cut ~₹8L/month while lifting engagement.",
      founder: "Ran CRM for the seller ecosystem end-to-end and saved ~20% of monthly CRM spend without hurting engagement.",
      marketer: "CRM across WhatsApp, SMS, Push, RCS and in-app; unified the event schema; shipped an NLP chatbot into the CDP.",
    },
    problem: {
      default: "Seller-side CRM spend was high and event data too fragmented to target accurately.",
      recruiter: "CRM spend was too high and event data too fragmented to target sellers accurately.",
      founder: "CRM was expensive and messy — high spend, low precision, fragmented event data across channels.",
      marketer: "Event schema was fragmented across 5 channels; segmentation was noisy; creatives weren't being tested rigorously.",
    },
    ran: {
      default: "Owned CRM across WhatsApp, SMS, Push, RCS and in-app; consolidated a fragmented event schema into one unified journey funnel; ran continuous A/B tests on creatives and segmentation; shipped an NLP-based WhatsApp chatbot into the CDP.",
      recruiter: "Owned CRM across 5 channels, unified event schema into one journey funnel, ran continuous A/B tests, and shipped an NLP WhatsApp chatbot into the CDP.",
      founder: "Consolidated the CRM stack, unified schema, ran continuous experimentation, and shipped a chatbot to compress cost while lifting response.",
      marketer: "Unified event schema across WhatsApp/SMS/Push/RCS/in-app; ran continuous A/B tests on creatives + segments; shipped an NLP WhatsApp chatbot into the CDP.",
    },
    moved: {
      default: "~₹8L/month saved (~20% cost cut), 10% higher click-through from the chatbot, accurate targeting across every seller touchpoint.",
      recruiter: "~₹8L/month saved (~20%), 10% higher CTR from the chatbot, and clean targeting across every seller touchpoint.",
      founder: "~20% of monthly CRM spend cut, chatbot lifted CTR ~10%, and targeting quality improved across every channel.",
      marketer: "~10% chatbot CTR lift, ~20% CRM cost cut, and one unified funnel view across 5 channels.",
    },
  },
  retain: {
    role: {
      default: "Keeping 200K+ B2B users coming back with messaging that felt personal, not automated.",
      recruiter: "Retention lead for 200K+ B2B users across languages, driving repeat behavior via personalized WhatsApp.",
      founder: "Turned 200K+ B2B users into repeat buyers with behavior-based segmentation and localized messaging.",
      marketer: "Behavior-based segmentation + multilingual WhatsApp journeys featuring each user's top SKUs.",
    },
    problem: {
      default: "200K+ B2B users across many languages were disengaging before repeat orders.",
      recruiter: "200K+ B2B users across languages were disengaging before repeat orders.",
      founder: "A large B2B base was leaking retention before repeat purchase — no personalization, no language localization.",
      marketer: "Generic multilingual messaging wasn't tied to user behavior or SKU affinity, so response was flat.",
    },
    ran: {
      default: "Built behavior-based segments for onboarding and upsell, launched personalized multilingual WhatsApp campaigns featuring each user's top SKUs, and ran it jointly with product, design and growth.",
      recruiter: "Built behavior segments for onboarding/upsell and launched multilingual WhatsApp campaigns featuring each user's top SKUs — jointly with product, design and growth.",
      founder: "Built segmentation + multilingual WhatsApp journeys keyed to each user's top SKUs, run cross-functionally with product/design/growth.",
      marketer: "Behavior-based segments for onboarding + upsell; personalized multilingual WhatsApp campaigns featuring each user's top SKUs; shipped with product/design/growth.",
    },
    moved: {
      default: "~5% revenue growth, order rate up 5–7%, fewer drop-offs at the message level.",
      recruiter: "~5% revenue lift, order rate up 5–7%, and fewer drop-offs at the message level.",
      founder: "5% revenue growth from the retained base alone, plus a 5–7% order-rate lift.",
      marketer: "5% revenue growth, 5–7% order-rate lift, and cleaner drop-off signals at the message level.",
    },
  },
  monetize: {
    role: {
      default: "Turning 150K+ retained Kirana users into a brand-new revenue line, from a standing start.",
      recruiter: "Built 1K Kirana's first monetization playbook and drove ₹50L+ revenue in the first 6 months.",
      founder: "Launched the company's first monetization line and generated ₹50L+ in 6 months from a standing start.",
      marketer: "Built the first monetization charter, personalized Push/WhatsApp/SMS journeys, and shipped an in-app brand page.",
    },
    problem: {
      default: "150K+ Kirana users needed both retention and a new revenue line — with no monetization playbook in place.",
      recruiter: "150K+ Kirana users needed retention plus an entirely new revenue line — no playbook existed.",
      founder: "A retained base of 150K+ had no monetization surface — leaving significant revenue on the table.",
      marketer: "No monetization playbook, no brand-partner surface, and CTR baselines were low across Push/WhatsApp/SMS.",
    },
    ran: {
      default: "Built 1K's first internal monetization charter with brands like ITC, HUL, P&G and Godrej, doubled click-through with personalized Push/WhatsApp/SMS journeys, and shipped an in-app brand page.",
      recruiter: "Built 1K's first monetization charter (ITC, HUL, P&G, Godrej), doubled CTR with personalized Push/WhatsApp/SMS, and shipped an in-app brand page.",
      founder: "Set up the first monetization charter with ITC/HUL/P&G/Godrej, doubled CTR via personalized journeys, and launched an in-app brand surface.",
      marketer: "Personalized Push/WhatsApp/SMS journeys, in-app brand page, and a monetization charter with ITC/HUL/P&G/Godrej — CTR doubled from 0.9% to 1.9%.",
    },
    moved: {
      default: "₹50L+ revenue in 6 months, CTR doubled from 0.9% to 1.9%, Play Store ranking climbed from 130 to 90. Won the company's Top Gun Award for it.",
      recruiter: "₹50L+ in 6 months, CTR doubled (0.9→1.9%), Play Store rank 130→90, and the company's Top Gun Award.",
      founder: "₹50L+ new revenue line in 6 months, CTR doubled, and Play Store rank up from 130 to 90.",
      marketer: "CTR 0.9% → 1.9%, Play Store rank 130 → 90, and ₹50L+ revenue in 6 months.",
    },
  },
};

export type Metric = { num: string; label: string; count?: { target: number; prefix?: string; suffix?: string } };

export const stageCompanies: Record<StageId, {
  co: string;
  period: string;
  logo?: string;
  monogram?: string;
  role: string; // fallback role text (default persona used)
  metrics: Metric[];
  sparkline?: { area: string; line: string };
}> = {
  acquire: {
    co: 'Stupa Sports Analytics',
    period: 'Marketing Analyst · Dec 2020 – Nov 2021 · New Delhi',
    logo: '/lovable-uploads/c30a59bf-ac74-4f15-97cf-b5cff06438cb.png',
    role: stageCopy.acquire.role.default,
    metrics: [
      { num: '13K+', label: 'Followers in 1 yr', count: { target: 13, suffix: 'K+' } },
      { num: '3', label: 'Markets entered', count: { target: 3 } },
      { num: '25+', label: 'Campaigns run', count: { target: 25, suffix: '+' } },
    ],
    sparkline: {
      area: 'M0,28 L25,22 L50,24 L75,16 L100,18 L125,10 L150,12 L175,5 L200,7 L200,32 L0,32 Z',
      line: 'M0,28 L25,22 L50,24 L75,16 L100,18 L125,10 L150,12 L175,5 L200,7',
    },
  },
  activate: {
    co: 'Freo',
    period: 'Assistant Manager · Oct 2025 – Jul 2026 · Bengaluru',
    monogram: 'F',
    role: stageCopy.activate.role.default,
    metrics: [
      { num: '5', label: 'Team led', count: { target: 5 } },
      { num: 'AIP→Disbursal', label: 'Funnel owned' },
      { num: 'AI outreach', label: 'Launched' },
    ],
  },
  engage: {
    co: 'CARS24',
    period: 'Marketing Team Lead – CRM · Mar 2023 – Jan 2024 · Gurugram',
    logo: '/lovable-uploads/04ea1105-3c28-4412-bb00-10ab6de08841.png',
    role: stageCopy.engage.role.default,
    metrics: [
      { num: '₹8L', label: 'Saved / month', count: { target: 8, prefix: '₹', suffix: 'L' } },
      { num: '20%', label: 'Cost reduction', count: { target: 20, suffix: '%' } },
      { num: '10%', label: 'CTR ↑ chatbot', count: { target: 10, suffix: '%' } },
    ],
    sparkline: {
      area: 'M0,6 L25,10 L50,8 L75,16 L100,14 L125,22 L150,20 L175,28 L200,26 L200,32 L0,32 Z',
      line: 'M0,6 L25,10 L50,8 L75,16 L100,14 L125,22 L150,20 L175,28 L200,26',
    },
  },
  retain: {
    co: 'ApnaKlub',
    period: 'Product Marketing Specialist · Feb 2024 – Dec 2024 · Remote',
    logo: '/lovable-uploads/e13a6cc9-f71f-4aac-94aa-6feb74b2055c.webp',
    role: stageCopy.retain.role.default,
    metrics: [
      { num: '200K+', label: 'Users impacted', count: { target: 200, suffix: 'K+' } },
      { num: '5%', label: 'Revenue growth', count: { target: 5, suffix: '%' } },
      { num: '5–7%', label: 'Order rate ↑' },
    ],
    sparkline: {
      area: 'M0,26 L25,24 L50,20 L75,21 L100,15 L125,13 L150,8 L175,6 L200,2 L200,32 L0,32 Z',
      line: 'M0,26 L25,24 L50,20 L75,21 L100,15 L125,13 L150,8 L175,6 L200,2',
    },
  },
  monetize: {
    co: '1K Kirana Bazaar',
    period: 'Marketing Associate · Nov 2021 – Mar 2023 · Gurugram',
    logo: '/lovable-uploads/46a93d58-d6ec-416e-8a1f-2a897eab80a3.png',
    role: stageCopy.monetize.role.default,
    metrics: [
      { num: '₹50L+', label: 'Revenue / 6 mo', count: { target: 50, prefix: '₹', suffix: 'L+' } },
      { num: '0.9→1.9%', label: 'CTR (2×)' },
      { num: '130→90', label: 'Play Store rank' },
    ],
    sparkline: {
      area: 'M0,28 L25,26 L50,22 L75,18 L100,12 L125,10 L150,6 L175,4 L200,1 L200,32 L0,32 Z',
      line: 'M0,28 L25,26 L50,22 L75,18 L100,12 L125,10 L150,6 L175,4 L200,1',
    },
  },
};
