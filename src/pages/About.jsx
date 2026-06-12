import { motion } from "framer-motion";
import Education from "../components/Education";
import Testimonials from "../pages/Testimonial";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

const skills = [
  { name: "HTML", level: "Expert" },
  { name: "CSS", level: "Expert" },
  { name: "JavaScript", level: "Advanced" },
  { name: "React.js", level: "Advanced" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "TailwindCSS", level: "Advanced" },
  { name: "Next.js", level: "Intermediate" },
  { name: "Firebase", level: "Intermediate" },
  { name: "GitHub", level: "Advanced" },
  { name: "AI Tools", level: "Intermediate" },
];

const levelColor = {
  Expert: "text-green-400 border-green-700",
  Advanced: "text-blue-400 border-blue-700",
  Intermediate: "text-purple-400 border-purple-700",
};

const About = ({ darkMode }) => {
  return (
    <>
      <div
        id="about"
        className={`px-6 md:px-20 py-16 transition-colors duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-950 text-white"
        }`}
      >
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-center text-purple-400 mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-center max-w-3xl mx-auto text-base md:text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I'm a <strong className="text-white">BS Software Engineering student</strong>{" "}
          at <strong className="text-white">UBIT, University of Karachi</strong> and a{" "}
          <strong className="text-white">Web & App Development graduate</strong> from{" "}
          <strong className="text-white">SMIT</strong>. I build full stack web
          applications using <strong className="text-white">React.js, Node.js, Express,
          and MongoDB</strong>. I enjoy solving real problems with clean code and
          exploring AI-powered tools.
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { value: "20+", label: "Projects Built" },
            { value: "4+", label: "Full Stack Apps" },
            { value: "3+", label: "AI Projects" },
            { value: "2+", label: "Year Experience" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl font-bold text-purple-400">{stat.value}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* YouTube Card */}
        <motion.div
          className="max-w-2xl mx-auto mb-12 bg-gray-900 border border-red-500 rounded-xl p-5 flex items-start gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <span className="text-red-500 text-3xl mt-1 flex-shrink-0">▶</span>
          <div>
            <p className="text-white font-semibold text-base md:text-lg">
              YouTube — Noman Nexus
            </p>
            <p className="text-gray-400 text-sm mt-1 leading-relaxed">
              I run a YouTube channel where I post{" "}
              <strong className="text-white">AI Horror Stories</strong>,{" "}
              <strong className="text-white">Perfume Reviews</strong>, and{" "}
              <strong className="text-white">AI-powered Study content</strong> — blending
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
      </div>

      {/* Education & Testimonials BEFORE skills */}
      <Education darkMode={darkMode} />
      <Testimonials darkMode={darkMode} />

      {/* ── Skills Section — at the BOTTOM ── */}
      <div
        id="skills"
        className={`px-6 md:px-20 py-16 ${
          darkMode ? "bg-gray-950" : "bg-gray-900"
        }`}
      >
        <motion.h3
          className="text-2xl md:text-4xl font-bold text-center text-purple-300 mb-3"
          initial={{ opacity: 0, y: -15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Tech Stack & Skills
        </motion.h3>
        <p className="text-center text-gray-500 text-sm mb-10">
          Technologies I work with
        </p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className={`bg-gray-800 border px-3 py-3 rounded-lg shadow-lg text-sm font-medium text-white text-center hover:shadow-xl transition duration-300 flex flex-col gap-1 ${levelColor[skill.level]}`}
              variants={item}
              whileHover={{ scale: 1.08 }}
            >
              <span className="text-white font-semibold">{skill.name}</span>
              <span className={`text-xs font-normal ${levelColor[skill.level].split(" ")[0]}`}>
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default About;
