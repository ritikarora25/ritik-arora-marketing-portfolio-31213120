import React from "react";
import BackToTopButton from "./BackToTopButton";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[300] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-br"
      >
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <span className="brand">Ritik Arora<span>.</span></span>
          <div className="top-btns">
            <a className="btn btn-ghost" href="#contact">Contact</a>
            <a
              className="btn btn-solid"
              href="https://drive.google.com/uc?export=download&id=1Boeh4dRe0Rnuj6bff9joBrHITLEohmst"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="pfooter wrap">
        © 2026 Ritik Arora — built stage by stage, narrowing on purpose.
      </footer>

      <BackToTopButton />
    </div>
  );
};

export default PortfolioLayout;
