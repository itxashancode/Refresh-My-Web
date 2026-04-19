'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus } from 'lucide-react'

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Our timeline varies depending on the scope of the project. A comprehensive UI/UX refinement and performance overhaul usually takes 4-6 weeks."
  },
  {
    q: "What kinds of websites do you work with?",
    a: "We work seamlessly across modern frameworks like Next.js, React, and Vue, as well as traditional CMS platforms including WordPress."
  },
  {
    q: "Do you offer ongoing maintenance after the project?",
    a: "Yes. In fact, many of our clients retain us for ongoing maintenance to assure their platform remains fast and secure."
  }
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#fff', borderTop: '1px solid #000' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 0.8fr) minmax(0, 1.2fr)', gap: '4rem' }}>
        <div>
           <h2 className="font-syne" style={{ fontSize: '3rem', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
             FAQ
           </h2>
        </div>

        <div>
          {faqs.map((faq, i) => (
            <div key={i} style={{ borderBottom: '1px solid #000', paddingBottom: '2rem', marginBottom: '2rem' }}>
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
              >
                <span className="font-syne" style={{ fontSize: '1.25rem', fontWeight: 800 }}>{faq.q}</span>
                <motion.div animate={{ rotate: openIndex === i ? 45 : 0 }}>
                  <Plus size={24} />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p className="font-syne" style={{ paddingTop: '1.5rem', color: '#666', fontSize: '1.1rem', lineHeight: 1.6 }}>
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
