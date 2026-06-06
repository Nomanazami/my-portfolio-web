import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import profilePic from '../aassets/profilePic.png';
import CV from '../aassets/Noman_Azami_CV.pdf';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-24 md:py-16 bg-black text-white gap-10"
    >
      {/* Left - Profile */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
        
        <img
          src={profilePic}
          alt="Noman Azami"
          className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-4 border-4 border-purple-600 object-cover shadow-lg shadow-purple-900"
        />

        <h2 className="text-xl md:text-2xl font-bold">Noman Mehmood Azami</h2>

        <div className="text-base md:text-xl font-semibold mb-2 text-purple-500 h-8">
          <Typewriter
            words={[
              'Full Stack Developer',
              'BSSE Student @ UBIT',
              'React.js Developer',
              'MERN Stack Learner',
              'AI Tools Explorer',
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </div>

        <p className="text-gray-400 text-sm">📍 Karachi, Pakistan</p>

        {/* Social Icons */}
        <div className="flex gap-5 mt-4 text-2xl">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.linkedin.com/in/noman-azami/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://github.com/Nomanazami"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="https://www.youtube.com/@NomanNexus2005"
            target="_blank"
            rel="noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </motion.a>
        </div>
      </div>

      {/* Right - Info */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p className="text-purple-400 font-semibold mb-2">Hello There 👋</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
          I'm <span className="text-purple-400">Noman</span>, a passionate{' '}
          <span className="text-purple-400">Full Stack Developer</span> 💻
        </h1>
        <p className="text-gray-300 leading-relaxed text-sm md:text-base">
          BSSE student at{' '}
          <strong className="text-white">UBIT, University of Karachi</strong> & SMIT
          graduate. I build modern web apps with{' '}
          <strong className="text-white">React.js, Node.js & TailwindCSS</strong>.
          Currently exploring{' '}
          <strong className="text-white">AI tools</strong> and growing as a MERN Stack
          Developer.
        </p>

        <div className="mt-4 flex items-center justify-center md:justify-start gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-ping flex-shrink-0" />
          <span className="text-sm text-green-400">
            Available for Internships & Remote Work
          </span>
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <a href={CV} download="Noman_Azami_CV.pdf">
            <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition font-medium">
              📄 Download CV
            </button>
          </a>
          <a href="#projects">
            <button className="w-full sm:w-auto border border-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition font-medium">
              🚀 View Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;