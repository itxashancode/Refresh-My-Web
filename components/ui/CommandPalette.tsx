'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Command, ArrowRight } from 'lucide-react'

export function CommandPalette() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !open) {
        e.preventDefault()
        setOpen(true)
      }
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open])

  const actions = [
    { label: 'View Services', href: '#services' },
    { label: 'Our Process', href: '#process' },
    { label: 'Case Studies', href: '#showcase' },
    { label: 'Get an Audit', href: '#contact' },
  ]

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(5, 5, 16, 0.8)', backdropFilter: 'blur(12px)', zIndex: 11000 }}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            style={{ 
              position: 'fixed', 
              top: '20%', 
              left: '50%', 
              x: '-50%', 
              width: '90%', 
              maxWidth: '600px', 
              background: '#14142a', 
              borderRadius: '16px', 
              border: '1px solid var(--rim)', 
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', 
              zIndex: 11001,
              overflow: 'hidden'
            }}
          >
            <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--rim)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Search size={20} color="var(--smoke)" />
              <input 
                autoFocus 
                placeholder="What are you looking for?" 
                style={{ flex: 1, background: 'none', border: 'none', color: 'var(--paper)', fontSize: '1.1rem' }} 
              />
              <div style={{ padding: '0.4rem 0.8rem', background: 'var(--rim)', borderRadius: '6px', fontSize: '0.7rem', color: 'var(--smoke)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <Command size={10} /> Esc
              </div>
            </div>
            
            <div style={{ padding: '1rem' }}>
              <div style={{ padding: '0.5rem 1rem', fontSize: '0.7rem', color: 'var(--smoke)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Suggestions</div>
              {actions.map((action, i) => (
                <a 
                  key={i} 
                  href={action.href} 
                  onClick={() => setOpen(false)}
                  style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between', 
                    padding: '1rem', 
                    borderRadius: '8px', 
                    transition: 'background 0.2s',
                    marginTop: '0.2rem'
                  }}
                  className="palette-item"
                >
                  <span className="font-syne" style={{ fontSize: '1rem' }}>{action.label}</span>
                  <ArrowRight size={16} color="var(--smoke)" />
                </a>
              ))}
            </div>
          </motion.div>
          
          <style dangerouslySetInnerHTML={{__html: `
            .palette-item:hover { background: rgba(108, 99, 255, 0.1); }
            .palette-item:hover span { color: var(--accent); }
          `}} />
        </>
      )}
    </AnimatePresence>
  )
}
