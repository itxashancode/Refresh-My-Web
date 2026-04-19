'use client'
import { useEffect, useState, useRef } from 'react'
import { prepare, layout } from '@chenglou/pretext'

export function useMetricWidth(
  value: string,       // e.g. "1.1s", "+140%", "300%"
  fontSizePx: number   // resolved px value of clamp(4rem, 8vw, 7rem)
): number {
  const [width, setWidth] = useState(0)
  const font = `300 ${fontSizePx}px "JetBrains Mono"`
  const preparedRef = useRef<ReturnType<typeof prepare> | null>(null)

  useEffect(() => {
    if (fontSizePx === 0) return
    if (!preparedRef.current) {
        preparedRef.current = prepare(value, font)
    }
    // For a single line of text at unconstrained width, use a very large maxWidth
    layout(preparedRef.current, 9999, fontSizePx * 1.2)
    // To get width of a single line, use prepareWithSegments + measureNaturalWidth
    import('@chenglou/pretext').then(({ prepareWithSegments, measureNaturalWidth }) => {
      const seg = prepareWithSegments(value, font)
      setWidth(measureNaturalWidth(seg))
    })
  }, [value, fontSizePx, font])

  return width
}
