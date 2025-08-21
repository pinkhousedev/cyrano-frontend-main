'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Buttons';

interface ApplyFormSectionProps {
  illustrationImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  onApplyToMatch?: () => void;
}

const ApplyFormSection: React.FC<ApplyFormSectionProps> = ({ illustrationImage, onApplyToMatch }) => {
  return (
    <section className="w-full bg-[#29252D] py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Section - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative flex justify-center lg:justify-start order-2 lg:order-1"
          >
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-xl">
              <Image
                src={"https://cyrano-pamphlet-backend.onrender.com/uploads/cute_88d811625d.png"}
                alt={illustrationImage.alt}
                width={illustrationImage.width}
                height={illustrationImage.height}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Right Section - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
            className="text-center lg:text-left order-1 lg:order-2"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                Lorem ipsum dolor sit amet, consectetur
              </h2>
              <p className="text-base sm:text-lg text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </motion.div>

            {/* Phone Input */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              style={{ width: '100%' }}
              className="mb-8 fl"
            >
              <input
                type="tel"
                placeholder="Enter your mobile phone number"
                className="w-full px-6 py-4 bg-gray-800/50 border border-gray-700/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all duration-300 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3),inset_0_-1px_2px_rgba(255,255,255,0.1)] backdrop-blur-sm"
              />
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </motion.div>

            {/* Checkbox */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8 justify-center lg:justify-center w-full sm:w-auto"
            >
              <div className="relative">
                <input
                  type="checkbox"
                  id="terms"
                  className="peer w-5 h-5 rounded border-gray-600 bg-gray-800 text-pink-500 focus:ring-pink-500 focus:ring-2 focus:ring-offset-0 focus:ring-offset-transparent checked:bg-pink-500 checked:border-pink-500"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <svg
                    className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <label htmlFor="terms" className="text-sm sm:text-base text-gray-400 cursor-pointer">
                Lorem ipsum dolor sit amet, conse
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-center w-full sm:w-auto"
            >
              <Button
                type="primary"
                className="w-full sm:w-auto"
                onClick={onApplyToMatch}
              >
                Apply to Match
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApplyFormSection;
