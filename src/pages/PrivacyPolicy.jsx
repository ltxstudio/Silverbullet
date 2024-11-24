import React from 'react';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Privacy Policy | OpenBullet</title>
        <meta
          name="description"
          content="Learn about the privacy practices and policies of OpenBullet. Your privacy is important to us, and we are committed to safeguarding your data."
        />
        <meta name="keywords" content="Privacy Policy, OpenBullet, Data Protection, Security, GDPR" />
        <meta property="og:title" content="Privacy Policy | OpenBullet" />
        <meta
          property="og:description"
          content="Read OpenBullet's Privacy Policy to understand how your personal data is handled, stored, and protected."
        />
        <link rel="canonical" href="https://yourwebsite.com/privacy-policy" />
      </Helmet>

      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Privacy Policy Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At OpenBullet, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data.
          </p>
        </section>

        {/* Privacy Policy Content Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            Information We Collect
          </h2>
          <p className="text-gray-700">
            We may collect the following types of information when you use OpenBullet:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Personal Information: Name, Email, etc.</li>
            <li>Usage Data: Information about how you interact with our platform.</li>
            <li>Device Information: Device type, operating system, and browser details.</li>
            <li>Cookies: To improve your experience on our website.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mt-8">
            How We Use Your Information
          </h2>
          <p className="text-gray-700">
            The information we collect is used for various purposes, including:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Providing and maintaining our services</li>
            <li>Improving and personalizing user experience</li>
            <li>Sending you updates, newsletters, and marketing communications</li>
            <li>Analyzing usage trends and website performance</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mt-8">
            Data Protection
          </h2>
          <p className="text-gray-700">
            We take your privacy seriously and employ a variety of security measures to ensure the protection of your personal data:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Data Encryption: All sensitive data is encrypted during transmission.</li>
            <li>Access Control: Only authorized personnel have access to your data.</li>
            <li>Regular Audits: We perform regular security audits to protect your information.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mt-8">
            Sharing Your Information
          </h2>
          <p className="text-gray-700">
            We do not share your personal data with third parties unless:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>You have given us explicit consent</li>
            <li>It is required by law or for legal purposes</li>
            <li>To service providers who help us deliver our services (e.g., hosting, analytics)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mt-8">
            Your Rights
          </h2>
          <p className="text-gray-700">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Request access to your personal data</li>
            <li>Request corrections or deletions of your personal data</li>
            <li>Opt-out of marketing communications</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mt-8">
            Cookies and Tracking Technologies
          </h2>
          <p className="text-gray-700">
            We use cookies and similar technologies to enhance your experience on our website. These may include:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Session Cookies: To manage your login session and preferences.</li>
            <li>Analytics Cookies: To track website usage and improve performance.</li>
          </ul>

          <h2 className="text-3xl font-semibold text-gray-800 mt-8">
            Changes to This Policy
          </h2>
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Please review this page regularly for updates.
          </p>

          <h2 className="text-3xl font-semibold text-gray-800 mt-8">
            Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions or concerns regarding this Privacy Policy, please contact us at:
          </p>
          <p className="text-gray-700 font-semibold">Email: support@openbullet.com</p>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
