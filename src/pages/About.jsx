import React from 'react';
import { Helmet } from 'react-helmet';
import { FaGithub, FaLaptopCode, FaCloud } from 'react-icons/fa';
import DownloadButton from '../components/DownloadButton';
import { motion } from 'framer-motion';

const About = () => (
  <>
    {/* SEO Meta Tags */}
    <Helmet>
      <title>About Silverbullet | GitHub Management Made Easy</title>
      <meta
        name="description"
        content="Learn more about Silverbullet, the cutting-edge software for managing GitHub repositories. Explore features, team, and how Silverbullet can streamline your workflow."
      />
      <meta
        name="keywords"
        content="Silverbullet, GitHub management, repository management, cloud sync, code management, developer tools"
      />
      <meta name="author" content="Silverbullet Team" />
      <meta property="og:title" content="About Silverbullet" />
      <meta
        property="og:description"
        content="Discover how Silverbullet revolutionizes GitHub management for developers with powerful features and an intuitive interface."
      />
      <meta
        property="og:image"
        content="https://yourwebsite.com/silverbullet-thumbnail.png"
      />
      <meta property="og:url" content="https://yourwebsite.com/about" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="About Silverbullet" />
      <meta
        name="twitter:description"
        content="Silverbullet is the ultimate tool for managing GitHub repositories efficiently."
      />
      <meta
        name="twitter:image"
        content="https://yourwebsite.com/silverbullet-thumbnail.png"
      />
      <link rel="canonical" href="https://yourwebsite.com/about" />
    </Helmet>

    <div className="container mx-auto px-6 py-12 space-y-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-200 to-indigo-200 p-8 rounded-lg shadow-lg">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Silverbullet
          </h1>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
            Silverbullet is a cutting-edge desktop software for managing GitHub repositories, providing developers with a fast, intuitive, and efficient interface for their daily tasks.
          </p>
        </motion.div>
      </section>

      {/* Features Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Key Features
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <FaGithub className="text-blue-600 text-3xl" />,
              title: 'GitHub Integration',
              description:
                'Seamlessly integrate with your GitHub account and manage repositories effortlessly.',
            },
            {
              icon: <FaLaptopCode className="text-green-600 text-3xl" />,
              title: 'Code Management',
              description:
                'Organize and manage your code repositories with ease using an intuitive interface.',
            },
            {
              icon: <FaCloud className="text-purple-600 text-3xl" />,
              title: 'Cloud Sync',
              description:
                'Sync your repositories across multiple devices with the power of cloud storage.',
            },
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: idx * 0.2, duration: 0.8 }}
              className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 hover:shadow-xl transition-shadow duration-300"
            >
              {feature.icon}
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: 'Alice Johnson',
              role: 'Founder & CEO',
              img: 'https://via.placeholder.com/150',
            },
            {
              name: 'Bob Lee',
              role: 'Lead Developer',
              img: 'https://via.placeholder.com/150',
            },
            {
              name: 'Charlie Smith',
              role: 'Product Designer',
              img: 'https://via.placeholder.com/150',
            },
          ].map((team, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={team.img}
                alt={team.name}
                className="w-32 h-32 mx-auto rounded-full"
              />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {team.name}
              </h3>
              <p className="text-gray-600">{team.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-blue-100 p-8 rounded-lg shadow-lg text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Join thousands of developers who trust Silverbullet for their GitHub
          workflow. Download the app and start managing your repositories
          effortlessly today!
        </p>
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <DownloadButton />
        </motion.div>
      </section>
    </div>
  </>
);

export default About;
