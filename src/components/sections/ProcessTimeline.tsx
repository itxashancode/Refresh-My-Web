/* g:\RefreshMyWeb\src\components\sections\ProcessTimeline.tsx */
"use client";

import React from "react";
import { Container } from "@/components/ui";
import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Discovery",
    description: "We audit your current site, understand your goals, and identify exactly what's costing you revenue."
  },
  {
    number: "2",
    title: "Strategy",
    description: "We build a custom roadmap — positioning, architecture, and conversion strategy before a single line of code."
  },
  {
    number: "3",
    title: "Build",
    description: "Our team executes. Full-stack build, pixel-perfect design, engineered for speed and conversion."
  },
  {
    number: "4",
    title: "Launch & Grow",
    description: "We go live, monitor performance, and stay in your corner — ongoing support, not a one-time handoff."
  }
];

export const ProcessTimeline = () => {
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
    <section id="process" className="py-32 bg-white dark:bg-[#0d0d0d] overflow-hidden transition-colors">
      <Container>
        <div className="mb-24">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono font-medium uppercase tracking-widest mb-6 text-zinc-500">
            The process
          </div>
          <h2 className="section-title text-black dark:text-white mb-8 tracking-tighter">
            {splitText("Simple. Fast. Reliable.")}
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row gap-12 md:gap-0 justify-between items-start">
          {/* Desktop Connector Line */}
          <div className="hidden md:block absolute top-[20px] left-0 right-0 h-[1px] border-t border-dashed border-zinc-200 dark:border-white/15 -z-10" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ x: -30, opacity: 0, y: 30 }}
              whileInView={{ x: 0, opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: [0.215, 0.61, 0.355, 1] }}
              className="flex-1 flex flex-col items-start md:items-center text-left md:text-center px-0 md:px-4 will-change-transform"
            >
              <div className="w-10 h-10 rounded-full border-2 border-black dark:border-white flex items-center justify-center bg-white dark:bg-[#0d0d0d] mb-8 transition-colors">
                <span className="text-black dark:text-white font-mono font-bold text-lg">{step.number}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-black dark:text-white tracking-tight mb-4">{step.title}</h3>
              <p className="text-sm text-zinc-500 dark:text-white/50 leading-relaxed max-w-[220px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
