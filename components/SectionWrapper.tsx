'use client'
import React, { useRef, Children } from 'react'
import { motion, useInView } from 'framer-motion'

function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  const childrenArray = Children.toArray(children)

  return (
    <>
      {childrenArray.map((child, i) => (
        <AnimatedSection key={i} delay={i * 0.05}>
          {child}
        </AnimatedSection>
      ))}
    </>
  )
}

