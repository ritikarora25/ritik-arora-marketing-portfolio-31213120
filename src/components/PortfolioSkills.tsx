import { motion } from "motion/react";

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
          <motion.div
            className="chip-row"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.04 } },
            }}
          >
            {g.chips.map((c) => (
              <motion.span
                className="chip"
                key={c}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  show: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -3, boxShadow: "0 6px 18px rgba(61,63,224,0.15)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {c}
              </motion.span>
            ))}
          </motion.div>
        </div>
      ))}
    </section>
  </>
);

export default PortfolioSkills;
