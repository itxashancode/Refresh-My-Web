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
import { CustomCursor } from '@/components/ui/CustomCursor'

export default function Home() {
  return (
    <main style={{ paddingBottom: '0', overflowX: 'hidden' }}>
      {/* Global custom cursor — renders above all other content */}
      <CustomCursor />

      <Navbar />

      {/* Hero: no SectionWrapper — manages its own entrance animation */}
      <Hero />

      <MarqueeReel />

      <SectionWrapper>
        <Services />
      </SectionWrapper>

      <SectionWrapper>
        <Showcase />
      </SectionWrapper>

      {/* Process: no SectionWrapper — uses sticky scroll container (height: 300vh) */}
      <Process />

      {/* TeamSection: no SectionWrapper — dark full-bleed section */}
      <TeamSection />

      <SectionWrapper>
        <Testimonials />
      </SectionWrapper>

      <SectionWrapper>
        <FAQ />
      </SectionWrapper>

      {/* Contact: no SectionWrapper — dark full-bleed section */}
      <Contact />

      <Footer />
      <ExitIntent />
    </main>
  )
}


