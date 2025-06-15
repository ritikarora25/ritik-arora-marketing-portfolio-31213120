import { Linkedin } from "lucide-react";
import ResumeButton from "./ResumeButton";
const PortfolioHero = () => <section className="w-full min-h-[68vh] container mx-auto flex flex-col md:flex-row md:items-center gap-12 py-16 relative animate-fade-in" id="hero">
    <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-muted border-2 border-gray-200 shadow-lg mx-auto md:mx-0 relative z-10">
      <img alt="Ritik Arora Headshot" className="w-full h-full object-cover" src="/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94.jpg" />
    </div>
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide mb-2 leading-tight">
        Ritik Arora
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-gray-800 leading-snug mb-4">
        Growth Marketer<span className="font-normal text-gray-600"> | CRM, Product Marketing &amp; CLM Specialist</span>
      </h2>
      <div className="rounded-lg py-3 bg-white/95 backdrop-blur-sm text-gray-800 font-medium text-sm md:text-base mb-6 border border-gray-200 shadow-lg px-[22px]">Retention, CRM, and Lifecycle Strategy — helping brands say the right thing, at the right time, to the right users, and turn it into growth.</div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2 text-gray-700">
          <span>Gurugram, Haryana, India</span>
        </div>
        <a href="mailto:ritikchuchra1@gmail.com" className="text-gray-700 hover:text-primary hover:underline font-medium">
          ritikchuchra1@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/ritikarora25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-700 hover:text-primary hover:underline transition">
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
      <div className="flex gap-4 justify-center md:justify-start mt-4">
        <ResumeButton />
        <a href="#contact" className="px-6 py-3 bg-white/90 text-gray-800 font-medium rounded-lg shadow-lg hover:bg-white transition backdrop-blur-sm border border-gray-200">
          Contact Me
        </a>
      </div>
    </div>
  </section>;
export default PortfolioHero;