import React from 'react';
import { motion } from 'framer-motion';
import { FaCogs } from 'react-icons/fa';

const FeatureCard = ({ title, description, icon: Icon = FaCogs }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-gray-100 p-6 rounded-lg shadow-lg text-center"
    >
      <Icon className="text-primary text-4xl mb-4" />
      <h3 className="text-xl font-bold">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
