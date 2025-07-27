import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    
    <nav
      className={`fixed top-0 w-full bg-black text-white py-4 z-50 shadow-md ${
        darkMode ? "bg-gray-900 text-white" : "bg-black text-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400">NOMAN</h1>

        {/* Links */}
        <ul className="flex gap-6 font-medium">
          <li>
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Home
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="about"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              About
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Projects
            </ScrollLink>
          </li>
          <li>
            <ScrollLink
              to="contact"
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="border border-purple-500 px-2 py-1 rounded text-sm hover:bg-purple-600 hover:text-white transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-md text-sm transition">
            Hire Me
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
