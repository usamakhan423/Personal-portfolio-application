import React from "react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4">
      <div className="flex flex-row items-center justify-between flex-wrap">
        {/* Brand/logo */}
        <div className="md:w-auto mb-4 md:mb-0">
          <h1 className="text-lg font-bold drop-shadow-lg text-white md:text-lg">
            DevPortfolio
          </h1>
        </div>

        {/* Social icons */}
        <div className="flex space-x-2 md:space-x-4">
          <a
            href="https://github.com/usamakhan423"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-orange-400 hover:text-gray-400 drop-shadow-lg"
              size={20} // Adjust icon size for mobile
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ossama-ghaffar-b378621b2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin
              className="text-orange-400 hover:text-gray-400 drop-shadow-lg"
              size={20} // Adjust icon size for mobile
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
