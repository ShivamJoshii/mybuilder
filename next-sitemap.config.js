/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://mybuilder.ca',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://mybuilder.ca/sitemap.xml',
    ],
  },
  exclude: ['/admin/*', '/dashboard/*'],
  changefreq: 'weekly',
  priority: 0.7,
}

