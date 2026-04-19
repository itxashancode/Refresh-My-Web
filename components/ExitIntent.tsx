'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, FileText } from 'lucide-react'

export function ExitIntent() {
  const [show, setShow] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves up past the top of the viewport
      if (e.clientY <= 0 && !hasShown) {
        setShow(true)
        setHasShown(true)
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '100%', opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            zIndex: 9996,
            background: 'var(--charcoal)',
            border: '1px solid var(--rim)',
            borderRadius: '16px',
            padding: '2rem',
            width: 'calc(100% - 4rem)',
            maxWidth: '380px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)'
          }}
        >
          <button 
            onClick={() => setShow(false)}
            style={{ position: 'absolute', top: '1rem', right: '1rem', color: 'var(--smoke)' }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.05)', padding: '0.8rem', borderRadius: '50%' }}>
              <FileText size={20} color="var(--paper)" />
            </div>
            <div>
              <h4 className="font-syne" style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--paper)', marginBottom: '0.2rem' }}>Before you go...</h4>
              <p className="font-syne" style={{ fontSize: '0.8rem', color: 'var(--smoke)' }}>Grab our free optimization checklist.</p>
            </div>
          </div>

          <p className="font-syne" style={{ fontSize: '0.9rem', color: 'var(--mist)', lineHeight: 1.5, marginBottom: '2rem' }}>
            Download the <strong>&quot;5 Things Hurting Your Site Speed&quot;</strong> PDF guide and start improving your performance today. No email required.
          </p>

          <a 
            href="#" 
            onClick={(e) => { e.preventDefault(); setShow(false); alert("Downloading PDF..."); }}
            style={{
              display: 'block',
              textAlign: 'center',
              background: 'var(--paper)',
              color: 'var(--ink)',
              padding: '1rem',
              borderRadius: '8px',
              fontFamily: 'var(--font-syne)',
              fontWeight: 600,
              fontSize: '0.9rem',
              transition: 'background 0.3s'
            }}
          >
            Download Free Checklist
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
