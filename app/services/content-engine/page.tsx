import { FlipWords } from "@/components/ui/flip-words";
import { TallyLeadForm } from "@/components/TallyLeadForm";
import { TrustBanner } from "@/components/TrustBanner";
import { ServiceCTAButton } from "@/components/ServiceCTAButton";

export const metadata = {
  title: 'Content Engine & Automation | MyBuilder.ca',
  description: 'Automate your content creation and distribution. Our content engine creates, schedules, and optimizes your marketing content across multiple platforms.',
}

export default function ContentEnginePage() {
  return (
    <>
      {/* Hero Section with Flip Words */}
      <section className="min-h-[60vh] flex justify-center items-center px-4 bg-gradient-to-br from-muted via-white to-muted">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-5xl md:text-7xl font-bold text-dark mb-6">
            Create
            <FlipWords 
              words={["engaging", "viral", "converting", "automated"]} 
              className="text-primary"
            />{" "}
            content
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Stop spending hours on content creation. Our AI-powered content engine 
            creates, schedules, and distributes engaging content across all your platforms automatically.
          </p>
          <div className="flex justify-center">
            <ServiceCTAButton 
              text="Start Creating Content" 
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
              Your Content Engine Never Sleeps
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              While you focus on running your business, our content engine works 24/7 to create, 
              optimize, and distribute content that drives engagement and conversions. 
              No more content droughts or last-minute scrambling for posts.
            </p>
            
            {/* Content Types */}
            <div className="grid md:grid-cols-4 gap-6 mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📝</span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">Blog Posts</h3>
                <p className="text-gray-600 text-sm">SEO-optimized articles that rank and convert</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📱</span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">Social Media</h3>
                <p className="text-gray-600 text-sm">Engaging posts for all major platforms</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📧</span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">Email Campaigns</h3>
                <p className="text-gray-600 text-sm">Personalized newsletters and sequences</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-dark mb-2">Case Studies</h3>
                <p className="text-gray-600 text-sm">Compelling stories that build trust</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">
              How Our Content Engine Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">AI Content Creation</h4>
                <p className="text-gray-600 text-sm">
                  Our AI analyzes your industry, competitors, and audience to create 
                  engaging, relevant content that resonates with your target market.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Smart Scheduling</h4>
                <p className="text-gray-600 text-sm">
                  Content is automatically scheduled at optimal times across all platforms 
                  for maximum engagement and reach.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Performance Optimization</h4>
                <p className="text-gray-600 text-sm">
                  We continuously analyze performance and optimize content strategy 
                  to improve engagement and conversions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">
            Content Engine Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                🤖
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">AI-Powered Creation</h3>
              <p className="text-gray-600">Advanced AI that understands your brand voice and creates content that sounds like you wrote it.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                ⏰
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Smart Scheduling</h3>
              <p className="text-gray-600">Automatically posts at optimal times when your audience is most active and engaged.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                📈
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Performance Analytics</h3>
              <p className="text-gray-600">Detailed insights into what content performs best and why, so we can optimize your strategy.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                🔄
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Multi-Platform Distribution</h3>
              <p className="text-gray-600">Automatically adapts and distributes content across all your social media and marketing channels.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Audience Targeting</h3>
              <p className="text-gray-600">Creates content specifically tailored to your target audience's interests and pain points.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                📊
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">SEO Optimization</h3>
              <p className="text-gray-600">All content is optimized for search engines to help you rank higher and attract more organic traffic.</p>
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
              <div className="text-4xl font-bold text-primary mb-2">10x</div>
              <p className="text-gray-600">More content output</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50%</div>
              <p className="text-gray-600">Time saved on content creation</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <p className="text-gray-600">Higher engagement rates</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Content creation and distribution</p>
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
