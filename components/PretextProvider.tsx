'use client'
import { useEffect } from 'react'
import { setLocale, clearCache } from '@chenglou/pretext'

export function PretextProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set locale once at boot — do this before any prepare() calls
    // Clears internal cache and configures locale for accurate text segmentation
    setLocale(navigator.language || 'en')

    // On unmount (SPA navigation or dev hot-reload), clear cache to prevent leaks
    return () => clearCache()
  }, [])

  return <>{children}</>
}
