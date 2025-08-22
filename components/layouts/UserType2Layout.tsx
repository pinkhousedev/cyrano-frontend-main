import React from 'react';
import FlipSection from '../sections/FlipSection';
import SmartClient from '../sections/SmartClient';
import DashboardSection from '../sections/DashboardSection';
import LoremIpsumSection from '../sections/LoremIpsumSection';
import FeaturesSection from '../sections/FeaturesSection';
import FooterImage from "../sections/FooterImage";

 const dashboardImages = {
    backgroundImage: { src: '/assets/image 380.png', alt: 'Dashboard Background'},
    phoneImage: { src: '/assets/Rectangle.png', alt: 'Phone Mockup'},
  };

  // 0_1 9.png
const smartClientImage1 = {
    src: "/assets/0_1 9.png",
    alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
    width: 500,
    height: 500
  };

const smartClientImage = {
    src: "https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/image_407_4408fc43ae.png",
    alt: "Two stylized cats with thought bubble and heart, surrounded by swirling white lines",
    width: 500,
    height: 500
  };

const flipSectionImage1 = {
  src: "https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/0_0_10_4498e85dae.png",
  alt: "Three cats in a magical forest setting with glowing elements and dreamy atmosphere",
  width: 500,
  height: 500
};

  const catIllustrationImages = {
    largeImage: {
      src: "https://cyrano-pamphlet-backend-2b44.onrender.com/uploads/0_0_9_4b7230cd1b.png",
      alt: "Large illustration of three stylized cats in a magical glowing environment with purple, pink, and blue colors",
      width: 1200,
      height: 600
    }
  };

const UserType2Layout = () => {
  return (
    <div>
      <FlipSection sectionImage={flipSectionImage1} reversed = {true}/>
      <SmartClient illustrationImage={smartClientImage1} />
        <DashboardSection 
        backgroundImage={dashboardImages.backgroundImage} 
        phoneImage={dashboardImages.phoneImage} 
        phonePosition="center" // Can be "left", "center", or "right"
      />
      <SmartClient illustrationImage={smartClientImage} reversed={true}/>
      <LoremIpsumSection />
      <FeaturesSection />
      <FooterImage footerImage={catIllustrationImages.largeImage} />

    </div>
  );
};

export default UserType2Layout;
