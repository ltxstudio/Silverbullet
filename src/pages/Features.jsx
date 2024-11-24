import React from 'react';
import { FaGithub, FaSync, FaCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => (
  <div className="container mx-auto px-6 py-12 space-y-12">
    {/* Hero Section */}
    <section className="text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Features</h1>
      <p className="text-lg text-gray-600 mt-4">
        Silverbullet is packed with powerful features that will streamline your GitHub workflow. Discover what makes it the ultimate GitHub desktop tool.
      </p>
    </section>

    {/* Features Section */}
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <FaGithub className="text-4xl text-blue-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Effortless Repository Management</h3>
        <p className="text-gray-700 mt-2">
          Easily manage your repositories with a user-friendly interface, making it simple to organize and access your projects.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <FaSync className="text-4xl text-green-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Real-Time Sync & Updates</h3>
        <p className="text-gray-700 mt-2">
          Keep your repositories up-to-date with real-time synchronization and automatic updates across all your devices.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <FaCode className="text-4xl text-purple-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Built-in Code Review Tools</h3>
        <p className="text-gray-700 mt-2">
          Silverbullet makes code review easier with integrated tools for collaboration, code quality checks, and more.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="bg-white p-6 rounded-lg shadow-lg text-center"
      >
        <FaLaptopCode className="text-4xl text-indigo-600 mx-auto" />
        <h3 className="text-xl font-semibold text-gray-800 mt-4">Cross-Platform Support</h3>
        <p className="text-gray-700 mt-2">
          Whether you're on Windows, Mac, or Linux, Silverbullet works seamlessly across platforms, providing a consistent experience.
        </p>
      </motion.div>
    </section>

    {/* CTA Section */}
    <section className="text-center bg-blue-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ready to Streamline Your Workflow?</h2>
      <p className="text-lg text-gray-600 mb-6">
        Download Silverbullet today and experience the future of GitHub management!
      </p>
      <a
        href="#"
        className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600"
      >
        Download Now
      </a>
    </section>
  </div>
);

export default Features;
