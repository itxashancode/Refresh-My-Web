'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { MagneticButton } from './ui/MagneticButton'

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  const headline = "Crafting Timeless Digital Aura"
  const words = headline.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      }
    }
  }

  const charVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const }
    }
  }

  return (
    <section 
      id="home" 
      ref={containerRef}
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        background: 'var(--paper)',
        borderBottom: '1px solid #000',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)' }}>
        {/* Left Side: Content */}
        <div style={{ 
          padding: 'clamp(2rem, 5vw, 6rem)', 
          borderRight: '1px solid #000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="font-syne" style={{ 
              fontSize: 'clamp(3rem, 8vw, 8rem)', 
              fontWeight: 800, 
              lineHeight: 0.9, 
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              marginBottom: '3rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.2em'
            }}>
              {words.map((word, i) => (
                <span key={i} style={{ display: 'inline-flex', overflow: 'hidden' }}>
                  {word.split("").map((char, j) => (
                    <motion.span key={j} variants={charVariants} style={{ display: 'inline-block' }}>
                      {char}
                    </motion.span>
                  ))}
                  <span style={{ width: '0.2em' }}>&nbsp;</span>
                </span>
              ))}
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              className="font-syne" 
              style={{ 
                fontSize: '1.25rem', 
                maxWidth: '45ch', 
                marginBottom: '4rem',
                color: 'var(--mist)'
              }}
            >
              We transform outdated websites into high-performing digital assets through minimalist engineering and editorial design. 
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              style={{ display: 'flex', gap: '2rem' }}
            >
              <MagneticButton href="#contact" className="hero-cta-main">
                <span className="font-syne" style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em' }}>START A PROJECT</span>
              </MagneticButton>
              <MagneticButton href="#showcase" className="hero-cta-secondary">
                <span className="font-syne" style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em' }}>VIEW WORK</span>
              </MagneticButton>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: Image/Visual */}
        <div style={{ position: 'relative', background: '#f5f5f5', overflow: 'hidden' }}>
          <motion.div style={{ y, width: '100%', height: '120%', position: 'absolute', top: '-10%' }}>
            <motion.img 
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
              src="/hero.png" 
              alt="Studio"
              style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }}
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div 
        style={{ opacity }}
        className="hero-bottom-bar"
      >
        <div className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em' }}>
          [ EST. 2024 ]
        </div>
        <div className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em' }}>
          SCROLL TO EXPLORE <ArrowDown size={12} style={{ marginLeft: '0.5rem' }} />
        </div>
      </motion.div>

      <style dangerouslySetInnerHTML={{__html: `
        .hero-cta-main {
          background: #000;
          color: #fff;
          padding: 1.5rem 3rem;
          border-radius: 4px;
        }
        .hero-cta-secondary {
          background: transparent;
          color: #000;
          border: 1px solid #000;
          padding: 1.5rem 3rem;
          border-radius: 4px;
        }
        .hero-bottom-bar {
          height: 80px; 
          border-top: 1px solid #000; 
          display: flex; 
          alignItems: center; 
          padding: 0 clamp(1.5rem, 5vw, 6rem);
          justify-content: space-between;
          background: var(--paper);
          z-index: 5;
        }
        @media (max-width: 1024px) {
          #home { display: flex; flex-direction: column; }
          #home > div:first-child { grid-template-columns: 1fr; }
          #home > div:first-child > div:last-child { height: 400px; position: relative; }
          #home > div:first-child > div:last-child div { position: relative; height: 100%; top: 0; }
        }
      `}} />
    </section>
  )
}

