import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/main_view_portfolio_files/Home/Home.jsx";
import About from "./components/main_view_portfolio_files/About/About.jsx";
import Nav from "../src/components/common_components/Nav/Nav.jsx";
import Skills from "./components/main_view_portfolio_files/Skills/Skills.jsx";
import Projects from "./components/main_view_portfolio_files/Projects/Projects.jsx";
import Contact from "./components/main_view_portfolio_files/Contact/Contact.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5173";

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
