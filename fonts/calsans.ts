import { Inter } from 'next/font/google'

// Fallback to Inter font since CalSans might not be available
export const calsans = Inter({
  subsets: ['latin'],
  variable: '--font-calsans',
})
