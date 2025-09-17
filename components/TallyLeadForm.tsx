'use client'

import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'
import { siteConfig } from '@/lib/data'
import { useState, useEffect } from 'react'

export function TallyLeadForm() {
  const [shouldLoadForm, setShouldLoadForm] = useState(false)

  useEffect(() => {
    // Load form after a delay to prioritize other content
    const timer = setTimeout(() => {
      setShouldLoadForm(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Tally Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-muted rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
                <div className="w-full h-auto">
                  {shouldLoadForm ? (
                    <iframe
                      src="https://tally.so/r/waRk1y"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      marginHeight={0}
                      marginWidth={0}
                      title="Contact Form"
                      className="rounded-xl"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center">
                      <div className="text-gray-500">Loading form...</div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

