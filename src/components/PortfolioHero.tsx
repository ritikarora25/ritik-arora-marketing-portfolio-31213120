import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { Persona } from "@/data/journey";
import { personaBanner } from "@/data/journey";

const STAGES = [
  { id: "acquire", num: "01", label: "Acquire" },
  { id: "activate", num: "02", label: "Activate" },
  { id: "engage", num: "03", label: "Engage" },
  { id: "retain", num: "04", label: "Retain" },
  { id: "monetize", num: "05", label: "Monetize" },
];

const PROOF_TEXT = "₹8L/mo saved · 20% CRM cost cut · 5–7% order-rate lift · ₹50L+ revenue unlocked";

interface Props {
  persona: Persona;
  setPersona: (p: Persona) => void;
}

const PortfolioHero = ({ persona, setPersona }: Props) => {
  const [activeStage, setActiveStage] = useState<string>("");
  const [proof, setProof] = useState("");
  const [proofDone, setProofDone] = useState(false);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  // H1 word-by-word reveal
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const h1 = h1Ref.current;
    if (!h1 || rm) return;
    const spans = h1.querySelectorAll<HTMLSpanElement>("span.word");
    spans.forEach((s, i) => {
      s.style.animationDelay = `${i * 75}ms`;
    });
  }, []);

  // Typewriter proof line
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (rm) { setProof(PROOF_TEXT); setProofDone(true); return; }
    let i = 0;
    const start = Date.now();
    let raf = 0;
    const tick = () => {
      const elapsed = Date.now() - start;
      if (elapsed < 1000) { raf = requestAnimationFrame(tick); return; }
      setProof(PROOF_TEXT.slice(0, i));
      i++;
      if (i <= PROOF_TEXT.length) raf = requestAnimationFrame(tick);
      else setProofDone(true);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Scroll-spy for funnel nav
  useEffect(() => {
    const els = STAGES
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveStage(e.target.id);
        });
      },
      { rootMargin: "-38% 0px -50% 0px" }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const banner = persona !== "default" ? personaBanner[persona] : "";

  return (
    <section className="hero wrap" id="hero">
      <nav className="funnel" id="funnelNav" aria-label="Lifecycle funnel navigation">
        <div className="funnel-sweep" aria-hidden="true" />
        {STAGES.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            data-stage={s.id}
            className={activeStage === s.id ? "active" : ""}
          >
            <span className="fnum">{s.num}</span>
            {s.label}
          </a>
        ))}
      </nav>

      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="heroH1" ref={h1Ref}>
            <span className="word">I </span>
            <span className="word">make </span>
            <span className="word">users </span>
            <span className="word">come </span>
            <span className="word">back </span>
            <span className="word">— </span>
            <span className="word"><em>and </em></span>
            <span className="word"><em>turn </em></span>
            <span className="word"><em>that </em></span>
            <span className="word"><em>into </em></span>
            <span className="word"><em>growth.</em></span>
          </h1>
          <p className="hero-sub">
            Growth marketer, 5+ years across brand, CRM, retention and product — from Stupa to Freo, building the journeys that move people from first click to habit.
          </p>

          <div className="persona-row" role="group" aria-label="Personalize this page">
            <span className="persona-label">Reading as a —</span>
            {(["recruiter", "founder", "marketer"] as const).map((p) => (
              <motion.button
                key={p}
                className="persona-chip"
                data-persona={p}
                aria-pressed={persona === p}
                onClick={() => setPersona(persona === p ? "default" : p)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 400, damping: 22 }}
              >
                {p === "marketer" ? "Fellow marketer" : p.charAt(0).toUpperCase() + p.slice(1)}
              </motion.button>
            ))}
          </div>

          <div
            className={`persona-banner ${persona !== "default" ? "visible" : ""}`}
            hidden={persona === "default"}
          >
            <span>{banner}</span>
            <button className="persona-reset" onClick={() => setPersona("default")}>Reset</button>
          </div>

          <div className="proof-box" aria-live="polite">
            <span>{proof}</span>
            <span className={`cursor ${proofDone ? "blink" : ""}`} />
          </div>

          <div className="hero-meta">
            <span>Bengaluru, Karnataka, India</span>
            <a href="mailto:ritikchuchra1@gmail.com">ritikchuchra1@gmail.com</a>
            <a href="https://www.linkedin.com/in/ritikarora25/" target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <motion.div
          className="hero-photo"
          whileHover={{ scale: 1.03, rotate: -0.6 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          onMouseMove={(e) => {
            const t = e.currentTarget as HTMLDivElement;
            const r = t.getBoundingClientRect();
            t.style.setProperty("--gx", `${e.clientX - r.left}px`);
            t.style.setProperty("--gy", `${e.clientY - r.top}px`);
          }}
        >
          <picture>
            <source type="image/webp" srcSet="/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-448.webp" />
            <img
              alt="Ritik Arora"
              src="/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94-448.jpg"
              width={220}
              height={220}
              decoding="async"
              fetchPriority="high"
            />
          </picture>
          <span className="hero-photo-glow" aria-hidden="true" />
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioHero;
