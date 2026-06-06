// // src/pages/Projects.jsx
// import React from "react";
// import { FaArrowRight } from "react-icons/fa";
// import bookingImage from "../aassets/booking.jpeg";
// import disneyImage from "../aassets/disney.jpeg"
// import recipeImage from "../aassets/recipe.jpeg";
// import teslaImage from "../aassets/tesla.jpeg";
// import youtubeImage from "../aassets/youtube.jpeg";
// import farawayImage from "../aassets/faraway.jpeg";
// import weatherImage from "../aassets/weather.jpeg";
// import calculatorImage from "../aassets/calculator.jpeg";
// import zomatoImage from "../aassets/zomato.jpeg";

// const projects = [
//   {
//     title: "Disney App",
//     description: "A beautiful Disney+ UI clone with authentication, dynamic movies & categories using React and Firebase.",
//     image: disneyImage,
//     github: "https://github.com/Nomanazami/disney",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_webdevelopment-react-react-activity-7263556555004895234-gown",
//   },
//   {
//     title: "YouTube Clone",
//     description: "A React-based YouTube UI clone with video playback, sidebar, search functionality and responsive layout.",
//     image: youtubeImage,
//     github: "https://github.com/Nomanazami/youtube-clone", 
//     demo: "https://www.linkedin.com/feed/update/urn:li:activity:7260352821030518784?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7260352821030518784%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=xTUKRRO8TXGB4itJO2GdTg%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
//   },
//   {
//     title: "Tesla Clone",
//     description: "Tesla homepage UI recreated with React and Tailwind. Fully responsive with smooth scroll & transitions.",
//     image: teslaImage, 
//     github: "https://github.com/Nomanazami/tesla-clone", 
//     demo: "https://www.linkedin.com/feed/update/urn:li:activity:7255280656266514433?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7255280656266514433%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=REoIwXJQTseAG04xyKPD9Q%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
//   },
//   {
//     title: "Booking App",
//     description: "A room booking UI where users can select rooms & dates. Made with React Hooks and Forms.",
//     image: bookingImage, 
//     github: "https://github.com/Nomanazami/booking-app", 
//     demo: "https://www.linkedin.com/feed/update/urn:li:activity:7262774652995850241/?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7262774652995850241%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=locm73UgTFKUiKM7LXC4zQ%3D%3D", // replace
//   },
//   {
//     title: "Recipe App",
//     description: "Search & view delicious recipes using a third-party API. Built with React, responsive for all devices.",
//     image: recipeImage, 
//     github: "https://github.com/Nomanazami/recipe-app", 
//     demo: "https://www.linkedin.com/feed/update/urn:li:activity:7251161124044230656?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7251161124044230656%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=Lm273TtdR36lP0Sgb6Q1HQ%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
//   },
//   {
//     title: "Weather App",
//     description: "Real-time weather updates using OpenWeather API. Search city-wise forecasts with a clean UI.",
//     image: weatherImage, 
//     github: "https://github.com/Nomanazami/weather-app", 
//     demo: "https://www.linkedin.com/feed/update/urn:li:activity:7245139268006797312?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7245139268006797312%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=ZTZAGlPTQHmPZEhtxiHu2g%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
//   },
//   {
//     title: "Faraway App",
//     description: "A simple travel checklist to plan your trips. Built in React using state management and interactivity.",
//     image: farawayImage, 
//     github: "https://github.com/Nomanazami/faraway-app", 
//     demo: "https://www.linkedin.com/feed/update/urn:li:activity:7253747083373887488?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7253747083373887488%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=20bxsKz0RomUxOUGfg6IdA%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D", 
//   },
// {
//   title: "Calculator App",
//   description:
//     "A responsive basic calculator UI built using HTML, CSS, and JavaScript.",
//   github: "https://github.com/Nomanazami/calculator",
//   demo: "https://www.linkedin.com/feed/update/urn:li:activity:7234585258195615745?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7234585258195615745%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=XDVht34CRLWE4bwRaEJ1aw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D",
//   image: calculatorImage,
// },
// {
//   title: "Zomato Landing Page",
//   description:
//     "A static clone of Zomato’s homepage using HTML and CSS. Clean, responsive design.",
//   github: "https://github.com/Nomanazami/zomato",
//   demo: "https://www.linkedin.com/feed/update/urn:li:activity:7237764710270414848?updateEntityUrn=urn%3Ali%3Afs_updateV2%3A%28urn%3Ali%3Aactivity%3A7237764710270414848%2CFEED_DETAIL%2CEMPTY%2CDEFAULT%2Cfalse%29&originTrackingId=ePCqQH0pSSqVKuykKg9x%2Fw%3D%3D&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_recent_activity_content_view%3BLxwkHDKaSaCXBwZlfmqcFA%3D%3D",
//   image: zomatoImage,
// },
// ];

// const Projects = () => {
//   return (
//       <section id="projects" className="bg-gray-900 text-white py-12 px-4 sm:px-8 md:px-16">
//       <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">My Projects</h2>
//       <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//         {projects.map((project, index) => (
//             <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-600 transition">
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
//               <p className="text-sm text-gray-300 mb-4">{project.description}</p>
//               <div className="flex justify-between">
//                 <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub</a>
//                 <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Live Demo</a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
// <div className="text-center mt-10">
//     <a
//   href="https://github.com/Nomanazami"
//   target="_blank"
//   rel="noopener noreferrer"
//   className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300"
// >
//   View All Projects

//   <FaArrowRight className="ml-2" />
// </a>
// </div>
//      </section>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// ✅ All images from aassets
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

const projects = [
  // ===== FEATURED =====
  {
    title: "MERN Ecommerce + Admin Dashboard",
    description: "Full stack ecommerce with admin panel. Product management, cart, orders, and user authentication.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/Nomanazami/MernStack_Ecommerce_Website",
    demo: "https://ecommer-ai.vercel.app/",
    image: ecommerceImage,
    featured: true,
  },
  {
    title: "Northwind Admin Dashboard",
    description: "Modern SaaS admin panel with revenue tracking, user management, analytics, and activity logs.",
    tags: ["React.js", "SaaS", "Dashboard", "Lovable"],
    github: "https://github.com/Nomanazami/nexsoft-admin-dashboard",
    demo: "https://admin-saas.lovable.app/",
    image: adminImage,
    featured: true,
  },
  {
    title: "AI Business Assistant",
    description: "AI-powered chatbot for a perfume business. Smart product recommendations via AI conversation.",
    tags: ["React.js", "AI API", "TailwindCSS", "Chatbot"],
    github: "https://github.com/Nomanazami/ai-business-assistant",
    demo: "https://ai-business-assistant-gold.vercel.app/",
    image: aiBusinessImage,
    featured: true,
  },
  {
    title: "AI Blog Generator",
    description: "Generate complete blog posts on any topic using Groq AI (LLaMA 3.3). Auto-saved in MongoDB.",
    tags: ["Next.js", "Groq AI", "LLaMA 3.3", "MongoDB"],
    github: "https://github.com/Nomanazami/ai-blog-generator",
    demo: "https://ai-blog-generator-omega.vercel.app/",
    image: blogImage,
    featured: true,
  },

  // ===== OTHER PROJECTS =====
  {
    title: "Cinema Movie Search",
    description: "Search movies, view details, ratings, and cast. Clean UI with real-time movie data.",
    tags: ["React.js", "Movie API", "TailwindCSS"],
    github: "https://github.com/Nomanazami/nexsoft-movie-search",
    demo: "https://cinema-movie.lovable.app/",
    image: cinemaImage,
    featured: false,
  },
  {
    title: "AI Chat App",
    description: "Real-time chat application powered by AI for intelligent conversations.",
    tags: ["React.js", "AI API", "Firebase"],
    github: "https://github.com/Nomanazami/chat-app",
    demo: null,
    image: chatImage,
    featured: false,
  },
  {
    title: "Modern Weather App",
    description: "Real-time weather with city search, temperature, humidity and forecast.",
    tags: ["React.js", "Weather API", "TailwindCSS"],
    github: "https://github.com/Nomanazami/nexsoft-weather-app",
    demo: "https://nexsoft-weather-app.vercel.app/",
    image: weatherModernImage,
    featured: false,
  },
  {
    title: "NexSoft Landing Page",
    description: "Modern responsive company landing page with smooth animations.",
    tags: ["React.js", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/Nomanazami/nexsoft-landing-page",
    demo: "https://nexsoft-landing-page.vercel.app/",
    image: landingImage,
    featured: false,
  },
  {
    title: "Disney+ Clone",
    description: "Disney+ UI clone with Firebase authentication and dynamic movie categories.",
    tags: ["React.js", "Firebase", "CSS"],
    github: "https://github.com/Nomanazami/disney",
    demo: null,
    image: disneyImage,
    featured: false,
  },
  {
    title: "YouTube Clone",
    description: "YouTube UI clone with video playback, sidebar, and search functionality.",
    tags: ["React.js", "YouTube API", "CSS"],
    github: "https://github.com/Nomanazami/youtube-clone",
    demo: null,
    image: youtubeImage,
    featured: false,
  },
  {
    title: "Tesla Clone",
    description: "Tesla homepage UI with React and Tailwind. Fully responsive with smooth transitions.",
    tags: ["React.js", "TailwindCSS"],
    github: "https://github.com/Nomanazami/tesla-clone",
    demo: null,
    image: teslaImage,
    featured: false,
  },
  {
    title: "Booking App",
    description: "Room booking UI where users can select rooms and dates using React Hooks.",
    tags: ["React.js", "React Hooks"],
    github: "https://github.com/Nomanazami/booking-app",
    demo: null,
    image: bookingImage,
    featured: false,
  },
  {
    title: "Recipe App",
    description: "Search and view recipes using a third-party API. Responsive for all devices.",
    tags: ["React.js", "Recipe API"],
    github: "https://github.com/Nomanazami/recipe-app",
    demo: null,
    image: recipeImage,
    featured: false,
  },
  {
    title: "Weather App",
    description: "City-wise real-time weather using OpenWeather API with clean UI.",
    tags: ["React.js", "OpenWeather API"],
    github: "https://github.com/Nomanazami/weather-app",
    demo: null,
    image: weatherImage,
    featured: false,
  },
  {
    title: "Faraway Travel App",
    description: "Travel checklist to plan your trips using React state management.",
    tags: ["React.js", "State Management"],
    github: "https://github.com/Nomanazami/faraway-app",
    demo: null,
    image: farawayImage,
    featured: false,
  },
  {
    title: "Calculator App",
    description: "Responsive calculator with all basic operations. Built with HTML, CSS, JS.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Nomanazami/calculator",
    demo: null,
    image: calculatorImage,
    featured: false,
  },
  {
    title: "Zomato Landing Page",
    description: "Static Zomato homepage clone. Clean and responsive design.",
    tags: ["HTML", "CSS"],
    github: "https://github.com/Nomanazami/zomato",
    demo: null,
    image: zomatoImage,
    featured: false,
  },
];

const ProjectCard = ({ project }) => (
  <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-600 transition-all duration-300 hover:-translate-y-2 flex flex-col group">
    {/* Image */}
    <div className="relative h-56 overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-purple-900 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      {project.featured && (
        <span className="absolute top-3 right-3 text-xs bg-purple-600 text-white px-2 py-1 rounded-full font-medium">
          ⭐ Featured
        </span>
      )}
    </div>

    <div className="p-5 flex flex-col flex-1">
      <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-sm text-gray-300 mb-4 flex-1">{project.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span key={i} className="text-xs bg-gray-700 text-purple-300 px-2 py-1 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-between mt-auto">
        <a href={project.github} target="_blank" rel="noopener noreferrer"
          className="flex items-center gap-1 text-sm text-gray-300 hover:text-purple-400 transition">
          <FaGithub /> GitHub
        </a>
        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-1 text-sm text-gray-300 hover:text-green-400 transition">
            <FaExternalLinkAlt /> Live Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);
  const visibleOthers = showAll ? others : others.slice(0, 3);

  return (
    <section id="projects" className="bg-gray-900 text-white py-16 px-4 sm:px-8 md:px-16">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-4">My Projects</h2>
      <p className="text-center text-gray-400 mb-12">Things I have built so far 🚀</p>

      {/* Featured */}
      <h3 className="text-xl font-semibold text-purple-300 mb-6">⭐ Featured Projects</h3>
      <div className="grid gap-8 md:grid-cols-2 mb-14">
        {featured.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Others */}
      <h3 className="text-xl font-semibold text-purple-300 mb-6">🛠️ Other Projects</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleOthers.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Show More */}
      {others.length > 3 && (
        <div className="text-center mt-8 flex justify-center gap-4 flex-wrap">
          <button onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
            {showAll ? "Show Less ▲" : `Show More (${others.length - 3} more) ▼`}
          </button>
          <a href="https://github.com/Nomanazami" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition">
            View All on GitHub <FaArrowRight className="ml-2" />
          </a>
        </div>
      )}
    </section>
  );
};

export default Projects;