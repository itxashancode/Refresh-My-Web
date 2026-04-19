'use client'
import { useEffect, useState } from 'react'
import { prepare, layout } from '@chenglou/pretext'

export function useTestimonialHeights(
  quotes: string[],
  containerWidth: number,
  viewportWidth: number
): number {
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    if (containerWidth === 0 || viewportWidth === 0) return
    // Resolve clamp(1.6rem, 3vw, 2.5rem)
    const fontSizePx = Math.min(Math.max(25.6, viewportWidth * 0.03), 40)
    const font = `300 italic ${fontSizePx}px "Cormorant Garamond"`
    const lineHeightPx = fontSizePx * 1.5 // generous line height for display text

    const heights = quotes.map(quote => {
      const prepared = prepare(quote, font)
      return layout(prepared, containerWidth * 0.7, lineHeightPx).height // 70% of container = max-width: 800px equivalent
    })

    setMaxHeight(Math.max(...heights))
  }, [quotes, containerWidth, viewportWidth])

  return maxHeight
}
