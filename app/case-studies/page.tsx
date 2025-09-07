import React from 'react'
import { Metadata } from 'next'
import { ArrowRight, Star, TrendingUp, Users, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Case Studies - Successful Projects and Client Results',
  description: 'See how we\'ve helped real estate builders and small businesses in Edmonton achieve their online goals with our professional solutions.',
  keywords: ['case studies', 'portfolio', 'client results', 'success stories', 'Edmonton web design'],
}

const caseStudies = [
  {
    id: '1',
    title: 'United Health Care Centre',
    description: 'AI receptionist setup from A to Z - complete automation solution for healthcare operations',
    results: ['Significant reduction in staffing costs', 'Staff freed up for critical thinking tasks instead of repetitive administrative work', 'Enhanced patient satisfaction and experience'],
    image: '/case-studies/healthcare-centre.jpg',
    category: 'Healthcare',
    duration: '4 months',
    notionLink: 'https://www.notion.so/Case-Study-1-2633c7c55c5a8092b998ff901407fbb2'
  },
  {
    id: '2',
    title: 'Castle Stone Custom Homes',
    description: 'Professional website development with comprehensive SEO optimization for a custom home builder',
    results: ['Significant increase in Google search rankings', 'Substantial growth in website traffic and visitor engagement', 'Enhanced online presence and lead generation'],
    image: '/case-studies/castle-stone-homes.jpg',
    category: 'Real Estate',
    duration: '3 months',
    notionLink: 'https://www.notion.so/Case-Study-2-2633c7c55c5a80008ccce7657726ed17',
    websiteUrl: 'https://castlestonecustomhomes.com'
  },
  {
    id: '3',
    title: 'Top Rated Tiles',
    description: 'Professional website development and SEO optimization for a leading tile company',
    results: ['Notable improvement in Google search rankings', 'Increased website traffic and customer engagement', 'Enhanced online visibility and lead generation'],
    image: '/case-studies/top-rated-tiles.jpg',
    category: 'Home Improvement',
    duration: '3 months',
    notionLink: 'https://www.notion.so/Case-Study-3-2633c6c55c5a80618889e4d05b6957c6'
  },
]

export default function CaseStudiesPage() {
  return (
    <>
      <div className="pt-20 pb-16 bg-gradient-to-br from-muted via-white to-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Success <span className="gradient-text">Stories</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              See how we've helped real estate builders and small businesses in Edmonton achieve their online goals.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <div
                key={study.id}
                className="bg-muted rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">{study.title}</h3>
                  <p className="text-gray-600 mb-4">{study.description}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {study.category}
                    </span>
                    <span>{study.duration}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <h4 className="font-semibold text-dark">Key Results:</h4>
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{result}</span>
                    </div>
                  ))}
                </div>

                {study.notionLink ? (
                  <div className="space-y-3">
                    <a
                      href={study.notionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-dark text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2"
                    >
                      <span>View Full Case Study</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    {study.websiteUrl && (
                      <a
                        href={study.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-primary text-white py-3 px-6 rounded-xl font-semibold hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                      >
                        <span>Visit Website</span>
                        <ArrowRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                ) : (
                  <button className="w-full bg-dark text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors flex items-center justify-center space-x-2">
                    <span>View Full Case Study</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-8">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let's discuss how we can help you achieve similar results for your business.
            </p>
            <button className="bg-gradient-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
