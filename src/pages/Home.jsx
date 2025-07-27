// src/pages/Home.jsx
import React from "react";
import Hero from "../pages/Hero";
import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  return (
    <>
    <div id="home" className="min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Home Text */}
      <div className="w-full md:w-1/2 bg-[#0f172a] text-white flex items-center justify-center p-8">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">
            Hi, I'm <span className="text-purple-400">Noman</span>
          </h1>
          
               <h2 className="text-xl md:text-2xl font-semibold mb-4 text-purple-500">
                 <Typewriter
                  words={['Frontend Developer', 'React Enthusiast', 'Tailwind Pro', 'Firebase Lover']}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}/>
              </h2>
          <p className="mb-6">
            I build modern, responsive, and interactive websites using React, Firebase, Tailwind CSS, and more.
          </p>
          <div className="flex gap-4 mb-6">
             {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-full shadow-lg transition">
            View Projects
          </a>
          <a href="#contact" className="border-2 border-purple-600 hover:bg-purple-600 px-5 py-2 rounded-full text-purple-400 hover:text-white transition">
            Let's Talk
          </a>
        </div>
          </div>
          <p className="italic text-gray-400">
            “Code is like humor. When you have to explain it, it's bad.”
          </p>
        </div>
      </div>

      {/* Right Side - Hero */}
      <div className="w-full md:w-1/2 bg-black text-white flex items-center justify-center p-8">
        <Hero />
      </div>
    </div>
  </>
  );
};

export default Home;
