import { useEffect, useRef } from "react";

const PARA1 = "I build the messages and journeys that make people stick around — whether that's called CRM, retention, growth, or brand.";
const PARA2 = "What I've learned across every role is that people don't respond to messages — they respond to being understood. Get the understanding right first, and the message almost writes itself. Get it wrong, and no amount of creative or budget fixes it.";
const PARA3 = "Outside the work, I'm usually in the middle of a learning loop — a cohort, a community, a conversation that shifts how I think. I believe you grow faster through experiences than through time, which is why I'm always up for swapping ideas or brainstorming a journey — ideally over chai.";

const PortfolioAbout = () => {
  const p1Ref = useRef<HTMLParagraphElement>(null);
  const p3Ref = useRef<HTMLParagraphElement>(null);
  const para2Ref = useRef<HTMLParagraphElement>(null);

  // Para 1 + 3 fade-in
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nodes = [p1Ref.current, p3Ref.current].filter((n): n is HTMLParagraphElement => !!n);
    if (rm) { nodes.forEach((n) => n.classList.add("in")); return; }
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); o.unobserve(e.target); }
        });
      },
      { threshold: 0.3 }
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  // Para 2 char-scroll opacity
  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const para = para2Ref.current;
    if (!para) return;
    if (rm) { para.style.color = "#2c2f45"; return; }
    const lives = Array.from(para.querySelectorAll<HTMLSpanElement>(".char-live"));
    const total = lives.length;
    const update = () => {
      const r = para.getBoundingClientRect();
      const vh = window.innerHeight;
      const startY = vh * 0.85;
      const endY = vh * 0.2;
      const prog = Math.min(Math.max((startY - r.top) / (startY - endY + r.height * 0.3), 0), 1);
      const n = Math.floor(prog * total);
      lives.forEach((c, i) => { c.style.opacity = i < n ? "1" : "0"; });
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section id="about" className="wrap psection">
      <div className="section-head">
        <h2>About</h2>
        <span className="section-tag">Who's behind the numbers</span>
      </div>
      <div className="about-text">
        <p className="reveal-p" ref={p1Ref}>{PARA1}</p>
        <p className="char-para" ref={para2Ref}>
          <span className="sr-only">{PARA2}</span>
          {Array.from(PARA2).map((ch, i) => (
            <span key={i} className="char-unit" aria-hidden="true">
              <span className="char-ghost">{ch}</span>
              <span className="char-live">{ch}</span>
            </span>
          ))}
        </p>
        <p className="reveal-p" ref={p3Ref}>{PARA3}</p>
      </div>
    </section>
  );
};

export default PortfolioAbout;
