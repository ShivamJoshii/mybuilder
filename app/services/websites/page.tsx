import { FlipWords } from "@/components/ui/flip-words";
import { TracingBeamDemo } from "@/components/TracingBeamDemo";
import { TallyLeadForm } from "@/components/TallyLeadForm";
import { TrustBanner } from "@/components/TrustBanner";
import { WebsitesBentoGrid } from "@/components/WebsitesBentoGrid";
import { ServiceCTAButton } from "@/components/ServiceCTAButton";

export const metadata = {
  title: 'Professional Website Development | MyBuilder.ca',
  description: 'Custom websites that convert. We build stunning, high-performance websites for real estate builders and small businesses in Edmonton.',
}

export default function WebsitesPage() {
  return (
    <>
      {/* Hero Section with Flip Words */}
      <section className="min-h-[60vh] flex justify-center items-center px-4 bg-gradient-to-br from-muted via-white to-muted">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-5xl md:text-7xl font-bold text-dark mb-6">
            Build
            <FlipWords 
              words={["stunning    ", "converting  ", "professional", "modern      "]} 
              className="text-primary"
            />{" "}
            websites
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We create custom websites that don't just look great—they drive results. 
            From real estate showcases to e-commerce platforms, we build websites that convert visitors into customers.
          </p>
          <div className="flex justify-center">
            <ServiceCTAButton 
              text="Learn More" 
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
              A Good Website Isn't Built—It's Maintained
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              Think about the websites you love: Apple, Google, Amazon. These "good" websites wouldn't stay good 
              if someone stopped updating them. Your website isn't a book—it's like your face. 
              Just like you keep your face clean (we hope so! 😄), you've got to make sure your website is too.
            </p>
            
            {/* Example Websites */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">Apple</h3>
                <p className="text-gray-600">Constantly updated with new products, features, and content</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
              <div className="w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">Google</h3>
                <p className="text-gray-600">Daily updates, new features, and algorithm improvements</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-gray-200">
                  <span className="text-2xl font-bold text-black">A</span>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">Amazon</h3>
                <p className="text-gray-600">Continuous optimization, new products, and user experience updates</p>
              </div>
            </div>
          </div>

          {/* How We Make Your Website */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">
              This Is How We Make Your Website
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Free Build</h4>
                <p className="text-gray-600 text-sm">
                  Build cost is <span className="font-semibold text-primary">FREE</span>. We take a security deposit 
                  that's promptly returned at launch.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Choose Your Plan</h4>
                <p className="text-gray-600 text-sm">
                  Pick the maintenance pack that fits your needs. We have options for every business size.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">We Handle Everything</h4>
                <p className="text-gray-600 text-sm">
                  Our engineers run daily audits, send weekly summaries, manage ads, add blogs, and much more.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Dominate Google</h4>
                <p className="text-gray-600 text-sm">
                  Rank high, be seen, and dominate your market. We make sure you're always ahead of the competition.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <WebsitesBentoGrid />

      {/* Process Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">
            Our Website Development Process
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Discovery</h3>
              <p className="text-gray-600">We learn about your business, goals, and target audience to create the perfect strategy.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Design</h3>
              <p className="text-gray-600">We create custom designs that reflect your brand and engage your visitors.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Development</h3>
              <p className="text-gray-600">We build your website using modern technologies and best practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Launch</h3>
              <p className="text-gray-600">We deploy your website and provide training to help you manage it effectively.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <TrustBanner />

      {/* Lead Form */}
      <TallyLeadForm />
    </>
  );
}
