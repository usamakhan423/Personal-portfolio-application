import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';


const Card = ({ data }) => {
  return (
    <div className="bg-black mt-8 rounded-md shadow-md p-4 w-80 h-550 mb-4">
      {/* Render card content based on the data */}
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover mb-4 rounded-md border-2 border-gray-900" />
      {/* Icons */}
      <div className="flex items-center justify-center my-4">
                <a href={data.githubLink} target="_blank" rel="noopener noreferrer" className="mr-2">
                    <FiGithub className="text-gray-400 hover:text-gray-200 text-xl cursor-pointer" />
                </a>
                <a href={data.viewLink} target="_blank" rel="noopener noreferrer">
                    <FiExternalLink className="text-gray-400 hover:text-gray-200 text-xl cursor-pointer" />
                </a>
            </div>
      <h3 className="text-xl font-bold text-gray-100 mb-2">{data.title}</h3>
      <p className="text-sm text-gray-600 font-bold">{data.description}</p>
    </div>
  );
};

export default Card;
