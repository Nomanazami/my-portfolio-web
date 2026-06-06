import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube } from "react-icons/fa";

function Footer({ darkMode }) {
  return (
    <footer className={`py-6 px-4 transition-colors duration-300 ${
      darkMode ? "bg-gray-950 text-white" : "bg-black text-white"
    }`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-sm text-gray-400 text-center md:text-left">
          © {new Date().getFullYear()}{' '}
          <span className="text-purple-400 font-semibold">Noman Mehmood Azami</span>
          . All rights reserved.
        </p>

        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/Nomanazami/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/noman-azami/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com/@NomanNexus2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition"
          >
            <FaYoutube />
          </a>
          <a
            href="mailto:nomanmehmood2005@gmail.com"
            className="hover:text-purple-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;