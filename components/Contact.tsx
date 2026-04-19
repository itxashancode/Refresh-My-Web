'use client'
import React from 'react'

import { MagneticButton } from './ui/MagneticButton'

export function Contact() {
  return (
    <section id="contact" style={{ padding: '8rem clamp(1.5rem, 5vw, 6rem)', background: '#000', color: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '8rem' }}>
        <div>
          <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, marginBottom: '4rem' }}>
            Book A Free <br /> <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Strategy</i> Call
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            <div style={{ display: 'flex', gap: '4rem' }}>
              <div>
                <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#666', marginBottom: '0.5rem' }}>EMAIL US</p>
                <a href="mailto:hello@refreshmyweb.com" className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 700 }}>hello@refreshmyweb.com</a>
              </div>
              <div>
                <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#666', marginBottom: '0.5rem' }}>FOLLOW</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                   <a href="#" className="font-syne" style={{ fontSize: '0.9rem', fontWeight: 700 }}>IG</a>
                   <a href="#" className="font-syne" style={{ fontSize: '0.9rem', fontWeight: 700 }}>TW</a>
                   <a href="#" className="font-syne" style={{ fontSize: '0.9rem', fontWeight: 700 }}>LI</a>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
               <div style={{ width: '10px', height: '10px', background: '#00ff88', borderRadius: '50%' }} />
               <span className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}>AVAILABLE FOR AUGUST PROJECTS</span>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
           <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <input 
                type="text" 
                placeholder="NAME" 
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1.5rem 0', color: '#fff', fontSize: '1rem', outline: 'none' }}
              />
              <input 
                type="email" 
                placeholder="EMAIL" 
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1.5rem 0', color: '#fff', fontSize: '1rem', outline: 'none' }}
              />
              <textarea 
                placeholder="PROJECT DETAILS" 
                rows={4}
                style={{ background: 'transparent', border: 'none', borderBottom: '1px solid #333', padding: '1.5rem 0', color: '#fff', fontSize: '1rem', outline: 'none', resize: 'none' }}
              />
              <div style={{ marginTop: '2rem' }}>
                 <MagneticButton className="contact-submit">
                    <span className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 800 }}>SUBMIT REQUEST</span>
                 </MagneticButton>
              </div>
           </form>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .contact-submit {
          background: #fff;
          color: #000;
          padding: 1.5rem 3rem;
          border-radius: 4px;
          display: inline-block;
        }
        @media (max-width: 1024px) {
          #contact .grid-cols-2 { grid-template-columns: 1fr; }
          #contact > div:first-child { grid-template-columns: 1fr; gap: 4rem; }
        }
      `}} />
    </section>
  )
}
