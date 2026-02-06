"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BullLinkProps {
  title: string;
  href: string;
  variant: "red" | "transparent";
  className?: string;
}

export const BullButton = ({ title, href, variant, className = "" }: BullLinkProps) => {
  const variants = {
    red: "bg-brand-red text-white border-brand-red hover:text-black",
    transparent: "bg-transparent text-white border-white/40 hover:border-brand-red"
  };

  const fillLayer = variant === "red" ? "bg-white" : "bg-brand-red";

  return (
    <Link
      href={href}
      className={`
        relative overflow-hidden px-6 py-3 rounded-full font-bold italic tracking-tighter 
        inline-flex items-center gap-2 border transition-colors duration-300 group z-10 
        ${variants[variant]} ${className}
      `}
    >
      {/* Label - Relative z-index to stay above the fill layer */}
      <span className="relative z-20 transition-colors duration-300">
        {title}
      </span>

      {/* Icon - Pure CSS translation on hover */}
      <ArrowUpRight 
        size={18} 
        strokeWidth={3} 
        className="relative z-20 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
      />

      {/* Hover Fill Effect - GPU Accelerated with transform */}
      <div 
        className={`
          absolute inset-0 z-10 w-full h-full translate-y-full transition-transform duration-300 ease-out
          group-hover:translate-y-0 ${fillLayer}
        `}
      />
    </Link>
  );
};