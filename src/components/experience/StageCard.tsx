import { useEffect, useRef, useState } from "react";
import type { Persona, StageId } from "@/data/journey";
import {
  stageCompanies,
  stageCopy,
  stageMeta,
  mostRelevantStage,
} from "@/data/journey";

interface Props {
  stage: StageId;
  persona: Persona;
}

const StageCard = ({ stage, persona }: Props) => {
  const meta = stageMeta[stage];
  const info = stageCompanies[stage];
  const copyKey = persona;
  const role = stageCopy[stage].role[copyKey];
  const problem = stageCopy[stage].problem[copyKey];
  const ran = stageCopy[stage].ran[copyKey];
  const moved = stageCopy[stage].moved[copyKey];

  const showRelevant =
    persona !== "default" && mostRelevantStage[persona] === stage;

  const blockRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [counts, setCounts] = useState<Record<number, string>>({});

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = blockRef.current;
    if (!el) return;
    if (rm) {
      setRevealed(true);
      // Set counters to final target values
      const final: Record<number, string> = {};
      info.metrics.forEach((m, i) => {
        if (m.count) final[i] = `${m.count.prefix ?? ""}${m.count.target}${m.count.suffix ?? ""}`;
      });
      setCounts(final);
      return;
    }
    const obs = new IntersectionObserver(
      (entries, o) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          setRevealed(true);
          // Animate counters
          info.metrics.forEach((m, i) => {
            if (!m.count) return;
            const { target, prefix = "", suffix = "" } = m.count;
            const dur = 1200;
            const t0 = performance.now();
            const step = (now: number) => {
              const p = Math.min((now - t0) / dur, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              const val = Math.round(target * eased);
              setCounts((prev) => ({ ...prev, [i]: `${prefix}${val}${suffix}` }));
              if (p < 1) requestAnimationFrame(step);
              else setCounts((prev) => ({ ...prev, [i]: `${prefix}${target}${suffix}` }));
            };
            requestAnimationFrame(step);
          });
          o.unobserve(e.target);
        });
      },
      { threshold: 0.22 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [info.metrics]);

  return (
    <div
      className={`stage-block ${revealed ? "node-active" : ""}`}
      id={stage}
      ref={blockRef}
    >
      <div className="stage-node">{meta.num}</div>
      <div className="stage-head">
        <span className="stage-eyebrow">
          <b>{meta.num}</b> · {meta.label}
        </span>
        <div className="stage-bar">
          <div
            className="stage-bar-fill"
            style={{ width: revealed ? meta.barWidth : "0%" }}
          />
        </div>
        <span className={`relevant-tag ${showRelevant ? "show" : ""}`}>
          Most relevant
        </span>
      </div>

      <article className={`exp-card ${revealed ? "in" : ""}`}>
        <div className="exp-top">
          {info.logo ? (
            <img className="exp-logo" src={info.logo} alt={`${info.co} logo`} loading="lazy" />
          ) : (
            <div className="exp-logo-mono" aria-hidden="true">{info.monogram}</div>
          )}
          <div>
            <div className="exp-co">{info.co}</div>
            <div className="exp-period">{info.period}</div>
          </div>
        </div>

        <div className="exp-role">{role}</div>

        <div className="exp-metrics">
          {info.metrics.map((m, i) => (
            <div className="metric" key={i}>
              <span
                className="num"
                style={!m.count ? { fontSize: "0.9rem", lineHeight: 1.3, display: "block" } : undefined}
              >
                {m.count ? (counts[i] ?? `${m.count.prefix ?? ""}0${m.count.suffix ?? ""}`) : m.num}
              </span>
              <span className="label">{m.label}</span>
            </div>
          ))}
        </div>

        {info.sparkline && (
          <svg className="spark" viewBox="0 0 200 32" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id={`sg-${stage}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3D3FE0" />
                <stop offset="100%" stopColor="#3D3FE0" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="sarea"
              d={info.sparkline.area}
              style={{ fill: `url(#sg-${stage})` }}
            />
            <path className="sline" d={info.sparkline.line} pathLength={1} />
          </svg>
        )}

        <details className="exp-details">
          <summary>The problem, what I ran, what moved</summary>
          <div className="cai">
            <div><b>The problem</b><span>{problem}</span></div>
            <div><b>What I ran</b><span>{ran}</span></div>
            <div><b>What moved</b><span>{moved}</span></div>
          </div>
        </details>
      </article>
    </div>
  );
};

export default StageCard;
