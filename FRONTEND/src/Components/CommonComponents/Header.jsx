import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiPhone, FiMail } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { images } from "../../assets/assets";
import InternshipModal from "./internshipModal";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const linkClasses = (path) =>
    `block py-2 px-3 md:p-0 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:dark:hover:text-blue-500 
    dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent hover:text-blue dark:border-gray-700  
    ${location.pathname === path ? "text-white bg-blue-700 md:bg-transparent md:text-blue-700 md:dark:text-blue-500" : "text-gray-900 dark:text-white"}`;

  return (
    <>
      {/* Top Header */}
      <div className="bg-gray-900 lg:block md:block hidden">
        <div className="max-w-screen-xl py-2 px-4 mx-auto flex flex-col sm:flex-row sm:justify-between sm:items-center text-white text-sm space-y-2 sm:space-y-0">
          {/* Left side: Phone & Email */}
          <div className="flex flex-row justify-between sm:items-center sm:space-x-6 space-y-1 sm:space-y-0 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2">
              <FiPhone className="text-blue-400" />
              <a href="tel:9876543210">+91 63800 30086</a>
            </div>
            <div>
              <p>|</p>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 hover:underline cursor-pointer">
              <FiMail className="text-blue-400" />
              <a href="mailto:vitecodetechnologies@gmail.com">vitecodetechnologies@gmail.com</a>
            </div>
          </div>

          {/* Right side: Social Icons */}
          <div className="flex justify-center sm:justify-end items-center space-x-4">
            <a href="#" className="hover:text-blue-700">
              <FaFacebookF />
            </a>
            <a href="#" target='_blank' className="hover:text-blue-700">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaXTwitter />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white border-gray-200 dark:bg-gray-900 sticky top-0 z-50 shadow-lg">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3">
          <a href="/" className="flex items-center rtl:space-x-reverse">
            <img src={images.ViteCodeLogo} alt="Logo Image" className="h-8 block md:hidden lg:hidden" />
            <img src={images.ViteCodeLogo} alt="Logo Image" className="h-12 hidden md:block lg:block" />
            <span className="self-center text-xl  font-semibold whitespace-nowrap dark:text-white">ViteCode</span>
          </a>

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* Internship Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none 
              focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center 
              dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Quick Enquiry
            </button>

            {/* Internship Modal */}
            <InternshipModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

            {/* Mobile Menu Button */}
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 
              rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 
              focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>

          {/* Nav Links */}

          <div
            className={`w-full transition-all duration-1000 ease-in-out md:flex md:w-auto md:order-1 
                  ${isMenuOpen ? "block" : "hidden"} md:block`}
          >
            <ul
              className="flex flex-col font-medium p-4 md:p-0 mt-3
              rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 
              md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="/" className={`${linkClasses("/")} hover:text-blue-700`}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={`${linkClasses("/about")} hover:text-blue-700`}>
                  About
                </a>
              </li>
              <li className="relative group">
                <button onClick={() => navigate("/course")} className={`${linkClasses("/course")} cursor-pointer flex items-center gap-1 hover:text-blue-700`}>
                  Courses
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-blue-500 transition-colors"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="absolute hidden group-hover:block bg-white dark:bg-gray-800 shadow-lg 
                  rounded-md w-65 py-3 z-50">
                  <a href="" onClick={() => navigate('/course')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    Data Science
                  </a>
                  <a href="" onClick={() => navigate('/course')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    Web Design
                  </a>
                  <a href="" onClick={() => navigate('/course')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    Web Development
                  </a>
                  <a href="" onClick={() => navigate('/course')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    Frontend Web Development
                  </a>
                  <a href="" onClick={() => navigate('/course')} className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700">
                    Full Stack Web Development
                  </a>
                </div>
              </li>
              <li>
                <a href="/service" className={`${linkClasses("/service")} hover:text-blue-700`}>
                  Services
                </a>
              </li>
              <li>
                <a href="/contact" className={`${linkClasses("/contact")} hover:text-blue-700`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;