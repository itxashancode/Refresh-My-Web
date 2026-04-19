'use client'
import { motion } from 'framer-motion'
import { lineReveal } from '@/lib/motion'

interface SplitTextProps {
  text: string
  as?: 'h1' | 'h2' | 'p' | 'h3'
  className?: string
  delay?: number
}

export function SplitText({ text, as: Component = 'p', className = '', delay = 0 }: SplitTextProps) {
  const lines = text.split('\n')

  return (
    <Component className={className}>
      {lines.map((line, i) => {
        // Clone the reveal variant to apply dynamic delay
        const variant = {
          hidden: lineReveal.hidden,
          visible: {
            ...lineReveal.visible,
            transition: {
              ...lineReveal.visible.transition,
              delay: delay + (i * 0.12)
            }
          }
        }
        
        return (
          <span key={i} style={{ display: 'block', overflow: 'hidden' }}>
            <motion.span
              variants={variant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              style={{ display: 'block' }}
            >
              {line === '' ? '\u00A0' : line}
            </motion.span>
          </span>
        )
      })}
    </Component>
  )
}
