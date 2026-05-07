/* g:\RefreshMyWeb\src\components\sections\GrowthSupport.tsx */
"use client";

import React from "react";
import { Container, Button } from "@/components/ui";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const supportItems = [
  "Dedicated Account Manager",
  "24/7 Server Monitoring",
  "Weekly Performance Audits",
  "Quarterly Strategic Rebranding",
  "Instant Security Patches",
  "Unlimited Minor Updates"
];

export const GrowthSupport = () => {
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
    <section className="py-32 bg-white dark:bg-black">
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="max-w-xl">
            <h2 className="section-title font-black leading-[0.9] mb-8 tracking-tighter">
              {splitText("WE DON'T")} <br />
              <span className="text-zinc-400 dark:text-zinc-300">{splitText("ABANDON YOU.")}</span>
            </h2>
            <p className="text-xl text-zinc-500 mb-12 font-medium leading-relaxed">
              Launch day is just Day 1. Our "Growth Support" model ensures your site evolves with your business, staying elite every single month.
            </p>
            <Button 
              variant="outline" 
              size="lg" 
              className="group"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn about maintenance
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Button>
          </div>

          <motion.div 
            className="grid sm:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {supportItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { y: 20, opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
                }}
                className="p-6 rounded-2xl bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800 flex items-center gap-4 group hover:bg-white dark:hover:bg-zinc-900 transition-colors will-change-transform border-trace"
              >
                <CheckCircle2 className="w-6 h-6 text-zinc-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                <span className="font-bold text-sm tracking-tight">{item}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
