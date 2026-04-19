'use client'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MagneticButton } from './ui/MagneticButton'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activePath, setActivePath] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'SERVICES', href: '#services' },
    { label: 'SHOWCASE', href: '#showcase' },
    { label: 'PROCESS', href: '#process' },
    { label: 'TEAM', href: '#team' },
    { label: 'CONTACT', href: '#contact' }
  ]

  const navVariants = {
    hidden: { y: -100 },
    visible: { y: 0, transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const } }
  }

  const menuVariants = {
    closed: { x: '100%' },
    open: { x: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } }
  }

  // linkVariants is computed inline per item to avoid TS function variant issues

  return (
    <>
      <motion.nav 
        initial="hidden"
        animate="visible"
        variants={navVariants}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 0, 0, 0.1)' : '1px solid transparent',
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          padding: '0 clamp(1.5rem, 5vw, 6rem)',
          justifyContent: 'space-between',
          transition: 'background 0.3s, border 0.3s'
        }}
      >
        <div style={{ flex: 1 }}>
          <a href="#home" className="font-syne" style={{ fontSize: '1.2rem', fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase', color: '#000' }}>
            Refresh<i>my</i>web
          </a>
        </div>

        {/* Desktop Nav */}
        <ul className="desktop-nav" style={{ display: 'flex', gap: '3rem', listStyle: 'none' }}>
          {links.map((link, i) => (
            <li key={i} style={{ position: 'relative' }}>
              <a 
                href={link.href} 
                className="font-syne nav-link" 
                onClick={() => setActivePath(link.href)}
                style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', padding: '0.5rem 0' }}
              >
                {link.label}
                {activePath === link.href && (
                  <motion.div 
                    layoutId="underline"
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: '#000'
                    }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem' }}>
          <div className="desktop-nav">
          <MagneticButton href="#contact" className="nav-cta-btn">
            <span className="font-syne" style={{ fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.1em' }}>REACH OUT</span>
          </MagneticButton>
          </div>
          
          {/* Mobile Hamburger */}
          <button className="hamburger" onClick={() => setMobileOpen(true)} style={{ display: 'none' }}>
            <Menu size={24} color="#000" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              background: '#000',
              zIndex: 10000,
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '4rem' }}>
              <button onClick={() => setMobileOpen(false)}>
                <X size={32} color="#fff" />
              </button>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {links.map((link, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.5, ease: 'easeOut' }}
                >
                  <a 
                    href={link.href} 
                    onClick={() => setMobileOpen(false)}
                    className="font-syne" 
                    style={{ fontSize: '3rem', fontWeight: 800, color: '#fff', textTransform: 'uppercase' }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <style dangerouslySetInnerHTML={{__html: `
        .nav-link {
          position: relative;
          color: #000;
          text-decoration: none;
        }
        .nav-link:hover {
          opacity: 0.7;
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

