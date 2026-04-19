'use client'
import React from 'react'
import { motion } from 'framer-motion'

const steps = [
  { id: '01', title: 'AUDIT', desc: 'Deep technical analysis of your current stack and performance bottlenecks.' },
  { id: '02', title: 'STRATEGY', desc: 'Defining the editorial and technical roadmap for your transformation.' },
  { id: '03', title: 'DESIGN', desc: 'Crafting the high-fidelity visual system and user experience architecture.' },
  { id: '04', title: 'ENGINEERING', desc: 'Performance-first development using modern standards and optimal logic.' },
  { id: '05', title: 'LAUNCH', desc: 'Rigorous testing followed by seamless deployment and monitoring.' },
]

export function Process() {
  return (
    <section id="process" style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#fff', borderTop: '2px solid #000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '4rem' }}>
        <div>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1, position: 'sticky', top: '120px' }}>
            Process Is The <br /> Key To <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Success</i>
          </h2>
        </div>

        <div>
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ 
                padding: '3rem 0', 
                borderBottom: '1px solid #000',
                display: 'flex',
                gap: '4rem'
              }}
            >
              <span className="font-syne" style={{ fontSize: '1rem', fontWeight: 800, color: '#bbb' }}>{step.id}</span>
              <div>
                <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{step.title}</h3>
                <p className="font-syne" style={{ fontSize: '1.1rem', color: '#666', maxWidth: '40ch' }}>{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
