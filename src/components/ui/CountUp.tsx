"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface CountUpProps {
  to: number;
  duration?: number;
  suffix?: string;
  thousands?: boolean;
}

export default function CountUp({ to, duration = 2, suffix = "", thousands = false }: CountUpProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!isInView) return;
    let start: number | null = null;
    const ms = duration * 1000;

    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / ms, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * to));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [isInView, to, duration]);

  const formatted = thousands ? count.toLocaleString("en-US") : String(count);
  return <span ref={ref}>{formatted}{suffix}</span>;
}
