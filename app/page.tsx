import { Hero } from '@/components/Hero'
import dynamic from 'next/dynamic'

// Lazy load components that are not critical for initial render
const Services = dynamic(() => import('@/components/Services').then(mod => ({ default: mod.Services })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const TracingBeamDemo = dynamic(() => import('@/components/TracingBeamDemo').then(mod => ({ default: mod.TracingBeamDemo })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const Testimonials = dynamic(() => import('@/components/Testimonials').then(mod => ({ default: mod.Testimonials })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

const TallyLeadForm = dynamic(() => import('@/components/TallyLeadForm').then(mod => ({ default: mod.TallyLeadForm })), {
  loading: () => <div className="h-96 bg-gray-50 animate-pulse" />,
})

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
