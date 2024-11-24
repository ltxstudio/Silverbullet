import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';

const FeatureCard = ({ title, description, icon: Icon = FaCogs }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105 max-w-sm w-full"
    >
      <div className="flex justify-center items-center mb-4">
        <Icon className="text-blue-500 text-4xl md:text-5xl" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-base md:text-lg">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
