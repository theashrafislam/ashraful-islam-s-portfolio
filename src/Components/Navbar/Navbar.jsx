import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              Ashraful Islam
            </Link>
          </div>

          {/* Desktop navigation links */}
          <div className="hidden sm:flex sm:items-center">
            <a
              href="#skills"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, toggle based on menu state */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#skills"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
