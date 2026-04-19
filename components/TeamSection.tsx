'use client'
import React from 'react'
import { motion } from 'framer-motion'

const members = [
  { id: 1, role: 'Design' }, { id: 2, role: 'Dev' }, { id: 3, role: 'Audit' }, { id: 4, role: 'Brand' },
  { id: 5, role: 'Motion' }, { id: 6, role: 'Strategy' }, { id: 7, role: 'Type' }, { id: 8, role: 'UX' },
  { id: 9, role: 'Audit' }, { id: 10, role: 'Dev' }, { id: 11, role: 'Global' }, { id: 12, role: 'Clean' },
  { id: 13, role: 'Core' }, { id: 14, role: 'System' }, { id: 15, role: 'Art' }, { id: 16, role: 'Grid' },
]

export function TeamSection() {
  return (
    <section style={{ background: '#000', color: '#fff', padding: '8rem 0' }}>
      <div style={{ padding: '0 clamp(1.5rem, 5vw, 6rem)', marginBottom: '4rem' }}>
        <h2 className="font-syne" style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', fontWeight: 800, textTransform: 'uppercase' }}>
          OUR TEAM <br /> <span style={{ opacity: 0.3 }}>OUR FAMILY</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '1px', background: '#333', borderTop: '1px solid #333', borderBottom: '1px solid #333' }}>
        {members.map((m) => (
          <div key={m.id} style={{ position: 'relative', aspectRatio: '1/1', background: '#000', overflow: 'hidden' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: m.id * 0.05 }}
              style={{ width: '100%', height: '100%', border: '1px solid #222' }}
            >
              {/* Using a placeholder-like grayscale vibe since real headshot URLs aren't here, 
                  but I'll use a grayscale filter on whatever content would be here. */}
              <div style={{ width: '100%', height: '100%', background: `linear-gradient(45deg, #111, #222)`, display: 'flex', alignItems: 'flex-end', padding: '0.5rem' }}>
                 <span className="font-syne" style={{ fontSize: '0.5rem', fontWeight: 800, opacity: 0.5 }}>{m.role}</span>
              </div>
            </motion.div>
          </div>
        ))}
        {/* Row 2: Same but 8 more */}
        {members.map((m) => (
          <div key={m.id + 100} style={{ position: 'relative', aspectRatio: '1/1', background: '#000', overflow: 'hidden' }}>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.7 }}
              transition={{ duration: 1, delay: m.id * 0.05 }}
              style={{ width: '100%', height: '100%', border: '1px solid #222' }}
            >
              <div style={{ width: '100%', height: '100%', background: `linear-gradient(-45deg, #111, #222)`, display: 'flex', alignItems: 'flex-end', padding: '0.5rem' }}>
                 <span className="font-syne" style={{ fontSize: '0.5rem', fontWeight: 800, opacity: 0.5 }}>{m.role}</span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  )
}
