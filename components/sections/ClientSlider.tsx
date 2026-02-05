"use client";
import React from "react";

const clientLogos = [
  { src: "https://cdn.worldvectorlogo.com/logos/nissan-6.svg", alt: "Nissan" },
  { src: "https://cdn.worldvectorlogo.com/logos/codecademy.svg", alt: "Codecademy" },
  { src: "https://cdn.worldvectorlogo.com/logos/lee-logo-1.svg", alt: "Lee" },
  { src: "https://cdn.worldvectorlogo.com/logos/tesla-9.svg", alt: "Tesla" },
  { src: "https://cdn.worldvectorlogo.com/logos/winston.svg", alt: "Winston" },
  { src: "https://cdn.worldvectorlogo.com/logos/stanley-vertical-logo.svg", alt: "Stanley" },
  { src: "https://cdn.worldvectorlogo.com/logos/coca-cola-5.svg", alt: "Coca Cola" },
  { src: "https://cdn.worldvectorlogo.com/logos/pepsi-1.svg", alt: "Pepsi" },
];

export default function ClientSlider() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] border-y border-white/5 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <p className="text-zinc-500 text-[11px] uppercase tracking-[0.5em] font-bold italic mb-4">
          Fueling <span className="text-brand-red">Global Giants</span>
        </p>
        
        <h3 className="text-white text-2xl md:text-3xl font-bold mb-4">
          Trusted by Industry Leaders
        </h3>
        
        <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
          Join 50+ successful businesses that scaled with our digital solutions
        </p>
      </div>

      {/* Custom marquee implementation with gray logos */}
      <div className="relative overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none" />
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#050505] via-[#050505]/90 to-transparent z-10 pointer-events-none" />
        
        {/* Marquee container */}
        <div className="flex animate-marquee py-6">
          {[...Array(3)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex items-center gap-16 px-8 flex-shrink-0">
              {clientLogos.map((logo, index) => (
                <div 
                  key={`${loopIndex}-${index}`} 
                  className="flex-shrink-0 group"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-12 w-auto object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110"
                    loading="lazy"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom section separator */}
      <div className="container mx-auto px-6 mt-16 text-center">
        <div className="inline-block h-px w-32 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </div>

      {/* CSS for animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          display: flex;
          white-space: nowrap;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}