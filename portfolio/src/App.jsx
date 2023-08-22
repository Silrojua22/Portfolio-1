import "./App.css";
import { Routes, Route } from "react-router-dom";
// import Home from "./components/main_view_portfolio_files/Home/Home.jsx";
import About from "./components/main_view_portfolio_files/about/about.jsx";
import Nav from "../src/components/common_components/nav/nav.jsx";
import Skills from "./components/main_view_portfolio_files/skills/skills.jsx";
import Projects from "./components/main_view_portfolio_files/projects/projects.jsx";
import Contact from "./components/main_view_portfolio_files/contact/contact.jsx";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:5173";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
