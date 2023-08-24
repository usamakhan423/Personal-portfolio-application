import React from "react";
import illustration from "../images/illustration.png";
import { FaCode } from "react-icons/fa";

const HeroSection = () => {
  const phoneNumber = "03441839388"; // Replace with your actual phone number
  const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}`;



  return (
    <section id="hero" className="py-16 md:py-36 bg-gray-900">
      <div className="container my-5 mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left side with text */}
        <div className="md:w-1/2 md:pr-8 flex flex-col items-center md:items-start">
          <span className="text-white text-xl">Hi, there I'm</span>
          <h1 className="text-4xl md:text-7xl text-white font-bold mb-3 md:mb-6 text-center md:text-left drop-shadow-xl">
            Ossama Ghaffar
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 mb-2 md:mb-4 flex items-center">
            <FaCode className="text-gray-600 w-4 h-4 md:w-5 md:h-5 mr-2" />
            JAVASCRIPT ENTHUSIAST
          </p>
          <p className="text-lg md:text-2xl text-gray-500 mb-4 md:mb-6 text-center md:text-left">
            FullStack Developer | UI Designer
          </p>
          <button className="border-2 border-orange-400 hover:border-orange-500 hover:text-orange-500 text-orange-400 font-bold py-2 px-4 md:py-3 md:px-6 rounded">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Start WhatsApp Chat
            </a>
          </button>
        </div>

        {/* Right side with the person's image */}
        <div className="md:w-1/2 mt-6 md:mt-0">
          <img
            className="w-full md:w-auto rounded-md"
            src={illustration}
            alt="Person"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
