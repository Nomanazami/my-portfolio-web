import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact({ darkMode }) {
  return (
    <section
      id="contact"
      className={`py-16 px-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-black text-white"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-purple-400 text-sm uppercase tracking-widest mb-2">
          Contact
        </h3>
        <h2 className="text-2xl md:text-3xl font-bold mb-10">
          Get in Touch With Me
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {/* Location */}
          <div className={`rounded-xl py-6 px-4 flex flex-col items-center transition-colors duration-300 ${
            darkMode ? "bg-gray-800" : "bg-[#121212]"
          }`}>
            <MapPin size={32} className="mb-2 text-purple-400" />
            <h4 className="font-semibold mb-1">Location</h4>
            <p className="text-gray-400 text-sm">Karachi, Pakistan</p>
          </div>

          {/* Phone */}
          <a href="tel:+923192515950" className={`rounded-xl py-6 px-4 flex flex-col items-center transition-colors duration-300 hover:border hover:border-purple-500 ${
            darkMode ? "bg-gray-800" : "bg-[#121212]"
          }`}>
            <Phone size={32} className="mb-2 text-purple-400" />
            <h4 className="font-semibold mb-1">Phone</h4>
            <p className="text-gray-400 text-sm">0319-2515950</p>
          </a>

          {/* Email */}
          <a href="mailto:nomanmehmood2005@gmail.com" className={`rounded-xl py-6 px-4 flex flex-col items-center transition-colors duration-300 hover:border hover:border-purple-500 ${
            darkMode ? "bg-gray-800" : "bg-[#121212]"
          }`}>
            <Mail size={32} className="mb-2 text-purple-400" />
            <h4 className="font-semibold mb-1">Email</h4>
            <p className="text-gray-400 text-sm break-all">
              nomanmehmood2005@gmail.com
            </p>
          </a>
        </div>

        <p className="mt-12 text-sm text-gray-600">
          Developed with 💜 by{' '}
          <span className="text-purple-400 font-semibold">Noman</span>
        </p>
        <p className="text-xs text-gray-700 mt-1">
          © {new Date().getFullYear()} Noman Mehmood. All rights reserved.
        </p>
      </div>
    </section>
  );
}