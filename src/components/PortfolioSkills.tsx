const groups = [
  {
    title: "CRM & Analytics",
    chips: ["CleverTap", "WebEngage", "Netcore", "MoEngage", "Mixpanel", "Tableau", "Google Analytics", "SQL (Basic)"],
  },
  {
    title: "Channels",
    chips: ["Push", "WhatsApp", "SMS", "RCS", "In-App", "Email"],
  },
  {
    title: "Execution",
    chips: ["Figma", "Canva", "HubSpot", "Google Ads", "Microsoft Office"],
  },
];

const PortfolioSkills = () => (
  <>
    <hr className="divider" />
    <section id="toolkit" className="wrap psection">
      <div className="section-head">
        <h2>Toolkit</h2>
        <span className="section-tag">What runs underneath</span>
      </div>
      {groups.map((g) => (
        <div className="toolkit-group" key={g.title}>
          <h3>{g.title}</h3>
          <div className="chip-row">
            {g.chips.map((c) => (
              <span className="chip" key={c}>{c}</span>
            ))}
          </div>
        </div>
      ))}
    </section>
  </>
);

export default PortfolioSkills;
