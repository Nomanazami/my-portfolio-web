import { Mail, MapPin, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id='contact' className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-purple-400 text-sm uppercase mb-2">Contact</h3>
        <h2 className="text-3xl font-bold mb-10">Get in Touch With Me</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Location */}
          <div className="bg-[#121212] rounded-xl py-6 px-4 flex flex-col items-center cursor-pointer">
            <MapPin size={32} className="mb-2 text-purple-400" />
            <h4 className="font-semibold">Location</h4>
            <p className="text-gray-400">Karachi, Pakistan</p>
          </div>

          {/* Phone */}
          <div className="bg-[#121212] rounded-xl py-6 px-4 flex flex-col items-center cursor-pointer">
            <Phone size={32} className="mb-2 text-purple-400" />
            <h4 className="font-semibold">Phone</h4>
            
            <p className="text-gray-400">0319-2515950</p>
          </div>

          {/* Email */}
          <div className="bg-[#121212] rounded-xl py-6 px-4 flex flex-col items-center cursor-pointer">
            <Mail size={32} className="mb-2 text-purple-400" />
            <h4 className="font-semibold">Email</h4>
            <p className="text-gray-400">nomanmehmood2005@gmail.com</p>
          </div>
        </div>

        <p className="mt-16 text-sm text-gray-600">
          Developed with 💜 by <span className="text-purple-400 font-semibold">Noman</span>
        </p>
        <p className="text-xs text-gray-700">© {new Date().getFullYear()} Noman Mehmood. All rights reserved.</p>
      </div>
    </section>
  );
}
