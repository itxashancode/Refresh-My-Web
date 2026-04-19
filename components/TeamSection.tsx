'use client'
import React from 'react'
import Image from 'next/image'
import { ExternalLink } from 'lucide-react'

const team = [
  { name: 'Alex Rivera', role: 'Creative Director', bio: 'Specializes in high-contrast editorial design and branding systems.', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400' },
  { name: 'Sarah Chen', role: 'Lead Engineer', bio: 'Expert in Next.js performance and complex motion orchestration.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400' },
  { name: 'Marcus Thorne', role: 'Strategy Lead', bio: 'Transforming legacy business models into digital-first survivors.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400' },
  { name: 'Elena Vance', role: 'UX Architect', bio: 'Connecting human behavior with machine precision through design.', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400' },
]

export function TeamSection() {
  return (
    <section id="team" style={{ background: '#000', color: '#fff', padding: '10rem clamp(1.5rem, 5vw, 6rem)' }}>
      <div style={{ marginBottom: '6rem' }}>
        <h2 className="font-syne" style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 800, textTransform: 'uppercase', lineHeight: 1 }}>
          The <i style={{ fontWeight: 400, fontStyle: 'italic' }}>Brains</i> <br /> Behind The Craft
        </h2>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
        gap: '2rem' 
      }}>
        {team.map((member, i) => (
          <div 
            key={i} 
            className="team-card-container"
            style={{ 
              perspective: '1000px',
              height: '450px'
            }}
          >
            <div className="team-card-inner">
              {/* Front */}
              <div className="team-card-front" style={{ background: '#111', border: '1px solid #222', position: 'relative' }}>
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: 'cover', filter: 'grayscale(1)' }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                  <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.2rem' }}>{member.name}</h3>
                  <p className="font-syne" style={{ fontSize: '0.7rem', fontWeight: 800, opacity: 0.5, letterSpacing: '0.1rem', textTransform: 'uppercase' }}>{member.role}</p>
                </div>
              </div>

              {/* Back */}
              <div className="team-card-back" style={{ background: '#fff', color: '#000', border: '1px solid #000', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className="font-syne" style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem' }}>{member.name}</h3>
                <p className="font-syne" style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>{member.bio}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {['GitHub', 'Twitter / X', 'LinkedIn'].map((label) => (
                    <a
                      key={label}
                      href="#"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 700, color: '#000' }}
                    >
                      <ExternalLink size={14} />
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .team-card-container {
          cursor: pointer;
        }
        .team-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.8s cubic-bezier(0.33, 1, 0.68, 1);
          transform-style: preserve-3d;
        }
        .team-card-container:hover .team-card-inner {
          transform: rotateY(180deg);
        }
        .team-card-front, .team-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          overflow: hidden;
        }
        .team-card-back {
          transform: rotateY(180deg);
        }
      `}} />
    </section>
  )
}

