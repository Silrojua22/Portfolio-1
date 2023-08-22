import React from "react"; // Asegúrate de importar React si aún no lo has hecho
import "./App.css";
import Home from "./components/mainViewPortfolioFiles/home/home";
import About from "./components/mainViewPortfolioFiles/about/about";
import Nav from "./components/commonComponents/nav/nav"; // Ruta relativa al archivo Nav
import Skills from "./components/mainViewPortfolioFiles/skills/skills";
import Projects from "./components/mainViewPortfolioFiles/projects/projects";
import Contact from "./components/mainViewPortfolioFiles/contact/contact";

function App() {
  return (
    <div>
      <Nav /> {/* Muestra la barra de navegación en todas las secciones */}
      <div id="home-section">
        <Home />
      </div>
      <div id="about-section" className="about-section">
        <About />
      </div>
      <div id="skills-section" className="skills-section">
        <Skills />
      </div>
      <div id="projects-section" className="projects-section">
        <Projects />
      </div>
      <div id="contact-section" className="contact-section">
        <Contact />
      </div>
      <div style={{ minHeight: "100vh" }}></div>
    </div>
  );
}

export default App;
