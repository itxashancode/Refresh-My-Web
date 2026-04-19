'use client'
import { useEffect, useState, useRef } from 'react'
import { prepare, layout } from '@chenglou/pretext'

type TextMeasureResult = {
  height: number
  lineCount: number
  ready: boolean
}

export function useTextMeasure(
  text: string,
  font: string,          // must match CSS font shorthand exactly
  containerWidth: number,
  lineHeightPx: number
): TextMeasureResult {
  const [result, setResult] = useState<TextMeasureResult>({
    height: 0,
    lineCount: 1,
    ready: false,
  })
  const preparedRef = useRef<ReturnType<typeof prepare> | null>(null)

  useEffect(() => {
    if (containerWidth === 0) return
    // Only run prepare() once per text+font combo
    if (!preparedRef.current) {
      preparedRef.current = prepare(text, font)
    }
    const { height, lineCount } = layout(preparedRef.current, containerWidth, lineHeightPx)
    setResult({ height, lineCount, ready: true })
  }, [text, font, containerWidth, lineHeightPx])

  return result
}
