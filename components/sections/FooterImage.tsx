'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface FooterImageProps {
  footerImage: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

const FooterImage: React.FC<FooterImageProps> = ({ footerImage }) => {
  return (
    <section className="w-full bg-[#29252D] overflow-hidden">
      <div className="w-full">
        {/* Bottom Section - Large Full-width Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <div className="relative w-full">
            <Image
              src={footerImage.src}
              alt={footerImage.alt}
              width={footerImage.width}
              height={footerImage.height}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FooterImage;
