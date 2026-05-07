/* g:\RefreshMyWeb\src\components\sections\StatsBar.tsx */
"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui";
import { motion, useSpring, useTransform, useInView } from "framer-motion";

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

const stats = [
  { value: 50, suffix: "+", label: "Elite Projects" },
  { value: 7, suffix: ".5M+", label: "Revenue Generated" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
  { value: 24, suffix: "h", label: "Response Time" },
];

export const StatsBar = () => {

  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950 border-y border-zinc-200 dark:border-zinc-800">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="text-center group"
            >
              <div className="text-4xl md:text-5xl font-mono font-bold text-black dark:text-white mb-4 tracking-tighter">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-zinc-500 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
