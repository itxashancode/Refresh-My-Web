/* g:\RefreshMyWeb\src\components\sections\Hero.tsx */
"use client";

import React from "react";
import { Container, Button } from "@/components/ui";
import { SparklesText } from "@/components/ui/sparkles-text";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code2, Palette, BarChart3, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  const splitText = (text: string) => {
    return text.split(" ").map((word, i) => (
      <span key={i} className="inline-block overflow-hidden pb-2 mr-[0.2em]">
        <motion.span
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.215, 0.61, 0.355, 1] }}
          className="inline-block"
        >
          {word}
        </motion.span>
      </span>
    ));
  };

  return (
    <>
      <section className="pt-48 pb-32 overflow-hidden">
        <Container className="relative">
          {/* Premium Floating Status Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden hidden xl:block">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[20%] right-0 bg-white/10 dark:bg-zinc-800/10 backdrop-blur-md p-3 px-5 rounded-full border border-zinc-200/20 dark:border-zinc-700/20 shadow-xl flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">99.9% Uptime Verified</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-[40%] -left-12 bg-white/10 dark:bg-zinc-800/10 backdrop-blur-md p-3 px-5 rounded-full border border-zinc-200/20 dark:border-zinc-700/20 shadow-xl flex items-center gap-3"
            >
              <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              <span className="text-[10px] font-black tracking-[0.2em] uppercase text-zinc-400">Elite UX Architecture</span>
            </motion.div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-20 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-sm font-medium mb-8"
            >
              <Sparkles className="w-4 h-4" />
              <span>We transform <span className="accent-italic px-1">&quot;Legacy&quot;</span> into <span className="accent-italic px-1">&quot;Leading&quot;</span></span>
            </motion.div>
            
            <h1 className="hero-title mb-8 text-black dark:text-white transition-colors duration-300">
              <span className="relative inline-flex items-center gap-3">
                <SparklesText 
                  text="Refresh" 
                  className="hero-title inline-block text-inherit" 
                  colors={{ first: "#A5A5A5", second: "#FFFFFF" }} 
                />
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="hidden md:block"
                >
                  <Code2 className="w-12 h-12 text-zinc-300 dark:text-zinc-700 opacity-50" />
                </motion.div>
              </span>
              <br className="hidden md:block" />
              <span>your web </span>
              <span className="bg-gradient-to-r from-zinc-400 to-zinc-800 bg-clip-text text-transparent italic accent-italic inline-flex items-center gap-4">
                for the modern age.
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="hidden md:block"
                >
                  <Palette className="w-12 h-12 text-zinc-400/30" />
                </motion.div>
              </span>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              We believe your online presence should be as authentic as your craft. We partner with you to rebuild, refresh, and maintain a space that truly resonates with your audience.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="flex flex-col items-center"
            >
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link href="/book">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group w-full sm:w-auto"
                  >
                    Start Your Refresh
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  See the Difference
                </Button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[11px] text-zinc-400 dark:text-zinc-500 tracking-widest font-medium uppercase">
                <ShieldCheck className="w-3 h-3 flex-shrink-0" />
                <span className="whitespace-nowrap">No contracts. No upfront risk. Results or we work free.</span>
              </div>
            </motion.div>
          </div>

          {/* Hero Visual — static, no infinite loop */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="aspect-[16/10] bg-zinc-50 dark:bg-zinc-950 rounded-[40px] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="absolute top-0 left-0 right-0 h-14 bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-6 gap-3 z-10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                  <div className="w-3 h-3 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                </div>
                <div className="ml-4 h-7 w-full max-w-md bg-zinc-100 dark:bg-zinc-800/50 rounded-lg flex items-center px-4 text-[11px] text-zinc-400 font-medium">
                  refreshmyweb.com/dashboard/analytics
                </div>
              </div>
              
              {/* Main Content Area */}
              <div className="pt-24 px-12 pb-12 h-full flex flex-col gap-8">
                <div className="flex justify-between items-start">
                   <div className="space-y-4 w-1/2">
                      <div className="h-12 w-3/4 bg-zinc-200 dark:bg-zinc-800 rounded-2xl" />
                      <div className="h-4 w-full bg-zinc-100 dark:bg-zinc-900 rounded-lg" />
                      <div className="h-4 w-2/3 bg-zinc-100 dark:bg-zinc-900 rounded-lg" />
                   </div>
                   <div className="flex gap-3">
                      <div className="w-10 h-10 rounded-xl bg-black dark:bg-white" />
                      <div className="w-10 h-10 rounded-xl border border-zinc-200 dark:border-zinc-800" />
                   </div>
                </div>

                <div className="grid grid-cols-3 gap-6 flex-1">
                   <div className="bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-100 dark:border-zinc-800 p-8 flex flex-col justify-between group/card hover:border-black dark:hover:border-white transition-colors duration-300">
                      <Palette className="w-8 h-8 text-zinc-300 group-hover/card:text-black dark:group-hover/card:text-white transition-colors" />
                      <div className="space-y-2">
                        <div className="h-2 w-12 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                        <div className="h-4 w-24 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                      </div>
                   </div>
                   <div className="bg-black dark:bg-white rounded-[32px] p-8 flex flex-col justify-between text-white dark:text-black">
                      <BarChart3 className="w-8 h-8 opacity-60" />
                      <div className="space-y-1">
                        <div className="text-sm font-bold opacity-60 uppercase tracking-tighter">Growth</div>
                        <div className="text-3xl font-mono font-bold">+142%</div>
                      </div>
                   </div>
                   <div className="bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-100 dark:border-zinc-800 p-8 flex flex-col justify-between">
                      <Code2 className="w-8 h-8 text-zinc-300" />
                      <div className="space-y-2">
                        <div className="h-2 w-16 bg-zinc-100 dark:bg-zinc-800 rounded-full" />
                        <div className="h-4 w-20 bg-zinc-200 dark:bg-zinc-700 rounded-full" />
                      </div>
                   </div>
                </div>
              </div>
              
              {/* Conversion Card — static, no float loop */}
              <div className="absolute top-32 right-12 w-56 p-6 bg-white dark:bg-zinc-900 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-2xl z-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-black dark:text-white" />
                  </div>
                  <div className="text-[10px] font-medium uppercase tracking-tighter text-zinc-400">Conversion Rate</div>
                </div>
                <div className="text-4xl font-mono font-bold tracking-tighter mb-4">+240%</div>
                <div className="space-y-1.5">
                   <div className="h-1.5 w-full bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="h-full bg-black dark:bg-white" 
                      />
                   </div>
                   <div className="flex justify-between text-[8px] font-medium uppercase tracking-tighter text-zinc-400">
                      <span>Before Refresh</span>
                      <span className="text-black dark:text-white">After</span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-zinc-200/20 dark:bg-white/5 blur-3xl -z-10" />
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-zinc-200/20 dark:bg-white/5 blur-3xl -z-10" />
          </motion.div>
        </Container>
      </section>

      {/* Marquee Strip — intentionally inverted for visual contrast */}
      <div className="py-6 bg-zinc-900 dark:bg-black text-zinc-100 overflow-hidden border-y border-zinc-800 relative z-20">
        <div className="marquee-track flex gap-20 items-center">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-2xl font-bold tracking-tighter uppercase flex-shrink-0">REBRAND</span>
              <span className="w-2 h-2 rounded-full bg-white opacity-20 flex-shrink-0" />
              <span className="text-2xl font-bold tracking-tighter uppercase flex-shrink-0">REBUILD</span>
              <span className="w-2 h-2 rounded-full bg-white opacity-20 flex-shrink-0" />
              <span className="text-2xl font-bold tracking-tighter uppercase flex-shrink-0">MAINTAIN</span>
              <span className="w-2 h-2 rounded-full bg-white opacity-20 flex-shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};
