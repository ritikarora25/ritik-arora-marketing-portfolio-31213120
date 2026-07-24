import { motion } from "motion/react";
import MagneticButton from "./MagneticButton";

const PortfolioContact = () => (
  <>
    <hr className="divider" />
    <section id="contact" className="wrap psection">
      <motion.div
        className="contact-card"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 120, damping: 20 }}
      >
        <div>
          <h2>Let's talk growth.</h2>
          <p>Open to growth, brand, CRM and product marketing roles — or just a conversation about retention.</p>
        </div>
        <div className="contact-links">
          <MagneticButton href="mailto:ritikchuchra1@gmail.com" strength={0.4}>Email</MagneticButton>
          <MagneticButton href="tel:+918685026736" strength={0.4}>Call</MagneticButton>
          <MagneticButton
            href="https://www.linkedin.com/in/ritikarora25/"
            target="_blank"
            rel="noopener noreferrer"
            strength={0.4}
          >
            LinkedIn
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  </>
);

export default PortfolioContact;
