import { Metadata } from 'next'
import { TallyLeadForm } from '@/components/TallyLeadForm'
import { TrustBanner } from '@/components/TrustBanner'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with Your Project',
  description: 'Ready to start your project? Contact MyBuilder.ca for professional websites, SEO, content marketing, and AI solutions in Edmonton.',
  keywords: ['contact', 'get quote', 'website consultation', 'Edmonton web design'],
}

export default function ContactPage() {
  return (
    <>
      <div className="pt-20 pb-16 bg-gradient-to-br from-muted via-white to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Let's <span className="gradient-text">Build</span> Something Amazing
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your business online? Get in touch and let's discuss how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
      <TallyLeadForm />
      <TrustBanner />
    </>
  )
}

