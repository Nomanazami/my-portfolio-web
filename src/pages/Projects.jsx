import React, { useState } from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

// ✅ Images
import adminImage from "../aassets/admin.png";
import aiBusinessImage from "../aassets/Ai business.png";
import blogImage from "../aassets/blog.png";
import bookingImage from "../aassets/booking.jpeg";
import calculatorImage from "../aassets/calculator.jpeg";
import chatImage from "../aassets/chat.png";
import cinemaImage from "../aassets/cinema.png";
import disneyImage from "../aassets/disney.jpeg";
import ecommerceImage from "../aassets/ecommerce.png";
import farawayImage from "../aassets/faraway.jpeg";
import landingImage from "../aassets/landing.png";
import weatherModernImage from "../aassets/modern weather.png";
import recipeImage from "../aassets/recipe.jpeg";
import teslaImage from "../aassets/tesla.jpeg";
import weatherImage from "../aassets/weather.jpeg";
import youtubeImage from "../aassets/youtube.jpeg";
import zomatoImage from "../aassets/zomato.jpeg";
import taskImage from "../aassets/Task mangement.png";
import notesImage from "../aassets/notes-manager.png";
import expenseImage from "../aassets/expand tacker.png";

// ─── Badge color map ────────────────────────────────────────────────
const typeColors = {
  "Full Stack": { bg: "#1a2e1a", text: "#4ade80", border: "#166534" },
  "AI Powered": { bg: "#1e1a2e", text: "#a78bfa", border: "#5b21b6" },
  Frontend:     { bg: "#1a1f2e", text: "#60a5fa", border: "#1d4ed8" },
};

// ─── Projects data ──────────────────────────────────────────────────
const projects = [

  // ══════════════ FEATURED ══════════════

  { 
    title: "MERN Ecommerce + Admin Dashboard",
    type: "Full Stack",
    description:
      "End-to-end ecommerce platform with a separate admin panel. Customers can browse products, manage their cart, and place orders. Admins get a full dashboard to add/edit/delete products, view orders, and manage users — all with authentication and protected routes.",
    stack: "MongoDB · Express · React · Node.js · TailwindCSS",
    highlights: ["Admin Panel", "Cart & Orders", "User Auth", "Product Management"],
    tags: ["MongoDB", "Express", "React.js", "Node.js"],
    github: "https://github.com/Nomanazami/MernStack_Ecommerce_Website",
    demo: "https://ecommer-ai.vercel.app/",
    image: ecommerceImage,
    featured: true,
  },
  {
    title: "NexTask — Task Management System",
    type: "Full Stack",
    description:
      "Production-ready project management platform. Teams can create tasks, assign members, set priorities (Low/Medium/High), and track deadlines. Includes a real-time activity log so every action — who created, updated, or completed a task — is recorded. Secured with JWT refresh tokens, rate limiting, and HTTP-only cookies.",
    stack: "MongoDB · Express · React · Node.js · JWT · Zod · TailwindCSS",
    highlights: ["JWT + Refresh Tokens", "Team Collaboration", "Activity Logs", "Dashboard Analytics"],
    tags: ["MongoDB", "Express", "React.js", "Node.js", "JWT", "Zod"],
    github: "https://github.com/Nomanazami/nexsoft-task-management-system",
    demo: "https://nexsoft-task-management-system-git-main-nomanazamis-projects.vercel.app/register",
    image: taskImage,
    featured: true,
  },
  {
    title: "SpendWise — Expense Tracker",
    type: "Full Stack",
    description:
      "Full stack finance tracker that gives users a clear picture of their money. Add, edit, and delete transactions, categorize income vs expenses, and view a live analytics dashboard showing monthly spending patterns. All data is personal and protected behind JWT authentication.",
    stack: "MongoDB · Express · React · Node.js · JWT · TailwindCSS",
    highlights: ["Income vs Expense Analytics", "Transaction History", "Protected Routes", "Responsive UI"],
    tags: ["MongoDB", "Express", "React.js", "Node.js", "JWT"],
    github: "https://github.com/Nomanazami/nexsoft-expense-tracker",
    demo: "https://nexsoft-expense-tracker.vercel.app",
    image: expenseImage,
    featured: true,
  },
  {
    title: "NeuraNote — Smart Notes App",
    type: "Full Stack",
    description:
      "A clean, distraction-free notes app where every note is stored in MongoDB Atlas — accessible from any device, never lost. Users can pick from 6 color themes per note, add custom tags for organization, and search through their notes instantly. HTTP-only cookie auth keeps data secure.",
    stack: "MongoDB · Express · React · Node.js · JWT · TailwindCSS",
    highlights: ["6 Color Themes", "Custom Tags", "MongoDB Atlas Cloud", "HTTP-only Cookies"],
    tags: ["MongoDB", "Express", "React.js", "Node.js", "JWT"],
    github: "https://github.com/Nomanazami/nexsoft-notes-app",
    demo: "https://nexsoft-notes-app-frontend.vercel.app",
    image: notesImage,
    featured: true,
  },
  {
    title: "AI Blog Generator",
    type: "AI Powered",
    description:
      "Type any topic and get a complete, well-structured blog post in seconds — powered by Groq's LLaMA 3.3 model. Generated posts are auto-saved to MongoDB so you can revisit and manage them anytime. Built on Next.js for fast server-side rendering.",
    stack: "Next.js · Groq AI · LLaMA 3.3 · MongoDB · TailwindCSS",
    highlights: ["LLaMA 3.3 via Groq", "Auto-save to MongoDB", "Next.js SSR", "Topic-to-blog in seconds"],
    tags: ["Next.js", "Groq AI", "LLaMA 3.3", "MongoDB"],
    github: "https://github.com/Nomanazami/ai-blog-generator",
    demo: "https://ai-blog-generator-omega.vercel.app/",
    image: blogImage,
    featured: true,
  },
  {
    title: "AI Business Assistant",
    type: "AI Powered",
    description:
      "A smart AI chatbot built for a perfume business. Customers describe what scent they want and the AI recommends specific products from the catalog. Replaces a traditional product search with a natural conversation — no clicking around required.",
    stack: "React.js · AI API · TailwindCSS",
    highlights: ["Product Recommendations", "Natural Language Input", "Business-specific AI", "Vercel Deployed"],
    tags: ["React.js", "AI API", "TailwindCSS", "Chatbot"],
    github: "https://github.com/Nomanazami/ai-business-assistant",
    demo: "https://ai-business-assistant-gold.vercel.app/",
    image: aiBusinessImage,
    featured: true,
  },
  {
   title: "AI Chat App",
   type: "AI Powered",
   description: "Real-time chat powered by AI for intelligent back-and-forth conversations. Firebase backend keeps messages in sync.",
   stack: "React.js · AI API · Firebase",
   highlights: [],
   tags: ["React.js", "AI API", "Firebase"],
   github: "https://github.com/Nomanazami/chat-app",
   demo: null,
   image: chatImage,
   featured: true,
 },
  {
    title: "Northwind Admin Dashboard",
    type: "Frontend",
    description:
      "A modern SaaS-style admin panel built to manage users, track revenue, and monitor activity logs. Clean dashboard layout with analytics widgets — designed to feel like a real enterprise product.",
    stack: "React.js · TailwindCSS · Lovable",
    highlights: ["Revenue Tracking", "User Management", "Activity Logs", "SaaS Design"],
    tags: ["React.js", "SaaS", "Dashboard"],
    github: "https://github.com/Nomanazami/nexsoft-admin-dashboard",
    demo: "https://admin-saas.lovable.app/",
    image: adminImage,
    featured: true,
  },

  // ══════════════ OTHER PROJECTS ══════════════

  {
    title: "Cinema Movie Search",
    type: "Frontend",
    description: "Browse and search movies with real-time data — ratings, cast, genres, and more. Clean card-based UI with instant search results.",
    stack: "React.js · Movie API · TailwindCSS",
    highlights: [],
    tags: ["React.js", "Movie API", "TailwindCSS"],
    github: "https://github.com/Nomanazami/nexsoft-movie-search",
    demo: "https://cinema-movie.lovable.app/",
    image: cinemaImage,
    featured: false,
  },
  {
    title: "Modern Weather App",
    type: "Frontend",
    description: "Search any city and get live temperature, humidity, wind speed, and forecast. Clean minimal design.",
    stack: "React.js · OpenWeather API · TailwindCSS",
    highlights: [],
    tags: ["React.js", "Weather API", "TailwindCSS"],
    github: "https://github.com/Nomanazami/nexsoft-weather-app",
    demo: "https://nexsoft-weather-app.vercel.app/",
    image: weatherModernImage,
    featured: false,
  },
  {
    title: "NexSoft Landing Page",
    type: "Frontend",
    description: "Responsive company landing page with smooth scroll animations and modern section layout.",
    stack: "React.js · TailwindCSS · Framer Motion",
    highlights: [],
    tags: ["React.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/Nomanazami/nexsoft-landing-page",
    demo: "https://nexsoft-landing-page.vercel.app/",
    image: landingImage,
    featured: false,
  },
  {
    title: "Disney+ Clone",
    type: "Frontend",
    description: "Disney+ UI clone with Firebase login and dynamic movie category pages.",
    stack: "React.js · Firebase · CSS",
    highlights: [],
    tags: ["React.js", "Firebase", "CSS"],
    github: "https://github.com/Nomanazami/disney",
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_webdevelopment-react-react-activity-7263556555004895234-gown",
    image: disneyImage,
    featured: false,
  },
  {
    title: "YouTube Clone",
    type: "Frontend",
    description: "YouTube UI with video playback, sidebar navigation, and search using the YouTube Data API.",
    stack: "React.js · YouTube API · CSS",
    highlights: [],
    tags: ["React.js", "YouTube API", "CSS"],
    github: "https://github.com/Nomanazami/youtube-clone",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7260352821030518784?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7260352821030518784%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=xTUKRRO8TXGB4itJO2GdTg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D",
    image: youtubeImage,
    featured: false,
  },
  {
    title: "Tesla Clone",
    type: "Frontend",
    description: "Tesla homepage recreated with pixel-perfect sections, smooth scroll, and full responsiveness.",
    stack: "React.js · TailwindCSS",
    highlights: [],
    tags: ["React.js", "TailwindCSS"],
    github: "https://github.com/Nomanazami/tesla-clone",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7255280656266514433?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7255280656266514433%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=REoIwXJQTseAG04xyKPD9Q%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D",
    image: teslaImage,
    featured: false,
  },
  {
    title: "Booking App",
    type: "Frontend",
    description: "Room booking UI — select rooms, pick dates, and manage reservations using React Hooks and controlled forms.",
    stack: "React.js · React Hooks",
    highlights: [],
    tags: ["React.js", "React Hooks"],
    github: "https://github.com/Nomanazami/booking-app",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7262774652995850241/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7262774652995850241%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=locm73UgTFKUiKM7LXC4zQ%3D%3D",
    image: bookingImage,
    featured: false,
  },
  {
    title: "Recipe App",
    type: "Frontend",
    description: "Search thousands of recipes via API. Filter by cuisine, view ingredients, and save favorites.",
    stack: "React.js · Recipe API",
    highlights: [],
    tags: ["React.js", "Recipe API"],
    github: "https://github.com/Nomanazami/recipe-app",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7251161124044230656?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7251161124044230656%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=Lm273TtdR36lP0Sgb6Q1HQ%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
    image: recipeImage,
    featured: false,
  },
  {
    title: "Weather App",
    type: "Frontend",
    description: "City-based real-time weather with OpenWeather API — temperature, humidity, and conditions at a glance.",
    stack: "React.js · OpenWeather API",
    highlights: [],
    tags: ["React.js", "OpenWeather API"],
    github: "https://github.com/Nomanazami/weather-app",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7245139268006797312?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7245139268006797312%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=ZTZAGlPTQHmPZEhtxiHu2g%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
    image: weatherImage,
    featured: false,
  },
  {
    title: "Faraway Travel App",
    type: "Frontend",
    description: "Pack smarter — a checklist app for planning trips. Add items, mark as packed, and sort your list.",
    stack: "React.js · State Management",
    highlights: [],
    tags: ["React.js", "State Management"],
    github: "https://github.com/Nomanazami/faraway-app",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7253747083373887488?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7253747083373887488%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=20bxsKz0RomUxOUGfg6IdA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
    image: farawayImage,
    featured: false,
  },
  {
    title: "Calculator App",
    type: "Frontend",
    description: "Responsive calculator with all basic operations built in vanilla HTML, CSS, and JavaScript.",
    stack: "HTML · CSS · JavaScript",
    highlights: [],
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nomanazami/calculator",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7234585258195615745?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7234585258195615745%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=XDVht34CRLWE4bwRaEJ1aw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D",
    image: calculatorImage,
    featured: false,
  },
  {
    title: "Zomato Landing Page",
    type: "Frontend",
    description: "Zomato homepage clone — clean pixel-perfect layout with fully responsive design.",
    stack: "HTML · CSS",
    highlights: [],
    tags: ["HTML", "CSS"],
    github: "https://github.com/Nomanazami/zomato",
    demo: "https://www.linkedin.com/feed/update/urn:li:activity:7237764710270414848?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7237764710270414848%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=ePCqQH0pSSqVKuykKg9x%2Fw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D",
    image: zomatoImage,
    featured: false,
  },
];

// ─── Project Card ────────────────────────────────────────────────────
const ProjectCard = ({ project, index }) => {
  const badge = typeColors[project.type] || typeColors["Frontend"];

  return (
    <motion.div
      className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg flex flex-col group"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      whileHover={{ y: -6, transition: { duration: 0.2 } }}
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.3)" }}
    >
      {/* ── Image ── */}
      <div className="relative h-48 overflow-hidden bg-gray-900">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
        {/* Fallback if image missing */}
        <div
          className="absolute inset-0 items-center justify-center text-gray-600 text-sm"
          style={{ display: "none" }}
        >
          No preview
        </div>

        {/* Type badge top-left */}
        <span
          className="absolute top-3 left-3 text-xs px-2 py-1 rounded-full font-semibold"
          style={{
            background: badge.bg,
            color: badge.text,
            border: `1px solid ${badge.border}`,
          }}
        >
          {project.type}
        </span>

        {/* Featured badge top-right */}
        {project.featured && (
          <span className="absolute top-3 right-3 text-xs bg-purple-600 text-white px-2 py-1 rounded-full font-medium">
            ⭐ Featured
          </span>
        )}

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>

      {/* ── Content ── */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-base font-semibold text-white mb-2 leading-snug">
          {project.title}
        </h3>

        <p className="text-sm text-gray-400 mb-3 leading-relaxed flex-1">
          {project.description}
        </p>

        {/* Highlights (featured only) */}
        {project.highlights && project.highlights.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-3">
            {project.highlights.map((h, i) => (
              <span
                key={i}
                className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-md flex items-center gap-1"
              >
                <span className="text-green-400">✓</span> {h}
              </span>
            ))}
          </div>
        )}

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="text-xs bg-gray-900 text-purple-300 border border-purple-800 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between mt-auto pt-3 border-t border-gray-700">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-purple-400 transition"
          >
            <FaGithub /> Code
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-green-400 hover:text-green-300 transition font-medium"
            >
              <FaExternalLinkAlt /> Live Demo
            </a>
          ) : (
            <span className="text-xs text-gray-600 italic">No live demo</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// ─── Main Component ──────────────────────────────────────────────────
const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [filter, setFilter] = useState("All");

  const filterOptions = ["All", "Full Stack", "AI Powered", "Frontend"];

  // Filter applies to ALL projects
  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter);
  const featuredFiltered = filtered.filter((p) => p.featured);
  const othersFiltered = filtered.filter((p) => !p.featured);
  const visibleOthers = showAll ? othersFiltered : othersFiltered.slice(0, 3);

  // Stats
  const fullStackCount = projects.filter((p) => p.type === "Full Stack").length;
  const aiCount = projects.filter((p) => p.type === "AI Powered").length;
  const frontendCount = projects.filter((p) => p.type === "Frontend").length;

  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4 sm:px-8 md:px-16">

      {/* ── Header ── */}
      <motion.div
        className="text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-purple-400 mb-2">My Projects</h2>
        <p className="text-gray-400 text-sm">
          Things I have built — from full stack systems to AI-powered apps 🚀
        </p>
      </motion.div>

      {/* ── Stats row ── */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        <div className="text-center">
          <p className="text-2xl font-bold text-green-400">{fullStackCount}</p>
          <p className="text-xs text-gray-500 mt-1">Full Stack</p>
        </div>
        <div className="w-px bg-gray-700" />
        <div className="text-center">
          <p className="text-2xl font-bold text-purple-400">{aiCount}</p>
          <p className="text-xs text-gray-500 mt-1">AI Powered</p>
        </div>
        <div className="w-px bg-gray-700" />
        <div className="text-center">
          <p className="text-2xl font-bold text-blue-400">{frontendCount}</p>
          <p className="text-xs text-gray-500 mt-1">Frontend</p>
        </div>
        <div className="w-px bg-gray-700" />
        <div className="text-center">
          <p className="text-2xl font-bold text-white">{projects.length}</p>
          <p className="text-xs text-gray-500 mt-1">Total</p>
        </div>
      </div>

      {/* ── Filter buttons — UPAR ── */}
      <div className="flex justify-center gap-2 flex-wrap mb-12">
        {filterOptions.map((opt) => (
          <button
            key={opt}
            onClick={() => { setFilter(opt); setShowAll(false); }}
            className={`text-sm px-5 py-2 rounded-full border transition font-medium ${
              filter === opt
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-gray-600 text-gray-400 hover:border-purple-500 hover:text-purple-400"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>

      {/* ── Featured ── */}
      {featuredFiltered.length > 0 && (
        <>
          <h3 className="text-xl font-semibold text-purple-300 mb-6">
            ⭐ Featured Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-16">
            {featuredFiltered.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </>
      )}

      {/* ── Other Projects ── */}
      {othersFiltered.length > 0 && (
        <>
          <h3 className="text-xl font-semibold text-purple-300 mb-6">
            🛠️ Other Projects
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleOthers.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </>
      )}

      {/* ── Show More / GitHub ── */}
      <div className="text-center mt-10 flex justify-center gap-4 flex-wrap">
        {othersFiltered.length > 3 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
          >
            {showAll
              ? "Show Less ▲"
              : `Show More (${othersFiltered.length - 3} more) ▼`}
          </button>
        )}
        <a
          href="https://github.com/Nomanazami"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition"
        >
          All Projects on GitHub <FaArrowRight className="ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Projects;