"use client";

import React, { useEffect, useRef, useState } from "react";
import { ServiceCTAButton } from "../../components/ServiceCTAButton";

// Scroll-based animation component
function ScrollAnimatedText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </div>
  );
}

export default function ClinicSavingsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-4 bg-gradient-to-br from-muted via-white to-muted">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollAnimatedText>
            <h1 className="text-4xl md:text-6xl font-bold text-dark mb-16">
              How We Can Save Your Clinic{" "}
              <span className="text-primary">$10,000</span> Every Month
            </h1>
          </ScrollAnimatedText>

          {/* CTA Buttons */}
          <ScrollAnimatedText>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-16">
              <ServiceCTAButton 
                text="Find Out How" 
                href="https://www.notion.so/How-we-can-save-you-10k-a-month-2663c7c55c5a80b0a066f1e5ca39c045?source=copy_link"
                target="_blank"
                rel="noopener noreferrer"
              />
              <ServiceCTAButton text="Get In Touch" href="/contact" />
            </div>
          </ScrollAnimatedText>
        </div>
      </section>
    </>
  );
}
