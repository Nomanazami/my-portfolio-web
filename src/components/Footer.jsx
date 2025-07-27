// src/components/Footer.js
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-6 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-2 md:mb-0">
          © {new Date().getFullYear()} Noman. All rights reserved.
        </p>
        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/Nomanazami/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/noman-mehmood-azami-71617b303/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:nomanazami2005@gmail.com"
            className="hover:text-gray-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
