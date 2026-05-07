/* g:\RefreshMyWeb\src\components\sections\Services.tsx */
"use client";

import React from "react";
import { Container } from "@/components/ui";
import { motion } from "framer-motion";
import { Palette, BarChart3, ShieldCheck, Sparkles, Code2 } from "lucide-react";

const services = [
  {
    title: "Authentic Storytelling",
    description: "We help you rediscover your identity and build a brand that resonates with the people who matter most.",
    icon: <Palette className="w-8 h-8" />,
  },
  {
    title: "Connection Engineering",
    description: "Turning viewers into your community with design that prioritizes human experience and trust.",
    icon: <Code2 className="w-8 h-8" />,
  },
  {
    title: "Strategic Refresh",
    description: "A thoughtful visual update that respects your legacy while preparing you for the future.",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    title: "Growing Together",
    description: "Sustainable SEO strategies that build long-term value for your business and your audience.",
    icon: <BarChart3 className="w-8 h-8" />,
  },
  {
    title: "Worry-Free Care",
    description: "A reliable partnership that ensures your digital home stays secure, fast, and healthy.",
    icon: <ShieldCheck className="w-8 h-8" />,
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-black">
      <Container>
        <motion.div 
          className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
              }}
              className="text-center group will-change-transform"
            >
              <div className="w-20 h-20 mx-auto rounded-3xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-zinc-500 leading-relaxed max-w-xs mx-auto">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};
