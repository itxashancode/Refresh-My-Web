'use client'
import { useEffect, useState } from 'react'
import { prepareWithSegments, measureNaturalWidth } from '@chenglou/pretext'

export function useFooterBrandWidth(viewportWidth: number): number {
  const [brandWidth, setBrandWidth] = useState(0)

  useEffect(() => {
    if (viewportWidth === 0) return
    // Resolve clamp(4rem, 10vw, 9rem) at current viewport
    const fontSizePx = Math.min(Math.max(64, viewportWidth * 0.10), 144)
    const font = `300 ${fontSizePx}px "Cormorant Garamond"`

    const prepared = prepareWithSegments('Refresh My Web', font)
    setBrandWidth(measureNaturalWidth(prepared))
  }, [viewportWidth])

  return brandWidth
}
