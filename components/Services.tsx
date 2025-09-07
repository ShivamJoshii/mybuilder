'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Globe, Search, Zap, MessageCircle, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { services } from '@/lib/data'
import { cn } from '@/lib/utils'

const iconMap = {
  Globe,
  Search,
  Zap,
  MessageCircle,
}

export function Services() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4 sm:mb-6"
          >
            Our <span className="gradient-text">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive digital solutions designed to grow your business and establish your online presence.
          </motion.p>
        </div>

        {/* Feature Tabs */}
        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {/* Tab List */}
          <div className="lg:col-span-1">
            <div className="space-y-2">
              {services.map((service, index) => {
                const Icon = iconMap[service.icon as keyof typeof iconMap]
                return (
                  <motion.button
                    key={service.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    onClick={() => setActiveTab(index)}
                    className={cn(
                      "w-full text-left p-6 rounded-2xl transition-all duration-300 hover:shadow-lg",
                      activeTab === index
                        ? "bg-gradient-primary text-white shadow-lg"
                        : "bg-muted text-gray-700 hover:bg-gray-100"
                    )}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={cn(
                        "w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0",
                        activeTab === index
                          ? "bg-white/20"
                          : "bg-white shadow-sm"
                      )}>
                        <Icon className={cn(
                          "h-6 w-6",
                          activeTab === index ? "text-white" : "text-primary"
                        )} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className={cn(
                          "text-sm leading-relaxed",
                          activeTab === index ? "text-white/90" : "text-gray-600"
                        )}>
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Content Panel */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full"
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-dark mb-4">
                    {services[activeTab].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {services[activeTab].description}
                  </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4 mb-8">
                  {services[activeTab].features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start space-x-3 p-4 bg-muted rounded-xl"
                    >
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Pricing and CTA */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-gray-200">
                  <div>
                    {services[activeTab].price && (
                      <div className="text-2xl font-bold text-dark">
                        {services[activeTab].priceType === 'one-time' ? '$' : ''}
                        {services[activeTab].price?.toLocaleString()}
                        {services[activeTab].priceType === 'monthly' && '/month'}
                        {services[activeTab].priceType === 'yearly' && '/year'}
                      </div>
                    )}
                    {services[activeTab].popular && (
                      <span className="inline-block bg-gradient-accent text-white text-xs font-semibold px-3 py-1 rounded-full mt-2">
                        Most Popular
                      </span>
                    )}
                  </div>
                  <Link
                    href={`/services/${services[activeTab].id}`}
                    className="group bg-dark text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center space-x-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

