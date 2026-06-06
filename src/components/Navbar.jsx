import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ["home", "about", "projects", "contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 shadow-md transition-colors duration-300 ${
      darkMode ? "bg-gray-900 text-white" : "bg-black text-white"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-purple-400">NOMAN</h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 font-medium">
          {navLinks.map((section) => (
            <li key={section}>
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                className="cursor-pointer hover:text-purple-400 transition capitalize"
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Right Side — Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-purple-500 px-3 py-1 rounded text-sm hover:bg-purple-600 hover:text-white transition"
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Mobile Right Side */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="border border-purple-500 px-2 py-1 rounded text-xs hover:bg-purple-600 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-purple-400"
          >
            {menuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`md:hidden px-6 pb-4 flex flex-col gap-4 font-medium transition-all duration-300 ${
          darkMode ? "bg-gray-900" : "bg-black"
        }`}>
          {navLinks.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              offset={-80}
              className="cursor-pointer hover:text-purple-400 transition capitalize border-b border-gray-700 pb-2"
              onClick={() => setMenuOpen(false)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;