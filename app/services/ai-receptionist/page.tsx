import { FlipWords } from "@/components/ui/flip-words";
import { TallyLeadForm } from "@/components/TallyLeadForm";
import { TrustBanner } from "@/components/TrustBanner";
import { ServiceCTAButton } from "@/components/ServiceCTAButton";

export const metadata = {
  title: 'AI Receptionist | MyBuilder.ca',
  description: 'Never miss a call or lead again. Our AI receptionist provides 24/7 customer support, answers questions, and qualifies leads automatically.',
}

export default function AIReceptionistPage() {
  return (
    <>
      {/* Hero Section with Flip Words */}
      <section className="min-h-[60vh] flex justify-center items-center px-4 bg-gradient-to-br from-muted via-white to-muted">
        <div className="text-center max-w-4xl mx-auto">
          <div className="text-5xl md:text-7xl font-bold text-dark mb-6">
            Your
            <FlipWords 
              words={["24/7", "intelligent", "friendly", "professional"]} 
              className="text-primary"
            />{" "}
            receptionist
          </div>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Never miss a call or lead again. Our AI receptionist works around the clock to 
            answer questions, qualify leads, and provide exceptional customer service.
          </p>
          <div className="flex justify-center">
            <ServiceCTAButton 
              text="Get Your AI Receptionist" 
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
              Your Business Never Sleeps
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-4xl mx-auto">
              While you're sleeping, traveling, or focused on other tasks, your AI receptionist 
              is working tirelessly to capture leads, answer customer questions, and provide 
              support. It's like having a perfect employee who never takes breaks or calls in sick.
            </p>
            
            {/* AI Capabilities */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">💬</span>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">24/7 Chat Support</h3>
                <p className="text-gray-600">Instant responses to customer inquiries at any time of day or night</p>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">📞</span>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">Call Handling</h3>
                <p className="text-gray-600">Professional call answering, routing, and message taking</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-dark mb-2">Lead Qualification</h3>
                <p className="text-gray-600">Automatically qualifies leads and schedules appointments</p>
              </div>
            </div>
          </div>

          {/* How It Works */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark text-center mb-12">
              How Your AI Receptionist Works
            </h3>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Customer Reaches Out</h4>
                <p className="text-gray-600 text-sm">
                  Whether by phone, chat, or email, your AI receptionist is always ready to respond.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">AI Analyzes & Responds</h4>
                <p className="text-gray-600 text-sm">
                  Our AI understands the inquiry and provides helpful, accurate responses instantly.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Qualifies & Routes</h4>
                <p className="text-gray-600 text-sm">
                  Leads are qualified and routed to the right team member or scheduled for follow-up.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="text-lg font-semibold text-dark mb-3">Follows Up</h4>
                <p className="text-gray-600 text-sm">
                  Automated follow-up ensures no lead falls through the cracks.
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
            AI Receptionist Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                🕐
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Never miss a customer inquiry, even at 3 AM on a Sunday.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                🧠
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Smart Learning</h3>
              <p className="text-gray-600">Gets smarter with every interaction, improving responses over time.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                🎭
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Brand Personality</h3>
              <p className="text-gray-600">Speaks in your brand's voice and maintains your company's tone.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                📊
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Lead Analytics</h3>
              <p className="text-gray-600">Detailed reports on lead quality, response times, and conversion rates.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                🔄
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Multi-Channel Support</h3>
              <p className="text-gray-600">Handles phone calls, live chat, email, and social media messages.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white text-xl font-bold mb-4">
                📅
              </div>
              <h3 className="text-xl font-semibold text-dark mb-3">Appointment Scheduling</h3>
              <p className="text-gray-600">Automatically schedules meetings and appointments based on availability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">
            Perfect For Every Business
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">Real Estate Builders</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Answer questions about new developments</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Schedule property viewings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Qualify potential buyers</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Provide pricing information</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-dark mb-4">Small Businesses</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Handle customer service inquiries</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Process orders and bookings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Answer product questions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="text-primary">✓</span>
                  <span>Schedule consultations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-dark text-center mb-16">
            Transform Your Customer Service
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">0</div>
              <p className="text-gray-600">Missed calls or leads</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <p className="text-gray-600">Customer support</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <p className="text-gray-600">Faster response times</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">3x</div>
              <p className="text-gray-600">More qualified leads</p>
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
