'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PageData } from '@/interfaces/page.interface';

interface AndroidAppLayoutProps {
  page: PageData;
}

const AndroidAppLayout: React.FC<AndroidAppLayoutProps> = ({ page }) => {
  if (!page) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GET THE ANDROID APP
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Download our Android app for the best mobile experience.
            </p>
            <div className="mt-8">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Find the hero section
  const heroSection = page.sections?.find(section => 
    section.__component === "sections.android-hero"
  );

  // If no hero section found, show default content
  if (!heroSection) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GET THE ANDROID APP
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Download our Android app for the best mobile experience.
            </p>
            <div className="mt-8">
              <button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Get background class based on Strapi data
  const getBackgroundClass = () => {
    switch (heroSection.backgroundGradient) {
      case 'purple':
        return 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900';
      case 'blue':
        return 'bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900';
      case 'green':
        return 'bg-gradient-to-br from-gray-900 via-green-900 to-gray-900';
      default:
        return 'bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900';
    }
  };

  return (
    <div className={`min-h-screen ${getBackgroundClass()}`}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            {heroSection.title || "GET THE ANDROID APP"}
          </motion.h1>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {heroSection.subtitle || "Download our Android app for the best mobile experience."}
          </motion.p>
          
          {/* Download Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <a
              href={heroSection.buttonUrl || "#"}
              className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors inline-block"
            >
              {heroSection.buttonText || "Download for Android"}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AndroidAppLayout;
