import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Footer from "./components/Footer";


function App() {
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }


  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
