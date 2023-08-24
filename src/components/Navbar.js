import React from "react";

import { FaGithub, FaLinkedin  } from "react-icons/fa";

const Navbar = () => { 

  return (
    <nav className="fixed top-0 left-0 right-0 bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand/logo */}
        <div><h1 className="text-xl font-bold drop-shadow-lg text-white">U-KODE-INNOVATIONS</h1></div>

        {/* Social icons */}
        <div className="flex space-x-4">
          <a
            href="https://github.com/usamakhan423"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-orange-400 hover:text-gray-400 drop-shadow-lg" size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ossama-ghaffar-b378621b2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-orange-400 hover:text-gray-400 drop-shadow-lg" size={24} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
