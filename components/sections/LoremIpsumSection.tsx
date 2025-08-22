'use client';

import React from 'react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Article {
  title: string;
  description: string;
  image: string;
}

const LoremIpsumSection: React.FC = () => {
  const [article, setArticle] = useState<Article>({
    title: '',
    description: '',
    image: ''  
  });
  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('https://cyrano-pamphlet-backend-2b44.onrender.com//api/articles?filters[slug][$eq]=loremIpsum-section&populate=*');
      const data = await response.json();
      const fetchedArticle = data.data[0];
      console.log(fetchedArticle);
      setArticle({
        title: fetchedArticle.title,
        description: fetchedArticle.description,
        image: fetchedArticle.cover.url
      });
    };
    fetchArticle();
  }, []);
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
       
        <div className="relative">8
        
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <p className="text-white text-sm sm:text-base py-2 sm:py-3">Lorem ipsum dolor</p>
            <h1 className="text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold mb-4 sm:mb-6 max-w-md lg:max-w-lg">
              {article.title}
            </h1>
          </motion.div>

          {/* Button container - responsive layout */}
          <div className="button-container flex flex-col md:flex-row md:relative justify-center items-center mb-0 xl:mb-0 2xl:mb-0" style={{
            flexDirection: window.innerWidth < 980 ? 'column' : 'row'
          }}>
            {/* Button container - responsive layout */}
            <div className="flex flex-col md:flex-row md:relative">
              {/* Button 2 - Left image (lower z-index) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative z-10 mb-4 md:mb-0 md:mr-5"
              >
                <Image 
                  src="https://cyrano-pamphlet-backend-2b44.onrender.com//uploads/btn2_f99d85138d.png" 
                  alt="Button 2" 
                  width={390} 
                  height={130} 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
                  priority
                />  
              </motion.div>

                          {/* Button 1 - Right image (higher z-index, positioned above and overlapping) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative z-20 w-full md:w-auto"
              style={{
                marginTop: window.innerWidth < 980 ? '0' : '-98px',
                marginLeft: window.innerWidth < 980 ? '0' : '-180px'
              }}
            >
                <Image 
                  src="https://cyrano-pamphlet-backend-2b44.onrender.com//uploads/btn1_3bc847e8cc.png" 
                  alt="Button 1" 
                  width={390} 
                  height={130} 
                  className="w-full max-w-xs sm:max-w-sm md:max-w-lg xl:max-w-xl"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="w-full bg-[#29252D] py-8 sm:py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            {article.description}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-white text-xs sm:text-sm lg:text-base leading-relaxed max-w-4xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n
          </motion.p>
        </div>
      </div>
    </>
  );
};

export default LoremIpsumSection;
