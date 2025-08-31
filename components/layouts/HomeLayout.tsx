import React from 'react';
import HeroSection from '@/components/sections/HeroSection';
import SmartClient from '@/components/sections/SmartClient';
import IntroCard from '@/components/sections/IntroCard';
import FlipSection from '@/components/sections/FlipSection';
import FeatureGrid from '@/components/sections/FeatureGrid';
import CatIllustrationSection from '@/components/sections/CatIllustrationSection';
import ElevatorPitchSection from '@/components/sections/ElevatorPitchSection';
import FooterImage from '@/components/sections/FooterImage';
import type { PageData } from "@/interfaces/page.interface";
import type { Section } from "@/interfaces/section.interface";

interface HomeLayoutProps {
  page: PageData;
}

// Array of local images to display sequentially
const localImages = [
  "/assets/0_0 26.png",
  "/assets/0_0 24.png", 
  "/assets/0_0 10.png",
  "/assets/0_1 17.png",
  "/assets/image 281.png",
  "/assets/image 284.png",
  "/assets/image 424.png",
  "/assets/image 430.png",
  "/assets/image 407.png",
  "/assets/image 380.png",
  "/assets/image 352.png",
  "/assets/image 292.png",
  "/assets/image 279.png",
  "/assets/0_3 17.png",
  "/assets/0_2 8.png",
  "/assets/0_1 9.png",
  "/assets/0_0 9.png"
];

// Function to get image sequentially based on block count
const getSequentialImage = (blockIndex: number): string => {
  const imageIndex = blockIndex % localImages.length;
  return localImages[imageIndex];
};

// Function to get alt text for images
const getImageAlt = (blockIndex: number): string => {
  const altTexts = [
    "Black cat with glowing blue eyes against a pink moon backdrop",
    "Two stylized cats with thought bubble and heart",
    "Three cats in a magical forest setting",
    "Cats in a dreamy atmosphere with glowing elements",
    "Three stylized cats with glowing pink elements",
    "Cats with magical atmosphere and glowing effects",
    "Large illustration of three stylized cats in magical environment",
    "Cats in a vibrant magical setting",
    "Cats surrounded by magical elements",
    "Cats in a mystical glowing environment",
    "Cats with ethereal magical effects",
    "Cats in a dreamy magical forest",
    "Cats with mystical glowing atmosphere",
    "Cats in a magical glowing world",
    "Cats with ethereal magical elements",
    "Cats in a mystical environment",
    "Cats with magical glowing effects"
  ];
  const altIndex = blockIndex % altTexts.length;
  return altTexts[altIndex];
};

export default function HomeLayout({ page }: HomeLayoutProps) {
  if (!page) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-zinc-900">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Loading...
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Please wait while we load your content.
          </p>
        </div>
      </div>
    );
  }

  // Get sections from page data
  const sections = (page as { sections?: Section[]; Blocks?: Section[] }).sections || 
                  (page as { sections?: Section[]; Blocks?: Section[] }).Blocks || [];

  // Create dynamic image objects based on section count
  const createDynamicImages = () => {
    const images = [];
    
    // Hero section (always first)
    images.push({
      src: getSequentialImage(0),
      alt: getImageAlt(0),
      width: 500,
      height: 500
    });

    // Smart client sections
    if (sections.length >= 1) {
      images.push({
        src: getSequentialImage(1),
        alt: getImageAlt(1),
        width: 500,
        height: 500
      });
    }

    if (sections.length >= 2) {
      images.push({
        src: getSequentialImage(2),
        alt: getImageAlt(2),
        width: 500,
        height: 1000
      });
    }

    // Testimonial section
    if (sections.length >= 3) {
      images.push({
        src: getSequentialImage(3),
        alt: getImageAlt(3),
        width: 128,
        height: 128
      });
    }

    // Flip section images
    if (sections.length >= 4) {
      images.push({
        src: getSequentialImage(4),
        alt: getImageAlt(4),
        width: 500,
        height: 500
      });
    }

    if (sections.length >= 5) {
      images.push({
        src: getSequentialImage(5),
        alt: getImageAlt(5),
        width: 500,
        height: 500
      });
    }

    // Feature icons (always use SVG icons)
    const featureIcons = [
      "/assets/oneOnOne.svg",
      "/assets/noStrings.svg", 
      "/assets/International.svg",
      "/assets/Demographics.svg",
      "/assets/Component 15.svg"
    ];

    // Cat illustration images
    if (sections.length >= 6) {
      images.push({
        src: getSequentialImage(6),
        alt: getImageAlt(6),
        width: 400,
        height: 300
      });
    }

    if (sections.length >= 7) {
      images.push({
        src: getSequentialImage(7),
        alt: getImageAlt(7),
        width: 400,
        height: 300
      });
    }

    // Footer image
    if (sections.length >= 8) {
      images.push({
        src: getSequentialImage(8),
        alt: getImageAlt(8),
        width: 1200,
        height: 600
      });
    }

    return {
      heroImage: images[0] || { src: "/assets/0_0 26.png", alt: "Default Hero", width: 500, height: 500 },
      smartClientImage: images[1] || { src: "/assets/0_0 24.png", alt: "Default Smart Client", width: 500, height: 500 },
      smartClientImage1: images[2] || { src: "/assets/0_0 10.png", alt: "Default Smart Client 2", width: 500, height: 1000 },
      testimonialImage: images[3] || { src: "/assets/unsplash_WNoLnJo7tS8.png", alt: "Default Testimonial", width: 128, height: 128 },
      flipSectionImage1: images[4] || { src: "/assets/0_1 17.png", alt: "Default Flip 1", width: 500, height: 500 },
      flipSectionImage: images[5] || { src: "/assets/image 281.png", alt: "Default Flip 2", width: 500, height: 500 },
      catIllustrationImages: {
        smallImage: images[6] || { src: "/assets/image 284.png", alt: "Default Small 1", width: 400, height: 300 },
        smallImage1: images[7] || { src: "/assets/image 424.png", alt: "Default Small 2", width: 400, height: 300 },
        footerImage: images[8] || { src: "/assets/image 430.png", alt: "Default Footer", width: 1200, height: 600 }
      },
      featureIcons
    };
  };

  const dynamicImages = createDynamicImages();

  // Create features array with dynamic icons
  const features = [
    {
      icon: dynamicImages.featureIcons[0],
      title: "One-on-One",
      description: ["Live agent", "Fully Vetted"]
    },
    {
      icon: dynamicImages.featureIcons[1],
      title: "No Commitment",
      description: ["Pay Model", "Date-to-date"]
    },
    {
      icon: dynamicImages.featureIcons[2],
      title: "International Matching",
      description: ["Big pond", "Access geofenced prospects"]
    },
    {
      icon: dynamicImages.featureIcons[3],
      title: "Specific Demographic",
      description: ["Up to 500 Preferences", "Tailored"]
    },
    {
      icon: dynamicImages.featureIcons[4],
      title: "And More",
      description: ["Date Coaching", "Post-date Feedback"]
    }
  ];

  const testimonials = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit es",
      name: "Vanessa",
      subtitle: "Lorem ipsum dolor sit amet, conse"
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      name: "Amy",
      subtitle: "Lorem ipsum dolor sit amet, cons"
    },
    {
      text: "\"I did a few verification checks and they tested my ability, now I am able to find people a partner for life. I always loved hooking my friends up... now I can do it for money. Truly a case of finding my calling! No but the extra money is really well received by my family, plus working from home allows me to take better care them.\"",
      name: "Frank",
      subtitle: "Lorem ipsum dolor sit amet, con"
    }
  ];

  return (
    <div>
      {/* Debug Section - Show Section Count and Images */}
      <div className="bg-blue-900/20 p-6 mb-8 border border-blue-500/30">
        <h3 className="text-xl font-semibold text-blue-300 mb-4">🔍 Debug: Section Count & Image Assignment</h3>
        <div className="text-blue-200 text-sm">
          <p><strong>Total Sections from Strapi:</strong> {sections.length}</p>
          <p><strong>Available Local Images:</strong> {localImages.length}</p>
          <div className="mt-4">
            <p><strong>Image Assignment:</strong></p>
            <ul className="list-disc list-inside ml-4">
              <li>Hero: {dynamicImages.heroImage.src}</li>
              <li>Smart Client 1: {dynamicImages.smartClientImage.src}</li>
              <li>Smart Client 2: {dynamicImages.smartClientImage1.src}</li>
              <li>Testimonial: {dynamicImages.testimonialImage.src}</li>
              <li>Flip 1: {dynamicImages.flipSectionImage1.src}</li>
              <li>Flip 2: {dynamicImages.flipSectionImage.src}</li>
              <li>Cat Small 1: {dynamicImages.catIllustrationImages.smallImage.src}</li>
              <li>Cat Small 2: {dynamicImages.catIllustrationImages.smallImage1.src}</li>
              <li>Footer: {dynamicImages.catIllustrationImages.footerImage.src}</li>
            </ul>
          </div>
        </div>
      </div>

      <HeroSection heroImage={dynamicImages.heroImage} />
      <ElevatorPitchSection />
      <SmartClient illustrationImage={dynamicImages.smartClientImage} />
      <SmartClient illustrationImage={dynamicImages.smartClientImage1} reversed={true} />
      <IntroCard testimonialImage={dynamicImages.testimonialImage} testimonials={testimonials} /> 
      <FlipSection sectionImage={dynamicImages.flipSectionImage1} />
      <FlipSection sectionImage={dynamicImages.flipSectionImage} reversed={true} />
      <FeatureGrid features={features} />
      <CatIllustrationSection smallImage={dynamicImages.catIllustrationImages.smallImage} />
      <CatIllustrationSection smallImage={dynamicImages.catIllustrationImages.smallImage1} reversed={false} />
      <FooterImage footerImage={dynamicImages.catIllustrationImages.footerImage} />
    </div>
  );
};