'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/Buttons';
import { useState, useEffect } from 'react';

interface SmartClientProps {
  illustrationImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  reversed?: boolean;
}

const SmartClient: React.FC<SmartClientProps> = ({ illustrationImage, reversed = false }) => {
  const [article, setArticle] = useState<any>({
    title: '',
    quote1: '',
    quote2: '',
    quote3: '',
    quote4: '',
    quote5: '',
    description: '',
    image: ''  
  });
  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('https://cyrano-pamphlet-backend.onrender.com/api/articles?filters[slug][$eq]=hompage-smartclient&populate=*');
      const data = await response.json();
      const article = data.data[0];
      setArticle({
        title: article.title,
        quote1:article.blocks[0].body,
        quote2:article.blocks[1].body,
        quote3:article.blocks[2].body,
        quote4:article.blocks[3].body,
        quote5:article.blocks[4].body,
        description: article.description,
        image: article.cover.url
      });
      console.log("123123",article.blocks[0].body);
    };
    fetchArticle();
  }, []);
  return (
    <section className="w-full bg-[#29252D] py-10 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`text-center lg:text-left ${reversed ? 'lg:order-2 lg:col-span-2' : 'lg:order-1 lg:col-span-2'}`}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <p className="text-sm sm:text-base text-gray-200 break-words">
                {article.quote1}
              </p>
            </motion.div>

            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8 lg:mb-4"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl font-bold text-white leading-tight break-words">
                {article.quote2}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-6 sm:mb-8 lg:mb-4 space-y-3"
            >
              <div className="flex items-start gap-2">
                <DollarSign className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm sm:text-base text-gray-100 break-words">
                {article.quote3}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-100 text-lg flex-shrink-0">♀</span>
                <p className="text-sm sm:text-base text-gray-100 break-words">
                {article.quote4}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-gray-100 text-lg flex-shrink-0">⚥</span>
                <p className="text-sm sm:text-base text-gray-100 break-words">
                {article.quote5}
                </p>
              </div>
              <div className="flex items-start gap-2">
                <p className="text-sm sm:text-base text-gray-100 break-words">
                  <span className="inline-block mr-1">∞</span>
                  {article.description}
                </p>
              </div>
            </motion.div>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button
                type="primary"
                href="/apply"
                className="w-full sm:w-auto"
              >
                Apply to Get Matched
              </Button>
              <Button
                type="text"
                href="/learn-more"
                className="w-full sm:w-auto flex items-center gap-2"
                showArrow={true}
              >
                Lorem ipsum dolor sit
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Section - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`relative flex justify-center ${reversed ? 'lg:justify-start lg:order-1 lg:col-span-3' : 'lg:justify-end lg:order-2 lg:col-span-3'}`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-2xl">
              <Image
                src={illustrationImage.src}
                alt={illustrationImage.alt}
                width={Math.round(illustrationImage.width * 1.3)}
                height={Math.round(illustrationImage.height * 1.3)}
                className="w-full h-auto object-contain scale-110"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartClient;
