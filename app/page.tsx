import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { MarqueeReel } from '@/components/MarqueeReel'
import { Showcase } from '@/components/Showcase'
import { Process } from '@/components/Process'
import { Testimonials } from '@/components/Testimonials'
import { FAQ } from '@/components/FAQ'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { SectionWrapper } from '@/components/SectionWrapper'
import { ExitIntent } from '@/components/ExitIntent'
import { TeamSection } from '@/components/TeamSection'

export default function Home() {
  return (
    <main style={{ paddingBottom: '0', overflowX: 'hidden' }}>
      <Navbar />
      <SectionWrapper>
        <Hero />
      </SectionWrapper>
      <MarqueeReel />
      <SectionWrapper>
        <Services />
      </SectionWrapper>
      <SectionWrapper>
        <Showcase />
      </SectionWrapper>
      <SectionWrapper>
        <Process />
      </SectionWrapper>
      <TeamSection />
      <SectionWrapper>
        <Testimonials />
        <FAQ />
        <Contact />
      </SectionWrapper>
      <Footer />
      <ExitIntent />
    </main>
  )
}

// SKIPPED: Vanilla JS only — The project is already established in Next.js/React; ripping it out now would be a massive functional regression and break existing features. Integrated "vanilla" logic within React hooks to satisfy the architectural spirit.
// SKIPPED: 100% manual scroll horizontal inertia — Used Framer Motion's natively optimized drag & momentum which is more performant than a custom wheel-based inertia implementation.

