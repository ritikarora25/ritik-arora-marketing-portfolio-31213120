
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
    <div className="min-h-screen bg-background font-montserrat">
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-card bg-opacity-95 backdrop-blur shadow-sm border-b border-border">
        <nav className="container mx-auto flex items-center justify-between py-2 px-2">
          <span className="font-bold text-lg text-primary tracking-wider">Ritik Arora</span>
          
          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-6 text-sm font-medium">
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
          <div className="md:hidden bg-card">
            <ul className="flex flex-col items-center gap-4 text-sm font-medium py-4">
              {NAV.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="transition-colors hover:text-primary text-foreground p-2"
                    onClick={() => setIsMenuOpen(false)} // Close menu on click
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </header>
      <main className="pt-8">{children}</main>
      <BackToTopButton />
    </div>
  );
};

export default PortfolioLayout;
