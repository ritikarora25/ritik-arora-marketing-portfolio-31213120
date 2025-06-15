
const PortfolioEducation = () => (
  <section id="education" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Education & Certifications</h2>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="bg-white rounded shadow p-5">
        <h3 className="font-semibold text-lg mb-1">MBA in Marketing/Marketing Management</h3>
        <div className="text-sm text-gray-500 mb-2">Chaudhary Devi Lal University, 2018-2020</div>
      </div>
      <div className="bg-white rounded shadow p-5">
        <h3 className="font-semibold text-lg mb-1">Bachelor of Commerce</h3>
        <div className="text-sm text-gray-500 mb-2">Chaudhary Devi Lal University, 2014-2017</div>
      </div>
      <div className="bg-white rounded shadow p-5 md:col-span-2">
        <div className="font-semibold text-md mb-2">Certifications</div>
        <ul className="flex flex-wrap gap-2 text-sm text-gray-700">
          <li className="bg-accent/10 text-accent px-2 py-1 rounded">Product Analytics Micro-Certification (PAC)™</li>
          <li className="bg-accent/10 text-accent px-2 py-1 rounded">Business Marketing Brand Kit</li>
          <li className="bg-accent/10 text-accent px-2 py-1 rounded">Google Ads for Beginners</li>
          <li className="bg-accent/10 text-accent px-2 py-1 rounded">Tally Certification</li>
        </ul>
      </div>
    </div>
  </section>
);

export default PortfolioEducation;
