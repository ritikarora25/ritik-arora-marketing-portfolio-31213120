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

const PortfolioEducation = () => (
  <>
    <hr className="divider" />
    <section id="education" className="wrap psection">
      <div className="section-head">
        <h2>Education, certifications & recognition</h2>
      </div>
      <div className="edu-grid">
        <div className="edu-col">
          <h3>Education</h3>
          <div className="edu-item">
            <div className="t">MBA, Marketing Management</div>
            <div className="s">Chaudhary Devi Lal University · 2018–2020</div>
          </div>
          <div className="edu-item">
            <div className="t">Bachelor of Commerce</div>
            <div className="s">Chaudhary Devi Lal University · 2014–2017</div>
          </div>
        </div>

        <div className="edu-col">
          <h3>Certifications</h3>
          <ul className="cert-list">
            {certs.map((c) => (
              <li key={c.t}>
                {c.t}
                <span className="issuer">{c.issuer}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="edu-col">
          <h3>Recognition & Languages</h3>
          <div className="award">
            <div className="t">🏆 Top Gun Award — 1K Kirana Bazaar</div>
            <div className="d">Jan 2023 · Awarded for launching the monetization charter and driving ₹50L+ revenue in the first 6 months.</div>
          </div>
          {langs.map((l) => (
            <div className="lang-row" key={l.name}>
              <span>{l.name}</span>
              <span>{l.level}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </>
);

export default PortfolioEducation;
