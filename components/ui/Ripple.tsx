'use client'
import React, { useState, useEffect } from 'react'

interface RippleProps {
  duration?: number
  color?: string
}

export function Ripple({ duration = 600, color = 'rgba(255, 255, 255, 0.3)' }: RippleProps) {
  const [rippleArray, setRippleArray] = useState<{ x: number, y: number, size: number }[]>([])

  const addRipple = (event: React.MouseEvent<HTMLDivElement>) => {
    const container = event.currentTarget.getBoundingClientRect()
    const size = container.width > container.height ? container.width : container.height
    const x = event.pageX - (container.x + window.scrollX) - size / 2
    const y = event.pageY - (container.y + window.scrollY) - size / 2
    const newRipple = { x, y, size }

    setRippleArray(prev => [...prev, newRipple])
  }

  useEffect(() => {
    if (rippleArray.length > 0) {
      const timer = setTimeout(() => {
        setRippleArray([])
      }, duration)
      return () => clearTimeout(timer)
    }
  }, [rippleArray.length, duration])

  return (
    <div 
      style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} 
      onMouseDown={addRipple}
    >
      {rippleArray.map((ripple, index) => (
        <span
          key={index}
          style={{
            top: ripple.y,
            left: ripple.x,
            width: ripple.size,
            height: ripple.size,
            position: 'absolute',
            borderRadius: '50%',
            backgroundColor: color,
            transform: 'scale(0)',
            animation: `ripple-effect ${duration}ms linear forwards`,
          }}
        />
      ))}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes ripple-effect {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `}} />
    </div>
  )
}
