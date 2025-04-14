import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ContactPage = () => {
  return (
    <section className="w-full min-h-screen   px-4 py-16 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-1  items-center">
        
        {/* -------- Left Side: Contact Form -------- */}
        <div>
          <h2 className="text-4xl font-bold mb-8 text-primary">Get in Touch</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                className="w-full px-4 py-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="submit"
              className=" cursor-pointer mt-4 bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-opacity-90 transition duration-300 dark:bg-[#007dfc] dark:text-slate-100 dark:hover:bg-cyan-500"
            >
              Send Message
            </button>
          </form>
        </div>

       
      </div>
    </section>
  );
};

export default ContactPage;
