'use client'
import { useEffect, useState, useRef } from 'react'
import { prepare, layout } from '@chenglou/pretext'

const bodyFont = '400 1.05rem Syne' // must match CSS exactly

export function useAccordionMeasure(
  descriptionText: string,
  containerWidth: number,
  lineHeightPx: number // 1.05rem * 1.75 line-height = ~32px at 16px base
): number {
  const [height, setHeight] = useState(0)
  const preparedRef = useRef<ReturnType<typeof prepare> | null>(null)

  useEffect(() => {
    if (containerWidth === 0 || !descriptionText) return
    if (!preparedRef.current) {
        preparedRef.current = prepare(descriptionText, bodyFont)
    }
    const { height } = layout(preparedRef.current, containerWidth, lineHeightPx)
    setHeight(height)
  }, [descriptionText, containerWidth, lineHeightPx])

  return height
}
