'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

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
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const next = () => setIndex((index + 1) % testimonials.length)
  const prev = () => setIndex((index - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" style={{ background: '#fff', borderTop: '2px solid #000', overflow: 'hidden' }}>
      <div style={{ padding: '6rem clamp(1.5rem, 5vw, 6rem)', borderBottom: '1px solid #000' }}>
         <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
           Voices Of <br /> <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Validation</i>
         </h2>
      </div>

      <div style={{ position: 'relative', height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            style={{ 
              width: '100%', 
              maxWidth: '900px', 
              padding: '0 2rem',
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center' 
            }}
          >
            <Quote size={80} style={{ opacity: 0.05, marginBottom: '2rem' }} />
            <h3 className="font-syne" style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '2rem', letterSpacing: '0.2rem', color: '#888' }}>
              {testimonials[index].title}
            </h3>
            <p className="font-syne" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: 700, lineHeight: 1.3, marginBottom: '3rem' }}>
              “{testimonials[index].text}”
            </p>
            <div>
              <p className="font-syne" style={{ fontSize: '1.1rem', fontWeight: 800 }}>{testimonials[index].name}</p>
              <p className="font-syne" style={{ fontSize: '0.8rem', color: '#888', letterSpacing: '0.1em' }} >{testimonials[index].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div style={{ position: 'absolute', bottom: '4rem', display: 'flex', gap: '3rem', alignItems: 'center' }}>
          <button onClick={prev} style={{ width: '60px', height: '60px', border: '1px solid #000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronLeft size={24} />
          </button>
          
          <div style={{ display: 'flex', gap: '0.8rem' }}>
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setIndex(i)}
                style={{ 
                  width: i === index ? '40px' : '10px', 
                  height: '10px', 
                  background: '#000', 
                  borderRadius: '10px', 
                  transition: 'width 0.4s' ,
                  cursor: 'pointer'
                }} 
              />
            ))}
          </div>

          <button onClick={next} style={{ width: '60px', height: '60px', border: '1px solid #000', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}

