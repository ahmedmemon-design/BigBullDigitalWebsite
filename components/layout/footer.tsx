"use client";
import { Facebook, Instagram, Twitter, Linkedin, Send, Mail, MapPin } from "lucide-react";
import Link from "next/link";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: Facebook, href: "https://www.facebook.com/bigbulldigitalofficial/" },
    { Icon: Instagram, href: "https://www.instagram.com/bigbulldigital/" },
    { Icon: Linkedin, href: "https://www.linkedin.com/company/big-bull-digital/" },
  ];

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#050505] text-white pt-20 pb-10 px-6 border-t border-brand-red/20">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* 1. Brand & Newsletter */}
          <div className="space-y-6">
            <div className="font-display text-2xl md:text-3xl font-black tracking-tighter italic uppercase">
              BIG BULL <span className="text-brand-red">DIGITAL</span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
              Stay ahead of the curve. Subscribe for the latest digital insights.
            </p>
            
            {/* Newsletter: Fixed & Styled */}
            <div className="relative max-w-sm group">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3.5 pl-6 pr-14 text-sm focus:outline-none focus:border-brand-red transition-all duration-300"
              />
              <button className="absolute right-1.5 top-1.5 bg-brand-red p-2.5 rounded-full hover:scale-110 active:scale-95 transition-all duration-300 shadow-[0_0_15px_rgba(253,0,0,0.4)]">
                <Send size={16} strokeWidth={3} />
              </button>
            </div>
          </div>

          {/* 2. Navigation: Red Accents Restored */}
          <div className="lg:pl-12">
            <h4 className="text-lg font-bold mb-8 text-brand-red uppercase italic tracking-tighter">Navigation</h4>
            <ul className="space-y-4 text-sm text-zinc-400">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1.5px] bg-brand-red transition-all duration-300 group-hover:w-4" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand-red uppercase italic tracking-tighter">Contact</h4>
            <ul className="space-y-5 text-sm text-zinc-400">
              <li className="flex items-start gap-3 group cursor-pointer">
                <Mail size={18} className="text-brand-red shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">hello@bigbull.digital</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-red shrink-0" />
                <span className="leading-relaxed">
Plot# 1C, Lane 7, Zamzam Commercial, Phase V, DHA, Karachi, Pakistan                </span>
              </li>
            </ul>
          </div>

          {/* 4. Social Media: High-End Hover Restored */}
          <div>
            <h4 className="text-lg font-bold mb-8 text-brand-red uppercase italic tracking-tighter">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href }, index) => (
                <Link 
                  key={index} 
                  href={href}
                  target="_blank"
                  className="relative p-3 bg-white/5 border border-white/10 rounded-full text-white overflow-hidden group transition-all duration-500"
                >
                  {/* The Background Slide-up Effect */}
                  <div className="absolute inset-0 bg-brand-red translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
                  
                  <Icon size={20} className="relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </Link>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-6 text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">
          <p>© {currentYear} BIG BULL DIGITAL. ALL RIGHTS RESERVED.</p>
        </div>
        
      </div>
    </footer>
  );
}
