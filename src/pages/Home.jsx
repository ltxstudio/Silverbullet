import React from 'react';
import FeatureCard from '../components/FeatureCard';
import DownloadButton from '../components/DownloadButton';
import { FaCode, FaCloudDownloadAlt, FaSync, FaUserFriends, FaLock } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Home = () => (
  <div className="container mx-auto px-6 py-12 space-y-12">
    {/* Hero Section */}
    <section className="text-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Silverbullet GitHub Desktop
        </h1>
        <p className="text-gray-600 text-lg">
          Revolutionizing the way you manage repositories. Sync, code, and deploy like never before.
        </p>
        <DownloadButton />
      </motion.div>
    </section>

    {/* Features Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Code Management"
          description="Effortlessly manage your repositories."
          icon={FaCode}
        />
        <FeatureCard
          title="One-Click Sync"
          description="Sync your work seamlessly."
          icon={FaSync}
        />
        <FeatureCard
          title="Secure Environment"
          description="Enjoy secure and reliable coding."
          icon={FaLock}
        />
      </div>
    </section>

    {/* Testimonials Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6">What Our Users Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
        >
          <p className="text-gray-700 italic">
            "Silverbullet made my GitHub workflow 3x faster. Highly recommend it!"
          </p>
          <h4 className="mt-4 font-bold">- Jane Doe</h4>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
        >
          <p className="text-gray-700 italic">
            "The perfect desktop tool for developers. Intuitive and powerful."
          </p>
          <h4 className="mt-4 font-bold">- John Smith</h4>
        </motion.div>
      </div>
    </section>

    {/* Pricing Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6">Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Free Plan</h3>
          <p className="text-gray-700 mb-4">Basic features for individuals.</p>
          <p className="font-bold text-lg">$0/month</p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Pro Plan</h3>
          <p className="text-gray-700 mb-4">Advanced tools for professionals.</p>
          <p className="font-bold text-lg">$19/month</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2">Enterprise Plan</h3>
          <p className="text-gray-700 mb-4">Custom solutions for teams.</p>
          <p className="font-bold text-lg">Contact us</p>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="font-bold mb-2">What is Silverbullet?</h4>
          <p className="text-gray-700">
            Silverbullet is a desktop application that streamlines GitHub repository management.
          </p>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h4 className="font-bold mb-2">Is it free to use?</h4>
          <p className="text-gray-700">
            Yes! Silverbullet offers a free plan with basic features.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
