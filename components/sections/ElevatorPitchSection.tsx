'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const ElevatorPitchSection: React.FC = () => {
  const [article, setArticle] = useState<any>({
    title: '',
    description: '', 
  });
  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch('https://cyrano-pamphlet-backend.onrender.com/api/articles?filters[slug][$eq]=ELEVATOR-PITCH&populate=*');
      const data = await response.json();
      const article = data.data[0];
      console.log("asd",article.title);
      setArticle({
        title: article.title,
        description: article.description
      });
    };
    fetchArticle();
  }, []);
  return (
    <section className="w-full bg-[#29252D] overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative"
        >
          {/* Container for content */}
          <div className="mx-auto">
            {/* ELEVATOR PITCH and first line of content - Combined in one element */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <p className="text-sm sm:text-base text-gray-400 uppercase mb-4 sm:mb-6 break-words">
                {article.title}
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white leading-tight break-words">
                {article.description}
              </h2>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ElevatorPitchSection;
