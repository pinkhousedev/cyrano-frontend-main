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

interface HomeLayoutProps {
  page: PageData;
}

const heroImage = {
  src: "/assets/0_0 26.png",
  alt: "Black cat with glowing blue eyes against a pink moon backdrop with cherry blossoms",
  width: 500,
  height: 500
};

const smartClientImage = {
  src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/0_0_24_1408f7c4a3.png",
  alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
  width: 500,
  height: 500
};



const smartClientImage1 = {
  src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/image_13177a95d8.png",
  alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
  width: 500,
  height: 1000
};

const testimonialImage = {
  src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/unsplash_W_No_Ln_Jo7t_S8_0302f0d8b2.png",
  alt: "Profile image for testimonials",
  width: 128,
  height: 128
};

const flipSectionImage1 = {
  src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/0_0_10_c658a142f7.png",
  alt: "Three cats in a magical forest setting with glowing elements and dreamy atmosphere",
  width: 500,
  height: 500
};

const flipSectionImage = {
  src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/0_1_17_57bd95d854.png",
  alt: "Three cats in a magical forest setting with glowing elements and dreamy atmosphere",
  width: 500,
  height: 500
};


const features = [
  {
    icon: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/one_On_One_4f43622e5b.svg",
    title: "One-on-One",
    description: ["Live agent", "Fully Vetted"]
  },
  {
    icon: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/no_Strings_6f7c4d97d5.svg",
    title: "No Commitment",
    description: ["Pay Model", "Date-to-date"]
  },
  {
    icon: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/International_8920f8e443.svg",
    title: "International Matching",
    description: ["Big pond", "Access geofenced prospects"]
  },
  {
    icon: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/Demographics_b53f4ea05f.svg",
    title: "Specific Demographic",
    description: ["Up to 500 Preferences", "Tailored"]
  },
  {
    icon: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/Component_15_3c0444dc39.svg",
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

const catIllustrationImages = {
  smallImage: {
    src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/image_281_4955cb348c.png",
    alt: "Three stylized cats with glowing pink elements and magical atmosphere",
    width: 400,
    height: 300
  },
  smallImage1: {
    src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/image_284_4de832f1d4.png",
    alt: "Three stylized cats with glowing pink elements and magical atmosphere",
    width: 400,
    height: 300
  },
  footerImage: {
    src: "https://cyrano-pamphlet-backend-s8as.onrender.com/uploads/image_424_374014975b.png",
    alt: "Large illustration of three stylized cats in a magical glowing environment with purple, pink, and blue colors",
    width: 1200,
    height: 600
  }
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
  return (
    <div>
      <HeroSection heroImage={heroImage} />
      <ElevatorPitchSection />
      <SmartClient illustrationImage={smartClientImage} />
      <SmartClient illustrationImage={smartClientImage1} reversed={true} />
      <IntroCard testimonialImage={testimonialImage} testimonials={testimonials} /> 
      <FlipSection sectionImage={flipSectionImage1} />
      <FlipSection sectionImage={flipSectionImage} reversed={true} />
      <FeatureGrid features={features} />
      <CatIllustrationSection smallImage={catIllustrationImages.smallImage} />
      <CatIllustrationSection smallImage={catIllustrationImages.smallImage1} reversed={false} />
      <FooterImage footerImage={catIllustrationImages.footerImage} />
    </div>
  );
};

// export default HomeLayout;