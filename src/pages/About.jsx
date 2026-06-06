// import { motion } from 'framer-motion';
// import Education from '../components/Education';
// import Testimonials from "../pages/Testimonial";

// const container = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.1, // one by one animation
//     },
//   },
// };

// const item = {
//   hidden: { opacity: 0, scale: 0.8 },
//   show: { opacity: 1, scale: 1 },
// };

// const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase', 'Tailwind', 'GitHub', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'TypeScript'];

// const About = () => {
//   return (
//     <>
//       <div id='about' className="bg-gray-950 text-white px-8 md:px-20 py-16">
//         <motion.h2
//           className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-8"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         >
//           About Me
//         </motion.h2>

//         <motion.p
//           className="text-gray-300 text-center max-w-3xl mx-auto text-lg mb-10"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           I'm a passionate Frontend Developer with a strong interest in modern web technologies. I love creating clean, user-friendly interfaces using React, Firebase, and Tailwind CSS. My goal is to build fast, responsive, and visually appealing web applications.
//         </motion.p>

//         <h3 className="text-3xl font-semibold text-center text-purple-300 mb-4">Tech Stack</h3>

// <motion.div
//   className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 justify-items-center"
//   variants={container}
//   initial="hidden"
//   animate="show"
// >
//   {skills.map((skill, index) => (
//     <motion.div
//       key={index}
//       className="bg-gray-800 border border-purple-500 px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-white hover:scale-105 hover:shadow-xl transition duration-300"
//       variants={item}
//       whileHover={{ scale: 1.1 }}
//     >
//       {skill}
//     </motion.div>
//   ))}
// </motion.div>
//       </div>

//       {/* TESTINOMIALS */}
//       <Testimonials/>

//       {/* 👇 Show Education Below About Section */}
//       <Education />
//     </>
//   );
// };

// export default About;

import { motion } from 'framer-motion';
import Education from '../components/Education';
import Testimonials from "../pages/Testimonial";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Firebase', 'TailwindCSS', 'GitHub', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'AI tools'];

const About = () => {
  return (
    <>
      <div id='about' className="bg-gray-950 text-white px-8 md:px-20 py-16">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-center max-w-3xl mx-auto text-lg mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a <strong className="text-white">BS Software Engineering student</strong> at{' '}
          <strong className="text-white">UBIT, University of Karachi</strong> and a{' '}
          <strong className="text-white">Web & App Development graduate</strong> from{' '}
          <strong className="text-white">SMIT</strong>. I love building responsive, 
          modern web apps using React.js, Node.js, and TailwindCSS. Currently exploring 
          AI tools and working on real-world MERN projects.
        </motion.p>

        {/* YouTube Channel */}
        <motion.div
          className="max-w-2xl mx-auto mb-10 bg-gray-900 border border-red-500 rounded-xl p-5 flex items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-red-500 text-3xl mt-1">▶</span>
          <div>
            <p className="text-white font-semibold text-lg">YouTube — Noman Nexus</p>
            <p className="text-gray-400 text-sm mt-1">
              I run a YouTube channel where I post <strong className="text-white">AI Horror Stories</strong>, 
              <strong className="text-white"> Perfume Reviews</strong>, and 
              <strong className="text-white"> AI-powered Study content</strong> — blending 
              tech, creativity, and education.
            </p>
            <a
              href="https://www.youtube.com/@NomanNexus2005"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-red-400 hover:text-red-300 text-sm font-medium transition"
            >
              🔗 Visit Channel →
            </a>
          </div>
        </motion.div>

        <h3 className="text-3xl font-semibold text-center text-purple-300 mb-4">Tech Stack</h3>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8 justify-items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 border border-purple-500 px-4 py-2 rounded-lg shadow-lg text-sm font-medium text-white hover:scale-105 hover:shadow-xl transition duration-300"
              variants={item}
              whileHover={{ scale: 1.1 }}
            >
              {skill}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Testimonials />
      <Education />
    </>
  );
};

export default About;
