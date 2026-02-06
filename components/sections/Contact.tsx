"use client";
import React, { useState } from "react";
import { Mail, Phone, Check } from "lucide-react";

const SERVICE_OPTIONS = [
  "Web Design", "AI Integration", "Growth Hacking", 
  "Branding", "Media Buying", "Lead Gen"
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices(prev => 
      prev.includes(service) ? prev.filter(s => s !== service) : [...prev, service]
    );
  };

  return (
    <section className="py-32 bg-[#060606] relative overflow-hidden" id="contact">
      {/* Background Accent */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-brand-red/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16 items-center">
          
          {/* Left Side: Info */}
          <div className="text-white">
            <h2 className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-8">
              READY TO <br /> <span className="text-brand-red">DOMINATE?</span>
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-sm leading-relaxed">
              Stop playing catch-up. Fill the brief and let&apos;s build your digital arsenal.
            </p>

            <div className="space-y-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Mail size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Email HQ</p>
                  <p className="text-xl font-bold">ops@bigbull.digital</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                  <Phone size={20} className="text-brand-red" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest">Direct Line</p>
                  <p className="text-xl font-bold">+1 (555) 000-1234</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: The White Form */}
          <div className="bg-white rounded-[3rem] p-8 md:p-14 text-black shadow-2xl">
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              
              {/* Basic Inputs */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Full Name</label>
                  <input type="text" placeholder="John Doe" className="border-b border-zinc-200 py-3 focus:border-brand-red outline-none transition-colors text-base font-medium" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Email Address</label>
                  <input type="email" placeholder="john@company.com" className="border-b border-zinc-200 py-3 focus:border-brand-red outline-none transition-colors text-base font-medium" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Phone Number</label>
                <input type="tel" placeholder="+1 (000) 000-0000" className="border-b border-zinc-200 py-3 focus:border-brand-red outline-none transition-colors text-base font-medium" />
              </div>

              {/* Multiple Services Selector */}
              <div className="flex flex-col gap-4">
                <label className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Required Services (Select Multiple)</label>
                <div className="flex flex-wrap gap-2">
                  {SERVICE_OPTIONS.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`px-5 py-2.5 rounded-full text-[11px] font-bold uppercase transition-all flex items-center gap-2 border-2 
                        ${selectedServices.includes(service) 
                          ? 'bg-black border-black text-white' 
                          : 'bg-transparent border-zinc-100 text-zinc-500 hover:border-zinc-300'}`}
                    >
                      {service}
                      {selectedServices.includes(service) && <Check size={14} />}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-[11px] font-black uppercase tracking-widest text-zinc-400">Project Mission</label>
                <textarea rows={3} placeholder="Tell us about your goals..." className="border-b border-zinc-200 py-3 focus:border-brand-red outline-none transition-colors text-base font-medium resize-none" />
              </div>

              <button className="w-full bg-[#FD0000] text-white py-6 rounded-2xl font-black uppercase tracking-[0.4em] text-xs hover:bg-black transition-all shadow-[0_15px_30px_rgba(253,0,0,0.3)] hover:shadow-none active:scale-[0.98]">
                Submit Transmission
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}