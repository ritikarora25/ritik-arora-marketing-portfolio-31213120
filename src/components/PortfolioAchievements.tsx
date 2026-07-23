const items = [
  { lbl: "01 Acquire", num: "13K+", cap: "Social followers, year one (Stupa)" },
  { lbl: "02 Activate", num: "5", cap: "Team led, onboarding ops (Freo)" },
  { lbl: "03 Engage", num: "₹8L", cap: "Saved per month, CRM (CARS24)" },
  { lbl: "04 Retain", num: "5–7%", cap: "Order-rate lift, WhatsApp (ApnaKlub)" },
  { lbl: "05 Monetize", num: "₹50L", cap: "Revenue in 6 months (1K Kirana)" },
];

const PortfolioAchievements = () => (
  <section id="achievements" className="wrap" style={{ paddingTop: 0, paddingBottom: 64 }}>
    <div className="strip">
      {items.map((i) => (
        <div key={i.lbl}>
          <span className="slbl">{i.lbl}</span>
          <span className="snum">{i.num}</span>
          <span className="scap">{i.cap}</span>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioAchievements;
