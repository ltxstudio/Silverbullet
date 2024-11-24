import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-900 text-white py-6 mt-10">
    <div className="container mx-auto text-center">
      {/* Footer Content */}
      <p className="mb-4 text-lg">© 2024 Silverbullet. All rights reserved.</p>
      
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a 
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaGithub size={24} />
        </a>
        <a 
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaTwitter size={24} />
        </a>
        <a 
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      {/* Footer Links */}
      <div className="flex justify-center space-x-6 mb-6 text-sm">
        <a 
          href="/privacy-policy"
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Privacy Policy
        </a>
        <a 
          href="/contact"
          className="text-white hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Contact
        </a>
      </div>

      {/* Copyright */}
      <p className="text-sm text-gray-400">Made with ❤️ by Silverbullet</p>
    </div>
  </footer>
);

export default Footer;
