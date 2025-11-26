import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaAngleRight,
  FaYoutube
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0b0a27] text-gray-400 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo + Description */}
          <div>
            <h1 className="flex items-center text-white text-2xl font-bold mb-4">
              ViteCode Technologies
            </h1>
            <p>
               ViteCode Technologies is a leading provider of innovative web development
                solutions, specializing in creating modern, responsive, and high-performance
                websites and applications.
            </p>
          </div>

          {/* Get In Touch */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="flex items-center mb-2">
              <FaMapMarkerAlt className="mr-2" /> Trichy, TamilNadu
            </p>
            <a href='tel:9876543210' className="cursor-pointer hover:underline flex items-center mb-2">
              <FaPhoneAlt className="mr-2" /> +91 63800 30086
            </a>
            <a href='mailto:vitecodetechnologies@gmail.com' className="cursor-pointer hover:underline flex items-center mb-4">
              <FaEnvelope className="mr-2" /> vitecodetechnologies@gmail.com
            </a>
            <div className="flex space-x-4 text-white">
              <a href="#" className="hover:text-blue-400">
                <FaFacebookF size={20} />
              </a>
              <a href="#" target='_blank' className="hover:text-blue-400">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaXTwitter size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Our Courses */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Courses</h3>
            <ul className="space-y-2">
              {[
                "Data Science",
                "Web Design",
                "Web Development",
                "Frontend Development",
                "Full Stack Web Development",
              ].map((course, i) => (
                <a key={i} href='/course' className="flex items-center hover:text-blue-400">
                  <FaAngleRight className="mr-2" /> {course}
                </a>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 cursor-pointer">
              <a href="#" className="flex items-center hover:text-blue-400">
                <FaAngleRight className="mr-2" /> Privacy Policy
              </a>
              <a href="#" className="flex items-center hover:text-blue-400">
                <FaAngleRight className="mr-2" /> Terms & Condition
              </a>
              <a href="#" className="flex items-center hover:text-blue-400">
                <FaAngleRight className="mr-2" /> Regular FAQs
              </a>
              <a href="#" className="flex items-center hover:text-blue-400">
                <FaAngleRight className="mr-2" /> Help & Support
              </a>
              <a href='/contact' className="flex items-center hover:text-blue-400">
                <FaAngleRight className="mr-2" /> Contact
              </a>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
          <p>
            Copyright &copy;{" "}
            <a href="#" className="text-white hover:text-blue-400">
              ViteCode Technologies
            </a>
            . All Rights Reserved.
          </p>
          <p>
            Designed and Developed by{" "}
            <a href="#" className="text-white hover:text-blue-400">
              ViteCode Technologies
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
