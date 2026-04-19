'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from './ui/MagneticButton'

export function StickyCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past the hero section (e.g. 100vh)
      if (window.scrollY > window.innerHeight * 0.8) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9995,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--charcoal)',
            border: '1px solid var(--rim)',
            borderRadius: '40px',
            padding: '0.5rem 0.5rem 0.5rem 1.5rem',
            boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
            gap: '2rem',
            width: 'calc(100% - 3rem)',
            maxWidth: '500px'
          }}
        >
          <div className="font-cormorant" style={{ fontSize: '1.2rem', fontWeight: 500, color: 'var(--paper)', whiteSpace: 'nowrap' }}>
            Refresh My Web
          </div>
          
          <MagneticButton href="#contact" className="sticky-cta-btn" power={0.2}>
            <span style={{ 
              background: 'var(--paper)', 
              color: 'var(--ink)', 
              padding: '0.6rem 1.2rem', 
              borderRadius: '30px', 
              fontSize: '0.85rem',
              fontFamily: 'var(--font-syne)',
              fontWeight: 600,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              whiteSpace: 'nowrap'
            }}>
              Start your project &rarr;
            </span>
          </MagneticButton>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
