'use client';

import React, { useState } from 'react';
import ApplyFormSection from '@/components/sections/ApplyFormSection';
import SmartClient from '@/components/sections/SmartClient';
import DashboardSection from '@/components/sections/DashboardSection';
import CatIllustrationSection from '@/components/sections/CatIllustrationSection';
import CatFeatureSection from '@/components/sections/CatFeatureSection';
import IntroCard from '@/components/sections/IntroCard';
import FooterImage from '@/components/sections/FooterImage';
import GiftShopModal from '@/components/modals/GiftShopModal';

  const catIllustrationImages = {
    smallImage: {
      src: "https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/image_430_3d0186fe03.png",
      alt: "Three stylized cats with glowing pink elements and magical atmosphere",
      width: 400,
      height: 300
    },
     smallImage1: {
      src: "https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/image_279_70ac8d7b67.png",
      alt: "Three stylized cats with glowing pink elements and magical atmosphere",
      width: 400,
      height: 300
    },
    largeImage: {
      src: "https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/0_3_17_71851fa55c.png",
      alt: "Large illustration of three stylized cats in a magical glowing environment with purple, pink, and blue colors",
      width: 1200,
      height: 600
    }
  };

  
  const testimonialImage = {
    src: "https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/unsplash_W_No_Ln_Jo7t_S8_1129bba579.png",
    alt: "Profile image for testimonials",
    width: 128,
    height: 128
  };

 const testimonials = [
    {
      text: "\"I did a few verification checks and they tested my ability, now I am able to find people a partner for life. I always loved hooking my friends up... now I can do it for money. Truly a case of finding my calling! No but the extra money is really well received by my family, plus working from home allows me to take better care them.\"",
      name: "Frank",
      subtitle: "Lorem ipsum dolor sit amet, con"
    }
  ];
  
const UserType1Layout = () => {
  const applyFormImage = { src: '/assets/cute.png', alt: 'Apply Form Illustration', width: 400, height: 400 };
  const smartClientImage = { src: 'https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/image_352_d0074b9b0b.png', alt: 'Smart Client Illustration', width: 500, height: 400 };
  
  const dashboardImages = {
    backgroundImage: { src: 'https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/Untitled_3_1_953cb845ec.png', alt: 'Dashboard Background'},
    phoneImage: { src: 'https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/Rectangle_44573f115b.png', alt: 'Phone Mockup'},
  };
  const catFeatureImage = { src: 'https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/image_292_2f1b34f0c9.png', alt: 'Cat illustration with glowing elements and magical atmosphere', width: 800, height: 600 };

  const [isGiftShopModalOpen, setIsGiftShopModalOpen] = useState(false);

  const handleApplyToMatch = () => {
    setIsGiftShopModalOpen(true);
  };
  return (
    <div className={isGiftShopModalOpen ? 'pointer-events-none' : ''}>
       <ApplyFormSection illustrationImage={applyFormImage} onApplyToMatch={handleApplyToMatch} />
      <SmartClient illustrationImage={smartClientImage} />
      <DashboardSection 
        backgroundImage={dashboardImages.backgroundImage} 
        phoneImage={dashboardImages.phoneImage} 
        phonePosition="center" // Can be "left", "center", or "right"
      />
      <CatFeatureSection catImage={catFeatureImage} />
      <CatIllustrationSection smallImage={catIllustrationImages.smallImage}/>
      <CatIllustrationSection smallImage={catIllustrationImages.smallImage1} reversed={false}/>
      <IntroCard testimonialImage={testimonialImage} testimonials={testimonials} />
      <FooterImage footerImage={catIllustrationImages.largeImage} />
      
      {/* Modal with pointer events enabled */}
      <div className={isGiftShopModalOpen ? 'pointer-events-auto' : ''}>
        <GiftShopModal isOpen={isGiftShopModalOpen} onClose={() => setIsGiftShopModalOpen(false)} />
      </div>
    </div>
  );
};

export default UserType1Layout;
