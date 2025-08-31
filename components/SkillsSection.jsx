'use client'
import React, { useState } from 'react'

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 65, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Next.js", level: 40, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express.js", level: 99, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },

  // Programming
  { name: "Python", level: 90, category: "programming" },
  { name: "C Language", level: 80, category: "programming" },
  { name: "Java (DSA)", level: 75, category: "programming" },

  // AI / ML & Data
  { name: "Matplotlib", level: 60, category: "ml" },
  { name: "Seaborn", level: 65, category: "ml" },
  { name: "Pandas", level: 80, category: "ml" },
  { name: "NumPy", level: 75, category: "ml" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" }
];

const categories = ["all", "frontend", "backend", "programming", "ml", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // filter skills based on category
  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 md:px-24 relative ">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Heading */}
        <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center'>
          My{" "}
          <span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500'>
            Skills
          </span>
        </h2>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full capitalize transition-colors duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className='bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition'
            >
              {/* Skill Title */}
              <div className="text-left mb-4">
                <h3 className='font-semibold text-lg text-gray-800'>{skill.name}</h3>
              </div>

              {/* Progress Bar */}
              <div className='w-full bg-gray-200 h-2 rounded-full overflow-hidden'>
                <div
                  className='bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full'
                  style={{ width: skill.level + "%" }}
                />
              </div>

              {/* Percentage */}
              <div className='text-right mt-1'>
                <span className='text-sm text-gray-600'>{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection