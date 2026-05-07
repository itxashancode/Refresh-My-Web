/* g:\RefreshMyWeb\src\components\sections\FeatureGrid.tsx */
"use client";

import React from "react";
import { Container } from "@/components/ui";
import { motion } from "framer-motion";
import { Target, Zap, Layers, Command } from "lucide-react";

const features = [
  {
    icon: <Target className="w-8 h-8" />,
    title: "Surgical Rebranding",
    description: "We don't just change colors. We redefine your visual identity to match your market value."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Turbo Reconstruction",
    description: "Clean code, zero bloat, and lightning-fast performance that dominates search results."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Full Stack Growth",
    description: "We build the entire ecosystem, from landing pages to backend automation."
  },
  {
    icon: <Command className="w-8 h-8" />,
    title: "Eternal Maintenance",
    description: "Your site stays fresh, secure, and updated. We handle the tech; you handle the business."
  }
];

export const FeatureGrid = () => {
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
    <section id="services" className="py-32 bg-white dark:bg-black overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <h2 className="section-title mb-8 tracking-tighter">
              {splitText("How we")} <br />
              <span className="accent-italic text-zinc-500">{splitText("build.")}</span>
            </h2>
            <p className="text-xl text-zinc-500 font-medium leading-relaxed">
              Our process is rigorous, refined, and entirely human. No generic templates, no AI-generated fluff. Just elite engineering.
            </p>
          </div>
          <div className="text-sm font-medium text-zinc-400 uppercase tracking-[0.4em] pb-4">Our core capabilities</div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 gap-px bg-zinc-200 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 rounded-[40px] overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
              }}
              className="bg-white dark:bg-black p-12 hover:bg-zinc-50 dark:hover:bg-zinc-950 transition-colors group will-change-transform border-trace"
            >
              <div className="mb-8 p-4 bg-zinc-100 dark:bg-zinc-900 w-fit rounded-2xl group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-3xl font-bold mb-6 tracking-tight">{feature.title}</h3>
              <p className="text-xl text-zinc-500 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
