'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const steps = [
  { id: '01', title: 'AUDIT', desc: 'Deep technical analysis of your current stack and performance bottlenecks.' },
  { id: '02', title: 'STRATEGY', desc: 'Defining the editorial and technical roadmap for your transformation.' },
  { id: '03', title: 'DESIGN', desc: 'Crafting the high-fidelity visual system and user experience architecture.' },
  { id: '04', title: 'ENGINEERING', desc: 'Performance-first development using modern standards and optimal logic.' },
  { id: '05', title: 'LAUNCH', desc: 'Rigorous testing followed by seamless deployment and monitoring.' },
]

export function Process() {
  const targetRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
  })

  // Horizontal scroll on desktop
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"])

  return (
    <>
    <section id="process" ref={targetRef} className="process-section" style={{ background: '#000', color: '#fff' }}>
      <div className="process-sticky">
        <div style={{ padding: '4rem 6rem' }}>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
            Our <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Method</i>
          </h2>
        </div>

        <motion.div 
          style={{ x }}
          className="process-track"
        >
          {steps.map((step, i) => (
            <div 
              key={i}
              className="process-card"
              style={{ 
                minWidth: '500px',
                padding: '4rem',
                borderRight: '1px solid rgba(255,255,255,0.1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '400px'
              }}
            >
              <span className="font-syne" style={{ fontSize: '5rem', fontWeight: 900, opacity: 0.1, lineHeight: 1 }}>{step.id}</span>
              <div>
                <h3 className="font-syne" style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '1.5rem', letterSpacing: '0.1rem' }}>{step.title}</h3>
                <p className="font-syne" style={{ fontSize: '1.1rem', opacity: 0.6, maxWidth: '35ch', lineHeight: 1.6 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Mobile fallback handled via CSS */}
    <style dangerouslySetInnerHTML={{__html: `
      .process-section {
        position: relative;
        height: 300vh;
      }
      .process-sticky {
        position: sticky;
        top: 0;
        height: 100vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      .process-track {
        display: flex;
        padding-left: 6rem;
      }
      @media (max-width: 1024px) {
        .process-section {
          height: auto !important;
          padding: 6rem 2rem;
        }
        .process-sticky {
          position: relative !important;
          height: auto !important;
          display: block !important;
        }
        .process-track {
          display: flex !important;
          flex-direction: column !important;
          transform: none !important;
          padding-left: 0 !important;
        }
        .process-card {
          min-width: 100% !important;
          height: auto !important;
          border-right: none !important;
          border-bottom: 1px solid rgba(255,255,255,0.1) !important;
          padding: 4rem 0 !important;
        }
      }
    `}} />
    </>
  )
}

