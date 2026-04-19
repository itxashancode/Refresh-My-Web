'use client'

import React, { useState, useRef, useEffect } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, className = '' }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)
  const springX = useSpring(dragX, { damping: 30, stiffness: 300 })
  
  const [sliderPos, setSliderPos] = useState(50) // percentage

  useEffect(() => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect()
      dragX.set((sliderPos / 100) * width)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleDrag = (_: unknown, info: { point: { x: number } }) => {
    if (containerRef.current) {
      const { width } = containerRef.current.getBoundingClientRect()
      const newPos = (info.point.x / width) * 100
      setSliderPos(Math.min(Math.max(newPos, 0), 100))
    }
  }

  // Map dragX to percentage for clip-path
  const clipPercentage = useTransform(springX, (value) => {
    if (!containerRef.current) return '50%'
    const { width } = containerRef.current.getBoundingClientRect()
    return `${(value / width) * 100}%`
  })

  return (
    <div 
      ref={containerRef}
      className={`relative w-full aspect-video overflow-hidden rounded-xl border border-white/10 group cursor-default ${className}`}
      style={{ touchAction: 'none' }}
    >
      {/* After Image (Background) */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${afterImage})` }}
      />
      
      {/* Before Image (Overlay) */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${beforeImage})`,
          clipPath: useTransform(clipPercentage, (p) => `inset(0 ${100 - parseFloat(p as string)}% 0 0)`)
        }}
      />

      {/* Slider Line */}
      <motion.div 
        style={{ left: clipPercentage }}
        className="absolute inset-y-0 w-1 bg-white z-10 shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-black/10">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black/20 rounded-full" />
            <div className="w-1 h-3 bg-black/20 rounded-full" />
          </div>
        </div>
      </motion.div>

      {/* Labels */}
      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-bold text-white tracking-widest uppercase pointer-events-none">
        Before
      </div>
      <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-bold text-black tracking-widest uppercase pointer-events-none">
        After
      </div>

      {/* Drag Surface */}
      <motion.div 
        drag="x"
        dragConstraints={containerRef}
        dragElastic={0}
        dragMomentum={false}
        onDrag={handleDrag}
        onDragStart={() => {}}
        onDragEnd={() => {}}
        className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing drag-zone"
        style={{ x: springX }}
      />
    </div>
  )
}
