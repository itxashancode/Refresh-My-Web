/* g:\RefreshMyWeb\src\components\sections\Footer.tsx */
"use client";

import React from "react";
import { Container } from "@/components/ui";
import { Send, Globe, Link, Code2, ArrowUpRight } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-zinc-50 dark:bg-black text-black dark:text-white pt-32 pb-12 overflow-hidden border-t border-zinc-200 dark:border-zinc-900 transition-colors">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-16 mb-24">
          <div className="col-span-2 md:col-span-3">
            <div className="flex items-center gap-3 mb-8 group cursor-pointer" onClick={scrollToTop}>
              <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white">
                <img 
                  src="/logo.png" 
                  alt="RefreshMyWeb Logo" 
                  className="w-full h-full object-cover dark:invert transition-all duration-300"
                />
              </div>
              <span className="text-3xl font-bold tracking-tighter uppercase italic text-black dark:text-white">RefreshMyWeb</span>
            </div>
            <p className="text-xl text-zinc-500 mb-10 max-w-sm leading-relaxed font-medium">
              We rebrand and rebuild old sites to ensure your digital presence is as powerful as your business.
            </p>
            <div className="flex gap-6">
              {[Send, Globe, Link, Code2].map((Icon, i) => (
                <div key={i} className="w-10 h-10 rounded-full border border-zinc-300 dark:border-zinc-800 flex items-center justify-center text-zinc-500 hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white cursor-pointer transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 mb-10">Navigation</h4>
            <ul className="space-y-5 text-sm font-medium text-zinc-400">
              {["Services", "Solutions", "Plans", "FAQ"].map((item) => (
                <li 
                  key={item} 
                  className="flex items-center gap-1 hover:text-black dark:hover:text-white cursor-pointer transition-colors group"
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 mb-10">Offerings</h4>
            <ul className="space-y-5 text-sm font-medium text-zinc-400">
              {["Website Redesign", "Website Building", "Website Maintenance", "Website SEO", "Website Refresh"].map((item) => (
                <li key={item} className="flex items-center gap-1 hover:text-black dark:hover:text-white cursor-pointer transition-colors group">
                  {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-500 mb-10">Studio</h4>
            <ul className="space-y-5 text-sm font-medium text-zinc-400">
              {["About Us", "Careers", "Press", "Contact"].map((item) => (
                <li key={item} className="flex items-center gap-1 hover:text-black dark:hover:text-white cursor-pointer transition-colors group">
                  {item} <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-zinc-200 dark:border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8 text-[11px] font-medium uppercase tracking-widest text-zinc-500">
          <div className="flex items-center gap-2">
            <span>© 2024 RefreshMyWeb</span>
            <span className="w-1 h-1 bg-zinc-300 dark:bg-zinc-800 rounded-full" />
            <span>Built for scale</span>
          </div>
          <div className="flex gap-10">
            <span className="hover:text-black dark:hover:text-white cursor-pointer transition-colors underline underline-offset-4">Privacy Policy</span>
            <span className="hover:text-black dark:hover:text-white cursor-pointer transition-colors underline underline-offset-4">Terms of Service</span>
          </div>
        </div>
      </Container>
    </footer>
  );
};
