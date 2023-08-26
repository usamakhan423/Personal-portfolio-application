import React from 'react';
import { FiMail, FiPhone, FiArrowUp } from 'react-icons/fi';

const ContactSection = () => {
  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-8 md:py-16 bg-gray-700">
  <div className="container mx-auto">
    <div className="max-w-3xl mx-auto">
      {/* Contact title */}
      <h2 className="text-2xl md:text-3xl text-orange-400 font-bold mb-8">Contact Us</h2>

      {/* One Way To Connect Me */}
      <h3 className="text-3xl md:text-4xl text-white font-bold mb-4">One Way To Connect Me</h3>
      <p className="text-base md:text-lg text-gray-300 mb-6">
        "Let's Build something amazing! Contact Me Now!"
      </p>

      {/* Contact Information */}
      <div className="flex flex-wrap items-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
        {/* Email */}
        <div className="flex items-center space-x-2">
          <FiMail className="text-green-500 w-6 h-6" />
          <p className="text-gray-400">Email: uk352351@gmail.com</p>
        </div>
        {/* Phone */}
        <div className="flex items-center space-x-2">
          <FiPhone className="text-green-500 w-6 h-6" />
          <p className="text-gray-400">Phone: +923 169911323</p>
        </div>
        {/* Business Whatsapp */}
        <div className="flex items-center space-x-2">
          <FiPhone className="text-green-500 w-6 h-6" />
          <p className="text-gray-400">Business Whatsapp: +923 441839388</p>
        </div>
      </div>

      {/* Scroll to top icon button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg focus:outline-none"
      >
        <FiArrowUp className="w-6 h-6" />
      </button>
    </div>
  </div>
</section>

  );
};

export default ContactSection;
