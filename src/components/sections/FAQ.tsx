/* g:\RefreshMyWeb\src\components\sections\FAQ.tsx */
"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How much does it cost?",
    a: "Every project is scoped to your specific goals. We work with growth-stage businesses and established brands — pricing reflects the scope, speed, and results expected. Book a call and we'll give you a straight answer."
  },
  {
    q: "How long does a project take?",
    a: "Most projects are completed in 4–8 weeks from strategy to launch. Rush timelines are available. We don't drag projects — speed is part of the product."
  },
  {
    q: "Do you only do design or development too?",
    a: "Both. We are a full-stack agency — strategy, design, and engineering under one roof. You get one team, one point of contact, one outcome."
  },
  {
    q: "What if I already have a site and just need improvements?",
    a: "We do full rebuilds and surgical enhancements. If your foundation is solid, we improve it. If it's not, we'll tell you directly."
  },
  {
    q: "Do you work with businesses outside my industry?",
    a: "Yes. Our process is built for results, not industry templates. We've worked across e-commerce, services, SaaS, and professional services."
  },
  {
    q: "What happens after the site launches?",
    a: "You're not abandoned at launch. We offer ongoing maintenance, performance monitoring, and growth support. Most clients stay with us long-term."
  },
  {
    q: "Why only 4 clients per month?",
    a: "Quality over volume. Every client gets our full attention. We cap intake deliberately so results never slip."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

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
    <section id="faq" className="py-40 bg-white dark:bg-black transition-colors min-h-screen flex flex-col justify-center">
      <Container>
        <div className="text-center mb-24">
          <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-mono font-medium uppercase tracking-widest mb-6 text-zinc-500">
            Clarification
          </div>
          <h2 className="section-title text-black dark:text-white mb-8 tracking-tighter">
            {splitText("Common questions.")}
          </h2>
        </div>

        <div className="max-w-[780px] mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="border-b border-zinc-200 dark:border-white/10 overflow-hidden will-change-transform"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full py-8 flex justify-between items-center text-left group"
              >
                <span className="text-lg md:text-xl font-bold text-black dark:text-white tracking-tight">{faq.q}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="w-8 h-8 rounded-full border border-zinc-200 dark:border-white/20 flex items-center justify-center group-hover:border-black dark:group-hover:border-white transition-colors"
                >
                  <Plus className="w-4 h-4 text-black dark:text-white" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.215, 0.61, 0.355, 1] }}
                  >
                    <div className="pb-8 text-zinc-600 dark:text-white/60 text-base md:text-lg leading-relaxed font-medium">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
