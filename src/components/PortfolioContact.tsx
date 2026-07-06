import { Linkedin, Mail, Phone } from "lucide-react";

const PortfolioContact = () => {
  return (
    <section id="contact" className="container mx-auto my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Contact</h2>
      <div className="bg-white rounded shadow p-6 md:p-8 animate-fade-in">
        <div className="flex flex-col gap-3">
          <a
            href="mailto:ritikchuchra1@gmail.com"
            className="flex items-center gap-3 text-gray-700 hover:text-accent transition"
          >
            <Mail size={18} className="text-primary" />
            <span className="font-medium">Email:</span>
            <span>ritikchuchra1@gmail.com</span>
          </a>
          <a
            href="tel:+918685026736"
            className="flex items-center gap-3 text-gray-700 hover:text-accent transition"
          >
            <Phone size={18} className="text-primary" />
            <span className="font-medium">Phone:</span>
            <span>+91-8685026736</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ritikarora25/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-accent transition"
          >
            <Linkedin size={18} className="text-primary" />
            <span className="font-medium">LinkedIn:</span>
            <span>/ritikarora25</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioContact;
