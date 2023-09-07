import Home from "./components/mainViewPortfolioFiles/home/home";
import About from "./components/mainViewPortfolioFiles/about/about";
import Nav from "./components/commonComponents/nav/nav";
import Skills from "./components/mainViewPortfolioFiles/skills/skills";
import Projects from "./components/mainViewPortfolioFiles/projects/projects";
import Contact from "./components/mainViewPortfolioFiles/contact/contact";
import { Route, Routes } from "react-router-dom";
import DetailProject from "./components/mainViewPortfolioFiles/detailProjects/detailProject.jsx";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <div id="home-section" className="flex-grow bg-gray-800">
        <Home />
      </div>
      <div id="about-section" className="flex-grow bg-gray-800">
        <About />
      </div>
      <div id="skills-section" className="flex-grow bg-gray-800">
        <Skills />
      </div>
      <div id="projects-section" className="flex-grow bg-gray-800">
        <Projects />
      </div>
      <div id="contact-section" className="flex-grow bg-gray-800">
        <Contact />
      </div>
      <Routes>
        <Route path="/detail-project" element={DetailProject} />
      </Routes>
    </div>
  );
}

export default App;
