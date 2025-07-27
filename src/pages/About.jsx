// import { motion } from 'framer-motion';
// import Education from '../components/Education';

// const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase', 'GitHub', 'Tailwind', 'Node.js', 'Expres.js', 'MongoDB', 'Next.js'];

// const About = () => {
//   return (
//     <>
//     <div className="bg-gray-900 text-white px-20 py-10  text-center h-screen flex flex-col justify-center items-center size-full">
//       <h2 className="text-5xl font-bold mb-4 text-purple-400 text-center">About Me</h2>
//       <p className="text-gray-300 mb-8 max-w-2xl text-center mx-auto">
//         I'm a dedicated developer who loves making web interfaces smooth, dynamic and user-friendly. I enjoy working with the latest tech.
//       </p>

//       <h3 className="text-4xl font-semibold mb-2 text-purple-300">My Skills</h3>

//       {/* Skills Animation */}
//       <div className="overflow-hidden w-full mt-4">
//         <motion.div
//           className="flex gap-6 w-max"
//           animate={{ x: ['100%', '-100%'] }}
//           transition={{
//             repeat: Infinity,
//             repeatType: 'loop',
//             duration: 15,
//             ease: 'linear',
//           }}
//         >
//           {skills.map((skill, index) => (
//             <div
//             key={index}
//             className="px-6 py-4  bg-gray-800 border border-purple-500 rounded-full text-sm shadow-md"
//             >
//               {skill}
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//       <Education />
//             </>
//   );
// };

// export default About;

import { motion } from 'framer-motion';
import Education from '../components/Education';
import Testimonials from "../pages/Testimonial";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // one by one animation
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Firebase', 'Tailwind', 'GitHub', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'TypeScript'];

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
          className="text-gray-300 text-center max-w-3xl mx-auto text-lg mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          I'm a passionate Frontend Developer with a strong interest in modern web technologies. I love creating clean, user-friendly interfaces using React, Firebase, and Tailwind CSS. My goal is to build fast, responsive, and visually appealing web applications.
        </motion.p>

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

      {/* TESTINOMIALS */}
      <Testimonials/>

      {/* 👇 Show Education Below About Section */}
      <Education />
    </>
  );
};

export default About;
