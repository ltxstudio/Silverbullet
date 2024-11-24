import React from 'react';
import FeatureCard from '../components/FeatureCard';
import DownloadButton from '../components/DownloadButton';
import { FaCode, FaCloudDownloadAlt, FaSync, FaUserFriends, FaLock, FaStar, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Transition } from '@headlessui/react';

const Home = () => (
  <div className="container mx-auto px-6 py-12 space-y-12">
    {/* Hero Section */}
    <section className="text-center mb-12 bg-gradient-to-r from-blue-100 to-indigo-200 rounded-lg p-8 shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Silverbullet GitHub Desktop
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Revolutionizing the way you manage repositories. Sync, code, and deploy like never before with Silverbullet's seamless experience.
        </p>
        <DownloadButton />
      </motion.div>
    </section>

    {/* Features Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Code Management"
          description="Effortlessly manage your repositories with a simple interface."
          icon={FaCode}
        />
        <FeatureCard
          title="One-Click Sync"
          description="Sync your work across devices in a click."
          icon={FaSync}
        />
        <FeatureCard
          title="Secure Environment"
          description="Enjoy secure and reliable coding with built-in encryption."
          icon={FaLock}
        />
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">What Our Users Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out"
        >
          <p className="text-gray-700 italic">
            "Silverbullet made my GitHub workflow 3x faster. Highly recommend it!"
          </p>
          <h4 className="mt-4 font-bold text-gray-800">- Jane Doe</h4>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out"
        >
          <p className="text-gray-700 italic">
            "The perfect desktop tool for developers. Intuitive and powerful."
          </p>
          <h4 className="mt-4 font-bold text-gray-800">- John Smith</h4>
        </motion.div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Free Plan</h3>
          <p className="text-gray-700 mb-4">Basic features for individuals and hobbyists.</p>
          <p className="font-bold text-lg">$0/month</p>
          <div className="mt-4">
            <ul className="space-y-2 text-left text-gray-700">
              <li className="flex items-center"><FaCloudDownloadAlt className="mr-2" /> Sync repositories</li>
              <li className="flex items-center"><FaUserFriends className="mr-2" /> Basic collaboration tools</li>
              <li className="flex items-center"><FaLock className="mr-2" /> Basic security features</li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Pro Plan</h3>
          <p className="text-gray-700 mb-4">Advanced tools and priority support for professionals.</p>
          <p className="font-bold text-lg">$19/month</p>
          <div className="mt-4">
            <ul className="space-y-2 text-left text-gray-700">
              <li className="flex items-center"><FaCloudDownloadAlt className="mr-2" /> One-click syncing</li>
              <li className="flex items-center"><FaCogs className="mr-2" /> Advanced features</li>
              <li className="flex items-center"><FaStar className="mr-2" /> Priority support</li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Enterprise Plan</h3>
          <p className="text-gray-700 mb-4">Custom solutions and dedicated support for teams.</p>
          <p className="font-bold text-lg">Contact us</p>
          <div className="mt-4">
            <ul className="space-y-2 text-left text-gray-700">
              <li className="flex items-center"><FaCloudDownloadAlt className="mr-2" /> Team synchronization</li>
              <li className="flex items-center"><FaCogs className="mr-2" /> Tailored solutions</li>
              <li className="flex items-center"><FaLock className="mr-2" /> Enhanced security</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-bold mb-2 text-gray-800">What is Silverbullet?</h4>
          <p className="text-gray-700">
            Silverbullet is a desktop application that streamlines GitHub repository management. It integrates with your GitHub account to automate syncing and provide a seamless workflow.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h4 className="font-bold mb-2 text-gray-800">Is it free to use?</h4>
          <p className="text-gray-700">
            Yes! Silverbullet offers a free plan with basic features. You can also upgrade to the Pro or Enterprise plans for additional features.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Home;
