import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
import profilePic from '../aassets/profilePic.png'; // Replace with your image path
import { Typewriter } from 'react-simple-typewriter'; 

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-black text-white">
      {/* Profile Card */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src={profilePic} // Replace with your image path
          alt="Profile"
          className="w-32 h-32 rounded-full mb-4 border-4 border-purple-600"
        />
        <h2 className="text-2xl font-bold">Noman Mehmood</h2>
        
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
        <p className="text-gray-400">Frontend Developer | Karachi, <br/> Pakistan</p>
        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-xl text-white">
          <motion.a whileHover={{ scale: 1.2 }} href="#"><FaLinkedin /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#"><FaGithub /></motion.a>
          <motion.a whileHover={{ scale: 1.2 }} href="#"><FaFacebook /></motion.a>
        </div>
      </div>

      {/* About Info */}
      <div className="mt-10 md:mt-0 md:w-1/2">
        <p className="text-purple-400 font-semibold mb-2">Hello There 👋</p>
        <h1 className="text-3xl font-bold mb-4">
          I'm <span className="text-purple-400">Noman</span>, a passionate Frontend Developer 💻
        </h1>
        <p className="text-gray-300">
          Focused on building responsive and animated websites using React.js, TailwindCSS, and other exciting tools.
        </p>
        <div className="mt-4 flex items-center gap-4">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <span className="text-sm text-green-400">Ready to Take on New Challenges</span>
        </div>
        <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
        <a
        href="/cv.pdf" // Replace with actual CV link
        download
      >
        Download CV
      </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
