
import React, { useEffect, useRef, useState } from "react";

interface MetricCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number; // ms
  className?: string;
}

const MetricCounter: React.FC<MetricCounterProps> = ({
  value,
  suffix = "",
  prefix = "",
  duration = 1500,
  className = "",
}) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimestamp = useRef<number | null>(null);

  useEffect(() => {
    let animationFrame: number;
    function step(timestamp: number) {
      if (!startTimestamp.current) startTimestamp.current = timestamp;
      const progress = Math.min((timestamp - startTimestamp.current) / duration, 1);
      setDisplayValue(Math.floor(progress * value));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      } else {
        setDisplayValue(value);
      }
    }
    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
    // eslint-disable-next-line
  }, [value, duration]);

  return (
    <span className={`font-bold text-accent text-2xl md:text-4xl ${className}`}>
      {prefix}
      {displayValue.toLocaleString()}
      {suffix}
    </span>
  );
};

export default MetricCounter;
