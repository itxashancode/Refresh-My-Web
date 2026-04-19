'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { MagneticButton } from './ui/MagneticButton'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    // No-op scroll tracking
  }, [])

  const links = [
    { label: 'SERVICES', href: '#services' },
    { label: 'SHOWCASE', href: '#showcase' },
    { label: 'PROCESS', href: '#process' },
    { label: 'CONTACT', href: '#contact' }
  ]

  return (
    <>
      <nav 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'var(--paper)',
          borderBottom: '1px solid #000',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(1.5rem, 5vw, 6rem)',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ flex: 1 }}>
          <a href="#home" className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
            Refresh<i>my</i>web
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="desktop-nav" style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
          {links.map((link, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <a href={link.href} className="font-syne nav-link" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em' }}>
                {link.label}
              </a>
            </motion.li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <MagneticButton href="#contact" className="nav-cta-btn">
            <span className="font-syne" style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em' }}>REACH OUT</span>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger */}
        <button className="hamburger" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: 'none' }}>
           <div style={{ width: 24, height: 1, background: '#000', marginBottom: 6 }} />
           <div style={{ width: 24, height: 1, background: '#000' }} />
        </button>
      </nav>

      {/* Mobile Menu logic... kept simple for now */}
      
      <style dangerouslySetInnerHTML={{__html: `
        .nav-link {
          position: relative;
          color: #000;
          text-decoration: none;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 1px;
          bottom: -4px;
          left: 0;
          background: #000;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .nav-link:hover::after {
          transform: scaleX(1);
          transform-origin: left;
        }
        .nav-cta-btn {
          background: #000;
          color: #fff;
          padding: 0.8rem 1.5rem;
          border-radius: 4px;
        }
        @media (max-width: 1024px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
      `}} />
      </>
  )
}
