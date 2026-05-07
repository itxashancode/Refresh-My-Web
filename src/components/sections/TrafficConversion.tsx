/* g:\RefreshMyWeb\src\components\sections\TrafficConversion.tsx */
"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

const CountUp = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 1800, bounce: 0 });
  const display = useTransform(spring, (latest) => latest.toFixed(2));

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

export const TrafficConversion = () => {
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
    <section id="solutions" className="py-32 bg-white dark:bg-black overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1">
            <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-[10px] font-medium uppercase tracking-widest mb-8">
              Conversion strategy
            </div>
            <h2 className="section-title mb-8 tracking-tighter">
              {splitText("Turn your traffic")} <br />
              <span className="text-zinc-500">{splitText("into results.")}</span>
            </h2>
            <p className="text-xl text-zinc-500 leading-relaxed max-w-xl font-medium">
              Most websites have enough traffic but fail to convert. We implement conversion-centered design (CCD) principles to make sure your visitors take the actions you want.
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
              <div className="text-6xl font-mono font-bold mb-10 tracking-tighter">
                <CountUp value={10.41} suffix="%" />
              </div>
              <div className="space-y-8">
                {[
                  { label: "Refresh Design", color: "bg-black dark:bg-white", width: "100%" },
                  { label: "Previous Site", color: "bg-zinc-300 dark:bg-zinc-700", width: "40%" },
                  { label: "Industry Avg", color: "bg-zinc-200 dark:bg-zinc-800", width: "25%" }
                ].map((bar, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex justify-between text-[10px] font-medium uppercase tracking-widest text-zinc-400">
                      <span>{bar.label}</span>
                      <span className="text-zinc-500">{bar.width}</span>
                    </div>
                    <div className="h-2 w-full bg-zinc-100 dark:bg-zinc-900 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: bar.width }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: 0.5 + (i * 0.2), ease: [0.215, 0.61, 0.355, 1] }}
                        className={`h-full ${bar.color}`}
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
