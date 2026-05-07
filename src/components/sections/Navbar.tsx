/* g:\RefreshMyWeb\src\components\sections\Navbar.tsx */
"use client";

import React, { useState, useEffect } from "react";
import { Container, Button } from "@/components/ui";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/#services" },
    { name: "Solutions", href: "/#solutions" },
    { name: "Plans", href: "/#pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <div className="fixed top-4 left-0 right-0 z-50 px-4 md:px-8">
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
        className={`max-w-6xl mx-auto h-16 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-full border border-zinc-200 dark:border-zinc-800 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_-20px_rgba(255,255,255,0.05)] flex items-center px-6 md:px-8 justify-between relative overflow-visible transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        {/* Left Side Links - Desktop */}
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href} 
              className="hover:text-black dark:hover:text-white transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-full h-px bg-black dark:bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-right group-hover:origin-left duration-300" />
            </a>
          ))}
        </div>

        {/* Centered Logo */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-8 h-8 overflow-hidden rounded-lg bg-white">
              <img 
                src="/logo.png" 
                alt="RefreshMyWeb Logo" 
                className="w-full h-full object-cover dark:invert transition-all duration-300"
              />
            </div>
            <span className="text-lg font-bold tracking-tighter text-black dark:text-white uppercase italic hidden sm:inline-block">
              RefreshMyWeb
            </span>
          </Link>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-2 md:gap-4">
          <AnimatedThemeToggler
            variant="circle"
            duration={500}
            className="w-10 h-10 flex items-center justify-center rounded-full text-zinc-500 hover:text-black dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          />
          
          <div className="hidden sm:flex items-center gap-4">
            <Link href="/book">
              <Button 
                variant="primary"
                size="sm" 
                className="h-10 px-6 text-[11px] uppercase tracking-widest font-bold"
              >
                Book a call
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="absolute top-full left-0 right-0 mt-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-[32px] p-8 shadow-2xl lg:hidden flex flex-col gap-6 items-center"
            >
              {navLinks.map((item) => (
                  <a 
                    key={item.name}
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold uppercase tracking-widest text-zinc-500 hover:text-black dark:hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
              ))}
              <div className="w-full pt-4 border-t border-zinc-100 dark:border-zinc-800">
                <Link href="/book" className="w-full">
                  <Button 
                    variant="primary"
                    size="lg" 
                    className="w-full text-xs uppercase tracking-widest font-black"
                    onClick={() => setIsOpen(false)}
                  >
                    Book a Call
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
