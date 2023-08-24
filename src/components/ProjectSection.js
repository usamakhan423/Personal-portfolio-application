import React, { useState } from "react";
import CardData from "../constants/cardData";
import FilterButtons from "./CardGallery/FilteButtons";
import Card from "./CardGallery/Card";

const ProjectSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const categories = ["All", ...new Set(CardData.map((data) => data.category))];

  // Function to filter the data based on the selected filter
  const filterData = (filter) => {
    return filter === "All"
      ? CardData
      : CardData.filter((data) => data.category === filter);
  };

  // Function to handle filter change when a button is clicked
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  const filteredData = filterData(selectedFilter);
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          {/* Project title */}
          <h2 className="text-2xl md:text-3xl text-orange-400 font-bold mb-6">
            Projects
          </h2>

          {/* My Masterpiece Collections */}
          <h3 className="text-3xl text-white font-bold mb-4">
            My Masterpiece Collections
          </h3>
          <p className="text-lg text-gray-400 mb-6">
          "Aspiring full-stack developer with self-taught proficiency in diverse domains. From web development to app creation, my journey is a testament to growth. Let's connect to explore my dynamic portfolio."
          </p>

          {/* Project Filtering Section */}
          <div className="flex flex-col items-center justify-center">
            {/* Filter buttons */}
            <FilterButtons
              categories={categories}
              selectedFilter={selectedFilter}
              onFilterChange={handleFilterChange}
            />

            {/* Card grid */}
            <div className="flex items-center justify-center flex-wrap gap-x-4 md:gap-x-8 lg:gap-x-16">
              {filteredData.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
