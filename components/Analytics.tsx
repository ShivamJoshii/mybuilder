'use client'

export function Analytics() {
  return (
    <>
      {/* Plausible Analytics */}
      <script
        defer
        data-domain="mybuilder.ca"
        src="https://plausible.io/js/script.js"
      />
      
      {/* Google Analytics (if needed) */}
      {/* <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `,
        }}
      /> */}
    </>
  )
}

