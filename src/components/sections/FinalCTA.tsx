/* g:\RefreshMyWeb\src\components\sections\FinalCTA.tsx */
"use client";

import React from "react";
import { Container, Button } from "@/components/ui";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, MessageSquare, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const FinalCTA = () => {
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.2em]">
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  return (
    <section className="py-40 bg-white dark:bg-black text-black dark:text-white relative overflow-hidden transition-colors">
      {/* Static background — no infinite animation */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.04),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.04),transparent_60%)] pointer-events-none" />
      
      <Container className="relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-medium uppercase tracking-[0.2em] text-zinc-500 mb-6"
          >
            Your digital partner
          </motion.div>
          
          <h2 className="section-title mb-12 tracking-tighter">
            {splitText("Ready to build")} <br />
            <span className="text-zinc-500">{splitText("something together?")}</span>
          </h2>
          
          <p className="text-xl text-zinc-400 mb-16 max-w-2xl mx-auto leading-relaxed">
            Your competitors are already upgrading. Don&apos;t let your website be the reason you lose your next enterprise client.
          </p>
          
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book">
                <Button
                  variant="primary"
                  size="lg"
                  className="group font-semibold"
                >
                  Start your refresh
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                </Button>
              </Link>
              
              <Button variant="secondary" size="lg" className="group font-medium" onClick={() => document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })}>
                <MessageSquare className="w-5 h-5 mr-2 text-zinc-500 group-hover:text-black dark:group-hover:text-white transition-colors flex-shrink-0" />
                Chat with an expert
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500 tracking-widest font-medium uppercase">
              <ShieldCheck className="w-3 h-3 flex-shrink-0" />
              <span className="whitespace-nowrap">No contracts. No upfront risk. Results or we work free.</span>
            </div>
          </div>
        </div>
      </Container>

      {/* Static decorative rings */}
      <div className="absolute top-20 -left-20 w-64 h-64 border border-zinc-800 rounded-full opacity-20 pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-zinc-800 rounded-full opacity-20 pointer-events-none" />
    </section>
  );
};
