import React from 'react';
import { FaGithub, FaSync, FaCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => (
  <div className="container mx-auto px-6 py-12 space-y-12">
    {/* Hero Section */}
    <section className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">OpenBullet Features</h1>
      <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
        OpenBullet is an open-source tool that enhances your GitHub workflow. It’s packed with powerful features designed to optimize repository management, collaboration, and development productivity.
      </p>
    </section>

    {/* Features Section */}
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
      >
        <FaGithub className="text-4xl text-blue-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Effortless Repository Management</h3>
        <p className="text-gray-700 mt-2">
          OpenBullet makes managing your GitHub repositories a breeze with a simple and intuitive interface. Organize your projects with ease and stay on top of your workflow.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
      >
        <FaSync className="text-4xl text-green-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Real-Time Sync & Updates</h3>
        <p className="text-gray-700 mt-2">
          Keep your repositories in sync across all devices with OpenBullet’s real-time synchronization feature. Get automatic updates to stay current on all your repositories.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
      >
        <FaCode className="text-4xl text-purple-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Built-in Code Review Tools</h3>
        <p className="text-gray-700 mt-2">
          With OpenBullet’s integrated code review tools, collaboration and code quality checks are easier than ever. Simplify code reviews with built-in features that promote efficiency.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105"
      >
        <FaLaptopCode className="text-4xl text-indigo-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Cross-Platform Support</h3>
        <p className="text-gray-700 mt-2">
          OpenBullet works seamlessly across platforms, whether you're using Windows, Mac, or Linux. Get a consistent experience no matter what device you're on.
        </p>
      </motion.div>
    </section>

    {/* CTA Section */}
    <section className="text-center bg-blue-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Boost Your Development Process?</h2>
      <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
        Download OpenBullet today and start optimizing your GitHub workflow with powerful, cross-platform features!
      </p>
      <a
        href="#"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        Get OpenBullet
      </a>
    </section>
  </div>
);

export default Features;
