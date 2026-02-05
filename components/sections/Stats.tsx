"use client";
import React, { useEffect, useState, useRef } from "react";

interface CountUpNumberProps {
  value: number;
  duration?: number;
}

interface StatItem {
  label: string;
  value: number;
  suffix: string;
  color: string;
}

const stats: StatItem[] = [
  {
    label: "Revenue Generated",
    value: 42,
    suffix: "M+",
    color: "text-[#00FF41]",
  },
  {
    label: "Projects Deployed",
    value: 150,
    suffix: "+",
    color: "text-white",
  },
  {
    label: "Ad Spend Managed",
    value: 5,
    suffix: "M+",
    color: "text-white",
  },
  {
    label: "Conversion Lift",
    value: 85,
    suffix: "%",
    color: "text-[#FD0000]",
  },
];

const CountUpNumber: React.FC<CountUpNumberProps> = ({
  value,
  duration = 2000,
}) => {
  const [count, setCount] = useState<number>(0);
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );

    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    const totalFrames = 60;
    const increment = end / totalFrames;
    const intervalTime = duration / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return <span ref={countRef}>{count}</span>;
};

export default function Stats() {
  return (
    <section className="relative py-24 md:py-36 bg-[#050505] overflow-hidden border-y border-white/5">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-[#FD0000]/5 blur-[120px]" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-64 h-64 bg-[#FD0000]/5 blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center lg:items-start lg:text-left group">
              <div className={`text-5xl md:text-7xl font-display font-black tracking-tighter italic ${stat.color} transition-transform duration-500 group-hover:scale-110`}>
                {stat.suffix === "M+" && stat.label.includes("Revenue") ? "$" : ""}
                <CountUpNumber value={stat.value} />
                <span className="opacity-80">{stat.suffix}</span>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <div className="w-4 h-[1px] bg-[#FD0000] hidden lg:block" />
                <span className="text-zinc-500 text-[10px] md:text-xs font-black uppercase tracking-[0.4em]">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
