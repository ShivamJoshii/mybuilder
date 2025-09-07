'use client'

import { motion } from 'framer-motion'
import { Search, MessageCircle, Phone, Mail } from 'lucide-react'

export default function HelpPage() {
  const faqs = [
    {
      question: "How long does it take to build a website?",
      answer: "Website development typically takes 2-4 weeks depending on the complexity and number of pages. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide ongoing support after launch?",
      answer: "Yes! We offer various maintenance packages to keep your website secure, updated, and performing optimally. This includes security updates, content updates, and performance monitoring."
    },
    {
      question: "Can you help with SEO and content marketing?",
      answer: "Absolutely! Our SEO and content engine services help you rank higher in search results and attract more organic traffic. We create optimized content and implement proven SEO strategies."
    },
    {
      question: "How does the AI receptionist work?",
      answer: "Our AI receptionist handles calls, texts, and inquiries 24/7. It can answer questions, qualify leads, schedule appointments, and route urgent matters to your team. It integrates with your existing systems and learns from every interaction."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We stand behind our work with a satisfaction guarantee. If you're not happy with the results, we'll work with you to make it right. Your success is our success."
    },
    {
      question: "Do you work with businesses outside of Edmonton?",
      answer: "While we're based in Edmonton and specialize in serving local businesses, we work with clients across Alberta and Canada. Our digital services can help any business grow online."
    }
  ]

  const contactMethods = [
    {
      title: "Email Support",
      description: "Get help via email within 24 hours",
      icon: Mail,
      contact: "support@mybuilder.ca",
      href: "mailto:support@mybuilder.ca"
    },
    {
      title: "Phone Support",
      description: "Speak with our team directly",
      icon: Phone,
      contact: "+1 (780) 555-0123",
      href: "tel:+17805550123"
    },
    {
      title: "Live Chat",
      description: "Chat with us in real-time",
      icon: MessageCircle,
      contact: "Available 9 AM - 5 PM MST",
      href: "#"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-muted via-white to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-dark mb-6"
            >
              How Can We <span className="gradient-text">Help You?</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-gray-600 mb-8 leading-relaxed"
            >
              Find answers to common questions, get support, and learn how to make the most of our services.
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="max-w-2xl mx-auto"
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for help articles..."
                  className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-full focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to the most common questions about our services.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-muted rounded-2xl p-8"
                >
                  <h3 className="text-xl font-bold text-dark mb-4">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our support team is here to help you succeed. Get in touch with us through any of these channels.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 text-center shadow-lg"
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.href}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  {method.contact}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              Helpful Resources
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our services and how to maximize your results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-muted rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-dark mb-4">Getting Started Guide</h3>
              <p className="text-gray-600 mb-4">
                Learn how to get the most out of your new website and digital marketing services.
              </p>
              <a href="/blog" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Read Guide →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-muted rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-dark mb-4">Case Studies</h3>
              <p className="text-gray-600 mb-4">
                See how other businesses have achieved success with our services.
              </p>
              <a href="/case-studies" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                View Cases →
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-muted rounded-2xl p-8"
            >
              <h3 className="text-xl font-bold text-dark mb-4">Blog & Tips</h3>
              <p className="text-gray-600 mb-4">
                Stay updated with the latest digital marketing trends and tips.
              </p>
              <a href="/blog" className="text-primary font-semibold hover:text-primary/80 transition-colors">
                Read Blog →
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
