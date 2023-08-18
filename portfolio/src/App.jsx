import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Main_view_portfolio_files/Home/Home";
import About from "./Components/Main_view_portfolio_files/About/About";
import Nav from "../src/components/common_components/nav/nav";

function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
