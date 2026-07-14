import React, { useEffect, useRef, useState } from "react";

interface CountUpProps {
  value: string;
  duration?: number;
  className?: string;
}

// Animate the first numeric run inside `value` from 0 to its target.
// Preserves everything else (prefix like "₹", suffixes like "K+", "L", "%", ranges).
const CountUp: React.FC<CountUpProps> = ({ value, duration = 1200, className }) => {
  const match = value.match(/(\d+(?:\.\d+)?)/);
  const target = match ? parseFloat(match[1]) : 0;
  const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;
  const prefix = match ? value.slice(0, match.index!) : value;
  const suffix = match ? value.slice(match.index! + match[1].length) : "";

  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!ref.current || started) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStarted(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started || !match) return;
    let raf: number;
    let startTs: number | null = null;
    const step = (ts: number) => {
      if (startTs === null) startTs = ts;
      const p = Math.min((ts - startTs) / duration, 1);
      // easeOutCubic — no bounce
      const eased = 1 - Math.pow(1 - p, 3);
      setCurrent(eased * target);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, match]);

  if (!match) return <span className={className}>{value}</span>;

  const display = decimals > 0 ? current.toFixed(decimals) : Math.floor(current).toString();
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
