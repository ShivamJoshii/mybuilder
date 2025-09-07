import { Metadata } from 'next'
import { PricingTable } from '@/components/PricingTable'
import { TrustBanner } from '@/components/TrustBanner'
import { LeadForm } from '@/components/LeadForm'

export const metadata: Metadata = {
  title: 'Pricing - Simple, Transparent Pricing for Business Solutions',
  description: 'Choose the perfect plan for your business. Professional websites, SEO, content marketing, and AI solutions with transparent pricing for Edmonton businesses.',
  keywords: ['pricing', 'website pricing Edmonton', 'SEO pricing', 'business solutions pricing'],
}

export default function PricingPage() {
  return (
    <>
      <div className="pt-20 pb-16 bg-gradient-to-br from-muted via-white to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Simple, <span className="gradient-text">Transparent</span> Pricing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Choose the perfect plan for your business. All plans include our core features and dedicated support.
            </p>
          </div>
        </div>
      </div>
      <PricingTable />
      <TrustBanner />
      <LeadForm />
    </>
  )
}

