'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Our timeline varies depending on the scope. A comprehensive UI/UX refinement and performance overhaul usually takes 4-6 weeks for most digital products."
  },
  {
    q: "What kinds of websites do you work with?",
    a: "We specialize in modern frameworks like Next.js, but also optimize legacy systems and headless CMS architectures (Contentful, Sanity, Shopify)."
  },
  {
    q: "Do you offer ongoing performance maintenance?",
    a: "Yes. Web performance is a moving target. We offer 'Aura Care' memberships to ensure your site stays at the peak of technical excellence indefinitely."
  },
  {
    q: "What is your design philosophy?",
    a: "We believe in 'Invisible Utility'. The design should never get in the way of the user, yet should feel premium and distinct through perfect typography."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" style={{ padding: '10rem clamp(1.5rem, 5vw, 6rem)', background: '#fff', borderTop: '1px solid #000' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: '4rem' }}>
        <div>
           <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
             Curated <br /> <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Commons</i>
           </h2>
           <p className="font-syne" style={{ fontSize: '1.25rem', marginTop: '2rem', color: '#666', maxWidth: '30ch' }}>
             Responses to frequently asked questions regarding our craft and philosophy.
           </p>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #000', paddingBottom: '2.5rem', marginBottom: '2.5rem' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
              >
                <span className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800, color: openIndex === i ? '#000' : '#444' }}>{faq.q}</span>
                <motion.div 
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Plus size={32} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="font-syne" style={{ paddingTop: '2rem', color: '#000', fontSize: '1.2rem', lineHeight: 1.6, maxWidth: '60ch' }}>
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

