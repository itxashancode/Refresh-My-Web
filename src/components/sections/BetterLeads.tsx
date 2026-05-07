/* g:\RefreshMyWeb\src\components\sections\BetterLeads.tsx */
"use client";

import React from "react";
import { Container } from "@/components/ui";
import { motion } from "framer-motion";

export const BetterLeads = () => {
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
    <section className="py-32 bg-white dark:bg-black overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row-reverse gap-20 items-center">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-medium uppercase tracking-widest mb-8">
              Lead quality framework
            </div>
            <h2 className="section-title mb-8 tracking-tighter">
              {splitText("Get better leads,")} <br />
              <span className="text-zinc-500">{splitText("not just volume.")}</span>
            </h2>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-xl font-medium">
              We focus on attracting qualified leads that are ready to buy. Our strategies filter out the noise and bring you the high-value opportunities your business deserves.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex-1 w-full will-change-transform"
          >
            <div className="bg-zinc-50 dark:bg-zinc-950 p-12 rounded-[48px] border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="flex items-end gap-3 h-56 mb-8">
                {[40, 70, 45, 90, 65, 80, 100].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, delay: 0.5 + (i * 0.1), ease: [0.215, 0.61, 0.355, 1] }}
                    className="flex-1 bg-black dark:bg-white rounded-t-2xl relative group"
                  >
                     <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black text-[10px] font-mono font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {height}%
                     </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between px-2 text-[10px] font-medium tracking-widest text-zinc-400 uppercase">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <span key={day}>{day}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
