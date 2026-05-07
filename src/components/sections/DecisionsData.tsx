/* g:\RefreshMyWeb\src\components\sections\DecisionsData.tsx */
"use client";

import React from "react";
import { Container, Button } from "@/components/ui";
import { motion } from "framer-motion";

export const DecisionsData = () => {
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.2em]">
        <motion.span
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.05, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  return (
    <section className="py-32 bg-white dark:bg-black overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-medium uppercase tracking-widest mb-8">
              Data intelligence
            </div>
            <h2 className="section-title mb-8 tracking-tighter">
              {splitText("Make decisions")} <br />
              <span className="text-zinc-500">{splitText("based on clarity.")}</span>
            </h2>
            <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-xl font-medium">
              Stop guessing what works. Our analytics stack gives you deep insights into your users' journey, allowing you to optimize for maximum impact and ROI.
            </p>
            <Button 
              variant="primary"
              size="lg" 
              className="px-10 h-14 text-[14px] font-semibold"
              onClick={() => window.open('https://calendly.com/refreshmyweb', '_blank')}
            >
              Unlock Your Data
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="flex-1 w-full will-change-transform"
          >
            <div className="bg-zinc-50 dark:bg-zinc-950 p-12 rounded-[48px] border border-zinc-200 dark:border-zinc-800 shadow-2xl">
              <div className="space-y-10">
                {[
                  { label: "Mobile Traffic", value: "65%", width: "65%" },
                  { label: "Direct Visits", value: "20%", width: "20%" },
                  { label: "Search Engine", value: "15%", width: "15%" }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <div className="flex justify-between text-[11px] font-medium uppercase tracking-widest text-zinc-400">
                      <span>{item.label}</span>
                      <span className="text-black dark:text-white font-mono">{item.value}</span>
                    </div>
                    <div className="h-3 w-full bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: item.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: [0.215, 0.61, 0.355, 1] }}
                        className="h-full bg-black dark:bg-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
