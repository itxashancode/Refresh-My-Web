/* g:\RefreshMyWeb\src\components\sections\ProblemSection.tsx */
"use client";

import React, { useEffect } from "react";
import { Container } from "@/components/ui";
import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { AlertCircle, TrendingDown, Clock } from "lucide-react";

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

const problems = [
  {
    icon: <AlertCircle className="w-8 h-8 text-red-500" />,
    value: 60,
    suffix: "%",
    title: "High Bounce Rates",
    description: "Users leave within 3 seconds if your site looks dated or slow. You're losing them before you even speak."
  },
  {
    icon: <TrendingDown className="w-8 h-8 text-red-500" />,
    value: 50,
    suffix: "%",
    title: "Missed Conversions",
    description: "Poor UX and lack of rebranding kill trust. Half of your potential revenue is dying in your old checkout flow."
  },
  {
    icon: <Clock className="w-8 h-8 text-red-500" />,
    value: 12,
    suffix: "s",
    title: "Painful Load Times",
    description: "Modern users have zero patience. Every second of delay costs you 7% in potential sales."
  }
];

export const ProblemSection = () => {
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
    <section className="py-32 bg-white dark:bg-black overflow-hidden">
      <Container>
        <div className="max-w-3xl mb-24">
          <h2 className="section-title mb-8 tracking-tighter">
            A dated online presence <br />
            <span className="accent-italic text-zinc-500 flex items-center gap-4">
              has real costs.
              <motion.div
                animate={{ rotate: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <AlertCircle className="w-10 h-10 text-red-500/30" />
              </motion.div>
            </span>
          </h2>
          <p className="text-xl text-zinc-500 font-medium leading-relaxed">
            A "functional" site is no longer enough. If it's not elite, it's invisible.
          </p>
        </div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } }
          }}
        >
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { y: 40, opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } }
              }}
              className="p-10 rounded-[32px] bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-900 group hover:-translate-y-2 transition-all duration-500 will-change-transform border-trace"
            >
              <div className="text-sm font-bold tracking-tight text-zinc-500 mb-2 uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                Key Metric
              </div>
              <h3 className="text-xl font-bold mb-4">{problem.title}</h3>
              <p className="text-zinc-500 font-medium leading-relaxed mb-8">
                {problem.description}
              </p>
              
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tighter">
                  <CountUp value={problem.value} suffix={problem.suffix} />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      {/* Unique Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden lg:block">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] right-[10%] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-4 rounded-full border border-red-500/20 shadow-2xl flex items-center gap-3 px-6"
        >
          <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-red-500 rounded-full flex items-center justify-center">
              <span className="text-[10px] font-black text-red-500">!</span>
            </div>
          </div>
          <span className="font-black text-sm tracking-widest text-zinc-800 dark:text-zinc-200 uppercase">System Error</span>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] left-[5%] bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl p-8 rounded-[32px] border border-green-500/20 shadow-2xl flex flex-col items-center gap-3"
        >
          <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-green-500 rounded-full flex items-center justify-center">
              <div className="w-3 h-[2px] bg-green-500 rotate-45 absolute" />
              <div className="w-3 h-[2px] bg-green-500 -rotate-45 absolute" />
            </div>
          </div>
          <span className="font-black text-xs tracking-widest text-zinc-800 dark:text-zinc-200 uppercase">404: Lost Trust</span>
        </motion.div>

        <motion.div
          animate={{ 
            x: [0, 15, 0],
            y: [0, -15, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute top-[40%] left-[2%] bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm p-3 px-5 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-xl flex items-center gap-2"
        >
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
          <span className="font-bold text-[10px] tracking-widest text-zinc-500 uppercase italic">Legacy Code Detected</span>
        </motion.div>
      </div>
    </section>
  );
};
