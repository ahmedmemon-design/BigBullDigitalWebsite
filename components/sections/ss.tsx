"use client";
import React from "react";
import { motion } from "framer-motion";
import { Search, Zap, BarChart3, Globe } from "lucide-react";

const services = [
  {
    title: "Performance Marketing",
    desc: "Scale your revenue with data-driven ad campaigns.",
    icon: <Zap className="text-brand-red" size={32} />,
    size: "md:col-span-2",
    bg: "bg-dark-zinc",
  },
  {
    title: "SEO Mastery",
    desc: "Dominating search results for maximum visibility.",
    icon: <Search className="text-bull-green" size={32} />,
    size: "md:col-span-1",
    bg: "bg-brand-black",
  },
  {
    title: "Web 3.0 Solutions",
    desc: "Next-gen web experiences built for the future.",
    icon: <Globe className="text-brand-red" size={32} />,
    size: "md:col-span-1",
    bg: "bg-brand-black",
  },
  {
    title: "Growth Analytics",
    desc: "Turning complex data into explosive ROI.",
    icon: <BarChart3 className="text-bull-green" size={32} />,
    size: "md:col-span-2",
    bg: "bg-dark-zinc",
  },
];

export default function Services() {
  return (
    <section className="py-24 px-6 bg-brand-black text-brand-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-display text-5xl md:text-7xl font-black uppercase italic leading-none">
            The <span className="text-brand-red">Arsenal</span>
          </h2>
          <p className="font-simple mt-4 text-zinc-500 uppercase tracking-[0.3em] text-sm">
            Battle-tested strategies for digital dominance
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className={`${s.size} ${s.bg} border border-white/5 p-10 rounded-[2rem] flex flex-col justify-between group hover:border-brand-red/50 transition-all duration-500 relative overflow-hidden`}
            >
              {/* Subtle Glow on Hover */}
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-brand-red/10 blur-[80px] group-hover:bg-brand-red/20 transition-all" />

              <div>
                <div className="mb-6">{s.icon}</div>
                <h3 className="font-display text-3xl font-bold uppercase italic mb-4">
                  {s.title}
                </h3>
                <p className="font-simple text-zinc-400 text-lg max-w-[250px]">
                  {s.desc}
                </p>
              </div>

              <div className="mt-12">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-red group-hover:translate-x-2 transition-transform inline-block">
                  Explore Service →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}