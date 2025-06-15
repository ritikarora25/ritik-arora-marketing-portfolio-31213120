
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import BackToTopButton from "./BackToTopButton";

const NAV = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Achievements", id: "achievements" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen font-montserrat relative animated-gradient">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/20 shadow-sm">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <span className="font-bold text-xl text-white">Ritik Arora</span>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors hover:text-white/80 text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/30 backdrop-blur-md border-t border-white/20">
            <ul className="flex flex-col items-center gap-4 text-sm font-medium py-6">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-white/80 text-white p-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <main className="relative z-10">{children}</main>
      <BackToTopButton />
    </div>
  );
};

export default PortfolioLayout;
