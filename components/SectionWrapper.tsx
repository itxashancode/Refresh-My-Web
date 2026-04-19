'use client'
import React, { Children } from 'react'
import { motion } from 'framer-motion'

export function SectionWrapper({ children }: { children: React.ReactNode }) {
  const childrenArray = Children.toArray(children)
  
  return (
    <>
      {childrenArray.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ margin: '-10%' }}
          transition={{ duration: 0.4 }}
        >
          {child}
        </motion.div>
      ))}
    </>
  )
}
