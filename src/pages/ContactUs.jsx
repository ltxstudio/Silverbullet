import React, { useRef, useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';

const ContactUs = () => {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'your_service_id', // Replace with your EmailJS Service ID
        'your_template_id', // Replace with your EmailJS Template ID
        form.current,
        'your_user_id' // Replace with your EmailJS Public Key/User ID
      )
      .then(
        () => {
          setSuccessMessage('Thank you for contacting us! We will get back to you soon.');
          setErrorMessage('');
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error);
          setErrorMessage('Oops! Something went wrong. Please try again.');
          setSuccessMessage('');
        }
      );
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | OpenBullet</title>
        <meta
          name="description"
          content="Get in touch with the OpenBullet team. Reach us via email, phone, or by visiting our office. Fill out the contact form for support and inquiries."
        />
        <meta name="keywords" content="Contact Us, OpenBullet, Support, Inquiry, Email, Phone" />
        <meta property="og:title" content="Contact Us | OpenBullet" />
        <meta
          property="og:description"
          content="Contact the OpenBullet team for inquiries, support, or feedback. We are here to help."
        />
        <link rel="canonical" href="https://yourwebsite.com/contact-us" />
      </Helmet>

      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Hero Section */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Get in Touch with Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have any questions, concerns, or feedback? We'd love to hear from
            you. Reach out to us using the details below or fill out the
            contact form.
          </p>
        </section>

        {/* Contact Info Section */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FaEnvelope className="text-4xl text-blue-600 mx-auto" />,
              title: 'Email',
              content: 'support@openbullet.com',
            },
            {
              icon: <FaPhoneAlt className="text-4xl text-green-600 mx-auto" />,
              title: 'Phone',
              content: '+1 (123) 456-7890',
            },
            {
              icon: (
                <FaMapMarkerAlt className="text-4xl text-red-600 mx-auto" />
              ),
              title: 'Address',
              content: '123 OpenBullet Street, Developer City, Techland',
            },
          ].map((info, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg text-center transform transition-all hover:scale-105 hover:shadow-xl"
            >
              {info.icon}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {info.title}
              </h3>
              <p className="text-gray-700 mt-2">{info.content}</p>
            </motion.div>
          ))}
        </section>

        {/* Contact Form Section */}
        <section className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-semibold text-gray-800 text-center mb-6"
          >
            Contact Form
          </motion.h2>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6 max-w-lg mx-auto"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-700 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition-colors"
            >
              Send Message
            </motion.button>
          </form>

          {successMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-green-600 font-medium mt-4"
            >
              {successMessage}
            </motion.p>
          )}

          {errorMessage && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-red-600 font-medium mt-4"
            >
              {errorMessage}
            </motion.p>
          )}
        </section>
      </div>
    </>
  );
};

export default ContactUs;
