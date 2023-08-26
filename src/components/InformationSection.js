import React from 'react';
import personalImage from '../images/personal.png'

const InformationSection = () => {
  return (
    <div className="bg-gray-700 py-8 md:py-16">
  <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between">
    {/* Left side content */}
    <div className="lg:w-2/5 mb-6 lg:mb-0">
      <div className="rounded-lg overflow-hidden border-2 border-gradient-blue-purple">
        <img
          className="w-full h-full object-cover"
          src={personalImage}
          alt="owner"
        />
      </div>
    </div>

    {/* Right side content */}
    <div className="lg:w-1/2 flex flex-col items-center lg:items-start">
      <h2 className="text-xl md:text-2xl lg:text-3xl mb-2 md:mb-4 text-orange-400">Introduction</h2>
      <h3 className="text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-white text-left">
        FullStack Developer | UI Designer
      </h3>
      <p className="text-base md:text-lg text-center text-gray-400 mb-4 lg:mb-8 md:text-left">
        I am a passionate FullStack Developer and UI/UX Designer, combining
        technical expertise with creative flair. With a keen eye for design and a
        love for coding, I bring user-centric experiences to life. From crafting
        captivating interfaces to ensuring seamless interactions, my goal is to
        create digital solutions that leave a lasting impact. Let's collaborate
        and build something amazing together!
      </p>
      <button className="border-2 border-orange-400 hover:border-orange-500 text-orange-400 hover:text-orange-500 font-bold py-2 px-4 md:py-3 md:px-6 rounded">
        Hire me
      </button>
    </div>
  </div>
</div>

  );
};

export default InformationSection;
