"use client";
import React from "react";
import { calsans } from "@/fonts/calsans";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-4xl mx-auto antialiased pt-4 relative">
        {content.map((item, index) => (
          <div key={`content-${index}`} className="mb-16">
            <h2 className="bg-gradient-primary text-white rounded-full text-sm w-fit px-4 py-1 mb-6">
              {item.badge}
            </h2>

            <p className={twMerge(calsans.className, "text-2xl mb-6 font-semibold text-dark")}>
              {item.title}
            </p>

            <div className="text-base prose prose-lg dark:prose-invert max-w-none">
              {item?.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  height="600"
                  width="800"
                  className="rounded-2xl mb-8 object-cover w-full"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </TracingBeam>
  );
}

const content = [
  {
    title: "Professional Website Development",
    description: (
      <>
        <p className="text-gray-700 leading-relaxed">
          Your ideal customers are searching for solutions right now – but they're finding your competition instead.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          While you're busy running your business, potential clients are typing their problems into Google. They're ready to buy, credit card in hand. But if you're not showing up on page one, you might as well be invisible.
        </p>
      </>
    ),
    badge: "Websites",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "SEO & Content Marketing",
    description: (
      <>
        <p className="text-gray-700 leading-relaxed">
          We Turn Search Traffic Into Revenue
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Forget vanity metrics. We focus on one thing: getting you more customers through organic search.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Here's how we make it happen:
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Phase 1: Target the Right Keywords</strong><br/>
          We identify the exact terms your best customers use when they're ready to buy – not just high-volume keywords that waste your time.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Phase 2: Establish Your Authority</strong><br/>
          Through strategic blog posts, case studies, and optimized pages, we position your business as the obvious choice in your market.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Phase 3: Optimize for Results</strong><br/>
          Our technical SEO ensures Google can find, crawl, and rank your content while your pages convert visitors into leads.
        </p>
      </>
    ),
    badge: "SEO & Blogs",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "AI-Powered Business Solutions",
    description: (
      <>
        <p className="text-gray-700 leading-relaxed">
          Your AI Receptionist Never Takes a Sick Day
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          While you sleep, our AI is answering calls, booking appointments, and qualifying leads.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Stop losing customers to voicemail. Our AI receptionist handles every inquiry professionally, 24/7 – even when your team goes home.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>What Your AI Assistant Does:</strong>
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Never Miss a Lead</strong> → Answers every call, text, and chat instantly<br/>
          <strong>Qualify Prospects</strong> → Asks the right questions to identify your best customers<br/>
          <strong>Book Appointments</strong> → Syncs with your calendar and confirms meetings automatically<br/>
          <strong>Route Inquiries</strong> → Sends complex questions to the right team member
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Plus, it gets smarter with every conversation.
        </p>
      </>
    ),
    badge: "AI Solutions",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Real Estate & Business Growth",
    description: (
      <>
        <p className="text-gray-700 leading-relaxed">
          Edmonton's Most Trusted Digital Marketing for Builders & Small Business
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          We know your market. We know your customers. We get you results.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>For Real Estate Builders</strong><br/>
          Turn browsers into buyers with websites that showcase your craftsmanship and close deals.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Your custom showcase site will:</strong>
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          Feature your best projects with stunning visuals<br/>
          Capture leads from "new homes Edmonton" searches<br/>
          Build trust with testimonials and virtual tours<br/>
          Convert visitors into qualified prospects
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          <strong>Result:</strong> More pre-sales, faster lot turnover, higher profit margins.
        </p>
      </>
    ),
    badge: "Edmonton Focus",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
