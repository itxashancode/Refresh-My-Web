/* g:\RefreshMyWeb\src\app\book\page.tsx */
"use client";

import React, { useState, useEffect } from "react";
import Script from "next/script";
import { Container } from "@/components/ui";
import { SparklesText } from "@/components/ui/sparkles-text";
import { Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function BookPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Fallback timeout to hide loader if Calendly script takes too long
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors pt-48 pb-20">
      <Container>
        {/* Simple Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 mb-2">
            <Sparkles className="w-3 h-3" />
            <span>Direct Strategy Session</span>
          </div>
          <h1 className="hero-title mb-4">
            Secure your <SparklesText 
              text="refresh." 
              className="hero-title inline-block text-zinc-500" 
              colors={{ first: "#A5A5A5", second: "#FFFFFF" }} 
            />
          </h1>
        </div>

        {/* Calendly Widget Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
          className="w-full max-w-4xl mx-auto bg-zinc-50 dark:bg-zinc-900/50 rounded-[32px] border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden min-h-[700px] relative"
        >
          {/* Premium Loading Overlay */}
          <AnimatePresence>
            {!isLoaded && (
              <motion.div 
                exit={{ opacity: 0 }}
                className="absolute inset-0 z-20 bg-zinc-50 dark:bg-zinc-900 flex flex-col items-center justify-center gap-4"
              >
                <Loader2 className="w-8 h-8 text-zinc-400 animate-spin" />
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-zinc-500">Initializing calendar...</span>
              </motion.div>
            )}
          </AnimatePresence>

          <div 
            className="calendly-inline-widget relative z-10" 
            data-url="https://calendly.com/refreshmyweb/30min" 
            style={{ minWidth: '320px', height: '700px' }} 
          />
          
          <Script 
            type="text/javascript" 
            src="https://assets.calendly.com/assets/external/widget.js" 
            strategy="afterInteractive"
            onLoad={() => {
              // Slight delay to ensure the iframe has started rendering
              setTimeout(() => setIsLoaded(true), 800);
            }}
          />
        </motion.div>

        {/* Footer Disclaimer */}
        <div className="mt-12 text-center text-[11px] font-medium uppercase tracking-widest text-zinc-500">
          Selected slots available for June 2024. No strings attached.
        </div>
      </Container>
    </main>
  );
}
