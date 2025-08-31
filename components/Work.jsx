import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 text-gray-800"
    >
      {/* Header */}
      <h4 className="text-center mb-2 text-lg font-Ovo">My Portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">Recent Works</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 text-gray-600">
        Here’s a selection of my recent projects. Each one showcases different
        skills and technologies I’ve worked with.
      </p>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10">
        {workData.map((project, index) => (
          <a
            key={index} href={project.link } target='_blank' rel="noopener noreferrer"
            className="rounded-xl relative cursor-pointer group overflow-hidden shadow-lg"
          >
            {/* Project Image */}
            <Image
              src={project.bgImage}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-64 object-cover rounded-xl transition-transform duration-300 group-hover:scale-105"
            />

            {/* Overlay on Hover */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm max-w-[80%]">{project.description}</p>
            </div>
            
          </a>
        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center">
        <button className="px-8 py-3 border border-gray-700 rounded-full text-lg font-medium hover:bg-gray-800 hover:text-white transition duration-300">
          Show More
        </button>
      </div>
    </div>
  );
};

export default Work;