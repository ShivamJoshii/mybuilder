export interface Service {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
  price?: number
  priceType?: 'one-time' | 'monthly' | 'yearly'
  popular?: boolean
}

export interface PricingTier {
  id: string
  name: string
  price: number
  priceType: 'one-time' | 'monthly' | 'yearly'
  description: string
  features: string[]
  popular?: boolean
  stripePriceId?: string
}

export interface CaseStudy {
  id: string
  title: string
  description: string
  client: string
  industry: string
  results: string[]
  image: string
  slug: string
  publishedAt: string
  content: string
}

export interface BlogPost {
  id: string
  title: string
  description: string
  slug: string
  publishedAt: string
  author: string
  image: string
  content: string
  tags: string[]
}

export interface Lead {
  id: string
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
  createdAt: string
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost'
}

export interface ContactForm {
  name: string
  email: string
  phone?: string
  company?: string
  service: string
  message: string
}

export interface NavItem {
  title: string
  href: string
  external?: boolean
  children?: NavItem[]
}

export interface FooterLink {
  title: string
  href: string
  external?: boolean
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface Testimonial {
  id: string
  name: string
  company: string
  role: string
  content: string
  image: string
  rating: number
}

export interface Integration {
  id: string
  name: string
  logo: string
  description: string
  category: string
}

export interface WorkflowStep {
  id: string
  title: string
  description: string
  icon: string
  order: number
}

