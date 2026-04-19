'use client'

import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion'

export type CursorType = 'default' | 'link' | 'button' | 'text' | 'drag'

export function CustomCursor() {
  const [cursorType, setCursorType] = useState<CursorType>('default')
  const [visible, setVisible] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 250 }
  const cursorX = useSpring(mouseX, springConfig)
  const cursorY = useSpring(mouseY, springConfig)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      
      // Check for drag zones
      if (target.closest('.drag-zone')) {
        setCursorType('drag')
        return
      }

      // Check for links
      if (target.closest('a')) {
        setCursorType('link')
        return
      }

      // Check for buttons
      if (target.closest('button') || target.closest('.magnetic-button') || target.closest('.submit-btn')) {
        setCursorType('button')
        return
      }

      // Check for text areas
      if (target.closest('p') || target.closest('h1') || target.closest('h2') || target.closest('h3') || target.closest('span') || target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        // Only if it's not a link/button already handled
        setCursorType('text')
        return
      }

      setCursorType('default')
    }

    const handleMouseEnter = () => setVisible(true)
    const handleMouseLeave = () => setVisible(false)

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.documentElement.addEventListener('mouseenter', handleMouseEnter)
    document.documentElement.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.documentElement.removeEventListener('mouseenter', handleMouseEnter)
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [mouseX, mouseY])

  const variants = {
    default: {
      width: 12,
      height: 12,
      backgroundColor: 'transparent',
      border: '1px solid #000',
      borderRadius: '50%',
      x: -6,
      y: -6,
    },
    link: {
      width: 40,
      height: 40,
      backgroundColor: '#000',
      mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
      borderRadius: '50%',
      x: -20,
      y: -20,
    },
    button: {
      width: 60,
      height: 30,
      backgroundColor: '#000',
      mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
      borderRadius: '15px',
      x: -30,
      y: -15,
    },
    text: {
      width: 2,
      height: 24,
      backgroundColor: '#000',
      mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
      borderRadius: '0px',
      x: -1,
      y: -12,
    },
    drag: {
      width: 80,
      height: 80,
      backgroundColor: '#000',
      mixBlendMode: 'difference' as React.CSSProperties['mixBlendMode'],
      borderRadius: '50%',
      x: -40,
      y: -40,
    }
  }

  return (
    <motion.div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 99998,
        display: visible ? 'block' : 'none',
        x: cursorX,
        y: cursorY,
      }}
    >
      <motion.div
        animate={cursorType}
        variants={variants}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.5 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        <AnimatePresence>
          {cursorType === 'drag' && (
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              style={{ mixBlendMode: 'normal' as const, fontSize: '10px', fontWeight: 800, color: '#fff', letterSpacing: '0.15em' }}
            >
              DRAG
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
