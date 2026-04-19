'use client'
import { useState, useEffect } from 'react'

export function LiveClock({ large = false }: { large?: boolean }) {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
      }))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="font-jetbrains" style={{ 
      fontSize: large ? '1rem' : '0.7rem', 
      color: 'var(--paper)', 
      letterSpacing: '0.1em',
      opacity: large ? 1 : 0.6
    }}>
      {time || '00:00:00'}
    </div>
  )
}
