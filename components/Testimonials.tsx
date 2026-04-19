'use client'
import React from 'react'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "ALEX RIVERA",
    role: "CEO, PRISM AI",
    text: "The transformation was immediate. Our bounce rate dropped by 40% within the first week of launch. RefreshMyWeb is in a league of their own.",
    title: "UNMATCHED PRECISION"
  },
  {
    name: "SARAH CHEN",
    role: "FOUNDER, SYNAPSE",
    text: "Editorial design paired with high-performance engineering. They truly understand what it means to build a premium digital presence.",
    title: "PREMIUM EXECUTION"
  },
  {
    name: "MARCUS THORNE",
    role: "CTO, KINETIC",
    text: "We went from a score of 12 to 98 on mobile lighthouse. The impact on our conversion rates has been staggering.",
    title: "RADICAL SPEED"
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" style={{ background: '#fff', borderTop: '2px solid #000' }}>
      <div style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', borderBottom: '1px solid #000' }}>
         <h2 className="font-syne" style={{ fontSize: 'clamp(3rem, 10vw, 12rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.8, letterSpacing: '-0.05em' }}>
           TESTIMONIALS
         </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', background: '#000', gap: '1px' }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ background: '#fff', padding: '4rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <Quote size={40} style={{ opacity: 0.1 }} />
            <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800 }}>{t.title}</h3>
            <p className="font-syne" style={{ fontSize: '1.1rem', lineHeight: 1.6, color: '#444' }}>
              “{t.text}”
            </p>
            <div style={{ marginTop: 'auto', paddingTop: '2rem', borderTop: '1px solid #eee' }}>
              <p className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 800 }}>{t.name}</p>
              <p className="font-syne" style={{ fontSize: '0.7rem', color: '#888', letterSpacing: '0.1em' }} >{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
