'use client'
import React, { useState } from 'react'
import { motion } from 'framer-motion'

const logos = [
  'PRISM AI', 'SYNAPSE', 'KINETIC', 'ORBIT', 'NEXUS', 'LEVEL', 'CORE', 'VECTOR', 'QUANTUM', 'ZENITH'
]

export function MarqueeReel() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <div 
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      style={{ 
        background: '#fff', 
        borderTop: '1px solid #000', 
        borderBottom: '1px solid #000', 
        padding: '3rem 0',
        overflow: 'hidden',
        display: 'flex',
        cursor: 'pointer'
      }}
    >
      <motion.div 
        animate={{ x: isPaused ? undefined : [0, -2000] }}
        transition={{ 
          duration: 30, 
          repeat: Infinity, 
          ease: 'linear',
          ...(isPaused ? { duration: 0 } : {})
        }}
        style={{ display: 'flex', gap: '8rem', alignItems: 'center', whiteSpace: 'nowrap' }}
      >
        {/* Triple the array to ensure no gaps on large screens */}
        {[...logos, ...logos, ...logos].map((logo, i) => (
          <span 
            key={i} 
            className="font-syne" 
            style={{ 
              fontSize: '2rem', 
              fontWeight: 900, 
              opacity: 0.15, 
              letterSpacing: '0.3em',
              transition: 'opacity 0.3s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.15')}
          >
            {logo}
          </span>
        ))}
      </motion.div>
    </div>
  )
}

