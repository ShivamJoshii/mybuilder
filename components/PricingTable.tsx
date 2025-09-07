'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { pricingTiers } from '@/lib/data'
import { cn } from '@/lib/utils'

export function PricingTable() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6"
          >
            Simple, <span className="gradient-text">Transparent</span> Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Choose the perfect plan for your business. All plans include our core features and support.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-4"
          >
            <span className={cn(
              "text-sm font-medium transition-colors",
              billingCycle === 'monthly' ? "text-dark" : "text-gray-500"
            )}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className={cn(
                "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
                billingCycle === 'yearly' ? "bg-primary" : "bg-gray-300"
              )}
            >
              <span
                className={cn(
                  "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
                  billingCycle === 'yearly' ? "translate-x-6" : "translate-x-1"
                )}
              />
            </button>
            <span className={cn(
              "text-sm font-medium transition-colors",
              billingCycle === 'yearly' ? "text-dark" : "text-gray-500"
            )}>
              Yearly
              <span className="ml-1 text-xs bg-primary text-white px-2 py-1 rounded-full">
                Save 20%
              </span>
            </span>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={cn(
                "relative bg-white rounded-2xl p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl",
                tier.popular
                  ? "border-primary scale-105"
                  : "border-gray-200 hover:border-primary/50"
              )}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white text-sm font-semibold px-4 py-2 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-dark mb-2">{tier.name}</h3>
                <p className="text-gray-600 mb-6">{tier.description}</p>
                
                {/* Price */}
                <div className="mb-6">
                  <div className="text-4xl font-bold text-dark">
                    ${tier.price.toLocaleString()}
                  </div>
                  <div className="text-gray-500">
                    {tier.priceType === 'one-time' ? 'one-time' : billingCycle === 'monthly' ? 'per month' : 'per month, billed yearly'}
                  </div>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start space-x-3">
                    <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3 w-3 text-white" />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={cn(
                  "w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 flex items-center justify-center space-x-2",
                  tier.popular
                    ? "bg-gradient-primary text-white hover:shadow-lg hover:scale-105"
                    : "bg-dark text-white hover:bg-gray-800"
                )}
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-4">
            Need a custom solution? Let's discuss your requirements.
          </p>
          <button className="text-primary font-semibold hover:text-primary/80 transition-colors">
            Contact Us for Custom Pricing
          </button>
        </motion.div>
      </div>
    </section>
  )
}

