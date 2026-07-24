import { motion } from "motion/react";

const certs = [
  { t: "The AI Sprint 2025", issuer: "HelloPM · Aug 2025" },
  { t: "CleverTap Certification", issuer: "CleverTap · Nov 2023" },
  { t: "Product Analytics (PAC)™", issuer: "Product School · Jul 2022" },
  { t: "Business Marketing Brand Kit", issuer: "Coursera · Dec 2022" },
  { t: "Google Ads", issuer: "Coursera · Apr 2021" },
];

const langs = [
  { name: "English", level: "Professional working" },
  { name: "Hindi", level: "Professional working" },
  { name: "Punjabi", level: "Limited working" },
];

const rise = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0 },
};

const PortfolioEducation = () => (
  <>
    <hr className="divider" />
    <section id="education" className="wrap psection">
      <div className="section-head">
        <h2>Education, certifications & recognition</h2>
      </div>
      <motion.div
        className="edu-grid"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      >
        <motion.div className="edu-col" variants={rise}>
          <h3>Education</h3>
          <motion.div className="edu-item" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <div className="t">MBA, Marketing Management</div>
            <div className="s">Chaudhary Devi Lal University · 2018–2020</div>
          </motion.div>
          <motion.div className="edu-item" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <div className="t">Bachelor of Commerce</div>
            <div className="s">Chaudhary Devi Lal University · 2014–2017</div>
          </motion.div>
        </motion.div>

        <motion.div className="edu-col" variants={rise}>
          <h3>Certifications</h3>
          <motion.ul
            className="cert-list"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
          >
            {certs.map((c) => (
              <motion.li
                key={c.t}
                variants={rise}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {c.t}
                <span className="issuer">{c.issuer}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div className="edu-col" variants={rise}>
          <h3>Recognition & Languages</h3>
          <motion.div className="award" whileHover={{ y: -3 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
            <div className="t">🏆 Top Gun Award — 1K Kirana Bazaar</div>
            <div className="d">Jan 2023 · Awarded for launching the monetization charter and driving ₹50L+ revenue in the first 6 months.</div>
          </motion.div>
          {langs.map((l) => (
            <div className="lang-row" key={l.name}>
              <span>{l.name}</span>
              <span>{l.level}</span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  </>
);

export default PortfolioEducation;
