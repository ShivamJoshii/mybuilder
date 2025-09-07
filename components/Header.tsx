'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, ArrowRight, User } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navigation, siteConfig } from '@/lib/data'
import { signIn, signOut } from 'next-auth/react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [session, setSession] = useState<any>(null)
  const [status, setStatus] = useState('loading')

  // Handle session state for both App Router and Pages Router
  useEffect(() => {
    const getSession = async () => {
      try {
        const response = await fetch('/api/auth/session')
        const data = await response.json()
        setSession(data.user ? data : null)
        setStatus(data.user ? 'authenticated' : 'unauthenticated')
      } catch (error) {
        setStatus('unauthenticated')
      }
    }
    getSession()
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-rainbow p-1">
              <div className="h-full w-full rounded-md bg-white flex items-center justify-center">
                <span className="text-sm font-bold text-primary">MB</span>
              </div>
            </div>
            <span className="text-xl font-bold text-dark">MyBuilder.ca</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <div key={item.title} className="relative">
                {item.children ? (
                  <div
                    className="flex items-center space-x-1 cursor-pointer group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors">
                      {item.title}
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500 group-hover:text-primary transition-colors" />
                    
                    <AnimatePresence>
                      {activeDropdown === item.title && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-lg border border-gray-100 py-2"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:text-primary hover:bg-gray-50 transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            {session ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  {session.user?.image && (
                    <img
                      src={session.user.image}
                      alt={session.user.name || 'User'}
                      className="w-8 h-8 rounded-full"
                    />
                  )}
                  <div className="text-sm">
                    <p className="font-medium text-dark">{session.user?.name}</p>
                  </div>
                </div>
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <span>Dashboard</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm font-medium"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <>
                <button
                  onClick={() => signIn("google")}
                  className="text-sm font-medium text-gray-700 hover:text-primary transition-colors flex items-center space-x-1"
                >
                  <User className="h-4 w-4" />
                  <span>Sign In</span>
                </button>
                <Link
                  href="/contact"
                  className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-gray-100"
            >
              <div className="py-4 space-y-4">
                {navigation.map((item) => (
                  <div key={item.title}>
                    {item.children ? (
                      <div>
                        <div className="text-sm font-medium text-gray-700 mb-2">
                          {item.title}
                        </div>
                        <div className="pl-4 space-y-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.title}
                              href={child.href}
                              onClick={closeMenu}
                              className="block text-sm text-gray-600 hover:text-primary transition-colors"
                            >
                              {child.title}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={closeMenu}
                        className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
                
                <div className="pt-4 border-t border-gray-100 space-y-3">
                  {session ? (
                    <>
                      <div className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        {session.user?.image && (
                          <img
                            src={session.user.image}
                            alt={session.user.name || 'User'}
                            className="w-8 h-8 rounded-full"
                          />
                        )}
                        <div>
                          <p className="text-sm font-medium text-dark">{session.user?.name}</p>
                          <p className="text-xs text-gray-500">{session.user?.email}</p>
                        </div>
                      </div>
                      <Link
                        href="/dashboard"
                        onClick={closeMenu}
                        className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          closeMenu()
                          signOut({ callbackUrl: "/" })
                        }}
                        className="w-full bg-red-500 text-white px-6 py-2 rounded-full text-sm font-medium text-center"
                      >
                        Sign Out
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        onClick={() => {
                          closeMenu()
                          signIn("google")
                        }}
                        className="block text-sm font-medium text-gray-700 hover:text-primary transition-colors w-full text-left"
                      >
                        Sign In
                      </button>
                      <Link
                        href="/contact"
                        onClick={closeMenu}
                        className="block bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium text-center"
                      >
                        Get Started
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
