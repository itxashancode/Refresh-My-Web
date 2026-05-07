/* g:\RefreshMyWeb\src\components\sections\ProductShowcase.tsx */
"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { Layout, Smartphone, Globe, ShieldCheck, Activity, Target } from "lucide-react";

const CountUp = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (latest) => Math.floor(latest).toLocaleString());

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
};

export const ProductShowcase = () => {
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
    <section id="solutions" className="py-40 bg-zinc-50 dark:bg-zinc-950 overflow-hidden">
      <Container>
        <div className="flex flex-col items-center text-center mb-24">
          <h2 className="section-title text-black dark:text-white mb-8 tracking-tighter">
            {splitText("Memorable experiences,")} <br />
            <span className="accent-italic text-zinc-500">{splitText("built with care.")}</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl font-medium leading-relaxed">
            We don't just build websites. We build competitive advantages. A collaboration focused on measurable impact.
          </p>
        </div>

        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.215, 0.61, 0.355, 1] }}
          className="relative max-w-5xl mx-auto will-change-transform"
        >
          {/* Custom Interface Visual (No Images) */}
          <div className="bg-white dark:bg-black rounded-[48px] border border-zinc-200 dark:border-zinc-800 p-8 md:p-16 shadow-3xl relative overflow-hidden">
             <div className="grid grid-cols-12 gap-12">
                <div className="col-span-12 lg:col-span-7 space-y-10">
                   <div className="space-y-4">
                      <div className="h-4 w-24 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                      <div className="h-16 w-full bg-zinc-50 dark:bg-zinc-900 rounded-3xl" />
                   </div>
                   
                   <div className="grid grid-cols-2 gap-6">
                      <div className="p-8 rounded-[32px] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                         <Activity className="w-8 h-8 mb-6 text-zinc-400" />
                         <div className="text-4xl font-mono font-bold tracking-tighter mb-2">99.9%</div>
                         <div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">Core Performance</div>
                      </div>
                      <div className="p-8 rounded-[32px] bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-100 dark:border-zinc-800">
                         <Target className="w-8 h-8 mb-6 text-zinc-400" />
                         <div className="text-4xl font-mono font-bold tracking-tighter mb-2">82%</div>
                         <div className="text-[10px] font-medium uppercase tracking-widest text-zinc-400">SEO Score Increase</div>
                      </div>
                   </div>

                   <div className="flex gap-4 pt-4">
                      {[Layout, Smartphone, Globe].map((Icon, i) => (
                        <div key={i} className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-900 flex items-center justify-center border border-zinc-200 dark:border-zinc-800">
                          <Icon className="w-6 h-6 text-zinc-400" />
                        </div>
                      ))}
                   </div>
                </div>

                <div className="col-span-12 lg:col-span-5 space-y-6">
                   <div className="p-10 bg-black dark:bg-white text-white dark:text-black rounded-[48px] space-y-6 relative overflow-hidden group">
                      <ShieldCheck className="w-12 h-12 mb-2" />
                      <div className="space-y-1">
                        <div className="text-5xl font-mono font-bold tracking-tighter">
                          <CountUp value={89} suffix=".2%" />
                        </div>
                        <div className="text-xs font-medium uppercase tracking-widest opacity-60">Conversion Lift</div>
                      </div>
                      <div className="pt-4 space-y-3">
                         <div className="h-1.5 w-full bg-white/10 dark:bg-black/10 rounded-full overflow-hidden">
                            <motion.div initial={{ width: 0 }} whileInView={{ width: "89%" }} transition={{ duration: 2 }} className="h-full bg-white dark:bg-black" />
                         </div>
                         <div className="flex justify-between text-[10px] font-medium uppercase opacity-40">
                            <span>Legacy</span>
                            <span>Refresh</span>
                         </div>
                      </div>
                   </div>
                   
                   <div className="p-10 bg-zinc-100 dark:bg-zinc-900 rounded-[48px] space-y-4 border border-zinc-200 dark:border-zinc-800">
                      <div className="text-4xl font-mono font-bold tracking-tighter">
                        <CountUp value={42} suffix="K" />
                      </div>
                      <div className="text-xs font-medium uppercase tracking-widest text-zinc-400">Total Leads Generated</div>
                      <div className="flex -space-x-3 pt-2">
                         {[1,2,3,4].map((i) => (
                           <div key={i} className="w-10 h-10 rounded-full bg-zinc-200 dark:bg-zinc-800 border-2 border-white dark:border-black" />
                         ))}
                         <div className="w-10 h-10 rounded-full bg-black dark:bg-white border-2 border-white dark:border-black flex items-center justify-center text-[10px] font-bold text-white dark:text-black">
                           +
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-zinc-200/30 dark:bg-white/5 blur-[120px]" />
        </motion.div>
      </Container>
    </section>
  );
};
