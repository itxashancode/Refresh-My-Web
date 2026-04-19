'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'PRISM ENGINE',
    cat: 'UI/UX SYSTEM',
    img: '/project1.png'
  },
  {
    title: 'KINETIC DASH',
    cat: 'DASHBOARD ARCHITECTURE',
    img: '/project2.png'
  }
]

export function Showcase() {
  return (
    <section id="showcase" style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem' }}>
        <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
          Selected <br /> <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Artifacts</i>
        </h2>
        <p className="font-syne" style={{ fontSize: '1rem', color: '#666', maxWidth: '30ch', textAlign: 'right' }}>
          A curated collection of digital experiences designed to endure.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem' }}>
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ cursor: 'pointer' }}
          >
            <div style={{ 
              aspectRatio: '16/10', 
              background: '#f5f5f5', 
              overflow: 'hidden',
              border: '1px solid #000',
              marginBottom: '1.5rem',
              position: 'relative'
            }}>
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={p.img} 
                alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(1)' }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <p className="font-syne" style={{ fontSize: '0.65rem', fontWeight: 800, color: '#888', letterSpacing: '0.2em' }}>{p.cat}</p>
                <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800 }}>{p.title}</h3>
              </div>
              <div style={{ width: '40px', height: '40px', border: '1px solid #000', display: 'flex', alignItems: 'center', justifySelf: 'center', borderRadius: '50%', justifyContent: 'center' }}>
                <ArrowUpRight size={18} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
