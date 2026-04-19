'use client'
import { RefObject, useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

export function useMagnet(ref: RefObject<HTMLElement>, power: number = 0.3) {
  const xPos = useMotionValue(0)
  const yPos = useMotionValue(0)
  const springX = useSpring(xPos, { damping: 15, stiffness: 150 })
  const springY = useSpring(yPos, { damping: 15, stiffness: 150 })

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const handleMouseMove = (e: MouseEvent) => {
      if (window.matchMedia('(hover: none)').matches) return

      const { left, top, width, height } = element.getBoundingClientRect()
      
      const centerX = left + width / 2
      const centerY = top + height / 2
      
      const distanceX = e.clientX - centerX
      const distanceY = e.clientY - centerY
      
      const distance = Math.sqrt(distanceX ** 2 + distanceY ** 2)
      
      const radius = 60 // As requested by senior designer
      
      if (distance < radius) {
        xPos.set(distanceX * power)
        yPos.set(distanceY * power)
      } else {
        xPos.set(0)
        yPos.set(0)
      }
    }

    const handleMouseLeave = () => {
      xPos.set(0)
      yPos.set(0)
    }

    window.addEventListener('mousemove', handleMouseMove)
    element.addEventListener('mouseleave', handleMouseLeave)

    const unsubscribeX = springX.on('change', (latest) => {
      element.style.transform = `translate(${latest}px, ${springY.get()}px)`
    })
    const unsubscribeY = springY.on('change', (latest) => {
      element.style.transform = `translate(${springX.get()}px, ${latest}px)`
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      element.removeEventListener('mouseleave', handleMouseLeave)
      unsubscribeX()
      unsubscribeY()
      if (element) {
         element.style.transform = `translate(0px, 0px)`
      }
    }
  }, [ref, power, xPos, yPos, springX, springY])
}
