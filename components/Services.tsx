'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, ArrowUpRight } from 'lucide-react'

const services = [
  {
    id: '01',
    title: 'Digital Strategy',
    desc: "We define the path to dominance. Our strategy isn't just a document; it's a battle plan for digital relevance, focusing on longevity and peak performance.",
    icon: <ArrowUpRight className="text-black" />,
    deliverables: ['Market Analysis', 'Architecture Audit', 'Growth Roadmap']
  },
  {
    id: '02',
    title: 'High-End Design',
    desc: "Editorial aesthetics meet functional precision. We create digital interfaces that feel like luxury objects, combining brutalist grids with elegant typography.",
    icon: <ArrowUpRight className="text-black" />,
    deliverables: ['Branding', 'UX/UI Systems', 'Editorial Layouts']
  },
  {
    id: '03',
    title: 'Modern Engineering',
    desc: "Next-generation stack for ultimate speed. We build with a focus on performance, accessibility, and zero-bloat standard that ensures your site stays fresh.",
    icon: <ArrowUpRight className="text-black" />,
    deliverables: ['Next.js Framework', 'Framer Motion', 'SEO Optimization']
  },
  {
    id: '04',
    title: 'Managed Growth',
    desc: "Continuous evolution of your digital asset. We don't just launch; we iterate, optimize, and maintain your competitive edge in a shifting landscape.",
    icon: <ArrowUpRight className="text-black" />,
    deliverables: ['Monthly Audits', 'Performance Tuning', 'Content Scaling']
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
          <div 
            key={i} 
            style={{ 
              borderBottom: '1px solid #000',
              borderLeft: active === i ? '8px solid #000' : '0px solid #000',
              paddingLeft: active === i ? '2rem' : '0rem',
              transition: 'all 0.4s cubic-bezier(0.33, 1, 0.68, 1)'
            }}
          >
            <div 
              onClick={() => setActive(active === i ? null : i)}
              onMouseEnter={() => active === null && setActive(i)}
              style={{ 
                padding: '4rem 0', 
                display: 'flex', 
                alignItems: 'center', 
                cursor: 'pointer',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '4rem' }}>
                <span className="font-syne" style={{ fontSize: '1rem', fontWeight: 800, color: active === i ? '#000' : '#bbb' }}>{svc.id}</span>
                <h3 className="font-syne" style={{ fontSize: 'clamp(1.5rem, 3vw, 3.5rem)', fontWeight: 800, textTransform: 'uppercase', color: active === i ? '#000' : '#444' }}>
                  {svc.title}
                </h3>
              </div>
              <div>
                <motion.div
                  animate={{ rotate: active === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={40} />
                </motion.div>
              </div>
            </div>

            <AnimatePresence>
              {active === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 0 5rem 10vw', display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 0.8fr)', gap: '4rem' }}>
                    <div>
                      <p className="font-syne" style={{ fontSize: '1.5rem', lineHeight: 1.5, maxWidth: '50ch', color: '#000' }}>
                        {svc.desc}
                      </p>
                    </div>
                    <div style={{ borderLeft: '1px solid #000', paddingLeft: '4rem' }}>
                      <p className="font-syne" style={{ fontSize: '0.75rem', fontWeight: 900, letterSpacing: '0.2rem', marginBottom: '2rem', textTransform: 'uppercase' }}>
                        Results Delivered
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {svc.deliverables.map((item, idx) => (
                          <motion.li 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.1 * idx }}
                            key={idx} 
                            className="font-syne" 
                            style={{ fontSize: '1.1rem', fontWeight: 700 }}
                          >
                            — {item}
                          </motion.li>
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

