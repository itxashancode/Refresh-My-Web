'use client'
import { useEffect, useState } from 'react'
import { prepareWithSegments, measureNaturalWidth } from '@chenglou/pretext'

// Note: for measurement, resolve clamp to a px value based on current viewport
function resolveClamp(vw: number): number {
  return Math.min(Math.max(32, vw * 0.04), 56) // clamp(2rem, 4vw, 3.5rem) in px
}

export function useMarqueeValidation(items: string[], viewportWidth: number) {
  const [oversizedItems, setOversizedItems] = useState<string[]>([])

  useEffect(() => {
    if (viewportWidth === 0) return
    const fontPx = resolveClamp(viewportWidth)
    const font = `300 italic ${fontPx}px "Cormorant Garamond"`

    const overflowing = items.filter(item => {
      const prepared = prepareWithSegments(item, font)
      const naturalWidth = measureNaturalWidth(prepared)
      return naturalWidth > viewportWidth * 0.9 // flag if wider than 90% of viewport
    })

    if (overflowing.length > 0) {
      console.warn('[MarqueeReel] These items may overflow at current viewport:', overflowing)
      // In production: automatically reduce font size or truncate
    }
    setOversizedItems(overflowing)
  }, [items, viewportWidth])

  return oversizedItems
}
