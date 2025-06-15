
const experiences = [
  {
    company: "ApnaKlub",
    title: "Product Marketing Specialist",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/ApnaKlub_Logo.png", // Placeholder
    period: "Feb 2024 - Dec 2024",
    details: [
      "Led strategic CRM initiatives impacting 200K+ B2B users",
      "Enabled 5% revenue lift through personalization & multilingual engagement",
      "Built behavioral segments for onboarding, reactivation, and upsell journeys",
      "Launched WhatsApp campaigns improving order rates by 5-7%",
      "Owned projects with Product, Design, and Growth teams"
    ]
  },
  {
    company: "CARS24",
    title: "Marketing Team Lead / CRM Lead",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/CARS24_logo.png", // Placeholder
    period: "Mar 2023 - Jan 2024",
    details: [
      "Drove strategic efficiency in seller CRM operations",
      "Cut monthly marketing spend by ₹8L (~20%) via system consolidation/A-B testing",
      "Consolidated fragmented event schema into single journey funnel",
      "Managed communication budgets across CRM campaigns",
      "Led execution across WhatsApp, SMS, Push, RCS, and In-App"
    ]
  },
  {
    company: "1K Kirana Bazaar",
    title: "Marketing Associate",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/1K_Kirana_Bazaar_Logo.png", // Placeholder
    period: "Nov 2021 - Jan 2023",
    details: [
      "Owned full-funnel retention & monetization for 150K+ users",
      "Increased click rates from 0.9% to 1.9% with personalisation",
      "Drove 90K additional impressions via merchandising",
      "Led monetization generating ₹50L+ in 6 months via leading brands",
      "Improved Google Play Store rank from 130 to 90",
      "Boosted customer engagement by 30% via insights"
    ]
  },
  {
    company: "Stupa Sport Analytics",
    title: "Marketing Analyst",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Stupa_Sport_Analytics_Logo.png", // Placeholder
    period: "Mar 2021 - Nov 2021",
    details: [
      "Built brand’s social media to 13K+ followers in 1 year",
      "Conducted market research for lead gen in India, USA & Germany",
      "Managed Google & Facebook ads for awareness",
      "Built dashboards/reports to track engagement"
    ]
  }
];

const PortfolioExperience = () => (
  <section id="experience" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Experience</h2>
    <ol className="relative border-l-2 border-accent pl-8">
      {experiences.map((exp, idx) => (
        <li key={exp.company} className="mb-12 animate-fade-in">
          <div className="flex items-center gap-3 mb-2">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full object-cover border bg-white shadow" onError={(e: any) => e.target.style.display='none'} />
            <span className="font-semibold text-lg">{exp.company}</span>
            <span className="ml-2 text-accent font-medium text-sm bg-accent/10 px-2 py-1 rounded">{exp.period}</span>
          </div>
          <div className="ml-2">
            <div className="text-md font-semibold mb-1">{exp.title}</div>
            <ul className="list-disc pl-5 text-gray-700 leading-relaxed">
              {exp.details.map((d, i) => (
                <li key={i}><span className={d.match(/[\d₹%+L]/) ? "font-bold text-accent" : ""}>{d}</span></li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  </section>
);

export default PortfolioExperience;
