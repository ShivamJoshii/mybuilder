'use client'

import { useEffect } from 'react'

export function Analytics() {
  useEffect(() => {
    // Load analytics after page is fully loaded
    const loadAnalytics = () => {
      const script = document.createElement('script')
      script.defer = true
      script.setAttribute('data-domain', 'mybuilder.ca')
      script.src = 'https://plausible.io/js/script.js'
      document.head.appendChild(script)
    }

    // Load analytics after a delay to prioritize page content
    const timer = setTimeout(loadAnalytics, 2000)
    
    return () => clearTimeout(timer)
  }, [])

  return null
}

