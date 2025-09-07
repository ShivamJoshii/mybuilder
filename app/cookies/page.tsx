export const metadata = {
  title: 'Cookie Policy | MyBuilder.ca',
  description: 'Learn about how MyBuilder.ca uses cookies and similar technologies to improve your experience.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Cookie Policy
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-CA')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                analyzing how you use our site, and personalizing content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
                <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Types of Cookies We Use</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-dark mb-3">Essential Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are necessary for the website to function and cannot be disabled. They include:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Authentication cookies</li>
                  <li>Security cookies</li>
                  <li>Session management cookies</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-dark mb-3">Analytics Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies help us understand how visitors interact with our website:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Google Analytics cookies</li>
                  <li>Plausible Analytics cookies</li>
                  <li>Performance monitoring cookies</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-dark mb-3">Functional Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies enhance your experience by remembering your preferences:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Language preferences</li>
                  <li>Theme settings</li>
                  <li>Form data (temporarily)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold text-dark mb-3">Marketing Cookies</h3>
                <p className="text-gray-700 mb-2">
                  These cookies are used to deliver relevant advertisements:
                </p>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Social media cookies</li>
                  <li>Advertising platform cookies</li>
                  <li>Retargeting cookies</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Third-Party Cookies</h2>
              <p className="text-gray-700 mb-4">
                We may use third-party services that place their own cookies on your device:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                <li><strong>Plausible Analytics:</strong> Privacy-focused website analytics</li>
                <li><strong>Social Media:</strong> Facebook, Twitter, LinkedIn integration</li>
                <li><strong>Payment Processors:</strong> Stripe for payment processing</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Managing Your Cookie Preferences</h2>
              <p className="text-gray-700 mb-4">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings</li>
                <li><strong>Cookie Consent:</strong> Use our cookie consent banner to manage preferences</li>
                <li><strong>Third-Party Opt-Out:</strong> Visit third-party websites to opt out of their cookies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Cookie Duration</h2>
              <p className="text-gray-700 mb-4">
                Cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period</li>
                <li><strong>Third-Party Cookies:</strong> Duration set by the third-party service</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Accept or decline non-essential cookies</li>
                <li>Delete existing cookies from your device</li>
                <li>Set your browser to block certain types of cookies</li>
                <li>Request information about the cookies we use</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Updates to This Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for other operational, legal, or regulatory reasons. We will notify you of any 
                material changes by posting the new policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have any questions about our use of cookies, please contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacy@mybuilder.ca<br />
                  <strong>Phone:</strong> +1 (780) 555-0123<br />
                  <strong>Address:</strong> Edmonton, Alberta, Canada
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

