import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Timeline = () => {
  const events = [
    {
      year: "2022",
      title: "High School Achievements",
      description: 
        "Completed my 10th board exams with 92%. Those years shaped my foundation and gave me the confidence to push myself academically.",
    },
    {
      year: "2023-2024",
      title: "Senior Secondary Journey",
      description: 
        "Scored 83% in 12th boards. During this phase, I faced challenges with mental health and distractions, but I also learned resilience. Those struggles made me stronger and more focused.",
    },
    {
      year: "2024-2028",
      title: "Engineering Admission at AOT",
      description: 
        "Although I initially aimed for IIT, life took a different path. Through WBJEE, I secured admission into Academy of Technology (AOT), choosing Computer Science and Engineering — a turning point in my journey.",
    },
    {
      year: "2025",
      title: "First Year of Exploration",
      description: 
        "My first year in college was all about meeting people, exploring interests, and figuring out my space. Eventually, I discovered that engineering, and especially coding, was something I truly loved.",
    },
    {
      year: "2025",
      title: "Python & MOOCS",
      description: 
        "To complete my MOOCS requirement, I took up Python on Udemy. This opened the doors to my programming journey. Soon, I was building projects like a Rain Alert system, Amazon Price Tracker, Twilio SMS notifier, and fun games like Snake Puzzle and Higher-Lower.",
    },
    {
      year: "2024-2025",
      title: "Web Development Journey",
      description: 
        "Enrolled in Angela Yu’s famous Udemy course on full-stack web development. That’s when I began building web projects and experimenting with frontend + backend technologies.",
    },
    {
      year: "2025",
      title: "Full-Stack Projects",
      description: 
        "Built my first major full-stack app — an NGO program platform. This project taught me teamwork, backend logic, and deploying real-world solutions.",
    },
    {
      year: "2025",
      title: "Portfolio & Growth",
      description: 
        "Started creating my own portfolio with React. Initially followed a tutorial, but later customized it heavily. Alongside, I continued building projects, polishing skills, and preparing for hackathons.",
    },
    {
      year: "2025 - Present",
      title: "DSA & Beyond",
      description: 
        "Currently focused on DSA with Java and expanding my problem-solving mindset. I’m also exploring opportunities to participate in hackathons and contribute to impactful projects.",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-10 bg-gradient-to-br from-pink-50 to-purple-50">
      
      <div className="flex flex-col items-center mb-10">
       <h2 className="text-3xl md:text-4xl font-bold text-pink-500 mb-2">My Story</h2>

        <p className="mt-4 text-gray-600 italic text-center">
          Coding, creating, and building my journey step by step 🚀
        </p>
      </div>

      {/* Timeline + Image */}
      <div className="flex flex-col lg:flex-row justify-center items-start w-full gap-10">
        {/* Left Timeline */}
        <div className="w-full lg:w-1/2 relative border-l-4 border-dotted border-pink-400 ml-6">
          {events.map((event, index) => (
            <div
              key={index}
              className="mb-10 ml-6 relative group opacity-0 animate-fadeIn"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              {/* Circle Dot */}
              <div className="absolute w-4 h-4 bg-pink-400 rounded-full -left-6 top-2 group-hover:scale-125 transition-transform duration-300"></div>

              {/* Card */}
              <div className="bg-white p-4 rounded-xl shadow-md border border-gray-200 group-hover:bg-gray-50 transition duration-300">
                <h3 className="font-bold text-lg text-pink-500">{event.year}</h3>
                <h4 className="font-bold text-lg text-black">{event.title}</h4>
                <p className="text-gray-700">{event.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-start">
          <div className="w-full rounded-xl shadow-lg bg-gradient-to-b from-pink-50 to-white flex items-start justify-center p-4 mt-120">
            <Image
              src={assets.img}
              alt="My Portrait"
              width={600}
              height={800}
              className="w-full h-auto rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }
      `}</style>
    </div>
  );
};

export default Timeline;