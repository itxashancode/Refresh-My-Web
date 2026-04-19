'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'BRANDING',
    desc: "Crafting timeless visual identities that resonate and scale. We don't just design logos; we build legacy systems.",
    deliverables: ['Identity System', 'Brand Guidelines', 'Typography Pack', 'Digital Assets']
  },
  {
    id: '02',
    title: 'UX/UI DESIGN',
    desc: "High-end editorial design meets functional precision. We create interfaces that feel like premium digital objects.",
    deliverables: ['Design Audit', 'High-Fi Prototypes', 'Design System', 'User Flows']
  },
  {
    id: '03',
    title: 'DEVELOPMENT',
    desc: "Bespoke engineering with zero bloat. Performance-first architecture designed for speed and longevity.",
    deliverables: ['Next.js / Vite', 'Performance Tuning', 'CMS Integration', 'Custom Logic']
  },
  {
    id: '04',
    title: 'ILLUSTRATION',
    desc: "Unique visual storytelling that sets your brand apart from the noise of generic assets.",
    deliverables: ['Custom Icons', 'Digital Art', 'Motion Elements', 'Style Guide']
  }
]

export function Services() {
  const [active, setActive] = useState<number | null>(0)

  return (
    <section id="services" style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#fff' }}>
      <div style={{ marginBottom: '6rem' }}>
        <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
          The <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Art</i> Of <br /> Optimization
        </h2>
      </div>

      <div style={{ borderTop: '2px solid #000' }}>
        {services.map((svc, i) => (
          <div key={i} style={{ borderBottom: '1px solid #000' }}>
            <div 
              onClick={() => setActive(active === i ? null : i)}
              style={{ 
                padding: '3rem 0', 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                <span className="font-syne" style={{ fontSize: '1rem', fontWeight: 800, color: '#bbb' }}>{svc.id}</span>
                <h3 className="font-syne" style={{ fontSize: 'clamp(1.5rem, 3vw, 3rem)', fontWeight: 800, textTransform: 'uppercase' }}>
                  {svc.title}
                </h3>
              </div>
              <div>
                {active === i ? <Minus size={32} /> : <Plus size={32} />}
              </div>
            </div>

            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 0 4rem 10vw', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '4rem' }}>
                    <p className="font-syne" style={{ fontSize: '1.25rem', lineHeight: 1.6, maxWidth: '50ch' }}>
                      {svc.desc}
                    </p>
                    <div style={{ borderLeft: '1px solid #ddd', paddingLeft: '4rem' }}>
                      <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, letterSpacing: '0.2em', marginBottom: '1.5rem', color: '#888' }}>
                        DELIVERABLES
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {svc.deliverables.map((item, idx) => (
                          <li key={idx} className="font-syne" style={{ fontSize: '1rem', fontWeight: 700 }}>— {item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  )
}
