"use client";
import React from "react";
import MagicBento from "@/components/ui/MagicBento";
import { BullButton } from "../elements/BullButton";

const Services = () => {
  return (
    <section
      className="relative w-full py-24 md:py-40 bg-[#050505] overflow-hidden"
      id="services"
    >
      {/* --- AESTHETIC SIDE GLOWS --- */}
      {/* Left Top Glow */}
      <div className="absolute -top-[10%] -left-[10%] w-[500px] h-[500px] bg-brand-red/45 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
      {/* Right Bottom Glow */}
      <div className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-brand-red/50 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          {/* LEFT: Content Area */}
          <div className="w-full lg:w-[35%] sticky top-32">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[2px] bg-brand-red" />
              <span className="text-brand-red font-black text-[11px] tracking-[0.5em] uppercase italic">
                Strategic Arsenal
              </span>
            </div>

            <h2 className="text-6xl md:text-8xl font-display font-black text-white uppercase italic tracking-tighter leading-[0.8] mb-8">
              DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-[#800000]">
                WARFARE
              </span>
            </h2>

            <p className="text-zinc-400 text-base md:text-lg leading-relaxed mb-10 max-w-md border-l-2 border-brand-red/20 pl-6">
              We provide the high-caliber digital solutions your brand needs to
              <span className="text-white font-bold italic">
                {" "}
                outpace competition
              </span>{" "}
              and dominate your niche.
            </p>

            <BullButton
              href="/work"
              title="Analyze Results"
              variant="transparent"
              className="scale-110 origin-left"
            />
          </div>

          {/* RIGHT: Optimized Bento */}
          <div className="w-full lg:w-[65%] min-h-[600px] md:min-h-[750px] relative">
            {/* Bento Glow Shadow */}
            <div className="absolute inset-0 bg-brand-red/5 blur-[80px] -z-10 rounded-[3rem]" />

            <MagicBento
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              glowColor="253, 0, 0"
              spotlightRadius={350}
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
