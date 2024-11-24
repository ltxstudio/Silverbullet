import React from 'react';
import { motion } from 'framer-motion';

const PricingCard = ({ plan, price, features, highlight }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`p-6 rounded-lg shadow-lg text-center ${
        highlight ? 'bg-primary text-white' : 'bg-gray-100'
      }`}
    >
      <h3 className="text-2xl font-bold">{plan}</h3>
      <p className="text-4xl font-extrabold mt-4">${price}/mo</p>
      <ul className="mt-6 space-y-2 text-sm">
        {features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </motion.div>
  );
};

export default PricingCard;
