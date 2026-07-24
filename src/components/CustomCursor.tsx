import { useEffect, useRef, useState } from "react";

/**
 * Custom cursor: small cyan dot + trailing gold ring.
 * Morphs over interactive elements. Disabled on touch / reduced-motion.
 */
const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || rm) return;
    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const dot = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const ring = { x: dot.x, y: dot.y };
    const target = { x: dot.x, y: dot.y };

    const onMove = (e: MouseEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };
    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const hit = el.closest("a, button, summary, [data-cursor='hover'], input, textarea, .persona-chip");
      setHovering(!!hit);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });

    let raf = 0;
    const tick = () => {
      dot.x += (target.x - dot.x) * 0.35;
      dot.y += (target.y - dot.y) * 0.35;
      ring.x += (target.x - ring.x) * 0.12;
      ring.y += (target.y - ring.y) * 0.12;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${dot.x}px,${dot.y}px,0) translate(-50%,-50%)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ring.x}px,${ring.y}px,0) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;
  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className={`cc-ring ${hovering ? "cc-hover" : ""}`}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className={`cc-dot ${hovering ? "cc-hover" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
