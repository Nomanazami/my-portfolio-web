// const Education = () => {
//   const educationList = [
//     {
//       title: "Matriculation",
//       institution: "S.M Public Academy",
//       year: "Completed",
//     },
//     {
//       title: "Intermediate (Compuetrr Science)",
//       institution: "Jinnah Govt College Nazimabad",
//       year: "Completed",
//     },
//     {
//       title: "Alim-e-Deen (Darsat-e-Deenia)",
//       institution: "Madrasa Marif Ul Uloom",
//       year: "Short Course",
//     },
//     {
//       title: "Language Courses",
//       institution: "Arabic & English (Spoken + Grammar)",
//       year: "Completed",
//     },
//     {
//       title: "Web & Mobile App Development",
//       institution: "SMIT – Saylani Mass IT Training",
//       year: "1 Year Course",
//     },
//   ];

//   return (
//     <section className="bg-gray-950 text-white py-12 px-6">
//       <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">🎓 Education</h2>
//       <div className="max-w-4xl mx-auto space-y-6">
//         {educationList.map((edu, index) => (
//           <div
//             key={index}
//             className="border border-purple-600 p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gray-900"
//           >
//             <h3 className="text-xl font-semibold text-purple-300">{edu.title}</h3>
//             <p className="text-gray-300">{edu.institution}</p>
//             <span className="text-sm text-gray-500">{edu.year}</span>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Education;

const Education = () => {
  const educationList = [
    {
      title: "BS Software Engineering (BSSE)",
      institution: "UBIT — University of Karachi",
      year: "Currently Enrolled",
      badge: "🎓 Current"
    },
    {
      title: "Web & Mobile App Development",
      institution: "SMIT – Saylani Mass IT Training",
      year: "1 Year Course",
      badge: "✅ Completed"
    },
    {
      title: "Intermediate (Computer Science)",
      institution: "Jinnah Govt College Nazimabad",
      year: "A+ Grade",
      badge: "⭐ A+ Grade"
    },
    {
      title: "Language Courses",
      institution: "Arabic & English — Spoken + Grammar",
      year: "Completed",
      badge: "✅ Completed"
    },
    {
      title: "Alim-e-Deen (Darsat-e-Deenia)",
      institution: "Madrasa Marif Ul Uloom",
      year: "Short Course",
      badge: "✅ Completed"
    },
    {
      title: "Matriculation",
      institution: "S.M Public Academy",
      year: "Completed",
      badge: "✅ Completed"
    },
  ];

  return (
    <section className="bg-gray-950 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-8">🎓 Education</h2>
      <div className="max-w-4xl mx-auto space-y-6">
        {educationList.map((edu, index) => (
          <div
            key={index}
            className={`border p-5 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 bg-gray-900 flex justify-between items-start
              ${index === 0 ? 'border-purple-400 shadow-purple-900' : 'border-purple-600'}`}
          >
            <div>
              <h3 className="text-xl font-semibold text-purple-300">{edu.title}</h3>
              <p className="text-gray-300 mt-1">{edu.institution}</p>
              <span className="text-sm text-gray-500">{edu.year}</span>
            </div>
            <span className={`text-xs px-3 py-1 rounded-full font-medium whitespace-nowrap ml-4 mt-1
              ${index === 0 ? 'bg-purple-700 text-white' : 'bg-gray-700 text-gray-300'}`}>
              {edu.badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;