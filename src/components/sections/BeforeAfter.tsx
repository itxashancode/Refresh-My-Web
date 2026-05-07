/* g:\RefreshMyWeb\src\components\sections\BeforeAfter.tsx */
"use client";

import React, { useState, useRef, useEffect } from "react";
import { Container } from "@/components/ui";
import { motion } from "framer-motion";

export const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.min(Math.max((x / rect.width) * 100, 5), 95);
    setSliderPos(percent);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleUp);
    window.addEventListener("touchend", handleUp);
    return () => {
      window.removeEventListener("mouseup", handleUp);
      window.removeEventListener("touchend", handleUp);
    };
  }, []);

  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.2em]">
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.07, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block will-change-transform"
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  return (
    <section id="solutions" className="py-32 bg-white dark:bg-[#0a0a0a] transition-colors overflow-hidden">
      <Container>
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-medium uppercase tracking-widest mb-6">
            Visual impact
          </div>
          <h2 className="section-title text-black dark:text-white mb-8 tracking-tighter">
            {splitText("The impact of a refresh.")}
          </h2>
          <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto font-medium">
            One decision. Completely different trajectory.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative max-w-[900px] mx-auto aspect-video rounded-[32px] overflow-hidden cursor-ew-resize select-none border border-zinc-200 dark:border-white/5 shadow-2xl"
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
          onMouseMove={onMouseMove}
          onTouchMove={onTouchMove}
        >
          {/* AFTER PANEL (RIGHT/BG) */}
          <div className="absolute inset-0 bg-zinc-50 dark:bg-[#0d0d0d]">
             <div className="absolute inset-0 p-12 flex flex-col justify-center items-center">
                <div className="w-full max-w-md space-y-6">
                   <div className="h-2 w-32 bg-white/20 rounded-full" />
                    <div className="h-12 w-full bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl flex items-center px-6">
                       <div className="h-2 w-24 bg-zinc-800 dark:bg-white rounded-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                       <div className="h-32 bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl p-4 flex flex-col justify-end">
                          <div className="h-12 w-full bg-zinc-400 dark:bg-white/20 rounded-lg animate-pulse" />
                       </div>
                       <div className="h-32 bg-zinc-200 dark:bg-white/5 border border-zinc-300 dark:border-white/10 rounded-2xl p-4 flex flex-col justify-end">
                          <div className="h-12 w-full bg-zinc-800 dark:bg-white rounded-lg" />
                       </div>
                    </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(24px,4vw,48px)] font-mono font-bold text-black dark:text-white tracking-tighter opacity-10 dark:opacity-20 pointer-events-none">
                  After
                </div>
             </div>
          </div>

          {/* BEFORE PANEL (LEFT/OVERLAY) */}
          <div 
            className="absolute inset-0 bg-zinc-100 dark:bg-[#1a1a1a] z-10 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
          >
             {/* Grid Overlay */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" 
                  style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
             
             <div className="absolute inset-0 p-12 flex flex-col justify-center items-center">
                <div className="w-full max-w-md space-y-6 grayscale opacity-40">
                   <div className="h-4 w-48 bg-red-500/30 rounded-lg" />
                   <div className="h-16 w-full bg-zinc-800 border-2 border-dashed border-red-500/20 rounded-lg flex items-center px-4">
                      <div className="h-2 w-full bg-red-500/40 rounded-full" />
                   </div>
                   <div className="h-40 w-full bg-zinc-800 border-2 border-red-500/10 rounded-lg relative overflow-hidden">
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-red-500/20" />
                   </div>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[clamp(24px,4vw,48px)] font-mono font-bold text-red-500/40 tracking-tighter pointer-events-none">
                  Before
                </div>
             </div>
          </div>

          {/* DIVIDER & HANDLE */}
          <div 
            className="absolute inset-y-0 z-20 w-1 bg-black dark:bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] dark:shadow-[0_0_20px_rgba(255,255,255,0.2)] pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <motion.div 
              animate={{ scale: isDragging ? 1.1 : 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-black dark:bg-white rounded-full shadow-[0_0_40px_rgba(0,0,0,0.4)] dark:shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center justify-center pointer-events-auto border-4 border-white dark:border-black cursor-grab active:cursor-grabbing"
            >
              <div className="flex gap-1.5 text-white dark:text-black font-bold text-lg">
                <span>←</span>
                <span>→</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* COMPARISON BULLETS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[900px] mx-auto px-4">
          <div className="space-y-6 text-center md:text-left">
            <h4 className="text-[#ff4444] font-bold text-lg tracking-tighter">Before</h4>
            <ul className="space-y-4 text-zinc-500 font-medium text-lg">
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#ff4444] rounded-full" /> High bounce rate
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#ff4444] rounded-full" /> Poor conversion
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-start">
                <span className="w-1.5 h-1.5 bg-[#ff4444] rounded-full" /> Outdated design
              </li>
            </ul>
          </div>

          <div className="space-y-6 text-center md:text-right">
            <h4 className="text-black dark:text-white font-bold text-lg tracking-tighter">After</h4>
            <ul className="space-y-4 text-zinc-600 dark:text-zinc-300 font-medium text-lg">
              <li className="flex items-center gap-3 justify-center md:justify-end">
                Elite user experience <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-end">
                Engineered to convert <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
              </li>
              <li className="flex items-center gap-3 justify-center md:justify-end">
                Built to scale <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};
