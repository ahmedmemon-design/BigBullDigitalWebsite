"use client";
import React, { useState, useEffect } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Zayn Malik",
    role: "CEO, Nexa Digital",
    content: "The Arsenal didn't just redesign our site; they weaponized our entire sales funnel. Performance is up by 200%.",
    rating: 5
  },
  {
    name: "Sarah Jenkins",
    role: "Founder, Bloom AI",
    content: "Incredible attention to detail. Their AI workflows are the secret weapon we didn't know we needed.",
    rating: 5
  },
  {
    name: "Vikram Singh",
    role: "Marketing Head",
    content: "The level of strategy here is insane. They understand the psychology of conversion better than anyone.",
    rating: 5
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-24 md:py-48 bg-[#050505] overflow-hidden" id="testimonials">
      
      {/* --- AESTHETIC SIDE GLOWS --- */}
      {/* Left Edge Glow */}
      <div className="absolute top-[20%] -left-[10%] w-[400px] h-[600px] bg-brand-red/40 blur-[140px] rounded-full pointer-events-none z-0" />
      {/* Right Edge Glow */}
      <div className="absolute bottom-[10%] -right-[10%] w-[500px] h-[500px] bg-brand-red/35 blur-[120px] rounded-full pointer-events-none z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Content */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-[2px] bg-brand-red" />
              <span className="text-brand-red font-black text-[10px] tracking-[0.5em] uppercase italic">
                Client Intel
              </span>
            </div>
            
            <h2 className="text-6xl md:text-8xl font-display font-black text-white italic uppercase tracking-tighter leading-[0.85] mb-8">
              FIELD <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-brand-red to-red-900">REPORTS</span>
            </h2>
            
            <p className="text-zinc-500 text-xs md:text-sm uppercase tracking-[0.3em] leading-relaxed max-w-sm mx-auto lg:mx-0">
              Real feedback from the frontlines. These aren&apos;t just reviews; they are <span className="text-white">victory logs</span>.
            </p>
          </div>

          {/* RIGHT: Testimonial Card with Built-in Navigation */}
          <div className="lg:col-span-7 relative group">
            
            {/* Card Main Container */}
            <div className="relative p-8 md:p-16 rounded-[40px] md:rounded-[60px] border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent backdrop-blur-2xl min-h-[400px] flex flex-col justify-center">
              
              {/* Massive Quote Backdrop */}
              <Quote className="absolute top-10 right-10 text-brand-red/30 pointer-events-none" size={150} strokeWidth={1} />
              
              {/* Card Navigation (Inside Card) */}
              <div className="absolute bottom-10 right-10 flex items-center gap-3 z-20">
                <button 
                  onClick={prev} 
                  className="p-3 rounded-xl border border-white/10 bg-black/40 text-white hover:border-brand-red hover:text-brand-red transition-all active:scale-90"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  onClick={next} 
                  className="p-3 rounded-xl border border-white/10 bg-black/40 text-white hover:border-brand-red hover:text-brand-red transition-all active:scale-90"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Slider Content */}
              <div key={current} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} size={14} className="fill-brand-red text-brand-red" />
                  ))}
                </div>

                <p className="text-2xl md:text-4xl text-white font-light italic leading-tight mb-12 max-w-[90%]">
                  &quot;{testimonials[current].content}&quot;
                </p>

                <div className="flex items-center gap-5 pt-8 border-t border-white/5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-zinc-800 to-black border border-brand-red/20 flex items-center justify-center text-brand-red font-black text-xl">
                    {testimonials[current].name.charAt(0)}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-black uppercase text-sm tracking-widest leading-none mb-1">
                      {testimonials[current].name}
                    </span>
                    <span className="text-brand-red font-mono text-[10px] uppercase tracking-widest">
                      {testimonials[current].role}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Bar (Auto-slide indicator) */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-brand-red/30 w-full overflow-hidden rounded-b-full">
                 <div 
                   key={current}
                   className="h-full bg-brand-red animate-[progress_5s_linear_infinite]" 
                 />
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>
    </section>
  );
}