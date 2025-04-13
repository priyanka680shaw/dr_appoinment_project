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
    <div className="overflow-x-hidden bg-primary/40 dark:bg-gray-800 dark:text-white transition-colors duration-200 w-full">
      <div className="container mx-auto py-10 px-6 w-[90%]">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between gap-y-10">
          {/* Logo and Description */}
          <div className="w-full md:w-1/3">
          
              <Image src="/logo.svg" alt="logo" width={200} height={200} />
              
            
            <p className="mt-3">
              Discover the best deals and trends at Shopsy your one-stop
              online destination for all things stylish and affordable.
            </p>
          </div>

          {/* Footer Links */}
          <div className="w-full md:w-2/3 flex flex-wrap justify-between gap-y-10 mt-6 md:mt-0">
            {/* Important Links */}
            <div className="w-full sm:w-1/3">
              <h2 className="text-xl font-semibold mb-3">Important Links</h2>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li
                    key={link.title}
                    className="cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div className="w-full sm:w-1/3">
              <h2 className="text-xl font-semibold mb-3">More Links</h2>
              <ul className="flex flex-col gap-2">
                {footerLinks.map((link) => (
                  <li
                    key={link.title + "-more"}
                    className="cursor-pointer hover:text-primary hover:translate-x-1 transition duration-300"
                  >
                    {link.title}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div className="w-full sm:w-1/3">
              <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-2">
                  <FaEnvelope className="text-lg" />
                  priyanka680@gmail.com
                </li>
                <li className="flex items-center gap-2">
                  <FaPhone className="text-lg" />
                  +91 8777493783
                </li>
                <li className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-lg" />
                  Kolkata, India
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider & Social Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm">© 2025 Shopsy. All rights reserved.</p>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-primary transition">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaLinkedin />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-primary transition">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
