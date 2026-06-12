import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../aassets/profilePic.png'; // Adjust the path as necessar

const About = () => {
  return (
    <section className="bg-gradient-to-b from-purple-50 to-white py-12 px-4 text-center">
      <motion.img
        src={profilePic}
        alt="Noman Azami"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
        className="w-40 h-40 rounded-full object-cover mx-auto mb-6 shadow-xl border-4 border-purple-300"
      />

      <motion.h2
        className="text-4xl font-extrabold text-purple-700 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-2xl mx-auto text-gray-600 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        I'm <span className="font-semibold text-purple-600">Noman Azami</span>, a frontend developer learning React, Tailwind CSS, and animations.
        I love creating beautiful and functional web experiences. This portfolio shows my journey and projects.
      </motion.p>
    </section>
  );
};

export default About;
