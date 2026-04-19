'use client'
import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer style={{ background: '#fff', borderTop: '1px solid #000', padding: '6rem clamp(1.5rem, 5vw, 6rem) 4rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
        <div>
          <h4 className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 900, textTransform: 'uppercase', marginBottom: '2rem' }}>
            Refresh<i>my</i>web
          </h4>
          <p className="font-syne" style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.6, maxWidth: '25ch' }}>
            Transforming outdated digital presences through editorial design logic.
          </p>
        </div>

        <div>
          <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>OFFICE</p>
          <p className="font-syne" style={{ fontSize: '1rem', fontWeight: 700 }}>Colombo, LK</p>
          <p className="font-syne" style={{ fontSize: '1rem', fontWeight: 700 }}>Remote, Global</p>
        </div>

        <div>
           <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>SAY HELLO</p>
           <a href="mailto:hello@refreshmyweb.com" className="font-syne" style={{ fontSize: '1rem', fontWeight: 700, display: 'block' }}>hello@refreshmyweb.com</a>
           <a href="#" className="font-syne" style={{ fontSize: '1rem', fontWeight: 700, display: 'block' }}>Strategy Call</a>
        </div>

        <div>
          <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, color: '#bbb', letterSpacing: '0.2em', marginBottom: '1.5rem' }}>LEGAL</p>
          <a href="#" className="font-syne" style={{ fontSize: '0.9rem', fontWeight: 700, display: 'block' }}>Privacy Policy</a>
          <a href="#" className="font-syne" style={{ fontSize: '0.9rem', fontWeight: 700, display: 'block' }}>Cookie Policy</a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid #eee', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p className="font-syne" style={{ fontSize: '0.8rem', color: '#999' }}>© {currentYear} ALL RIGHTS RESERVED</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
           <a href="#" className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 800 }}>IG</a>
           <a href="#" className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 800 }}>TW</a>
           <a href="#" className="font-syne" style={{ fontSize: '0.8rem', fontWeight: 800 }}>LI</a>
        </div>
      </div>
    </footer>
  )
}
