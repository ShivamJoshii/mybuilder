import { Metadata } from 'next'
import { Services } from '@/components/Services'
import { TrustBanner } from '@/components/TrustBanner'
import { LeadForm } from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Services - Professional Websites, SEO, Content Marketing & AI Solutions',
  description: 'Comprehensive digital solutions for real estate builders and small businesses in Edmonton. Professional websites, SEO, content marketing, and AI receptionist services.',
  keywords: ['website design Edmonton', 'SEO services Edmonton', 'content marketing', 'AI receptionist', 'real estate marketing'],
}

export default function ServicesPage() {
  return (
    <>
      <div className="pt-20 pb-16 bg-gradient-to-br from-muted via-white to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive digital solutions designed to grow your business and establish your online presence in Edmonton and beyond.
            </p>
          </div>
        </div>
      </div>
      <Services />
      <TrustBanner />
      <LeadForm />
    </>
  )
}

