"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { BullButton } from "../elements/BullButton";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-[100] px-4 md:px-6">
      <nav className="mx-auto max-w-7xl bg-white/10 backdrop-blur-xl border border-white/20 rounded-full px-6 md:px-8 py-2 md:py-3 grid grid-cols-2 md:grid-cols-3 items-center shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
        
        <Link href="/" className="font-display text-lg md:text-xl font-black tracking-tighter text-white uppercase italic">
          BIG BULL <span className="text-brand-red">DIGITAL</span>
        </Link>

        <ul className="hidden md:flex items-center justify-center gap-8 font-bold text-[10px] uppercase tracking-[0.2em] text-white">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="hover:text-brand-red transition-colors duration-300">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center justify-end gap-4">
          <div className="hidden md:block">
            <BullButton href="/contact" title="Let's Talk" variant="red" className="scale-90" />
          </div>
          
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2 bg-white/10 rounded-full hover:bg-brand-red transition-all"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          <ul className="flex flex-col gap-6 text-3xl font-black italic uppercase text-white">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="active:text-brand-red flex justify-between items-center group"
                >
                  {link.name}
                  <span className="text-brand-red opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-8 border-t border-white/5">
            <BullButton href="/contact" title="Let's Talk" variant="red" className="w-full justify-center py-5 text-xl" />
          </div>
        </div>
      )}
    </header>
  );
}