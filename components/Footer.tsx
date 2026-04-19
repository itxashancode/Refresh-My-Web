'use client'
import React from 'react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const cols = [
    {
      label: 'BRAND',
      content: (
        <div>
          <h4 className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '1.5rem' }}>
            Refresh<i>my</i>web
          </h4>
          <p className="font-syne" style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.7, maxWidth: '25ch' }}>
            Transforming outdated digital presences through editorial design logic.
          </p>
        </div>
      )
    },
    {
      label: 'OFFICE',
      content: (
        <div>
          <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>OFFICE</p>
          <p className="font-syne" style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.5rem' }}>Colombo, LK</p>
          <p className="font-syne" style={{ fontSize: '1rem', fontWeight: 700 }}>Remote, Global</p>
        </div>
      )
    },
    {
      label: 'CONTACT',
      content: (
        <div>
          <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>SAY HELLO</p>
          <a href="mailto:hello@refreshmyweb.com" className="font-syne sweep-underline" style={{ fontSize: '1rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>hello@refreshmyweb.com</a>
          <a href="#contact" className="font-syne sweep-underline" style={{ fontSize: '1rem', fontWeight: 700, display: 'block' }}>Strategy Call →</a>
        </div>
      )
    },
    {
      label: 'LEGAL',
      content: (
        <div>
          <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>LEGAL</p>
          <a href="#" className="font-syne sweep-underline" style={{ fontSize: '0.9rem', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>Privacy Policy</a>
          <a href="#" className="font-syne sweep-underline" style={{ fontSize: '0.9rem', fontWeight: 700, display: 'block' }}>Cookie Policy</a>
        </div>
      )
    }
  ]

  return (
    <footer style={{ background: '#fff', borderTop: '2px solid #000', padding: '6rem clamp(1.5rem, 5vw, 6rem) 4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
        {cols.map((col, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.08, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true }}
          >
            {col.content}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        style={{ borderTop: '1px solid #eee', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}
      >
        <p className="font-syne" style={{ fontSize: '0.8rem', color: '#999' }}>© {currentYear} REFRESHMYWEB — ALL RIGHTS RESERVED</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="#" className="font-syne sweep-underline" style={{ fontSize: '0.8rem', fontWeight: 800 }}>IG</a>
          <a href="#" className="font-syne sweep-underline" style={{ fontSize: '0.8rem', fontWeight: 800 }}>TW</a>
          <a href="#" className="font-syne sweep-underline" style={{ fontSize: '0.8rem', fontWeight: 800 }}>LI</a>
        </div>
      </motion.div>
    </footer>
  )
}

