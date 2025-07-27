import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ali Raza",
    role: "Frontend Developer",
    message: "Noman is highly skilled in React and delivers pixel-perfect results.",
  },
  {
    name: "Sara Ahmed",
    role: "Project Manager",
    message: "Very professional and timely in delivering the portfolio project.",
  },
  {
    name: "Usman Khan",
    role: "UI/UX Designer",
    message: "Collaborating with Noman was smooth. He understood the design very well.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-gradient-to-r from-black via-gray-900 to-black py-20 px-5">
      <h2 className="text-4xl text-white font-bold text-center mb-12 underline decoration-purple-500 underline-offset-8">
        Testimonials
      </h2>
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {testimonials.map((t, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 text-white rounded-2xl p-6 shadow-lg border border-pink-500/20 hover:border-pink-500/50 transition duration-300 cursor-pointer group"
          >
            <p className="text-sm italic mb-6 group-hover:text-purple-400 transition duration-300">
              “{t.message}”
            </p>
            <div className="text-right">
              <h4 className="font-bold text-purple-400">{t.name}</h4>
              <span className="text-xs text-gray-400">{t.role}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
