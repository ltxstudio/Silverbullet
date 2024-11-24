import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, icon: Icon }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
  >
    <Icon className="text-blue-500 text-4xl mb-4 mx-auto" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-700">{description}</p>
  </motion.div>
);

export default FeatureCard;
