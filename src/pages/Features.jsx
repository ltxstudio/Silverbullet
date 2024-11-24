import React from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaSync, FaCode, FaLaptopCode } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Features = () => (
  <>
    {/* SEO Meta Tags */}
    <Helmet>
      <title>OpenBullet Features | Optimize Your GitHub Workflow</title>
      <meta
        name="description"
        content="Explore the powerful features of OpenBullet, the open-source tool designed to enhance GitHub repository management, code reviews, and real-time synchronization."
      />
      <meta
        name="keywords"
        content="OpenBullet, GitHub workflow, repository management, real-time sync, code review tools, cross-platform support"
      />
      <meta name="author" content="OpenBullet Team" />
      <meta property="og:title" content="OpenBullet Features" />
      <meta
        property="og:description"
        content="Discover how OpenBullet simplifies GitHub repository management with powerful features like real-time sync, code reviews, and cross-platform support."
      />
      <meta
        property="og:image"
        content="https://yourwebsite.com/openbullet-thumbnail.png"
      />
      <meta property="og:url" content="https://yourwebsite.com/features" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="OpenBullet Features" />
      <meta
        name="twitter:description"
        content="OpenBullet helps developers optimize their GitHub workflow with intuitive tools and features."
      />
      <meta
        name="twitter:image"
        content="https://yourwebsite.com/openbullet-thumbnail.png"
      />
      <link rel="canonical" href="https://yourwebsite.com/features" />
    </Helmet>

    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          OpenBullet Features
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
          OpenBullet is an open-source tool that enhances your GitHub workflow. It’s packed with powerful features designed to optimize repository management, collaboration, and development productivity.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            icon: <FaGithub className="text-4xl text-blue-600 mx-auto" />,
            title: 'Effortless Repository Management',
            description:
              'OpenBullet makes managing your GitHub repositories a breeze with a simple and intuitive interface. Organize your projects with ease and stay on top of your workflow.',
          },
          {
            icon: <FaSync className="text-4xl text-green-600 mx-auto" />,
            title: 'Real-Time Sync & Updates',
            description:
              'Keep your repositories in sync across all devices with OpenBullet’s real-time synchronization feature. Get automatic updates to stay current on all your repositories.',
          },
          {
            icon: <FaCode className="text-4xl text-purple-600 mx-auto" />,
            title: 'Built-in Code Review Tools',
            description:
              'With OpenBullet’s integrated code review tools, collaboration and code quality checks are easier than ever. Simplify code reviews with built-in features that promote efficiency.',
          },
          {
            icon: <FaLaptopCode className="text-4xl text-indigo-600 mx-auto" />,
            title: 'Cross-Platform Support',
            description:
              'OpenBullet works seamlessly across platforms, whether you\'re using Windows, Mac, or Linux. Get a consistent experience no matter what device you\'re on.',
          },
        ].map((feature, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: idx * 0.2 }}
            className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl"
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              {feature.title}
            </h3>
            <p className="text-gray-700 mt-2">{feature.description}</p>
          </motion.div>
        ))}
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center bg-gradient-to-r from-blue-200 to-indigo-200 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
          Ready to Boost Your Development Process?
        </h2>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Download OpenBullet today and start optimizing your GitHub workflow
          with powerful, cross-platform features!
        </p>
        <motion.a
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          href="#"
          className="inline-block bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors"
        >
          Get OpenBullet
        </motion.a>
      </section>
    </div>
  </>
);

export default Features;
