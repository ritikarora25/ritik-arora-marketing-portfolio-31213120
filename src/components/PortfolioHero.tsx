import { Linkedin } from "lucide-react";
import ResumeButton from "./ResumeButton";

const PortfolioHero = () => (
  <section className="container mx-auto flex flex-col md:flex-row items-center gap-8 pb-12 border-b" id="hero">
    {/* Replace src with uploaded image or keep placeholder */}
    <div className="flex-shrink-0 w-40 h-40 rounded-full overflow-hidden bg-gray-200 border-4 border-primary shadow-lg animate-fade-in">
      {/* Placeholder avatar */}
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Ritik Arora Headshot"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 text-center md:text-left">
      <h1 className="text-3xl md:text-5xl font-extrabold text-primary mb-1 tracking-wide">
        Ritik Arora
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-2">
        Growth Marketer <span className="font-light text-gray-500">| CRM, Product Marketing & CLM Specialist</span>
      </h2>
      <div className="text-base md:text-lg text-gray-600 mb-4">
        Strategy & Growth Generalist | Ex-CRM & Product Marketing  
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
        <div className="flex items-center gap-2 text-gray-500">
          <span className="font-medium">Gurugram, Haryana, India</span>
        </div>
        <a
          href="mailto:ritikchuchra1@gmail.com"
          className="text-accent hover:underline font-medium"
        >
          ritikchuchra1@gmail.com
        </a>
        <a
          href="www.linkedin.com/in/ritikarora25"
          target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1 text-primary hover:text-accent transition"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
      <div className="flex gap-3 justify-center md:justify-start mt-2">
        <ResumeButton />
        <a href="#contact" className="px-5 py-2 bg-accent text-white font-semibold rounded shadow hover:bg-primary transition">
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default PortfolioHero;
