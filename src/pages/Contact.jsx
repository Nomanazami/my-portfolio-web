import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Send, CheckCircle, XCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact({ darkMode }) {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // ✅ Replace these 3 values from emailjs.com dashboard
    emailjs
      .sendForm(
        "service_3w81vsq",     // 👈 EmailJS Service ID
        "template_wpf9zyz",    // 👈 EmailJS Template ID
        formRef.current,
        "RUlG7ZTogVhxjWeA7" // 👈 EmailJS Public Key
      )
      .then(() => {
        setStatus("success");
        formRef.current.reset();
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  return (
    <section
      id="contact"
      className={`py-16 px-4 transition-colors duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-black text-white"
      }`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-purple-400 text-sm uppercase tracking-widest mb-2">
            Contact
          </p>
          <h2 className="text-2xl md:text-3xl font-bold">Get in Touch</h2>
          <p className="text-gray-400 text-sm mt-2">
            Open for internships, remote work, and collaborations 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">

          {/* ── Left: Info Cards ── */}
          <div className="flex flex-col gap-4">
            <div
              className={`rounded-xl py-5 px-5 flex items-center gap-4 ${
                darkMode ? "bg-gray-800" : "bg-[#121212]"
              }`}
            >
              <MapPin size={28} className="text-purple-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Location</h4>
                <p className="text-gray-400 text-sm">Karachi, Pakistan</p>
              </div>
            </div>
      <a
        href="https://wa.me/923192515950"
        target="_blank"
        rel="noreferrer"
        className={`rounded-xl py-5 px-5 flex items-center gap-4 hover:border hover:border-purple-500 transition ${
          darkMode ? "bg-gray-800" : "bg-[#121212]"
        }`}
      >
        <Phone size={28} className="text-green-400 flex-shrink-0" />
        <div>
          <h4 className="font-semibold text-sm">WhatsApp</h4>
          <p className="text-gray-400 text-sm">0319-2515950</p>
        </div>
      </a>

            <a
              href="mailto:nomanmehmood2005@gmail.com"
              className={`rounded-xl py-5 px-5 flex items-center gap-4 hover:border hover:border-purple-500 transition ${
                darkMode ? "bg-gray-800" : "bg-[#121212]"
              }`}
            >
              <Mail size={28} className="text-purple-400 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-sm">Email</h4>
                <p className="text-gray-400 text-sm break-all">
                  nomanmehmood2005@gmail.com
                </p>
              </div>
            </a>

            {/* Available badge */}
            <div className="flex items-center gap-3 mt-2 px-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-ping flex-shrink-0" />
              <span className="text-sm text-green-400">
                Available for internships & remote work
              </span>
            </div>
          </div>

          {/* ── Right: Contact Form ── */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className={`rounded-2xl p-6 flex flex-col gap-4 ${
              darkMode ? "bg-gray-800" : "bg-[#121212]"
            }`}
          >
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Your Name</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="John Doe"
                className="w-full bg-gray-900 border border-gray-700 focus:border-purple-500 rounded-lg px-4 py-2.5 text-sm text-white outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Your Email</label>
              <input
                type="email"
                name="reply_to"
                required
                placeholder="john@example.com"
                className="w-full bg-gray-900 border border-gray-700 focus:border-purple-500 rounded-lg px-4 py-2.5 text-sm text-white outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Subject</label>
              <input
                type="text"
                name="subject"
                required
                placeholder="Internship opportunity / Project collab"
                className="w-full bg-gray-900 border border-gray-700 focus:border-purple-500 rounded-lg px-4 py-2.5 text-sm text-white outline-none transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Tell me about the opportunity..."
                className="w-full bg-gray-900 border border-gray-700 focus:border-purple-500 rounded-lg px-4 py-2.5 text-sm text-white outline-none transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-purple-600 hover:bg-purple-700 disabled:opacity-60 text-white px-6 py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>

            {/* Status messages */}
            {status === "success" && (
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <CheckCircle size={16} /> Message sent! I'll reply soon 🚀
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-400 text-sm">
                <XCircle size={16} /> Something went wrong. Try emailing directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
