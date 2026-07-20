import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";
import FeedbackWall from "./components/FeedbackWall";
import "./App.css";
function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <FeedbackWall />
      <Contact />
      <Footer />
    </div>
  );
}
export default App;
