import React, { lazy, Suspense, useEffect, useState } from "react";
import { Link } from "@/lib/router-compat";
import BackToTopButton from "./BackToTopButton";
import ScrollProgress from "./ScrollProgress";
import MagneticButton from "./MagneticButton";

const CustomCursor = lazy(() => import("./CustomCursor"));

const PortfolioLayout = ({ children }: { children: React.ReactNode }) => {
  const [cursorReady, setCursorReady] = useState(false);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setCursorReady(true), 1000);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href") ?? "";
      const place = a?.closest("header") ? "header" : a?.closest("#hero") ? "hero" : a?.closest("#contact") ? "contact" : "page";
      if (href.includes("ritik-arora-resume.pdf")) window.__lovableEvents?.track?.("project.resume_opened", { place });
      else if (href.startsWith("mailto:")) window.__lovableEvents?.track?.("project.contact_clicked", { channel: "email", place });
      else if (href.startsWith("tel:")) window.__lovableEvents?.track?.("project.contact_clicked", { channel: "call", place });
      else if (href.includes("linkedin.com/in/")) window.__lovableEvents?.track?.("project.contact_clicked", { channel: "linkedin", place });
      else if (href.includes("crm-vs-cep-checklist.pdf")) window.__lovableEvents?.track?.("project.checklist_downloaded", { place });
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return (
    <div className="min-h-dvh relative">
      {cursorReady && <Suspense fallback={null}><CustomCursor /></Suspense>}
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
              href="/ritik-arora-resume.pdf"
              target="_blank"
              rel="noopener"
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
