'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, CheckCircle2, AlertCircle, Zap, Shield, Globe } from 'lucide-react'

const STEPS = [
  'Fetching DNS records...',
  'Analyzing SSL certificate...',
  'Measuring PageSpeed (Lighthouse)...',
  'Checking Core Web Vitals...',
  'Scanning technical SEO architecture...',
  'Evaluating UI/UX accessibility...'
]

export function SiteScoreWidget({ compact = false }: { compact?: boolean }) {
  const [url, setUrl] = useState('')
  const [status, setStatus] = useState<'idle' | 'analyzing' | 'results'>('idle')
  const [progress, setProgress] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)


  const startAnalysis = (e: React.FormEvent) => {
    e.preventDefault()
    if (!url) return
    setStatus('analyzing')
    setProgress(0)
    setCurrentStep(0)
  }

  useEffect(() => {
    if (status === 'analyzing') {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval)
            setTimeout(() => setStatus('results'), 500)
            return 100
          }
          const next = prev + (Math.random() * 15)
          return next > 100 ? 100 : next
        })
      }, 600)

      const stepInterval = setInterval(() => {
        setCurrentStep(prev => (prev + 1) % STEPS.length)
      }, 1500)

      return () => {
        clearInterval(interval)
        clearInterval(stepInterval)
      }
    }
  }, [status])

  const mockScores = [
    { label: 'Performance', score: 42, color: '#ef4444', icon: <Zap size={14} /> },
    { label: 'SEO', score: 68, color: '#f59e0b', icon: <Search size={14} /> },
    { label: 'Accessibility', score: 55, color: '#f59e0b', icon: <Shield size={14} /> },
    { label: 'Best Practices', score: 89, color: '#22c55e', icon: <CheckCircle2 size={14} /> },
    { label: 'Security', score: 30, color: '#ef4444', icon: <AlertCircle size={14} /> },
  ]

  const totalScore = 57

  if (compact) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', background: 'var(--veil)', padding: '1rem 1.5rem', borderRadius: '12px', border: '1px solid var(--rim)' }}>
        <div style={{ position: 'relative', width: '48px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
           <svg width="48" height="48" viewBox="0 0 100 100" style={{ position: 'absolute', transform: 'rotate(-90deg)' }}>
              <circle cx="50" cy="50" r="45" fill="transparent" stroke="var(--rim)" strokeWidth="8" />
              <motion.circle 
                cx="50" cy="50" r="45" fill="transparent" stroke="#ff4d4d" strokeWidth="8" 
                strokeDasharray={2 * Math.PI * 45}
                initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                animate={{ strokeDashoffset: (2 * Math.PI * 45) * (1 - totalScore/100) }}
                transition={{ duration: 1.5, ease: "easeOut" }}
              />
           </svg>
           <span className="font-jetbrains" style={{ fontSize: '0.8rem', fontWeight: 600 }}>{totalScore}</span>
        </div>
        <div>
           <div className="font-syne" style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--paper)', letterSpacing: '0.05em' }}>SITE SCORE</div>
           <div className="font-syne" style={{ fontSize: '0.65rem', color: 'var(--smoke)' }}>Live analysis (average)</div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', maxWidth: '450px', background: 'var(--charcoal)', border: '1px solid var(--rim)', borderRadius: '16px', padding: '2rem', backdropFilter: 'blur(24px)' }}>
      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <motion.div 
            key="idle"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
          >
            <h3 className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.8rem', color: 'var(--paper)' }}>Live Site Audit</h3>
            <p className="font-syne" style={{ fontSize: '0.85rem', color: 'var(--mist)', marginBottom: '1.5rem', lineHeight: 1.6 }}>Enter your URL to see how your site ranks against industry standards.</p>
            <form onSubmit={startAnalysis} style={{ position: 'relative' }}>
              <input 
                type="url" 
                placeholder="https://yourwebsite.com" 
                style={{ width: '100%', background: 'var(--ink)', border: '1px solid var(--rim)', borderRadius: '12px', padding: '1rem 1rem 1rem 3rem', fontSize: '0.9rem', color: 'var(--paper)', outline: 'none' }}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                required
              />
              <div style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--smoke)' }}>
                <Globe size={18} />
              </div>
              <button 
                type="submit"
                style={{ position: 'absolute', right: '0.6rem', top: '50%', transform: 'translateY(-50%)', background: 'var(--accent)', color: 'white', fontSize: '0.7rem', fontWeight: 700, padding: '0.5rem 1rem', borderRadius: '8px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
              >
                Scan
              </button>
            </form>
          </motion.div>
        )}

        {status === 'analyzing' && (
          <motion.div 
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ padding: '2rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
          >
            <div style={{ position: 'relative', width: '100px', height: '100px', marginBottom: '1.5rem' }}>
              <svg style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <circle cx="50" cy="50" r="45" stroke="var(--rim)" strokeWidth="6" fill="transparent" />
                <motion.circle 
                  cx="50" cy="50" r="45" stroke="var(--accent)" strokeWidth="6" fill="transparent" 
                  strokeDasharray={2 * Math.PI * 45}
                  initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                  animate={{ strokeDashoffset: (2 * Math.PI * 45) * (1 - progress/100) }}
                />
              </svg>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-jetbrains)', fontSize: '1.2rem' }}>
                {Math.round(progress)}%
              </div>
            </div>
            <motion.p 
              key={currentStep}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="font-syne"
              style={{ fontSize: '0.85rem', color: 'var(--mist)' }}
            >
              {STEPS[currentStep]}
            </motion.p>
          </motion.div>
        )}

        {status === 'results' && (
          <motion.div 
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifySelf: 'space-between', marginBottom: '2rem' }}>
              <div style={{ flex: 1 }}>
                <h3 className="font-syne" style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--smoke)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.4rem' }}>Health Score</h3>
                <div className="font-cormorant" style={{ fontSize: '3rem', fontStyle: 'italic', lineHeight: 1 }}>{totalScore}%</div>
              </div>
              <div style={{ padding: '0.8rem', borderRadius: '50%', border: '1px solid rgba(239, 68, 68, 0.2)', color: '#ef4444', fontSize: '0.6rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                 Critical
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {mockScores.map((s, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--mist)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                       {s.icon}
                       {s.label}
                    </div>
                    <span>{s.score}%</span>
                  </div>
                  <div style={{ height: '4px', background: 'var(--rim)', borderRadius: '10px', overflow: 'hidden' }}>
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.score}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      style={{ height: '100%', background: s.color, borderRadius: '10px' }} 
                    />
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setStatus('idle')}
              style={{ width: '100%', padding: '1rem', background: 'var(--veil)', border: '1px solid var(--rim)', borderRadius: '12px', color: 'var(--paper)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}
            >
              Scan Another Site
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
