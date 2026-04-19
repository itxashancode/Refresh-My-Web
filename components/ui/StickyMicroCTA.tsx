'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Sparkles } from 'lucide-react'
import { MagneticButton } from './MagneticButton'

export function StickyMicroCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600 && !dismissed) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [dismissed])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 50, opacity: 0 }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            x: '-50%',
            zIndex: 9000,
            display: 'flex',
            alignItems: 'center',
            gap: '1.5rem',
            background: 'rgba(20, 20, 42, 0.8)',
            backdropFilter: 'blur(16px)',
            padding: '0.8rem 1.5rem',
            borderRadius: '40px',
            border: '1px solid var(--rim)',
            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <Sparkles size={16} color="var(--accent)" />
            <span className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--paper)', whiteSpace: 'nowrap' }}>
              Free Speed Audit — Limited Slots
            </span>
          </div>
          
          <div style={{ width: '1px', height: '20px', background: 'var(--rim)' }} />
          
          <MagneticButton href="#contact" power={0.3}>
            <span style={{ fontSize: '0.75rem', fontWeight: 800, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              CLAIM YOURS
            </span>
          </MagneticButton>
          
          <button 
            onClick={() => setDismissed(true)} 
            style={{ padding: '0.2rem', color: 'var(--smoke)', transition: 'color 0.2s' }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--paper)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--smoke)'}
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
