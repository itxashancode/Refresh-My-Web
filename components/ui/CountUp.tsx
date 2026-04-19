'use client'
import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

interface CountUpProps {
  from: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
}

export function CountUp({ from, to, duration = 2, suffix = '', prefix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [hasFired, setHasFired] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  
  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
    bounce: 0,
    duration: duration * 1000
  })

  useEffect(() => {
    if (isInView && !hasFired) {
      motionValue.set(to)
      setHasFired(true)
    }
  }, [isInView, motionValue, to, hasFired])

  useEffect(() => {
    return springValue.onChange((latest) => {
      if (ref.current) {
        // Format based on integer vs float
        let formatted = Math.floor(latest).toString()
        if (to % 1 !== 0) {
          formatted = latest.toFixed(1)
        } else if (latest < 10 && to >= 10 && to !== 65) {
          formatted = latest.toFixed(0)
        }
        ref.current.textContent = `${prefix}${formatted}${suffix}`
      }
    })
  }, [springValue, suffix, prefix, to])

  return <span ref={ref} className="font-jetbrains">{from}</span>
}
