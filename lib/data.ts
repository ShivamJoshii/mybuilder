import { Service, PricingTier, Testimonial, Integration, WorkflowStep, NavItem, FooterSection } from '@/types'

export const services: Service[] = [
  {
    id: 'websites',
    title: 'Professional Websites',
    description: 'Custom, high-converting websites built for real estate builders and small businesses in Edmonton.',
    features: [
      'Custom design tailored to your brand',
      'Mobile-first responsive design',
      'SEO optimized for local search',
      'Fast loading and secure',
      'Content management system',
      'Analytics and tracking setup'
    ],
    icon: 'Globe',
    priceType: 'one-time'
  },
  {
    id: 'seo-blogs',
    title: 'SEO + Content Engine',
    description: 'Drive organic traffic and establish authority with strategic SEO and content marketing.',
    features: [
      'Local SEO optimization',
      'Monthly blog content creation',
      'Keyword research and strategy',
      'Google My Business optimization',
      'Backlink building',
      'Monthly performance reports'
    ],
    icon: 'Search',
    priceType: 'monthly'
  },
  {
    id: 'content-engine',
    title: 'Content Engine',
    description: 'Automated content creation and distribution to keep your audience engaged.',
    features: [
      'AI-powered content generation',
      'Social media automation',
      'Email newsletter creation',
      'Content calendar management',
      'Multi-platform publishing',
      'Performance analytics'
    ],
    icon: 'Zap',
    priceType: 'monthly'
  },
  {
    id: 'ai-receptionist',
    title: 'AI Receptionist',
    description: 'Never miss a lead with our intelligent AI that handles calls, texts, and inquiries 24/7.',
    features: [
      '24/7 call and text handling',
      'Lead qualification and routing',
      'Appointment scheduling',
      'FAQ responses',
      'Integration with your CRM',
      'Detailed call analytics'
    ],
    icon: 'MessageCircle',
    priceType: 'monthly',
    popular: true
  }
]

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 500,
    priceType: 'one-time',
    description: 'Perfect for small businesses getting started online.',
    features: [
      '5-page custom website',
      'Mobile responsive design',
      'Basic SEO setup',
      'Contact form',
      'Google Analytics',
      '1 month of support'
    ],
    stripePriceId: 'price_starter'
  },
  {
    id: 'professional',
    name: 'Professional',
    price: 2500,
    priceType: 'one-time',
    description: 'Our most popular package for established businesses.',
    features: [
      '10-page custom website',
      'Advanced SEO optimization',
      'Content management system',
      'Blog setup',
      'Social media integration',
      '3 months of support',
      'Performance optimization'
    ],
    popular: true,
    stripePriceId: 'price_professional'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 5000,
    priceType: 'one-time',
    description: 'Complete digital transformation for growing companies.',
    features: [
      'Unlimited pages',
      'Custom functionality',
      'E-commerce integration',
      'Advanced analytics',
      'Priority support',
      'Monthly maintenance',
      'Performance monitoring'
    ],
    stripePriceId: 'price_enterprise'
  }
]

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    company: 'Edmonton Builders Co.',
    role: 'CEO',
    content: 'MyBuilder.ca transformed our online presence. Our website now generates 3x more leads than before, and the AI receptionist never misses a call.',
    image: '/testimonials/sarah.jpg',
    rating: 5
  },
  {
    id: '2',
    name: 'Mike Chen',
    company: 'Alberta Real Estate',
    role: 'Founder',
    content: 'The SEO and content engine has been a game-changer. We\'re ranking #1 for our target keywords and getting consistent organic traffic.',
    image: '/testimonials/mike.jpg',
    rating: 5
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    company: 'Urban Development Group',
    role: 'Marketing Director',
    content: 'Professional, reliable, and results-driven. The team at MyBuilder.ca understands the real estate industry and delivers exactly what we need.',
    image: '/testimonials/lisa.jpg',
    rating: 5
  }
]

export const integrations: Integration[] = [
  {
    id: '1',
    name: 'HubSpot',
    logo: '/integrations/hubspot.svg',
    description: 'CRM and marketing automation',
    category: 'CRM'
  },
  {
    id: '2',
    name: 'Salesforce',
    logo: '/integrations/salesforce.svg',
    description: 'Customer relationship management',
    category: 'CRM'
  },
  {
    id: '3',
    name: 'Mailchimp',
    logo: '/integrations/mailchimp.svg',
    description: 'Email marketing platform',
    category: 'Marketing'
  },
  {
    id: '4',
    name: 'Google Analytics',
    logo: '/integrations/google-analytics.svg',
    description: 'Website analytics and tracking',
    category: 'Analytics'
  },
  {
    id: '5',
    name: 'Stripe',
    logo: '/integrations/stripe.svg',
    description: 'Payment processing',
    category: 'Payments'
  },
  {
    id: '6',
    name: 'Zapier',
    logo: '/integrations/zapier.svg',
    description: 'Workflow automation',
    category: 'Automation'
  }
]

export const workflowSteps: WorkflowStep[] = [
  {
    id: '1',
    title: 'Discovery & Strategy',
    description: 'We analyze your business goals, target audience, and current online presence to create a customized strategy.',
    icon: 'Target',
    order: 1
  },
  {
    id: '2',
    title: 'Design & Development',
    description: 'Our team creates a beautiful, functional website that converts visitors into customers.',
    icon: 'Palette',
    order: 2
  },
  {
    id: '3',
    title: 'Launch & Optimize',
    description: 'We launch your website and continuously optimize for better performance and conversions.',
    icon: 'Rocket',
    order: 3
  },
  {
    id: '4',
    title: 'Grow & Scale',
    description: 'Ongoing support, content creation, and marketing to help your business grow online.',
    icon: 'TrendingUp',
    order: 4
  }
]

export const navigation: NavItem[] = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Services',
    href: '/services',
    children: [
      { title: 'Websites', href: '/services/websites' },
      { title: 'SEO + Blogs', href: '/services/seo-blogs' },
      { title: 'Content Engine', href: '/services/content-engine' },
      { title: 'AI Receptionist', href: '/services/ai-receptionist' }
    ]
  },
  {
    title: 'Pricing',
    href: '/pricing'
  },
  {
    title: 'Case Studies',
    href: '/case-studies'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
]

export const footerSections: FooterSection[] = [
  {
    title: 'Services',
    links: [
      { title: 'Websites', href: '/services/websites' },
      { title: 'SEO + Blogs', href: '/services/seo-blogs' },
      { title: 'Content Engine', href: '/services/content-engine' },
      { title: 'AI Receptionist', href: '/services/ai-receptionist' }
    ]
  },
  {
    title: 'Company',
    links: [
      { title: 'About', href: '/about' },
      { title: 'Case Studies', href: '/case-studies' },
      { title: 'Contact', href: '/contact' }
    ]
  },
  {
    title: 'Support',
    links: [
      { title: 'Help Center', href: '/help' },
      { title: 'Privacy Policy', href: '/privacy' },
      { title: 'Terms of Service', href: '/terms' },
      { title: 'Cookie Policy', href: '/cookies' }
    ]
  },
  {
    title: 'Connect',
    links: [
      { title: 'LinkedIn', href: 'https://linkedin.com/company/mybuilder-ca', external: true },
      { title: 'Twitter', href: 'https://twitter.com/mybuilder_ca', external: true },
      { title: 'Facebook', href: 'https://facebook.com/mybuilder.ca', external: true }
    ]
  }
]

export const siteConfig = {
  name: 'MyBuilder.ca',
  description: 'Home to Canada\'s best business builders. Professional websites, SEO, content marketing, and AI solutions for real estate builders and small businesses in Edmonton.',
  url: 'https://mybuilder.ca',
  ogImage: 'https://mybuilder.ca/og-image.jpg',
  links: {
    twitter: 'https://twitter.com/mybuilder_ca',
    linkedin: 'https://linkedin.com/company/mybuilder-ca',
    facebook: 'https://facebook.com/mybuilder.ca'
  },
  contact: {
    email: 'hello@mybuilder.ca',
    phone: '8257707771',
    address: 'Edmonton, Alberta, Canada'
  }
}

