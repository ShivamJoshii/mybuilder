export const metadata = {
  title: 'Terms of Service | MyBuilder.ca',
  description: 'Read our terms of service and conditions for using MyBuilder.ca services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-8">
            Terms of Service
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-CA')}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">1. Acceptance of Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing and using MyBuilder.ca ("we," "our," or "us"), you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">2. Services</h2>
              <p className="text-gray-700 mb-4">
                MyBuilder.ca provides the following services:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Website development and design</li>
                <li>SEO and content marketing</li>
                <li>AI receptionist services</li>
                <li>Content engine and automation</li>
                <li>Digital marketing consulting</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">3. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                Payment terms are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>All prices are in Canadian Dollars (CAD)</li>
                <li>Payment is due upon project completion unless otherwise agreed</li>
                <li>We accept payment via credit card, bank transfer, and other approved methods</li>
                <li>Late payments may result in service suspension</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">4. Project Terms</h2>
              <p className="text-gray-700 mb-4">
                For website and development projects:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Project scope and deliverables will be defined in a separate agreement</li>
                <li>Timeline estimates are provided in good faith but may vary</li>
                <li>Client feedback and approval is required at key milestones</li>
                <li>Revisions are included as specified in the project agreement</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">5. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                Intellectual property rights are as follows:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Final deliverables become client property upon full payment</li>
                <li>We retain rights to showcase work in our portfolio</li>
                <li>Third-party assets remain under their respective licenses</li>
                <li>Custom code and designs are transferred to client upon completion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Our liability is limited to the amount paid for services. We are not liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of profits or business opportunities</li>
                <li>Data loss or security breaches</li>
                <li>Third-party service interruptions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">7. Termination</h2>
              <p className="text-gray-700 mb-4">
                Either party may terminate services with written notice:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>For ongoing services: 30 days written notice required</li>
                <li>For projects: termination may result in partial refund</li>
                <li>Immediate termination for breach of terms</li>
                <li>Client remains responsible for work completed</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">8. Confidentiality</h2>
              <p className="text-gray-700 mb-4">
                We maintain strict confidentiality regarding:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Client business information and strategies</li>
                <li>Project details and specifications</li>
                <li>Financial information and pricing</li>
                <li>Any information marked as confidential</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">9. Governing Law</h2>
              <p className="text-gray-700 mb-4">
                These terms are governed by the laws of Alberta, Canada. Any disputes will be resolved in the courts of Edmonton, Alberta.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-dark mb-4">10. Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms, contact us at:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@mybuilder.ca<br />
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

