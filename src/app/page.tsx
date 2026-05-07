/* g:\RefreshMyWeb\src\app\page.tsx */
import {
  Navbar,
  Hero,
  StatsBar,
  BeforeAfter,
  ProblemSection,
  FeatureGrid,
  ProductShowcase,
  Services,
  SystemCTA,
  GrowthSupport,
  TrafficConversion,
  BetterLeads,
  DecisionsData,
  ProcessTimeline,
  Pricing,
  FAQ,
  FinalCTA,
  Footer
} from "@/components/sections";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black">
      <Hero />
      <StatsBar />
      <BeforeAfter />
      <ProblemSection />
      <FeatureGrid />
      <ProductShowcase />
      <Services />
      <SystemCTA />
      <GrowthSupport />
      <TrafficConversion />
      <BetterLeads />
      <DecisionsData />
      <ProcessTimeline />
      <Pricing />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
