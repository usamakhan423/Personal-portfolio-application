import React from "react";
import { FaCode, FaServer } from "react-icons/fa";

const ServicesSection = () => {
  return (
    <section className="py-8 md:py-16 bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Services title */}
          <h2 className="text-2xl md:text-3xl text-orange-400 font-bold mb-6">
            Services
          </h2>

          {/* What I am great at */}
          <h3 className="text-3xl md:text-3xl font-bold text-white mb-4">
            What I Am Great At
          </h3>
          <p className="text-base md:text-lg text-gray-500 mb-6">
            I am a skilled FullStack Developer and UI/UX Designer with expertise
            in Mern Stack (MongoDB, ExpressJs, ReactJs, NodeJs). I have +2
            year's of hands-on experience with Mern Stack. I have worked both
            the Frontend & Backend at a time or separetely With a passion for
            creating seamless user experiences, & productive and efficient
            backend. I am eager to take on new challenges and bring innovative
            ideas to life. Let's collaborate and create exceptional digital
            solutions together!
          </p>

          {/* Services cards */}
          <div className="flex flex-row sm:flex-row items-center justify-center gap-6 w-full flex-wrap ">
            {/* Service Card 1 */}
            <div className="bg-gray-800 rounded-md p-6 flex flex-col items-center justify-center space-y-4 md:w-64">
              {/* Icon */}
              <FaCode className="text-red-500 w-8 h-8 text-center mb-3" />
              {/* Title */}
              <h4 className="text-base md:text-xl lg:text-2xl font-bold text-gray-400 mb-2">
                Frontend
              </h4>
              {/* Description */}
              <p className="text-gray-700">+25 Projects</p>
            </div>

            {/* Service Card 2 */}
            <div className="bg-gray-800 rounded-md p-6 flex flex-col items-center justify-center space-y-4 md:w-64">
              {/* Icon */}
              <FaServer className="text-red-500 w-8 h-8 text-center mb-3" />
              {/* Title */}
              <h4 className="text-base md:text-xl lg:text-2xl font-bold text-gray-400 mb-2">
                Backend
              </h4>
              {/* Description */}
              <p className="text-gray-700">+15 Projects</p>
            </div>

            {/* Service Card 3 */}
            <div className="bg-gray-800 rounded-md p-6 flex flex-col items-center justify-center space-y-4 md:w-64">
              {/* Icon */}
              <FaServer className="text-red-500 w-8 h-8 text-center mb-3" />
              {/* Title */}
              <h4 className="text-base md:text-xl lg:text-2xl font-bold text-gray-400 mb-2">
                FullStack
              </h4>
              {/* Description */}
              <p className="text-gray-700">+10 Projects</p>
            </div>
          </div>

          {/* Projects done, years of experience, satisfied clients & design items */}
          <div className="mt-8 md:mt-12">
            <div className="flex flex-col md:flex-row justify-between gap-6 items-center">
              <div className="bg-gray-800 rounded-md p-6 flex flex-col items-center justify-center space-y-4 w-full md:w-1/3">
                <h4 className="text-lg md:text-xl text-gray-400 font-bold mb-2">
                  50+
                </h4>
                <p className="text-gray-600">Projects Done</p>
              </div>
              <div className="bg-gray-800 rounded-md p-6 flex flex-col items-center justify-center space-y-4 w-full md:w-1/4">
                <h4 className="text-lg md:text-xl text-gray-400 font-bold mb-2">
                  +3 years
                </h4>
                <p className="text-gray-600">Experience</p>
              </div>
              <div className="bg-gray-800 rounded-md p-6 flex flex-col items-center justify-center space-y-4 w-full md:w-1/3">
                <h4 className="text-lg md:text-xl text-gray-400 font-bold mb-2">
                  15+
                </h4>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
