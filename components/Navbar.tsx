import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-blue-900 text-white p-4 fixed w-full z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-lg font-bold">
          <Link href="#home" scroll={false}>
            <Image
              src="/icons/StareNds.png"
              width={50}
              height={50}
              alt="Stanreds"
              className="size-[80px] max-xl:size-14"
            />
          </Link>
        </div>

        {/* Hamburger Icon for mobile */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          <li>
            <a
              href="#home"
              className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="px-4 py-2 bg-gray-600 text-white border border-gray-700 rounded hover:bg-gray-500 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex justify-center">
          <ul className="space-y-2 p-4 bg-blue-800 text-white w-[80%] max-w-xs rounded-lg">
            <li>
              <a
                href="#home"
                className="block px-4 py-2 bg-gray-600 border border-gray-700 rounded hover:bg-gray-500 transition-colors"
                onClick={toggleMenu} // Close the menu after clicking
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block px-4 py-2 bg-gray-600 border border-gray-700 rounded hover:bg-gray-500 transition-colors"
                onClick={toggleMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="block px-4 py-2 bg-gray-600 border border-gray-700 rounded hover:bg-gray-500 transition-colors"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block px-4 py-2 bg-gray-600 border border-gray-700 rounded hover:bg-gray-500 transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block px-4 py-2 bg-gray-600 border border-gray-700 rounded hover:bg-gray-500 transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
