// path: components/ui/SectionHeading.tsx
'use client'
import { useRef, ReactNode } from 'react'
import { motion, useInView } from 'framer-motion'

interface SectionHeadingProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  delay?: number
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({
  children,
  className = '',
  style = {},
  delay = 0,
  as: Tag = 'h2'
}: SectionHeadingProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })

  return (
    <div ref={ref} style={{ overflow: 'hidden' }}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.9,
          ease: [0.33, 1, 0.68, 1],
          delay
        }}
      >
        <Tag className={className} style={style}>
          {children}
        </Tag>
      </motion.div>
    </div>
  )
}
