import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white hover:text-gray-300 transition duration-300 ease-in-out transform hover:scale-110">
          Silverbullet
        </h1>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        
        {/* Navigation Menu */}
        <nav className={`md:flex ${isMobileMenuOpen ? 'block' : 'hidden'} space-x-4 md:space-x-6 transition-all duration-300 ease-in-out`}>
          <ul className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-semibold hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="text-lg font-semibold hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* GitHub Button */}
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-indigo-600 px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
        >
          <FaGithub />
          <span className="font-semibold text-sm">GitHub</span>
        </a>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden absolute top-0 left-0 w-full h-full bg-black bg-opacity-60 transition-all duration-300 ease-in-out"
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Mobile Menu Content */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-white text-black p-6 space-y-6">
          <ul className="space-y-4">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-semibold hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/features"
                className="text-lg font-semibold hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
            </li>
          </ul>

          {/* GitHub Button for Mobile */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-indigo-600 px-4 py-2 rounded-md shadow-md hover:bg-indigo-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FaGithub />
            <span className="font-semibold text-sm">GitHub</span>
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
