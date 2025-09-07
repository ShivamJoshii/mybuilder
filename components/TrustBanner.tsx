'use client'

import { motion } from 'framer-motion'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'

const trustedBrands = [
  {
    quote: "Google Partner",
    name: "Google",
    title: "Official Partner"
  },
  {
    quote: "Microsoft Partner",
    name: "Microsoft",
    title: "Certified Partner"
  },
  {
    quote: "HubSpot Partner",
    name: "HubSpot",
    title: "Solutions Partner"
  },
  {
    quote: "Salesforce Partner",
    name: "Salesforce",
    title: "AppExchange Partner"
  },
  {
    quote: "Shopify Partner",
    name: "Shopify",
    title: "Plus Partner"
  },
  {
    quote: "Stripe Partner",
    name: "Stripe",
    title: "Verified Partner"
  },
  {
    quote: "Mailchimp Partner",
    name: "Mailchimp",
    title: "Certified Partner"
  },
  {
    quote: "Zapier Partner",
    name: "Zapier",
    title: "Integration Partner"
  }
]

export function TrustBanner() {
  return (
    <section className="py-12 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">
            Trusted by leading brands
          </p>
        </motion.div>

        <InfiniteMovingCards
          items={trustedBrands}
          direction="left"
          speed="slow"
          pauseOnHover={true}
          className="max-w-none"
        />
      </div>
    </section>
  )
}
