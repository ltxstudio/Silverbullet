import React from 'react';
import { motion } from 'framer-motion';

const TestimonialCard = ({ text, author }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
  >
    <p className="text-gray-700 italic">"{text}"</p>
    <h4 className="mt-4 font-bold">- {author}</h4>
  </motion.div>
);

export default TestimonialCard;
