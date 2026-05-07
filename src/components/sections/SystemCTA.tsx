/* g:\RefreshMyWeb\src\components\sections\SystemCTA.tsx */
"use client";

import React from "react";
import { Container, Button } from "@/components/ui";
import { motion } from "framer-motion";
import { Diamond, ArrowRight } from "lucide-react";

export const SystemCTA = () => {
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
    <section className="py-32 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-20">
          <div className="flex-1">
            <h2 className="section-title mb-8 tracking-tighter">
              {splitText("A system built for")} <br />
              <span className="text-zinc-500 dark:text-zinc-400 accent-italic">{splitText("sustainable")}</span> {splitText("growth.")}
            </h2>
            <p className="text-xl text-zinc-500 mb-10 leading-relaxed max-w-xl font-medium">
              We don't just fix websites; we install a scalable marketing infrastructure that grows as you do. Our methodology is refined, repeatable, and results-oriented.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Read about our process
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
            className="w-48 h-48 md:w-64 md:h-64 border-4 border-black dark:border-white rounded-[48px] flex items-center justify-center relative group will-change-transform"
          >
            <Diamond className="w-24 h-24 md:w-32 md:h-32 group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 border border-zinc-200 dark:border-zinc-800 rounded-[48px] translate-x-4 translate-y-4 -z-10 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-700" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
