import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaYoutube } from "react-icons/fa";
import profilePic from "../aassets/profilePic.png";
import CV from "../aassets/Noman_Azami_CV.pdf";

const Home = ({ darkMode }) => {
  return (
    <section
      id="home"
      className={`min-h-screen w-full flex flex-col md:flex-row items-center justify-center gap-10 px-8 py-16 md:py-0 ${
        darkMode ? "bg-gray-950" : "bg-[#0f172a]"
      } text-white`}
    >
      {/* ── Left: Photo Card ── */}
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <img
          src={profilePic}
          alt="Noman Azami"
          className="w-36 h-36 md:w-48 md:h-48 rounded-full border-4 border-purple-600 object-cover shadow-lg shadow-purple-900 mb-4"
        />
        <h2 className="text-lg md:text-xl font-bold">Noman Mehmood Azami</h2>
        <div className="text-sm font-semibold text-purple-400 h-7 mt-1">
          <Typewriter
            words={["Full Stack Developer", "MERN Stack Developer", "AI Tools Builder", "React & Node.js Dev"]}
            loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000}
          />
        </div>
        <p className="text-gray-400 text-sm mt-1">📍 Karachi, Pakistan</p>

        {/* Social icons */}
        <div className="flex gap-5 mt-4 text-2xl">
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/noman-azami/" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
            <FaLinkedin />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/Nomanazami" target="_blank" rel="noreferrer" className="hover:text-purple-400 transition">
            <FaGithub />
          </motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="https://www.youtube.com/@NomanNexus2005" target="_blank" rel="noreferrer" className="hover:text-red-500 transition">
            <FaYoutube />
          </motion.a>
        </div>
      </motion.div>

      {/* ── Right: Text Content ── */}
      <motion.div
        className="max-w-lg text-center md:text-left"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-3">
          Hi, I'm <span className="text-purple-400">Noman</span>
        </h1>

        <h2 className="text-xl md:text-2xl font-semibold text-purple-400 mb-4">
          <Typewriter
            words={["Full Stack Developer", "MERN Stack Developer", "AI Tools Builder", "React & Node.js Dev"]}
            loop={0} cursor cursorStyle="|" typeSpeed={70} deleteSpeed={50} delaySpeed={1000}
          />
        </h2>

        <p className="text-gray-300 leading-relaxed mb-5">
          I build modern, responsive full stack web applications using the MERN stack — MongoDB, Express, React, and Node.js.
        </p>

        {/* Available badge */}
        <div className="flex items-center justify-center md:justify-start gap-2 mb-5">
          <span className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping flex-shrink-0" />
          <span className="text-sm text-green-400">Available for Internships & Remote Work</span>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <a href={CV} download="Noman_Azami_CV.pdf">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full font-medium transition">
              📄 Download CV
            </button>
          </a>
          <a href="#projects">
            <button className="border-2 border-purple-600 hover:bg-purple-600 text-purple-400 hover:text-white px-6 py-2 rounded-full font-medium transition">
              🚀 View Projects
            </button>
          </a>
          <a href="#contact">
            <button className="border-2 border-gray-600 hover:border-purple-500 text-gray-400 hover:text-white px-6 py-2 rounded-full font-medium transition">
              💬 Let's Talk
            </button>
          </a>
        </div>

        <p className="italic text-gray-600 mt-6 text-sm">
          "Code is like humor. When you have to explain it, it's bad."
        </p>
      </motion.div>
    </section>
  );
};

export default Home;
