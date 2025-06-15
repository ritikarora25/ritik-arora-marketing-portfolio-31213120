
const PortfolioEducation = () => (
  <section id="education" className="container mx-auto py-8">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">Education, Certifications & Recognition</h2>
    <div className="grid md:grid-cols-3 gap-4">
      {/* Education Column */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-primary mb-3">Education</h3>
        <div className="bg-white rounded shadow p-4">
          <h4 className="font-semibold text-base mb-1">MBA in Marketing/Marketing Management</h4>
          <div className="text-sm text-gray-500">Chaudhary Devi Lal University, 2018-2020</div>
        </div>
        <div className="bg-white rounded shadow p-4">
          <h4 className="font-semibold text-base mb-1">Bachelor of Commerce</h4>
          <div className="text-sm text-gray-500">Chaudhary Devi Lal University, 2014-2017</div>
        </div>
      </div>

      {/* Certifications Column */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Certifications</h3>
        <div className="bg-white rounded shadow p-4">
          <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
            <li className="bg-accent/10 text-accent px-2 py-1 rounded">Product Analytics Micro-Certification (PAC)™</li>
            <li className="bg-accent/10 text-accent px-2 py-1 rounded">Business Marketing Brand Kit</li>
            <li className="bg-accent/10 text-accent px-2 py-1 rounded">Google Ads for Beginners</li>
            <li className="bg-accent/10 text-accent px-2 py-1 rounded">Tally Certification</li>
          </ul>
        </div>
      </div>

      {/* Recognition & Languages Column */}
      <div>
        <h3 className="text-lg font-semibold text-primary mb-3">Recognition & Languages</h3>
        <div className="bg-white rounded shadow p-4 space-y-4">
          <div>
            <div className="font-bold text-primary mb-1 text-sm">🏆 Top Gun Award @1K Kirana Bazaar</div>
            <div className="text-foreground text-sm">
              Launched first monetization charter driving <span className="font-bold text-primary">₹50L+ revenue</span>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold mb-2 text-primary">Languages</div>
            <ul className="space-y-1 text-foreground text-sm">
              <li>English <span className="ml-1 text-muted-foreground text-xs">(Professional Working)</span></li>
              <li>Hindi <span className="ml-1 text-muted-foreground text-xs">(Professional Working)</span></li>
              <li>Punjabi <span className="ml-1 text-muted-foreground text-xs">(Limited Working)</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PortfolioEducation;
