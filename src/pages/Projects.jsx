// src/pages/Projects.jsx
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import bookingImage from "../aassets/booking.jpeg";
import disneyImage from "../aassets/disney.jpeg"
import recipeImage from "../aassets/recipe.jpeg";
import teslaImage from "../aassets/tesla.jpeg";
import youtubeImage from "../aassets/youtube.jpeg";
import farawayImage from "../aassets/faraway.jpeg";
import weatherImage from "../aassets/weather.jpeg";
import calculatorImage from "../aassets/calculator.jpeg";
import zomatoImage from "../aassets/zomato.jpeg";

const projects = [
  {
    title: "Disney App",
    description: "A beautiful Disney+ UI clone with authentication, dynamic movies & categories using React and Firebase.",
    image: disneyImage, // replace with your own image
    github: "https://github.com/Nomanazami/disney",
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_webdevelopment-react-react-activity-7263556555004895234-gown",
  },
  {
    title: "YouTube Clone",
    description: "A React-based YouTube UI clone with video playback, sidebar, search functionality and responsive layout.",
    image: youtubeImage, // replace with your own
    github: "https://github.com/Nomanazami/youtube-clone", // replace with your repo
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_youtubeclone-react-mui-activity-7263701233441773568-fjZT", // replace
  },
  {
    title: "Tesla Clone",
    description: "Tesla homepage UI recreated with React and Tailwind. Fully responsive with smooth scroll & transitions.",
    image: teslaImage, // replace
    github: "https://github.com/Nomanazami/tesla-clone", // replace
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_react-tailwind-frontend-activity-7263781004502085632-FT8V", // replace
  },
  {
    title: "Booking App",
    description: "A room booking UI where users can select rooms & dates. Made with React Hooks and Forms.",
    image: bookingImage, // replace
    github: "https://github.com/Nomanazami/booking-app", // replace
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_react-booking-project-activity-7264002761748844544-1eRW", // replace
  },
  {
    title: "Recipe App",
    description: "Search & view delicious recipes using a third-party API. Built with React, responsive for all devices.",
    image: recipeImage, // replace
    github: "https://github.com/Nomanazami/recipe-app", // replace
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_react-recipe-api-activity-7264209452008730624-iMQK", // replace
  },
  {
    title: "Weather App",
    description: "Real-time weather updates using OpenWeather API. Search city-wise forecasts with a clean UI.",
    image: weatherImage, // replace
    github: "https://github.com/Nomanazami/weather-app", // replace
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_weather-react-openweather-activity-7264334532884217856-URje", // replace
  },
  {
    title: "Faraway App",
    description: "A simple travel checklist to plan your trips. Built in React using state management and interactivity.",
    image: farawayImage, // replace
    github: "https://github.com/Nomanazami/faraway-app", // replace
    demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_react-checklist-tripapp-activity-7264421239813853184-9Zhz", // replace
  },
{
  title: "Calculator App",
  description:
    "A responsive basic calculator UI built using HTML, CSS, and JavaScript.",
  github: "https://github.com/Nomanazami/calculator",
  demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_calculator-html-css-javascript-activity-7265748597783900160-BZmw",
  image: calculatorImage,
},
{
  title: "Zomato Landing Page",
  description:
    "A static clone of Zomato’s homepage using HTML and CSS. Clean, responsive design.",
  github: "https://github.com/Nomanazami/zomato",
  demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_zomato-landingpage-html-css-activity-7266050289313929216-HwnI",
  image: zomatoImage,
},
];

const Projects = () => {
  return (
      <section id="projects" className="bg-gray-900 text-white py-12 px-4 sm:px-8 md:px-16">
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-12">My Projects</h2>
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-600 transition">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between">
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">GitHub</a>
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
<div className="text-center mt-10">
  <button className="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full text-sm font-semibold transition duration-300">
    View All Projects <FaArrowRight className="ml-2" />
  </button>
</div>
     </section>
  );
};

export default Projects;



// src/pages/Projects.jsx


// import React from "react";
// import { FaArrowRight } from "react-icons/fa";

// const projects = [
//   {
//     title: "Disney App",
//     description:
//       "A beautiful UI clone of Disney+ with smooth animations and responsive design. Built using React and Tailwind.",
//     github: "https://github.com/Nomanazami/disney",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_webdevelopment-react-react-activity-7263556555004895234-gown",
//     image: "/projects/disney.png",
//   },
//   {
//     title: "YouTube Clone",
//     description:
//       "YouTube frontend clone showing trending videos, search feature, and responsive layout. Built using React.",
//     github: "https://github.com/Nomanazami/youtube-clone",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_youtubeclone-reacttailwind-responsive-activity-7264086157167747072-AtEr",
//     image: "/projects/youtube.png",
//   },
//   {
//     title: "Tesla Clone",
//     description:
//       "A frontend replica of Tesla’s website with animations and sleek design using React and Tailwind.",
//     github: "https://github.com/Nomanazami/tesla-clone",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_tesla-clone-responsivewebsite-react-activity-7264338589075412993-pGeu",
//     image: "/projects/tesla.png",
//   },
//   {
//     title: "Booking App",
//     description:
//       "A complete room/hotel booking UI app, responsive and interactive, built in React.",
//     github: "https://github.com/Nomanazami/booking-app",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_booking-app-responsive-react-activity-7264643726466048000-oJrg",
//     image: "/projects/booking.png",
//   },
//   {
//     title: "Recipe App",
//     description:
//       "Fetch and display delicious recipes using an API. Built with React and styled with Tailwind CSS.",
//     github: "https://github.com/Nomanazami/recipe-app",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_recipeapp-reacttailwind-activity-7264940111807805441-ZoGh",
//     image: "/projects/recipe.png",
//   },
//   {
//     title: "Weather App",
//     description:
//       "Get real-time weather info using OpenWeatherMap API. Simple and responsive app in React.",
//     github: "https://github.com/Nomanazami/weather-app",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_weatherapp-react-api-activity-7265210446678493184-jYb4",
//     image: "/projects/weather.png",
//   },
//   {
//     title: "Faraway App",
//     description:
//       "A fun task management app showing packing lists and interactive features. Built with React.",
//     github: "https://github.com/Nomanazami/faraway-app",
//     demo: "https://www.linkedin.com/posts/noman-mehmood-azami-71617b303_faraway-react-tasklist-activity-7265480820500951040-Z7n3",
//     image: "/projects/faraway.png",
//   },
// ];

// const Projects = () => {
//   return (
//     <section className="min-h-screen px-6 py-12 bg-gradient-to-b from-gray-900 to-black text-white">
//       <h2 className="text-4xl font-bold text-center mb-10 text-purple-400">Projects</h2>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {projects.map((project, index) => (
//           <div
//             key={index}
//             className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
//           >
//             <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
//             <div className="p-5">
//               <h3 className="text-xl font-semibold text-purple-300">{project.title}</h3>
//               <p className="text-sm my-3">{project.description}</p>
//               <div className="flex gap-4">
//                 <a
//                   href={project.github}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-sm text-blue-400 underline"
//                 >
//                   GitHub
//                 </a>
//                 <a
//                   href={project.demo}
//                   target="_blank"
//                   rel="noreferrer"
//                   className="text-sm text-green-400 underline"
//                 >
//                   Live Demo
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </section>
//   );
// };

// export default Projects;
