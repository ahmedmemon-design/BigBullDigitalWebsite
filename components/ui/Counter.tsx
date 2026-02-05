// app/components/ui/Counter.tsx
"use client";

import { useEffect, useRef, useState } from "react";

interface CounterProps {
  value: string; // "100+", "50+", "24/7"
  label: string;
  duration?: number;
}

export default function Counter({ value, label, duration = 1500 }: CounterProps) {
  const [count, setCount] = useState(0);
  const hasPlus = value.includes("+");
  const numericValue = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const isTime = label.includes("Support"); // "24/7" support

  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isTime) {
      setCount(24);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Start animation
          let startTime: number | null = null;
          
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(eased * numericValue);
            
            setCount(current);
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.3, rootMargin: "50px" }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [numericValue, duration, isTime]);

  const displayValue = isTime ? "24/7" : `${count}${hasPlus ? "+" : ""}`;

  return (
    <div ref={counterRef} className="text-center px-4">
      <div className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-2">
        {displayValue}
      </div>
      <div className="text-zinc-400 text-xs uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
}