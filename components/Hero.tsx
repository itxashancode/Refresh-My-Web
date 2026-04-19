'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { MagneticButton } from './ui/MagneticButton'

export function Hero() {
  return (
    <section 
      id="home" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        background: 'var(--paper)',
        borderBottom: '1px solid #000',
        position: 'relative',
        paddingTop: '80px' // Offset for navbar
      }}
    >
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)' }}>
        {/* Left Side: Content */}
        <div style={{ 
          padding: 'clamp(2rem, 5vw, 6rem)', 
          borderRight: '1px solid #000',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-syne" style={{ 
              fontSize: 'clamp(3rem, 8vw, 8rem)', 
              fontWeight: 800, 
              lineHeight: 0.9, 
              letterSpacing: '-0.04em',
              textTransform: 'uppercase',
              marginBottom: '3rem'
            }}>
              Crafting <br />
              Timeless <br />
              Digital <br />
              <i style={{ fontStyle: 'italic', fontWeight: 400 }}>Aura</i>
            </h1>
            
            <p className="font-syne" style={{ 
              fontSize: '1.25rem', 
              maxWidth: '45ch', 
              marginBottom: '4rem',
              color: 'var(--mist)'
            }}>
              We transform outdated websites into high-performing digital assets through minimalist engineering and editorial design. 
            </p>

            <div style={{ display: 'flex', gap: '2rem' }}>
              <MagneticButton href="#contact" className="hero-cta-main">
                <span className="font-syne" style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em' }}>START A PROJECT</span>
              </MagneticButton>
              <MagneticButton href="#showcase" className="hero-cta-secondary">
                <span className="font-syne" style={{ fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em' }}>VIEW WORK</span>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Image/Visual */}
        <div style={{ position: 'relative', background: '#f5f5f5', overflow: 'hidden' }}>
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            src="/hero.png" 
            alt="Studio"
            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }}
          />
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ 
        height: '80px', 
        borderTop: '1px solid #000', 
        display: 'flex', 
        alignItems: 'center', 
        padding: '0 clamp(1.5rem, 5vw, 6rem)',
        justifyContent: 'space-between'
      }}>
        <div className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em' }}>
          [ EST. 2024 ]
        </div>
        <div className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em' }}>
          SCROLL TO EXPLORE <ArrowDown size={12} style={{ marginLeft: '0.5rem' }} />
        </div>
      </div>

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
        @media (max-width: 1024px) {
          #home .grid-cols-2 { grid-template-columns: 1fr; }
          #home > div:first-child { grid-template-columns: 1fr; }
          #home > div:first-child > div:last-child { display: none; }
        }
      `}} />
    </section>
  )
}
