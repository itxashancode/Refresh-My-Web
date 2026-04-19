// /lib/motion.ts

export const DURATION = {
  fast:   0.35,
  base:   0.6,
  slow:   0.9,
  crawl:  1.4,
}

export const EASE = {
  out:    [0.16, 1, 0.3, 1] as const,        // expo out — for entrances
  in:     [0.7, 0, 0.84, 0] as const,        // expo in — for exits
  inout:  [0.87, 0, 0.13, 1] as const,       // expo inout — for transitions
  spring: { type: 'spring', stiffness: 80, damping: 20 }
}

export const fadeUp = {
  hidden:  { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION.slow, ease: EASE.out } }
}

export const lineReveal = {
  hidden:  { y: '100%' },
  visible: { y: '0%',  transition: { duration: DURATION.crawl, ease: EASE.out } }
}

export const staggerContainer = (staggerDelay = 0.12) => ({
  hidden:  {},
  visible: { transition: { staggerChildren: staggerDelay } }
})

export const scaleIn = {
  hidden:  { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: DURATION.slow, ease: EASE.out } }
}
