'use client';

import React from 'react';
import { Settings, User, FileText, Activity, Users, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Settings className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    },
    {
      icon: <User className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat"
    },
    {
      icon: <FileText className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    },
    {
      icon: <Activity className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit"
    },
    {
      icon: <Users className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate ve"
    },
    {
      icon: <Monitor className="w-12 h-12 text-gray-300" />,
      title: "Lorem Ipsum",
      description: "Lorem ipsum dolor sit a consectetur adipiscing sed do eiusmod ter incididunt ut labore dolore magna aliqua enim ad minim veniam, nostrud exercito ullamco labo"
    }
  ];

  return (
    <div className="w-full bg-[#29252D] py-16 overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center gap-8" style={{ flexWrap: "wrap" }}>
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex-1 text-center"
              style={{
                minWidth: "180px",
                maxWidth: "190px"
              }}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center space-y-4">
                {/* Icon */}
                <motion.div 
                  className="flex items-center justify-center"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {feature.icon}
                </motion.div>
                
                {/* Title */}
                <motion.h3 
                  className="text-white text-xl font-bold"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {feature.title}
                </motion.h3>
                
                {/* Description */}
                <motion.p 
                  className="text-gray-300 text-sm leading-relaxed text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
