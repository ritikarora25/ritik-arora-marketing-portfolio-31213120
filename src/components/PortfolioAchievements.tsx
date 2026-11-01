import { motion } from "motion/react";

const items = [
  { lbl: "01 Acquire", num: "13K+", cap: "Social followers, year one (Stupa)" },
  { lbl: "02 Activate", num: "5", cap: "Team led, onboarding ops (Freo)" },
  { lbl: "03 Engage", num: "₹8L", cap: "Saved per month, CRM (CARS24)" },
  { lbl: "04 Retain", num: "5–7%", cap: "Order-rate lift, WhatsApp (ApnaKlub)" },
  { lbl: "05 Monetize", num: "₹50L+", cap: "Revenue in 6 months (1K Kirana)" },
];

const PortfolioAchievements = () => (
  <section id="achievements" className="wrap psection" style={{ paddingTop: 0, paddingBottom: 28 }}>
    <div className="section-head">
      <h2>Impact across the funnel</h2>
      <span className="section-tag">One metric per stage</span>
    </div>
    <motion.div
      className="strip"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      {items.map((i, idx) => (
        <motion.div
          key={i.lbl}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ delay: 0.08 * idx, duration: 0.5, ease: "easeOut" }}
        >
          <span className="slbl">{i.lbl}</span>
          <span className="snum">{i.num}</span>
          <span className="scap">{i.cap}</span>
        </motion.div>
      ))}
    </motion.div>
  </section>
);

export default PortfolioAchievements;
