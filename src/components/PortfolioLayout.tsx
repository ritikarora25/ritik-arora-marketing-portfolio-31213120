import React from "react";
import { Link } from "@/lib/router-compat";
import BackToTopButton from "./BackToTopButton";
import CustomCursor from "./CustomCursor";
import ScrollProgress from "./ScrollProgress";
import MagneticButton from "./MagneticButton";

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen relative">
      <CustomCursor />
      <ScrollProgress />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-0 focus:left-0 focus:z-[300] focus:bg-ink focus:text-white focus:px-4 focus:py-2 focus:rounded-br"
      >
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <Link to="/" className="brand" aria-label="Ritik Arora — home">Ritik Arora<span>.</span></Link>
          <div className="top-btns">
            <Link className="btn btn-ghost" to="/thoughts">Thoughts</Link>
            <MagneticButton className="btn btn-ghost" href="/#contact">Contact</MagneticButton>
            <MagneticButton
              className="btn btn-solid"
              href="https://drive.google.com/uc?export=download&id=1Boeh4dRe0Rnuj6bff9joBrHITLEohmst"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </MagneticButton>
          </div>
        </div>
      </header>

      <main id="main" style={{ position: "relative", zIndex: 1 }}>{children}</main>

      <footer className="pfooter wrap" style={{ position: "relative", zIndex: 1 }}>
        © 2026 Ritik Arora — built stage by stage, narrowing on purpose.
      </footer>

      <BackToTopButton />
    </div>
  );
};

export default PortfolioLayout;
