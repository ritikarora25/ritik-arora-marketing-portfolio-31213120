import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface Props {
  children: ReactNode;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  strength?: number;
  as?: "a" | "button";
  type?: "button" | "submit";
  ariaPressed?: boolean;
  ariaLabel?: string;
}

const MagneticButton = ({
  children,
  className,
  href,
  target,
  rel,
  onClick,
  strength = 0.35,
  as,
  type,
  ariaPressed,
  ariaLabel,
}: Props) => {
  const ref = useRef<HTMLElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 18, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 220, damping: 18, mass: 0.35 });

  const handleMove = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * strength);
    y.set(dy * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const Tag = as === "button" ? motion.button : motion.a;

  return (
    <Tag
      // @ts-expect-error mixed ref for a|button
      ref={ref}
      className={className}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      type={type}
      aria-pressed={ariaPressed}
      aria-label={ariaLabel}
      style={{ x: sx, y: sy, display: "inline-flex" }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </Tag>
  );
};

export default MagneticButton;
