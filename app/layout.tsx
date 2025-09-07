import type { Metadata } from 'next'
import React from 'react'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Footer } from '@/components/Footer'
import { Analytics } from '@/components/Analytics'
import { FloatingNavigation } from '@/components/FloatingNavigation'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'MyBuilder.ca - Home to Canada\'s Best Business Builders',
    template: '%s | MyBuilder.ca'
  },
  description: 'Professional websites, SEO, content marketing, and AI solutions for real estate builders and small businesses in Edmonton, Canada.',
  keywords: ['website design', 'SEO', 'content marketing', 'AI receptionist', 'Edmonton', 'real estate', 'business builders'],
  authors: [{ name: 'MyBuilder.ca' }],
  creator: 'MyBuilder.ca',
  publisher: 'MyBuilder.ca',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mybuilder.ca'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: 'https://mybuilder.b-cdn.net/Untitled%20design%20(1).png',
    shortcut: 'https://mybuilder.b-cdn.net/Untitled%20design%20(1).png',
    apple: 'https://mybuilder.b-cdn.net/Untitled%20design%20(1).png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://mybuilder.ca',
    title: 'MyBuilder.ca - Home to Canada\'s Best Business Builders',
    description: 'Professional websites, SEO, content marketing, and AI solutions for real estate builders and small businesses in Edmonton, Canada.',
    siteName: 'MyBuilder.ca',
    images: [
      {
        url: 'https://mybuilder.b-cdn.net/Untitled%20design%20(1).png',
        width: 1200,
        height: 630,
        alt: 'MyBuilder.ca - Professional Business Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyBuilder.ca - Home to Canada\'s Best Business Builders',
    description: 'Professional websites, SEO, content marketing, and AI solutions for real estate builders and small businesses in Edmonton, Canada.',
    images: ['https://mybuilder.b-cdn.net/Untitled%20design%20(1).png'],
    creator: '@mybuilder_ca',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  other: {
    // Tally Form Meta Tags
    'tally-form-url': 'https://tally.so/r/waRk1y',
    'tally-form-title': 'Ready To Get Started?',
    'tally-form-description': 'Made with Tally, the simplest way to create forms.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <div className="relative flex min-h-screen flex-col">
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
        <FloatingNavigation />
        <Analytics />
      </body>
    </html>
  )
}
