import React from 'react';

const FilterButtons = ({ categories, selectedFilter, onFilterChange }) => {
  return (
    <div>
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 m-4 py-2 rounded ${
            selectedFilter === category ? 'bg-orange-400 text-white' : 'border-2 border-orange-400 text-orange-400'
          }`}
          onClick={() => onFilterChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
