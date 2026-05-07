/* g:\RefreshMyWeb\src\components\sections\Pricing.tsx */
"use client";

import React from "react";
import { Container, Button } from "@/components/ui";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Sparkles } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "The Visual Edge",
    description: "Instantly reclaim your brand's authority with a premium visual facelift.",
    features: [
      "Visual Rebranding",
      "Animation Refinement",
      "Core SEO Checkup",
      "Mobile Optimization",
      "14-Day Delivery"
    ]
  },
  {
    name: "The Market Leader",
    description: "The complete strategy to dominate your niche and lead your industry.",
    popular: true,
    features: [
      "100% ROI Guarantee",
      "Unlimited Custom Pages",
      "High-Performance Build",
      "Advanced SEO Strategy",
      "Conversion Engineering",
      "3-Month Growth Support"
    ]
  },
  {
    name: "The Safety Net",
    description: "Absolute peace of mind for brands that can't afford downtime.",
    features: [
      "Daily Backups & Security",
      "Uptime Monitoring",
      "Performance Optimization",
      "SEO Health Reports",
      "Priority Tech Support",
      "Minor Content Updates"
    ]
  }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-zinc-50 dark:bg-zinc-950 transition-colors overflow-hidden">
      <Container className="relative">
        <div className="text-center mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[12px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-6"
          >
            Strategic Plans
          </motion.div>
          <h2 className="section-title text-black dark:text-white mb-8 tracking-tighter">
            A partnership <span className="accent-italic text-zinc-500">for your future.</span>
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            No hidden fees. No complex contracts. Just elite digital products that pay for themselves.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-10 rounded-[40px] border flex flex-col h-full transition-all duration-300 ${
                plan.popular 
                  ? "bg-black border-transparent text-white shadow-2xl" 
                  : "bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-black dark:text-white"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-zinc-800 dark:bg-zinc-200 text-white dark:text-black px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
                  <Sparkles className="w-3 h-3" />
                  Most Popular
                </div>
              )}

              <div className="mb-10">
                <h3 className="text-sm font-black uppercase tracking-widest opacity-60 mb-6">{plan.name}</h3>
                <p className="text-sm opacity-70 leading-relaxed font-medium">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-4 mb-12 flex-1">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 flex-shrink-0 ${plan.popular ? "text-white/60" : "text-zinc-400"}`} />
                    <span className="text-sm font-bold tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

                <Link href="/book" className="w-full">
                  <Button
                    variant={plan.popular ? "secondary" : "primary"}
                    className={`w-full py-8 rounded-[24px] text-[11px] font-black uppercase tracking-widest transition-all duration-300 shadow-lg ${
                      plan.popular 
                        ? "bg-white text-black border-transparent hover:bg-zinc-100 hover:scale-[1.02]" 
                        : "hover:scale-[1.02]"
                    }`}
                  >
                    Book a Call
                  </Button>
                </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-center gap-2 text-[11px] text-zinc-500 tracking-widest font-bold uppercase">
          <ShieldCheck className="w-4 h-4 text-zinc-400" />
          <span>Results or we work free. Results measured by your growth.</span>
        </div>
      </Container>
    </section>
  );
};
