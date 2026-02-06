"use client";
import React from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Mamawa TECH",
    cat: "Web Development",
    img: "/mamawatech.png",
    col: "md:col-span-8",
    description: "Enterprise tech solutions platform"
  },
  {
    title: "Klaricin",
    cat: "Web Development",
    img: "/klaricin.png",
    col: "md:col-span-4",
    description: "Modern healthcare interface"
  },
  {
    title: "SAC",
    cat: "Ecommerce Setup",
    img: "/sac.png",
    col: "md:col-span-12",
    description: "Full-scale ecommerce ecosystem"
  },
];

export default function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-black text-white" id="work">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Enhanced Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 md:mb-20 lg:mb-24">
          <div className="mb-8 lg:mb-0">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-12 h-[2px] bg-gradient-to-r from-[#FD0000] to-transparent"></div>
              <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                Portfolio
              </span>
            </div>
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase italic tracking-tight leading-[0.85]">
              SELECTED <br />
              <span className="relative">
                <span className="text-[#FD0000]">WORKS</span>
                <span className="absolute -right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-[#FD0000] rounded-full animate-pulse"></span>
              </span>
            </h2>
            <p className="mt-6 text-lg text-gray-400 max-w-xl">
              A curated collection of our most impactful digital solutions
            </p>
          </div>

        </div>

        {/* Enhanced Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 lg:gap-8">
          {projects.map((p, i) => (
            <div 
              key={i} 
              className={`group relative overflow-hidden rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-zinc-900 to-black 
                border border-white/5 hover:border-white/10 transition-all duration-500 
                min-h-[300px] md:min-h-[450px] lg:min-h-[500px] ${p.col}
                hover:shadow-2xl hover:shadow-[#FD0000]/10`}
            >
              {/* Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#FD0000,transparent_50%)]"></div>
              </div>

              {/* Enhanced Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={`${p.img}?q=90&w=1600&auto=format&fit=crop`} 
                  alt={p.title}
                  className="absolute inset-0 w-full h-full object-cover 
                    scale-100 group-hover:scale-105 
                    grayscale group-hover:grayscale-0 
                    opacity-40 group-hover:opacity-100 
                    transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>

              {/* Content Overlay */}
              <div className="relative h-full p-6 md:p-8 lg:p-12 flex flex-col justify-end z-10">
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 mb-3 md:mb-4">
                  <span className="text-xs md:text-sm font-bold text-[#FD0000] uppercase tracking-widest">
                    {p.cat}
                  </span>
                  <div className="w-8 h-[1px] bg-gradient-to-r from-[#FD0000] to-transparent"></div>
                </div>

                {/* Project Title & Info */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase italic tracking-tight mb-2">
                      {p.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base max-w-md">
                      {p.description}
                    </p>
                  </div>
                  

                </div>

                {/* Project Index */}
                <div className="absolute top-6 right-6 text-6xl md:text-7xl font-black text-white/5">
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Enhanced Hover Effects */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#FD0000]/30 
                rounded-3xl md:rounded-[2.5rem] transition-all duration-500 pointer-events-none" />
              
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#FD0000]/20 to-transparent 
                blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 rounded-[2.5rem] pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Stats or CTA Section */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">50+</div>
              <div className="text-sm text-gray-400">Projects Delivered</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">98%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">24/7</div>
              <div className="text-sm text-gray-400">Support Available</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl md:text-4xl font-black text-white mb-2">100%</div>
              <div className="text-sm text-gray-400">On-Time Delivery</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}