'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    title: 'PRISM ENGINE',
    cat: 'UI/UX SYSTEM',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    size: 'tall'
  },
  {
    title: 'KINETIC DASH',
    cat: 'DASHBOARD ARCHITECTURE',
    img: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?auto=format&fit=crop&q=80&w=800',
    size: 'short'
  },
  {
    title: 'NEURAL CORE',
    cat: 'BRAND IDENTITY',
    img: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800',
    size: 'short'
  },
  {
    title: 'AURA STUDIO',
    cat: 'WEBSITE CRAFT',
    img: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&q=80&w=800',
    size: 'tall'
  }
]

export function Showcase() {
  return (
    <section id="showcase" style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#fff' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem' }}>
        <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
          Selected <br /> <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Artifacts</i>
        </h2>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'right' }}
        >
          <p className="font-syne" style={{ fontSize: '1.25rem', color: '#000', maxWidth: '30ch', fontWeight: 500 }}>
            A curated collection of digital experiences designed to endure.
          </p>
        </motion.div>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(2, 1fr)', 
        gap: '4rem',
        alignItems: 'start'
      }}>
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, delay: (i % 2) * 0.2, ease: [0.33, 1, 0.68, 1] }}
            style={{ 
              cursor: 'pointer',
              marginTop: i === 1 || i === 3 ? '10rem' : '0'
            }}
          >
            <div 
              className="project-card"
              style={{ 
                aspectRatio: p.size === 'tall' ? '4/5' : '1/1', 
                background: '#000', 
                overflow: 'hidden',
                marginBottom: '2rem',
                position: 'relative'
              }}
            >
              <motion.img 
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                src={p.img} 
                alt={p.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7, filter: 'grayscale(1)' }}
              />
              <div className="project-overlay" style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                opacity: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '3rem',
                transition: 'opacity 0.4s'
              }}>
                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <div style={{ width: '60px', height: '60px', border: '1px solid #fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' }}>
                    <ArrowUpRight size={32} />
                  </div>
                </div>
                <div>
                  <p className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 800, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.2rem', textTransform: 'uppercase', marginBottom: '1rem' }}>{p.cat}</p>
                  <h3 className="font-syne" style={{ fontSize: '2.5rem', fontWeight: 800, color: '#fff' }}>{p.title}</h3>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .project-card:hover .project-overlay {
          opacity: 1 !important;
        }
        @media (max-width: 1024px) {
          #showcase > div:last-child { 
            grid-template-columns: 1fr; 
            gap: 4rem;
          }
          #showcase > div:last-child > div {
            margin-top: 0 !important;
          }
        }
      `}} />
    </section>
  )
}

