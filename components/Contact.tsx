'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Loader2, ArrowRight } from 'lucide-react'

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    setTimeout(() => setStatus('success'), 2000)
  }

  return (
    <section id="contact" style={{ background: '#000', color: '#fff', padding: '10rem clamp(1.5rem, 5vw, 6rem)', textAlign: 'center' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <motion.h2 
          className="font-syne gradient-text"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ 
            fontSize: 'clamp(3rem, 8vw, 8rem)', 
            fontWeight: 800, 
            lineHeight: 1, 
            letterSpacing: '-0.04em',
            textTransform: 'uppercase',
            marginBottom: '4rem'
          }}
        >
          Ready To <br /> Elevate Your <br /> Digital <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Aura?</i>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '600px', margin: '0 auto' }}>
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}
                >
                  <CheckCircle2 size={60} color="#fff" />
                  <p className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800 }}>WE&apos;LL BE IN TOUCH SOON.</p>
                </motion.div>
              ) : (
                <motion.form 
                  key="form"
                  onSubmit={handleSubmit} 
                  exit={{ opacity: 0, y: -20 }} 
                  style={{ display: 'flex', borderBottom: '2px solid #fff', paddingBottom: '1rem', alignItems: 'center' }}
                >
                  <input 
                    type="email" 
                    placeholder="YOUR@EMAIL.COM" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ 
                      flex: 1, 
                      background: 'none', 
                      border: 'none', 
                      color: '#fff', 
                      fontSize: 'clamp(1rem, 2vw, 2rem)', 
                      fontWeight: 800, 
                      outline: 'none', 
                      padding: '1rem 0' 
                    }} 
                  />
                  <button 
                    disabled={status === 'loading'}
                    style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}
                  >
                    {status === 'loading' ? (
                      <Loader2 className="animate-spin" size={32} />
                    ) : (
                      <>
                        <span className="font-syne" style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '0.1rem' }}>SUBMIT</span>
                        <ArrowRight size={24} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .gradient-text {
          background: linear-gradient(90deg, #fff 0%, #444 50%, #fff 100%);
          background-size: 200% auto;
          color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          animation: gradient-move 8s linear infinite;
        }
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />
    </section>
  )
}
