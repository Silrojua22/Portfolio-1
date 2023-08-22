import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Main_view_portfolio_files/Home/Home";
import About from "./Components/Main_view_portfolio_files/About/About";
import Nav from "../src/components/common_components/nav/nav";
import Skills from "./components/main_view_portfolio_files/skills/skills";
import Projects from "./components/main_view_portfolio_files/projects/projects";
import Contact from "./components/main_view_portfolio_files/contact/contact";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
