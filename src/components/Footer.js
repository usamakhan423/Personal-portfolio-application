import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 py-4 text-white text-center">
      <p>&copy; {currentYear} U-KODE-INNOVATIONS. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
