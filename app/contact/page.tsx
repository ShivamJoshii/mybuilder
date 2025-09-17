import { Metadata } from 'next'
import { TallyLeadForm } from '@/components/TallyLeadForm'

export const metadata: Metadata = {
  title: 'Contact Us - Get Started with Your Project',
  description: 'Ready to start your project? Contact MyBuilder.ca for professional websites, SEO, content marketing, and AI solutions in Edmonton.',
  keywords: ['contact', 'get quote', 'website consultation', 'Edmonton web design'],
}

export default function ContactPage() {
  return (
    <>
      <TallyLeadForm />
    </>
  )
}

