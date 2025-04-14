import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const footerLinks = [
    { title: "Home", link: "/#" },
    { title: "About", link: "/#" },
    { title: "Contact", link: "/#" },
    { title: "Blog", link: "/#" },
  ];

  return (
    <div className="shadow-md w-full bg-[#e6f1ff] dark:bg-gray-900 dark:text-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-y-10">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3">
            <Image src="/logo.svg" alt="logo" width={200} height={200} />
            <p className="mt-3 text-gray-700 dark:text-gray-300 font-semibold">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              corrupti ullam autem aspernatur at dolor...
            </p>
          </div>

          {/* Footer Links */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-y-10 mt-6 md:mt-0">
            {/* Important Links */}
            <div className="w-full sm:w-1/3">
              <h2 className="text-xl font-semibold mb-3">Important Links</h2>
              <ul className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                {footerLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer font-semibold hover:text-primary dark:hover:text-cyan-500 hover:translate-x-1 transition duration-300"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="w-full sm:w-1/3">
              <h2 className="text-xl font-semibold mb-3">More Links</h2>
              <ul className="flex flex-col gap-2 text-gray-700 dark:text-gray-300">
                {footerLinks.map((link) => (
                  <li
                    key={link.title + "-more"}
                    className="cursor-pointer font-semibold hover:text-primary dark:hover:text-cyan-500 hover:translate-x-1 transition duration-300"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="w-full sm:w-1/3">
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <ul className="flex flex-col gap-3 text-gray-800 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-lg text-primary dark:text-cyan-500" />
                  <span className="hover:text-primary dark:hover:text-cyan-500 cursor-pointer font-semibold">
                    priyanka680@gmail.com
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-lg text-primary dark:text-cyan-500" />
                  <span className="hover:text-primary dark:hover:text-cyan-500 cursor-pointer font-semibold">
                    +91 8777493783
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-lg text-primary dark:text-cyan-500" />
                  <span className="hover:text-primary dark:hover:text-cyan-500 cursor-pointer font-semibold">
                    Kolkata, India
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Social Section */}
        <div className="mt-10 border-t border-gray-300 dark:border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-700 dark:text-gray-400 font-semibold">
            © 2025 Shopsy. All rights reserved.
          </p>
          <div className="flex gap-4 text-2xl">
            {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-cyan-500 transition-all duration-300 hover:scale-110"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
