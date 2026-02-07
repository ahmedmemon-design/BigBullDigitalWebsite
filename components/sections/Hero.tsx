// "use client";
// import React from "react";
// import dynamic from "next/dynamic";
// import { BullButton } from "../elements/BullButton";

// // Performance Optimization: No SSR for Heavy Canvas
// const Plasma = dynamic(() => import("@/components/ui/Plasma"), {
//   ssr: false,
//   loading: () => <div className="absolute inset-0 bg-[#050505]" />
// });

// const Hero = () => {
//   return (
//     <section className="relative w-full h-[100svh] bg-[#050505] flex items-center justify-center overflow-hidden">

//       {/* Background Layer: Plasma */}
//       <div className="absolute inset-0 z-0">
//         <Plasma
//           linesGradient={["#FD0000"]}
//           enabledWaves={["middle", "bottom"]}
//           lineCount={5}
//           lineDistance={5}
//           interactive={true}
//           parallax={true}
//         />
//       </div>

//       {/* Vignette Overlay: Creates Focus on Center Text */}
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-[1]" />

//       {/* Content Layer */}
//       <div className="relative z-10 container mx-auto px-6 text-center">

//         {/* Main Headline: Responsive & Aggressive */}
//         <h1 className="font-display text-5xl sm:text-7xl md:text-[9rem] lg:text-[11rem] font-black text-white leading-[0.8] tracking-[-(0.05em)] uppercase italic select-none">
//           BIG BULL
//           <br />
//           <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-[#800000] filter drop-shadow-[0_10px_10px_rgba(253,0,0,0.3)]">
//             DIGITAL
//           </span>
//         </h1>

//         {/* Sub-headline: Conversion Focused Copy */}
//         <p className="mt-6 md:mt-10 text-zinc-400 text-[10px] md:text-sm lg:text-base max-w-xl mx-auto uppercase tracking-[0.5em] font-bold">
//           We Don&apos;t Just Build Brands.{" "}
//           <span className="text-white">We Engineer Dominance.</span>
//         </p>

//         {/* Action Buttons */}
//         <div className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-5 md:gap-8">
//           <BullButton
//             href="/contact"
//             title="Start The Charge"
//             variant="red"

//           />
//           <BullButton
//             href="/work"
//             title="Our Arsenal"
//             variant="transparent"

//           />
//         </div>
//       </div>

//       {/* Edge Fades: Seamless Transition to next section */}
//       <div className="absolute bottom-0 w-full h-40 bg-gradient-to-t from-[#050505] to-transparent z-[5] pointer-events-none" />
//     </section>
//   );
// };

// export default Hero;
"use client";
import { Suspense, lazy } from "react";
import { BullButton } from "../elements/BullButton";

// Use lazy loading with Suspense
const Plasma = lazy(() => import("@/components/ui/Plasma"));
const Counter = lazy(() => import("@/components/ui/Counter"));

// Loading fallback for Plasma
const PlasmaLoader = () => (
  <div className="absolute inset-0 bg-[#050505]" />
);

// Loading fallback for Counter
const CounterLoader = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col items-center">
    <span className="text-3xl md:text-4xl lg:text-5xl font-black text-white">
      {value}
    </span>
    <p className="text-zinc-500 text-[10px] uppercase tracking-widest mt-1 font-bold">
      {label}
    </p>
  </div>
);

const Hero = () => {
  // Services for marquee
  const services = ["WEB DESIGN", "APP DEVELOPMENT", "LOGO DESIGN", "BRANDING"];
  
  // Stats data
  const stats = [
    { value: "100+", label: "Projects Done" },
    { value: "50+", label: "Happy Clients" },
    { value: "24/7", label: "Support Ready" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#050505] overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <Suspense fallback={<PlasmaLoader />}>
          <Plasma
            linesGradient={["#FD0000"]}
            enabledWaves={["middle", "bottom"]}
            lineCount={3}
            lineDistance={3}
            animationSpeed={0.8}
            interactive={true}
            parallax={true}
          />
        </Suspense>
      </div>

      {/* Content Layer */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 flex flex-col items-center justify-center min-h-screen py-8">
        
        {/* Header Section */}
        <div className="text-center w-full">
          {/* Subtitle */}
          <p className="text-brand-red uppercase tracking-[0.5em] text-[10px] md:text-xs font-bold mb-4">
            Creative Powerhouse
          </p>

          {/* Main Title */}
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight uppercase tracking-tight">
            BIG BULL DIGITAL
          </h1>

          {/* Description */}
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto mt-6 mb-10">
            We provide the high-caliber digital solutions your brand needs.
          </p>
        </div>

        {/* Stats Section */}
        <div className="mt-8 md:mt-12 w-full max-w-4xl mx-auto">
          <div className="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-xl md:rounded-2xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <Suspense 
                  key={index} 
                  fallback={<CounterLoader value={stat.value} label={stat.label} />}
                >
                  <Counter 
                    value={stat.value} 
                    label={stat.label} 
                    duration={2000}
                  />
                </Suspense>
              ))}
            </div>
          </div>
        </div>

        {/* Buttons Section */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row gap-4">
          <BullButton
            href="/contact"
            title="Get Started"
            variant="red"
            className="px-8 py-3"
          />
        </div>
      </div>

      {/* Bottom Marquee Section */}
      <div className="absolute bottom-0 left-0 w-full bg-brand-red py-4 overflow-hidden z-20">
        <div className="flex animate-marquee">
          {[...Array(3)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex items-center mx-4">
              {services.map((service, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-white font-black uppercase italic tracking-tighter text-sm md:text-xl mx-6">
                    {service}
                  </span>
                  {index < services.length - 1 && (
                    <span className="text-white/50 text-lg">✦</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050505] to-transparent z-[15] pointer-events-none" />

      {/* CSS for Marquee */}
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          white-space: nowrap;
        }
        @media (prefers-reduced-motion) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};


export default Hero;
