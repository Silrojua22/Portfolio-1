import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/mainViewPortfolioFiles/home/home";
import About from "./components/mainViewPortfolioFiles/about/about";
import Nav from "../src/components/commonComponents/nav/nav";
import Skills from "./components/mainViewPortfolioFiles/skills/skills";
import Projects from "./components/mainViewPortfolioFiles/projects/projects";
import Contact from "./components/mainViewPortfolioFiles/contact/contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <section className="about-section">
        <About />
      </section>
      <section className="skills-section">
        <Skills />
      </section>
      <section className="projects-section">
        <Projects />
      </section>
      <section className="contact-section">
        <Contact />
      </section>
      <div style={{ minHeight: "100vh" }}></div>
    </div>
  );
}

export default App;
