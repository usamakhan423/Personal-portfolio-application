import React from "react";

const TechExpertise = () => {
  return (
    <section className="bg-gray-700 py-10">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-orange-400">My Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-gray-900 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-white">
              React Development
            </h3>
            <p className="text-gray-500 text-sm">
              "With years of experience, I've mastered crafting interactive and
              performant web applications using React. From component
              architecture to state management, I ensure seamless user
              experiences."
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-white">
              Tailwind CSS Mastery
            </h3>
            <p className="text-gray-500 text-sm">
              "Tailwind CSS is my go-to for creating responsive, beautifully
              styled interfaces. Leveraging its utility-first approach, I design
              pixel-perfect layouts and components that shine across devices."
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-white">Node&Express</h3>
            <p className="text-gray-500 text-sm">
              "As a skilled Node.js and Express developer, I engineer robust
              backend solutions. From RESTful APIs to real-time applications, I
              excel in creating efficient and scalable server-side systems."
            </p>
          </div>
          <div className="p-6 bg-gray-900 rounded shadow-md">
            <h3 className="text-lg font-semibold mb-3 text-white">MongoDB Database</h3>
            <p className="text-gray-500">
              "As an intermediate MongoDB database developer, I architect
              data-driven solutions for seamless application performance.
              Additionally, I harness Prisma to elevate data modeling and
              access, optimizing the user experience."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechExpertise;
