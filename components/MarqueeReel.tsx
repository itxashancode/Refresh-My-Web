'use client'
import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'PRISM AI', 'SYNAPSE', 'KINETIC', 'ORBIT', 'NEXUS', 'LEVEL', 'CORE', 'PRISM AI', 'SYNAPSE', 'KINETIC'
]

export function MarqueeReel() {
  return (
    <div style={{ 
      background: '#fff', 
      borderTop: '1px solid #000', 
      borderBottom: '1px solid #000', 
      padding: '2rem 0',
      overflow: 'hidden',
      display: 'flex'
    }}>
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '8rem', alignItems: 'center', whiteSpace: 'nowrap' }}
      >
        {logos.map((logo, i) => (
          <span 
            key={i} 
            className="font-syne" 
            style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.2, letterSpacing: '0.2em' }}
          >
            {logo}
          </span>
        ))}
        {logos.map((logo, i) => (
          <span 
            key={i + 100} 
            className="font-syne" 
            style={{ fontSize: '1.5rem', fontWeight: 900, opacity: 0.2, letterSpacing: '0.2em' }}
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  )
}
