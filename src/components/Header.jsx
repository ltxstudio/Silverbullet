import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-xl font-bold">Silverbullet</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-secondary">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-secondary px-4 py-2 rounded shadow hover:bg-blue-700"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
