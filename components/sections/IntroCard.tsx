'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface Testimonial {
  name: string;
  subtitle: string;
  text: string;
}

interface IntroCardProps {
  testimonialImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  testimonials: Testimonial[];
}

const IntroCard: React.FC<IntroCardProps> = ({ testimonialImage, testimonials }) => {
  return (
    <section className="w-full bg-[#29252D] py-5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-6 sm:gap-8 lg:gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center w-full max-w-sm md:max-w-xs lg:max-w-sm"
            >
              <div className="relative mb-4 sm:mb-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 rounded-full overflow-hidden">
                  <Image
                    src={testimonialImage.src}
                    alt={`${testimonial.name} profile`}
                    width={testimonialImage.width}
                    height={testimonialImage.height}
                    className="w-full h-full object-cover"
                    priority={index === 0}
                  />
                </div>
              </div>
              <div className="mb-4 sm:mb-6">
                <p className="text-sm sm:text-base text-gray-400 leading-relaxed break-words">
                  {testimonial.text}
                </p>
              </div>
              <div className="mb-2">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white break-words">
                  {testimonial.name}
                </h3>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-gray-400 break-words">
                  {testimonial.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntroCard;
