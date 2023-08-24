import React from 'react';


const Card = ({ data }) => {
  return (
    <div className="bg-black mt-8 rounded-md shadow-md p-4 w-80 h-550 mb-4">
      {/* Render card content based on the data */}
      <img src={data.image} alt={data.title} className="w-full h-48 object-cover mb-4 rounded-md border-2 border-gray-900"/>
      <h3 className="text-xl font-bold text-gray-100 mb-2">{data.title}</h3>
      <p className="text-sm text-gray-600 font-bold">{data.description}</p>
    </div>
  );
};

export default Card;
