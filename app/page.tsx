import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { TrustBanner } from '@/components/TrustBanner'
import { Automation } from '@/components/Automation'
import { Testimonials } from '@/components/Testimonials'
import { PricingTable } from '@/components/PricingTable'
import { TallyLeadForm } from '@/components/TallyLeadForm'
import { TracingBeamDemo } from '@/components/TracingBeamDemo'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <TracingBeamDemo />
      <Testimonials />
      <TallyLeadForm />
    </>
  )
}
