// import { motion } from 'framer-motion';
// import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';
// import profilePic from '../aassets/profilePic.png'; // Replace with your image path
// import CV from '../aassets/My CV.png'; // Replace with your cv path
// import { Typewriter } from 'react-simple-typewriter'; 

// const Hero = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between px-6 py-10 bg-black text-white">
//       {/* Profile Card */}
//       <div className="flex flex-col items-center md:items-start text-center md:text-left">
//         <img
//           src={profilePic} // Replace with your image path
//           alt="Profile"
//           className="w-32 h-32 rounded-full mb-4 border-4 border-purple-600"
//         />
//         <h2 className="text-2xl font-bold">Noman Mehmood Azami</h2>
        
//                        <h2 className="text-xl md:text-2xl font-semibold mb-4 text-purple-500">
//                          <Typewriter
//                           words={['Frontend Developer', 'React Enthusiast', 'Tailwind Pro', 'Firebase Lover']}
//                           loop={0}
//                           cursor
//                           cursorStyle="|"
//                           typeSpeed={70}
//                           deleteSpeed={50}
//                           delaySpeed={1000}/>
//                       </h2>
//         <p className="text-gray-400">Frontend Developer | Karachi, <br/> Pakistan</p>
//         {/* Social Icons */}
//         <div className="flex gap-4 mt-4 text-xl text-white">
//           <motion.a whileHover={{ scale: 1.2 }} href="#"><FaLinkedin /></motion.a>
//           <motion.a whileHover={{ scale: 1.2 }} href="#"><FaGithub /></motion.a>
//           <motion.a whileHover={{ scale: 1.2 }} href="#"><FaFacebook /></motion.a>
//         </div>
//       </div>

//       {/* About Info */}
//       <div className="mt-10 md:mt-0 md:w-1/2">
//         <p className="text-purple-400 font-semibold mb-2">Hello There 👋</p>
//         <h1 className="text-3xl font-bold mb-4">
//           I'm <span className="text-purple-400">Noman</span>, a passionate Frontend Developer 💻
//         </h1>
//         <p className="text-gray-300">
//           Focused on building responsive and animated websites using React.js, TailwindCSS, and other exciting tools.
//         </p>
//         <div className="mt-4 flex items-center gap-4">
//           <span className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
//           <span className="text-sm text-green-400">Ready to Take on New Challenges</span>
//         </div>
//         <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
//         <a
//         href={CV} // Replace with actual CV link
//         download
//       >
//         Download CV
//       </a>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import profilePic from '../aassets/profilePic.png';
import CV from '../aassets/My CV.png';
import { Typewriter } from 'react-simple-typewriter';

const Hero = () => {
  return (
    <div id="home" className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-black text-white gap-10">

      {/* Left - Profile */}
      <div className="flex flex-col items-center md:items-start text-center md:text-left">
        <img
          src={profilePic}
          alt="Noman Azami"
          className="w-36 h-36 rounded-full mb-4 border-4 border-purple-600 object-cover"
        />
        <h2 className="text-2xl font-bold">Noman Mehmood Azami</h2>

        <h2 className="text-lg md:text-xl font-semibold mb-2 text-purple-500">
          <Typewriter
            words={['Full Stack Developer', 'BSSE Student @ UBIT', 'React.js Developer', 'MERN Stack Learner', 'AI Tools Explorer']}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>

        <p className="text-gray-400 text-sm">Karachi, Pakistan</p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-4 text-2xl">
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
      </div>

      {/* Right - Short Info */}
      <div className="md:w-1/2">
        <p className="text-purple-400 font-semibold mb-2">Hello There 👋</p>
        <h1 className="text-3xl font-bold mb-4">
          I'm <span className="text-purple-400">Noman</span>, a passionate <span className="text-purple-400">Full Stack Developer</span> 💻
        </h1>
        <p className="text-gray-300 leading-relaxed">
          BSSE student at <strong className="text-white">UBIT, University of Karachi</strong> & SMIT graduate. 
          I build modern web apps with <strong className="text-white">React.js, Node.js & TailwindCSS</strong>. 
          Currently exploring <strong className="text-white">AI tools</strong> and growing as a MERN Stack Developer.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
          <span className="text-sm text-green-400">Available for Internships & Remote Work</span>
        </div>

        <a href={CV} download="Noman_Azami_CV.pdf">
          <button className="mt-5 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition font-medium">
            📄 Download CV
          </button>
        </a>
      </div>

    </div>
  );
};

export default Hero;