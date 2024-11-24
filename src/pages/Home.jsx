import React from 'react';
import FeatureCard from '../components/FeatureCard';
import DownloadButton from '../components/DownloadButton';
import { FaCode, FaCloudDownloadAlt, FaSync, FaUserFriends, FaLock, FaStar, FaCogs, FaShoppingCart, FaSearch, FaHammer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';

const Home = () => (
  <div className="container mx-auto px-6 py-12 space-y-12">
    {/* Hero Section */}
    <section className="text-center mb-12 bg-gradient-to-r from-green-100 to-teal-200 rounded-lg p-8 shadow-lg">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Openbullet Web Testing Suite
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          A powerful tool for web scraping, pentesting, and automated testing. Perform requests towards web apps, parse data, and more with Openbullet.
        </p>
        <DownloadButton />
      </motion.div>
    </section>

    {/* Features Section */}
    <section>
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <FeatureCard
          title="Automated Requests"
          description="Perform automated requests with ease for web scraping or pentesting."
          icon={FaSearch}
        />
        <FeatureCard
          title="Unit Testing with Selenium"
          description="Run unit tests and web automation scripts seamlessly with Selenium support."
          icon={FaHammer}
        />
        <FeatureCard
          title="Data Parsing"
          description="Efficiently scrape and parse data from web applications."
          icon={FaCode}
        />
        <FeatureCard
          title="Security Testing"
          description="Test your web application's security with a range of pentesting tools."
          icon={FaLock}
        />
        <FeatureCard
          title="One-Click Sync"
          description="Sync your data and results across devices with just a click."
          icon={FaSync}
        />
        <FeatureCard
          title="Customizable Workflows"
          description="Tailor your testing processes and workflows to suit your needs."
          icon={FaCogs}
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
            "Openbullet has completely changed how I approach web scraping. It's powerful and easy to use."
          </p>
          <h4 className="mt-4 font-bold text-gray-800">- Alice Johnson</h4>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out"
        >
          <p className="text-gray-700 italic">
            "The best tool for pentesting and automation. I save hours every week thanks to Openbullet."
          </p>
          <h4 className="mt-4 font-bold text-gray-800">- Bob Martin</h4>
        </motion.div>
      </div>
    </section>

    {/* Pricing Section */}
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Free Plan */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105 ease-in-out duration-300">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Free Plan</h3>
          <p className="text-gray-700 mb-4">Basic features for individuals and hobbyists.</p>
          <p className="font-bold text-lg">$0/month</p>
          <div className="mt-4">
            <ul className="space-y-2 text-left text-gray-700">
              <li className="flex items-center"><FaCloudDownloadAlt className="mr-2" /> Limited automated requests</li>
              <li className="flex items-center"><FaUserFriends className="mr-2" /> Basic data parsing</li>
              <li className="flex items-center"><FaLock className="mr-2" /> Limited security tools</li>
            </ul>
          </div>
        </div>

        {/* Pro Plan */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105 ease-in-out duration-300">
          <h3 className="text-xl font-bold mb-2 text-blue-600">Pro Plan</h3>
          <p className="text-gray-700 mb-4">Advanced tools and priority support for professionals.</p>
          <p className="font-bold text-lg">$19/month</p>
          <div className="mt-4">
            <ul className="space-y-2 text-left text-gray-700">
              <li className="flex items-center"><FaCloudDownloadAlt className="mr-2" /> Unlimited automated requests</li>
              <li className="flex items-center"><FaCogs className="mr-2" /> Advanced data parsing</li>
              <li className="flex items-center"><FaStar className="mr-2" /> Priority support</li>
            </ul>
          </div>
        </div>

        {/* Buy Now Button */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center transition-transform hover:scale-105 ease-in-out duration-300 col-span-1 sm:col-span-2 md:col-span-3">
          <h3 className="text-xl font-bold mb-2 text-green-600">Buy Now</h3>
          <p className="text-gray-700 mb-4">Get full access to all features with the Pro plan.</p>
          <button className="bg-green-600 text-white py-2 px-6 rounded-lg flex items-center justify-center mx-auto space-x-2 hover:bg-green-700 focus:outline-none transition-all duration-300">
            <FaShoppingCart />
            <span>Buy Now</span>
          </button>
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="bg-gray-50 py-12">
      <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Frequently Asked Questions</h2>
      <div className="space-y-4">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-white p-4 rounded-lg shadow-md w-full text-left text-gray-800 font-bold focus:outline-none">
                <span>What is Openbullet?</span>
                <span className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                Openbullet is a web testing suite that automates requests towards web apps for scraping, pentesting, unit testing, and more.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="bg-white p-4 rounded-lg shadow-md w-full text-left text-gray-800 font-bold focus:outline-none">
                <span>Is it free to use?</span>
                <span className={`ml-2 transition-transform ${open ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="bg-white p-4 rounded-lg shadow-md text-gray-700">
                Yes! Openbullet offers a free plan with basic features. You can also upgrade to the Pro plan for additional tools and capabilities.
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </section>
  </div>
);

export default Home;
