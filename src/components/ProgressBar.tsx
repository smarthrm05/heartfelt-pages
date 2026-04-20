import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ProgressBarProps {
  value: number; // 0-100
  className?: string;
}

export const ProgressBar = ({ value, className }: ProgressBarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-30px" });
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (inView) {
      const t = setTimeout(() => setWidth(value), 200);
      return () => clearTimeout(t);
    }
  }, [inView, value]);

  return (
    <div ref={ref} className={`h-2 w-full overflow-hidden rounded-full bg-muted ${className ?? ""}`}>
      <div
        className="h-full bg-yellow-gradient transition-all duration-[1600ms] ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  );
};
