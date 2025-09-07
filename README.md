# MyBuilder.ca - Professional Business Solutions

A modern, high-converting marketing website for MyBuilder.ca, specializing in professional websites, SEO, content marketing, and AI solutions for real estate builders and small businesses in Edmonton, Canada.

## 🚀 Features

- **Modern Design**: Clean, professional design with gradient accents and smooth animations
- **Responsive**: Mobile-first design that works perfectly on all devices
- **SEO Optimized**: Built with Next.js 14 and optimized for search engines
- **Lead Capture**: Integrated contact forms and lead management
- **Payment Integration**: Stripe checkout for pricing tiers
- **Analytics**: Plausible analytics integration
- **CMS Ready**: MDX support for blog posts and case studies
- **Authentication**: Supabase auth for dashboard access

## 🛠 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Animations**: Framer Motion
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Payments**: Stripe
- **Email**: Resend
- **Analytics**: Plausible
- **Automation**: n8n webhooks
- **Deployment**: Vercel/Netlify ready

## 🎨 Design System

- **Colors**: 
  - Primary: #595bff
  - Secondary: #3ba3ff
  - Accent: #f5c66f
  - Dark: #0b0b10
  - Muted: #f6f7fb
- **Fonts**: Inter (body), Playfair Display (headings), JetBrains Mono (code)
- **UI**: Rounded corners (rounded-2xl), soft shadows, consistent spacing
- **Motion**: Subtle fade/slide animations, motion-safe

## 📁 Project Structure

```
mybuilder-ca-website/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Services.tsx       # Services showcase
│   ├── TrustBanner.tsx    # Trust indicators
│   ├── Automation.tsx     # Integration & workflow
│   ├── Testimonials.tsx   # Customer testimonials
│   ├── PricingTable.tsx   # Pricing tiers
│   ├── LeadForm.tsx       # Contact form
│   ├── Footer.tsx         # Site footer
│   └── Analytics.tsx      # Analytics integration
├── lib/                   # Utility functions
│   ├── utils.ts           # Common utilities
│   └── data.ts            # Static data
├── types/                 # TypeScript definitions
│   └── index.ts           # Type definitions
├── public/                # Static assets
└── design.json            # Design system reference
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mybuilder-ca-website.git
   cd mybuilder-ca-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp env.example .env.local
   ```
   
   Edit `.env.local` with your actual values:
   ```env
   # Supabase Configuration
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

   # Stripe Configuration
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

   # Resend Configuration
   RESEND_API_KEY=your_resend_api_key

   # Plausible Analytics
   NEXT_PUBLIC_PLAUSIBLE_DOMAIN=mybuilder.ca

   # n8n Webhook
   N8N_WEBHOOK_URL=your_n8n_webhook_url

   # Site Configuration
   NEXT_PUBLIC_SITE_URL=https://mybuilder.ca
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗 Building for Production

### Build the application
```bash
npm run build
```

### Start the production server
```bash
npm start
```

### Generate sitemap
```bash
npm run build
npx next-sitemap
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository** to Vercel
2. **Set environment variables** in Vercel dashboard
3. **Deploy** - Vercel will automatically detect Next.js and deploy

### Netlify

1. **Connect your repository** to Netlify
2. **Set build command**: `npm run build`
3. **Set publish directory**: `.next`
4. **Set environment variables** in Netlify dashboard
5. **Deploy**

## 📝 Content Management

### Adding New Services

Edit `lib/data.ts` to add new services:

```typescript
export const services: Service[] = [
  {
    id: 'new-service',
    title: 'New Service',
    description: 'Service description...',
    features: ['Feature 1', 'Feature 2'],
    icon: 'IconName',
    price: 1000,
    priceType: 'one-time'
  }
]
```

### Adding Blog Posts

1. Create MDX files in `content/blog/`
2. Use frontmatter for metadata
3. Posts will automatically appear in the blog section

### Adding Case Studies

1. Create MDX files in `content/case-studies/`
2. Include images in `public/case-studies/`
3. Update `lib/data.ts` with case study metadata

## 🔧 Configuration

### Customizing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
colors: {
  primary: {
    DEFAULT: "#595bff",
    // ... other colors
  }
}
```

### Adding New Pages

1. Create new files in `app/` directory
2. Add routes to navigation in `lib/data.ts`
3. Update sitemap configuration if needed

## 📊 Analytics & SEO

### Plausible Analytics

Analytics are automatically included. Update the domain in your environment variables.

### SEO Optimization

- Meta tags are configured in `app/layout.tsx`
- Sitemap is generated automatically
- Open Graph images are included
- Structured data can be added as needed

## 🔒 Security

- Environment variables for sensitive data
- CSRF protection on forms
- Secure headers configured
- Input validation on all forms

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email hello@mybuilder.ca or create an issue in this repository.

## 🗺 Roadmap

- [ ] Blog CMS integration
- [ ] Case studies management
- [ ] Dashboard for leads
- [ ] Stripe billing portal
- [ ] Email automation
- [ ] Advanced analytics
- [ ] Multi-language support

---

Built with ❤️ by MyBuilder.ca
