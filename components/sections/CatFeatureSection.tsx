'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface CatFeatureSectionProps {
  catImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const CatFeatureSection: React.FC<CatFeatureSectionProps> = ({ catImage }) => {
  return (
    <section className="w-full bg-[#29252D] py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Cat Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-7xl">
              <Image
                src={catImage.src}
                alt={catImage.alt}
                width={catImage.width}
                height={catImage.height}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
              className='relative w-full max-w-6xl'
          >
            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className='relative w-full max-w-6xl'
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Lorem ipsum dolor sit amet, co
              </h2>
            </motion.div>

            {/* Paragraph */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <p className="text-sm sm:text-base lg:text-sm text-gray-300 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, q
              </p>
            </motion.div>

            {/* Call to Action Link */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Link 
                href="/learn-more" 
                className="inline-flex items-center text-white hover:text-gray-200 transition-colors duration-300 text-sm sm:text-base font-medium"
              >
                Lorem ipsum dolor sit ame
                <span className="ml-2 text-lg">→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CatFeatureSection;
