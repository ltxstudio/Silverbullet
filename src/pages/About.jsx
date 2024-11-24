import React from 'react';
import { FaGithub, FaLaptopCode, FaCloud } from 'react-icons/fa';
import DownloadButton from '../components/DownloadButton';
import { motion } from 'framer-motion';

const About = () => (
  <div className="container mx-auto px-6 py-12 space-y-12">
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-200 to-indigo-200 p-8 rounded-lg shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">About Silverbullet</h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          Silverbullet is a cutting-edge desktop software for managing GitHub repositories, providing developers with a fast, intuitive, and efficient interface for their daily tasks.
        </p>
      </motion.div>
    </section>

    {/* Features Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
        >
          <FaGithub className="text-blue-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">GitHub Integration</h3>
            <p className="text-gray-700">
              Seamlessly integrate with your GitHub account and manage repositories effortlessly.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
        >
          <FaLaptopCode className="text-green-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Code Management</h3>
            <p className="text-gray-700">
              Organize and manage your code repositories with ease using an intuitive interface.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4"
        >
          <FaCloud className="text-purple-600 text-3xl" />
          <div>
            <h3 className="text-xl font-semibold text-gray-800">Cloud Sync</h3>
            <p className="text-gray-700">
              Sync your repositories across multiple devices with the power of cloud storage.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Team Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Meet the Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Alice Johnson</h3>
          <p className="text-gray-600">Founder & CEO</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Bob Lee</h3>
          <p className="text-gray-600">Lead Developer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <img src="https://via.placeholder.com/150" alt="Team Member" className="w-32 h-32 mx-auto rounded-full" />
          <h3 className="text-xl font-semibold text-gray-800 mt-4">Charlie Smith</h3>
          <p className="text-gray-600">Product Designer</p>
        </div>
      </div>
    </section>

    {/* Call-to-Action Section */}
    <section className="bg-blue-100 p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Get Started?</h2>
      <p className="text-gray-600 mb-6">Join thousands of developers who trust Silverbullet for their GitHub workflow. Download the app and start managing your repositories effortlessly today!</p>
      <DownloadButton />
    </section>
  </div>
);

export default About;
