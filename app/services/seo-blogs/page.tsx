import { FlipWords } from "@/components/ui/flip-words";
import { TallyLeadForm } from "@/components/TallyLeadForm";
import { TrustBanner } from "@/components/TrustBanner";
import { SEOBentoGrid } from "@/components/SEOBentoGrid";
import { ServiceCTAButton } from "@/components/ServiceCTAButton";

export const metadata = {
  title: 'SEO & Content Marketing | MyBuilder.ca',
  description: 'Drive organic traffic and generate leads with our comprehensive SEO and content marketing strategies for Edmonton businesses.',
}

export default function SEOPage() {
  return (
    <>
      {/* Hero Section with Flip Words */}
      <section className="min-h-[60vh] flex justify-center items-center px-4 bg-gradient-to-br from-muted via-white to-muted">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-5xl md:text-7xl font-bold text-dark mb-6">
            Drive
            <FlipWords 
              words={["organic", "targeted", "qualified", "consistent"]} 
              className="text-primary"
            />{" "}
            traffic
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            We help you rank higher in search results and attract qualified leads through 
            strategic SEO and compelling content marketing that positions you as an industry expert.
          </p>
          <div className="flex justify-center">
            <ServiceCTAButton 
              text="Start Your SEO Journey" 
              href="/contact"
            />
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6">
                SEO & Content Marketing
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                In today's digital landscape, appearing in search results is crucial for business success. 
                Our comprehensive SEO and content marketing strategies help you attract the right audience 
                and convert them into loyal customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Keyword Research</h3>
                    <p className="text-gray-600">Identify the terms your target audience is searching for</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Content Creation</h3>
                    <p className="text-gray-600">Engaging blog posts, case studies, and educational content</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark">Technical SEO</h3>
                    <p className="text-gray-600">Optimize your website's technical foundation for search engines</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">Our SEO Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Local SEO optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Keyword research & strategy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>On-page SEO optimization</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Content marketing strategy</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Blog post creation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Monthly SEO reports</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Google My Business optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <SEOBentoGrid />

      {/* Content Strategy Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">
            Content Marketing Strategy
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Research & Planning</h3>
              <p className="text-gray-600">We analyze your industry, competitors, and target audience to create a content strategy that drives results.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Content Creation</h3>
              <p className="text-gray-600">Our team creates engaging, SEO-optimized content that educates your audience and builds trust.</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Distribution & Promotion</h3>
              <p className="text-gray-600">We promote your content across multiple channels to maximize reach and engagement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">
            What You Can Expect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">300%</div>
              <p className="text-gray-600">Average increase in organic traffic</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-gray-600">More qualified leads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">80%</div>
              <p className="text-gray-600">Improvement in search rankings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Content working for you</p>
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
