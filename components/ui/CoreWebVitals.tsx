'use client'
import { motion } from 'framer-motion'

interface RingProps {
  label: string
  score: number
  color: string
}

function VitalsRing({ label, score, color }: RingProps) {
  const radius = 35
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (score / 100) * circumference

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.8rem' }}>
      <div style={{ position: 'relative', width: '80px', height: '80px' }}>
        <svg width="80" height="80" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke="var(--rim)"
            strokeWidth="4"
          />
          <motion.circle
            cx="50"
            cy="50"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth="4"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset: offset }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
            strokeLinecap="round"
          />
        </svg>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 600, color: 'var(--paper)' }}>
          {score}%
        </div>
      </div>
      <span className="font-jetbrains" style={{ fontSize: '0.65rem', color: 'var(--smoke)', letterSpacing: '0.1em' }}>{label}</span>
    </div>
  )
}

export function CoreWebVitals() {
  return (
    <div style={{ display: 'flex', gap: '2.5rem' }}>
      <VitalsRing label="LCP" score={98} color="#00ff88" />
      <VitalsRing label="FID" score={100} color="#00ff88" />
      <VitalsRing label="CLS" score={99} color="#00ff88" />
    </div>
  )
}
