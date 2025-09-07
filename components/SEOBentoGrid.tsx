"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IconSearch, IconTrendingUp, IconChartBar, IconTarget } from "@tabler/icons-react";

export function SEOBentoGrid() {
  const features = [
    {
      title: "Keyword Research & Strategy",
      description:
        "We identify the most valuable keywords your target audience is searching for and create a comprehensive strategy.",
      skeleton: <KeywordSkeleton />,
      className:
        "col-span-1 lg:col-span-4 border-b lg:border-r dark:border-neutral-800",
    },
    {
      title: "Content Marketing",
      description:
        "Engaging blog posts, case studies, and educational content that positions you as an industry expert.",
      skeleton: <ContentSkeleton />,
      className: "border-b col-span-1 lg:col-span-2 dark:border-neutral-800",
    },
    {
      title: "Technical SEO",
      description:
        "Optimize your website's technical foundation for search engines and improve your search rankings.",
      skeleton: <TechnicalSkeleton />,
      className:
        "col-span-1 lg:col-span-3 lg:border-r dark:border-neutral-800",
    },
    {
      title: "Local SEO",
      description:
        "Dominate local search results and attract customers in your area with targeted local SEO strategies.",
      skeleton: <LocalSkeleton />,
      className: "col-span-1 lg:col-span-3 border-b lg:border-none",
    },
  ];
  
  return (
    <div className="relative z-20 py-10 lg:py-20 max-w-7xl mx-auto">
      <div className="px-8">
        <h4 className="text-3xl lg:text-5xl lg:leading-tight max-w-5xl mx-auto text-center tracking-tight font-medium text-black dark:text-white">
          SEO that drives real results
        </h4>

        <p className="text-sm lg:text-base max-w-2xl my-4 mx-auto text-neutral-500 text-center font-normal dark:text-neutral-300">
          From keyword research to content creation, we help you rank higher in search results and attract qualified leads.
        </p>
      </div>

      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-6 mt-12 xl:border rounded-md dark:border-neutral-800">
          {features.map((feature) => (
            <FeatureCard key={feature.title} className={feature.className}>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
              <div className="h-full w-full">{feature.skeleton}</div>
            </FeatureCard>
          ))}
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn(`p-4 sm:p-8 relative overflow-hidden`, className)}>
      {children}
    </div>
  );
};

const FeatureTitle = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p className="max-w-5xl mx-auto text-left tracking-tight text-black dark:text-white text-xl md:text-2xl md:leading-snug">
      {children}
    </p>
  );
};

const FeatureDescription = ({ children }: { children?: React.ReactNode }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base max-w-4xl text-left mx-auto",
        "text-neutral-500 text-center font-normal dark:text-neutral-300",
        "text-left max-w-sm mx-0 md:text-sm my-2"
      )}
    >
      {children}
    </p>
  );
};

const KeywordSkeleton = () => {
  const keywords = [
    "Edmonton real estate",
    "new homes Edmonton",
    "custom builders",
    "luxury homes",
    "construction services",
    "property development"
  ];

  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <IconSearch className="h-6 w-6 text-primary" />
            <h3 className="text-lg font-semibold">Popular Keywords</h3>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {keywords.map((keyword, idx) => (
              <motion.div
                key={keyword}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-primary/10 text-primary px-3 py-2 rounded-lg text-sm font-medium"
              >
                {keyword}
              </motion.div>
            ))}
          </div>
          <div className="flex items-center space-x-2 mt-4">
            <IconTrendingUp className="h-5 w-5 text-green-500" />
            <span className="text-sm text-gray-600">Search volume increasing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContentSkeleton = () => {
  const articles = [
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const imageVariants = {
    whileHover: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
    whileTap: {
      scale: 1.05,
      rotate: 0,
      zIndex: 100,
    },
  };
  
  return (
    <div className="relative flex flex-col items-start p-8 gap-6 h-full overflow-hidden">
      <div className="flex flex-row -ml-16">
        {articles.map((article, idx) => (
          <motion.div
            variants={imageVariants}
            key={"articles" + idx}
            style={{
              rotate: Math.random() * 10 - 5,
            }}
            whileHover="whileHover"
            whileTap="whileTap"
            className="rounded-xl -mr-6 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
          >
            <img
              src={article}
              alt="Blog articles"
              width="300"
              height="200"
              className="rounded-lg h-24 w-32 md:h-32 md:w-40 object-cover shrink-0"
            />
          </motion.div>
        ))}
      </div>

      <div className="absolute left-0 z-[100] inset-y-0 w-16 bg-gradient-to-r from-white dark:from-black to-transparent h-full pointer-events-none" />
      <div className="absolute right-0 z-[100] inset-y-0 w-16 bg-gradient-to-l from-white dark:from-black to-transparent h-full pointer-events-none" />
    </div>
  );
};

const TechnicalSkeleton = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          <div className="flex items-center justify-center h-full">
            <IconChartBar className="h-32 w-32 text-primary" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Page Speed</span>
              <span className="text-sm font-semibold text-green-500">95/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">SEO Score</span>
              <span className="text-sm font-semibold text-blue-500">98/100</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '98%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const LocalSkeleton = () => {
  return (
    <div className="relative flex py-8 px-2 gap-10 h-full">
      <div className="w-full p-5 mx-auto bg-white dark:bg-neutral-900 shadow-2xl group h-full">
        <div className="flex flex-1 w-full h-full flex-col space-y-4">
          <div className="flex items-center justify-center h-full">
            <IconTarget className="h-32 w-32 text-primary" />
          </div>
          <div className="text-center space-y-2">
            <div className="text-2xl font-bold text-primary">Edmonton</div>
            <div className="text-sm text-gray-600">Local Search Results</div>
            <div className="flex justify-center space-x-1">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
