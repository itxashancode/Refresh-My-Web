'use client'
import { useRef, ReactNode, useEffect } from 'react'
import { useMagnet } from '@/hooks/useMagnet'
import { Ripple } from './Ripple'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  power?: number
  onClick?: () => void
  href?: string
}

export function MagneticButton({ children, className = '', power = 0.3, onClick, href }: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement | HTMLAnchorElement | null>(null)
  
  useMagnet(ref as React.RefObject<HTMLElement>, power)
  
  const baseStyle: React.CSSProperties = { 
    display: 'inline-block', 
    transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    position: 'relative',
    overflow: 'hidden'
  }

  // Adjusting transition behavior to prevent dragging lag
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mouseEnter = () => { el.style.transition = 'none' }
    const mouseLeave = () => { el.style.transition = 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)' }

    el.addEventListener('mouseenter', mouseEnter)
    el.addEventListener('mouseleave', mouseLeave)

    return () => {
      el.removeEventListener('mouseenter', mouseEnter)
      el.removeEventListener('mouseleave', mouseLeave)
    }
  }, [])

  if (href) {
    return (
      <a href={href} ref={ref as React.RefObject<HTMLAnchorElement>} className={className} style={baseStyle}>
        <Ripple />
        {children}
      </a>
    )
  }

  return (
    <button ref={ref as React.RefObject<HTMLButtonElement>} className={className} style={baseStyle} onClick={onClick}>
      <Ripple />
      {children}
    </button>
  )
}
