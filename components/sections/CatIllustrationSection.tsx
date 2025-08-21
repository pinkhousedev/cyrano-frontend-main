'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface CatIllustrationSectionProps {
  smallImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  reversed?:boolean
}

const CatIllustrationSection: React.FC<CatIllustrationSectionProps> = ({ smallImage, reversed = true }) => {
  return (
    <section className="w-full bg-[#29252D] py-5 lg:py-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Top Section - Text and Small Image */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start mb-16 sm:mb-20 lg:mb-32 ${reversed ? 'lg:grid-flow-col-dense' : ''}`}>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className={`text-center lg:text-left ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-sm text-gray-400 mb-3 sm:mb-4 break-words"
            >
              Lorem ipsum dolor sit amet
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight break-words"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-sm sm:text-base lg:text-lg text-gray-400 mb-6 sm:mb-8 leading-relaxed break-words"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center justify-center lg:justify-start gap-2 text-white hover:text-gray-300 transition-colors cursor-pointer group"
            >
              <span className="text-sm sm:text-base lg:text-lg break-words">Lorem ipsum dolor sit amet, consectetur adipiscing elit</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </motion.div>
          </motion.div>

          {/* Small Image */}
          <motion.div
            initial={{ opacity: 0, x: reversed ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className={`flex justify-center ${reversed ? 'lg:justify-start lg:order-1' : 'lg:justify-end lg:order-2'}`}
          >
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <div className="relative rounded-lg overflow-hidden border-gray-700/50">
                <Image
                  src={smallImage.src}
                  alt={smallImage.alt}
                  width={smallImage.width}
                  height={smallImage.height}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CatIllustrationSection;
