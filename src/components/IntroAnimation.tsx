import { useCallback, useEffect, useRef, useState } from "react";

/**
 * Story-led brand intro over the real homepage.
 * A short prologue, then each funnel stage is told as a chapter: number, name,
 * micro-tag and its thesis sentence revealed word by word with the key idea
 * highlighted. A funnel tracker at the bottom fills as the story moves on.
 * It ends on "Ritik Arora." which flies into the header brand.
 * Click / → / Space skips to the next chapter; Esc / Enter / Skip ends it.
 */

const STAGES = [
  {
    name: "Acquire",
    tag: "Finding the right people",
    text: "There are plenty of people out there, but not everyone is right for your business. Acquisition is about reaching the people who need what you offer, not just getting more visitors.",
    key: "the people who need what you offer,",
  },
  {
    name: "Activate",
    tag: "First value",
    text: "Getting someone to sign up is only the beginning. Activation is helping them experience the value of your product, so they have a reason to keep going.",
    key: "experience the value",
  },
  {
    name: "Engage",
    tag: "Building habits",
    text: "Using a product once doesn't mean it has become part of someone's routine. Engagement is giving people useful reasons to come back and interact with it again.",
    key: "useful reasons to come back",
  },
  {
    name: "Retain",
    tag: "Keeping customers",
    text: "When people stop using a product, sending another reminder isn't always the answer. Retention is about understanding why they leave and giving them a better reason to stay.",
    key: "why they leave",
  },
  {
    name: "Monetize",
    tag: "Growing revenue",
    text: "More users don't automatically mean more revenue. Monetization is about turning the value people get from your product into revenue through purchases, repeat orders, or upgrades.",
    key: "turning the value people get",
  },
];

// steps: -1 prologue, 0..4 chapters, 5 closing line, 6 wordmark, 7 fly
const PROLOGUE_MS = 3400;
const WORD_MS = 100;
const HOLD_MS = 2600;
const CLOSING_MS = 3200;
const MARK_MS = 1900;
const FLY_MS = 1200;

const chapterMs = (i: number) => 900 + STAGES[i].text.split(" ").length * WORD_MS + HOLD_MS;

const durationFor = (step: number) => {
  if (step === -1) return PROLOGUE_MS;
  if (step >= 0 && step <= 4) return chapterMs(step);
  if (step === 5) return CLOSING_MS;
  if (step === 6) return MARK_MS;
  return FLY_MS;
};

const splitWords = (text: string, key: string) => {
  const idx = text.indexOf(key);
  const words: { w: string; hi: boolean }[] = [];
  const push = (s: string, hi: boolean) =>
    s.split(" ").filter(Boolean).forEach((w) => words.push({ w, hi }));
  if (idx < 0) push(text, false);
  else {
    push(text.slice(0, idx), false);
    push(key, true);
    push(text.slice(idx + key.length), false);
  }
  return words;
};

const CSS = `
@keyframes introWordIn { from { opacity: 0; transform: translateY(0.45em); filter: blur(4px); } to { opacity: 1; transform: none; filter: none; } }
@keyframes introFadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
@keyframes introRule { from { transform: scaleX(0); } to { transform: scaleX(1); } }
.intro-w { display: inline-block; opacity: 0; animation: introWordIn 640ms cubic-bezier(.2,.7,.2,1) forwards; }
.intro-up { opacity: 0; animation: introFadeUp 600ms cubic-bezier(.2,.7,.2,1) forwards; }
.intro-hi { color: var(--coral, #FF6B4A); }
.intro-rule { transform-origin: left; animation: introRule 700ms cubic-bezier(.2,.7,.2,1) forwards; }
`;

interface Props {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: Props) => {
  const [step, setStep] = useState(-1);
  const [hidden, setHidden] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);
  const timerRef = useRef(0);

  const finish = useCallback(() => {
    if (doneRef.current) return;
    doneRef.current = true;
    window.clearTimeout(timerRef.current);
    const ov = overlayRef.current;
    if (ov) {
      ov.style.transition = "opacity 300ms ease-out";
      ov.style.opacity = "0";
    }
    window.setTimeout(() => { setHidden(true); onComplete?.(); }, 300);
  }, [onComplete]);

  const next = useCallback(() => {
    setStep((s) => (s < 5 ? s + 1 : s));
  }, []);

  // Mobile: skip entirely
  useEffect(() => {
    if (window.innerWidth < 640) {
      doneRef.current = true;
      setHidden(true);
      onComplete?.();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Timeline
  useEffect(() => {
    if (doneRef.current) return;
    window.clearTimeout(timerRef.current);
    if (step === 7) {
      // fly wordmark into header brand
      const m = markRef.current;
      const b = document.querySelector<HTMLElement>(".brand");
      if (m && b) {
        const r = b.getBoundingClientRect();
        const size = parseFloat(getComputedStyle(b).fontSize) || 17;
        const dx = r.left + r.width / 2 - window.innerWidth / 2;
        const dy = r.top + r.height / 2 - window.innerHeight / 2;
        m.style.transition = `transform ${FLY_MS - 150}ms cubic-bezier(.7,0,.2,1)`;
        m.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px)) scale(${size / 64})`;
      }
      if (bgRef.current) {
        bgRef.current.style.transition = `opacity ${FLY_MS - 300}ms ease-out 300ms`;
        bgRef.current.style.opacity = "0";
      }
      timerRef.current = window.setTimeout(finish, FLY_MS);
      return;
    }
    timerRef.current = window.setTimeout(() => setStep((s) => s + 1), durationFor(step));
    return () => window.clearTimeout(timerRef.current);
  }, [step, finish]);

  // Controls
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter") finish();
      else if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [finish, next]);

  if (hidden) return null;

  const chapter = step >= 0 && step <= 4 ? STAGES[step] : null;
  const showTracker = step >= 0 && step <= 5;

  return (
    <div
      data-intro-overlay="true"
      ref={overlayRef}
      aria-hidden="true"
      onClick={next}
      style={{ position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden", fontFamily: "Poppins, system-ui, sans-serif", color: "var(--ink, #151833)", cursor: step < 5 ? "pointer" : "default" }}
    >
      <style>{CSS}</style>
      <div ref={bgRef} style={{ position: "absolute", inset: 0, background: "var(--paper, #F5F4F0)" }} />

      {/* Prologue */}
      {step === -1 && (
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
          <div>
            <div className="intro-up" style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", color: "var(--slate, #8A8D9F)", textTransform: "uppercase" }}>
              A short story about growth
            </div>
            <div className="intro-up" style={{ animationDelay: "420ms", fontSize: "clamp(2rem, 4.6vw, 3.4rem)", fontWeight: 700, lineHeight: 1.15, marginTop: 14 }}>
              Growth isn't one thing.<br />
              <span className="intro-up" style={{ animationDelay: "1400ms", display: "inline-block" }}>
                It happens in <span className="intro-hi">five stages.</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Chapter */}
      {chapter && (
        <div key={step} style={{ position: "absolute", left: "50%", top: "44%", transform: "translate(-50%, -50%)", width: "min(760px, 86vw)" }}>
          <div className="intro-up" style={{ display: "flex", alignItems: "baseline", gap: 14, fontVariantNumeric: "tabular-nums" }}>
            <span style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.16em", color: "var(--slate, #8A8D9F)" }}>
              CHAPTER 0{step + 1} / 05
            </span>
            <span className="intro-rule" style={{ flex: 1, height: 1, background: "var(--line, #E4E2DB)" }} />
          </div>
          <div className="intro-up" style={{ animationDelay: "120ms", display: "flex", alignItems: "baseline", flexWrap: "wrap", gap: "6px 18px", marginTop: 14 }}>
            <span style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)", fontWeight: 700, lineHeight: 1 }}>
              {chapter.name}<span className="intro-hi">.</span>
            </span>
            <span style={{ fontSize: 15, fontWeight: 600, color: "var(--coral, #FF6B4A)", border: "1px solid var(--coral, #FF6B4A)", borderRadius: 999, padding: "4px 12px" }}>
              {chapter.tag}
            </span>
          </div>
          <p style={{ fontSize: "clamp(1.15rem, 2vw, 1.5rem)", fontWeight: 500, lineHeight: 1.55, marginTop: 26, maxWidth: 720 }}>
            {splitWords(chapter.text, chapter.key).map((w, i) => (
              <span key={i} className={`intro-w${w.hi ? " intro-hi" : ""}`} style={{ animationDelay: `${600 + i * WORD_MS}ms`, fontWeight: w.hi ? 700 : 500 }}>
                {w.w}&nbsp;
              </span>
            ))}
          </p>
        </div>
      )}

      {/* Closing line */}
      {step === 5 && (
        <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
          <div style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 700, lineHeight: 1.2 }}>
            <span className="intro-up" style={{ display: "inline-block" }}>Five stages.</span>{" "}
            <span className="intro-up intro-hi" style={{ display: "inline-block", animationDelay: "700ms" }}>One growth marketer</span>
            <br />
            <span className="intro-up" style={{ display: "inline-block", animationDelay: "1400ms", fontSize: "0.55em", fontWeight: 500, color: "var(--slate, #8A8D9F)", marginTop: 10 }}>
              who has worked across all of them.
            </span>
          </div>
        </div>
      )}

      {/* Wordmark */}
      {step >= 6 && (
        <div
          ref={markRef}
          style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", fontSize: 64, fontWeight: 700, whiteSpace: "nowrap", transformOrigin: "center", willChange: "transform" }}
        >
          <div className="intro-up">Ritik Arora<span className="intro-hi">.</span></div>
        </div>
      )}

      {/* Funnel tracker */}
      <div
        style={{ position: "absolute", left: "50%", bottom: 56, transform: "translateX(-50%)", display: "flex", alignItems: "flex-end", gap: 10, opacity: showTracker ? 1 : 0, transition: "opacity 500ms ease" }}
      >
        {STAGES.map((s, i) => {
          const state = step > 4 || i < step ? "done" : i === step ? "active" : "todo";
          return (
            <div key={s.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, width: 78 }}>
              <div
                style={{
                  width: 78 - i * 10,
                  height: 6,
                  borderRadius: 3,
                  background: state === "active" ? "var(--coral, #FF6B4A)" : state === "done" ? "var(--ink, #151833)" : "var(--line, #E4E2DB)",
                  transition: "background 400ms ease",
                }}
              />
              <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.06em", color: state === "todo" ? "var(--slate, #8A8D9F)" : "var(--ink, #151833)", transition: "color 400ms ease" }}>
                {s.name}
              </span>
            </div>
          );
        })}
      </div>

      {step < 5 && (
        <div style={{ position: "absolute", left: 20, bottom: 18, fontSize: 12, color: "var(--slate, #8A8D9F)", letterSpacing: "0.04em" }}>
          Click or press → for the next chapter
        </div>
      )}

      <button
        onClick={(e) => { e.stopPropagation(); finish(); }}
        style={{ position: "absolute", right: 16, bottom: 10, fontSize: 12, color: "var(--slate, #8A8D9F)", background: "none", border: "none", cursor: "pointer", padding: "8px 16px", letterSpacing: "0.05em", fontFamily: "inherit" }}
      >
        Skip intro ↵
      </button>
    </div>
  );
};

export default IntroAnimation;
