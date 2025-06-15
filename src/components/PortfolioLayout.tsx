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
    <div className="min-h-screen bg-white font-montserrat relative">
      {/* Top left purple gradient */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-100/40 via-purple-50/20 to-transparent pointer-events-none z-0"></div>
      
      {/* Bottom right pink gradient */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-pink-100/40 via-pink-50/20 to-transparent pointer-events-none z-0"></div>

      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <nav className="container mx-auto flex items-center justify-between py-4">
          <span className="font-bold text-xl text-primary">Ritik Arora</span>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-8 text-sm font-medium">
            {NAV.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="transition-colors hover:text-primary text-foreground"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-primary">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <ul className="flex flex-col items-center gap-4 text-sm font-medium py-6">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-primary text-foreground p-2"
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
