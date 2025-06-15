
import React from "react";

const NAV = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Achievements", id: "achievements" },
  { name: "Education", id: "education" },
  { name: "Contact", id: "contact" },
];

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-background font-montserrat">
    {/* Sticky Navbar */}
    <header className="sticky top-0 z-50 bg-white bg-opacity-90 backdrop-blur shadow-sm border-b">
      <nav className="container mx-auto flex items-center justify-between py-2 px-2">
        <span className="font-bold text-lg text-primary tracking-wider">Ritik Arora</span>
        <ul className="flex gap-6 text-sm font-medium">
          {NAV.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="transition-colors hover:text-accent text-gray-700"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <main className="pt-8">{children}</main>
  </div>
);

export default PortfolioLayout;
