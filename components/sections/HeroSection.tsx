'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Buttons';
import { useEffect, useState } from 'react';
import { getApiUrl, getImageUrl } from '@/lib/utils';

interface HeroSectionProps {
  heroImage: {
    alt: string;
    width: number;
    height: number;
  };
}

interface Article {
  title: string;
  description: string;
  image: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ heroImage }) => {
  const [article, setArticle] = useState<Article>({
    title: '',
    description: '',
    image: ''  
  });
  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(getApiUrl('/articles?filters[slug][$eq]=homepage-hero&populate=*'));
      const data = await response.json();
      const fetchedArticle = data.data[0];
      setArticle({
        title: fetchedArticle.title,
        description: fetchedArticle.description,
        image: fetchedArticle.cover.url
      });
    };
    fetchArticle();
  }, []);
return (
    <section className="w-full bg-[#29252D] flex items-center justify-center px-3 sm:px-4 lg:px-6 pt-10 py-16 lg:py-24 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mt-[100px]">
        {/* Left Section - Illustration */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start order-2 lg:order-1"
        >
          <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl">
            <Image
              src={getImageUrl(article.image)}
              alt={heroImage.alt}
              width={heroImage.width}
              height={heroImage.height}
              className="w-full h-auto object-contain"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-30"></div>
          </div>
        </motion.div>

        {/* Right Section - Text and Buttons */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-center lg:text-left order-1 lg:order-2"
        >
          {/* Main Heading */}
          <div className="relative mb-6 sm:mb-8 lg:mb-12 text-center lg:text-left" style={{textAlign:"center"}}>
                         <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.4 }}
               className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-white leading-tight mb-2 break-words font-medium"
               style={{ fontFamily: 'Gilroy' }}
             >
               Lorem Ipsum
             </motion.h1>
                         <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.5 }}
               className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 break-words font-medium"
               style={{ fontFamily: 'Gilroy' }}
             >
               Lorem Ipsum
             </motion.h1>
                         <motion.h1
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.6, delay: 0.6 }}
               className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-2 break-words font-medium"
               style={{ fontFamily: 'Gilroy' }}
             >
               Dolor
             </motion.h1>
            
            {/* Watermark */}
            <div className="absolute inset-0 flex items-center justify-start lg:justify-start">
              <span style={{fontSize:"160px"}} className="text-6xl sm:text-8xl lg:text-10xl xl:text-12xl 4xl:text-20xl font-black text-white/3 select-none break-words">YOLO</span>
            </div>
          </div>

          {/* Sub-heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mb-8 sm:mb-10 lg:mb-12 text-center lg:text-left"
          >
            <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-white/90 flex font-bold items-center justify-center lg:justify-center gap-2 break-words ">
              Notice our Mission - Philosophy - and Cause is central
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 text-pink-400 flex-shrink-0" />
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-center"
          >
            <Button 
              type="primary" 
              href="/apply"
              className="inline-flex items-center justify-center rounded-[19.493px] border border-[0.585px] border-solid border-[rgba(10,9,9,0.45)] bg-gradient-to-b from-[rgba(62,64,69,0.5)] via-[rgba(62,64,69,0)] to-transparent bg-[radial-gradient(170.95%_118.01%_at_8.39%_32.81%,_rgba(67,64,70,0.5)_0%,_rgba(41,37,45,0.5)_28.24%,_rgba(10,10,11,0.5)_100%)] text-white text-center font-calistoga text-[9.074px] font-normal leading-[160%] shadow-[0_0_2.735px_#fff,0_0_13.675px_#fe3c72,0_0_13.675px_#fe3c72]"
            >
              Apply to Match
            </Button>
            <Button 
              type="secondary" 
              href="/learn-more"
              className="inline-flex items-center justify-center rounded-[19.492px] border border-[0.585px] border-solid border-[rgba(10,9,9,0.45)] text-[#FE638E] text-center font-calistoga text-[9.074px] leading-[160%] shadow-[0_0_6.679px_#fe3c72,0_0_6.679px_#fe3c72] bg-[linear-gradient(180deg,rgba(62,64,69,0.5) 0%,rgba(62,64,69,0) 8.33%),radial-gradient(170.95% 118.01% at 8.39% 32.81%,rgba(67,64,70,0.5) 0%,rgba(41,37,45,0.5) 28.24%,rgba(10,10,11,0.5) 100%)]"
              showArrow={true}
            >
              Lorem ipsum dolor sit
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-purple-500/5 to-blue-500/5 pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;
