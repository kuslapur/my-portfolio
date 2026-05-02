import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience"; // ✅ added
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience /> {/* ✅ added here */}
      <Projects />
      <Contact />
    </div>
  );
}