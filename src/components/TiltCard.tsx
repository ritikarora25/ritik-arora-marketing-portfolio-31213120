import { useRef, type ReactNode, type CSSProperties } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  max?: number;
}

/**
 * Lightweight 3D-tilt wrapper. Pointer position → rotateX/rotateY with
 * subtle inner glow that follows the cursor. Disabled on touch.
 */
const TiltCard = ({ children, className = "", style, max = 6 }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (0.5 - py) * max;
    const ry = (px - 0.5) * max;
    el.style.setProperty("--tilt-rx", `${rx}deg`);
    el.style.setProperty("--tilt-ry", `${ry}deg`);
    el.style.setProperty("--tilt-gx", `${px * 100}%`);
    el.style.setProperty("--tilt-gy", `${py * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-rx", `0deg`);
    el.style.setProperty("--tilt-ry", `0deg`);
  };

  return (
    <div
      ref={ref}
      className={`tilt-card ${className}`}
      style={style}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div className="tilt-inner">{children}</div>
    </div>
  );
};

export default TiltCard;
