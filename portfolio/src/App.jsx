import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainViewPortfolio from "./Components/main_view_portfolio_files/MainViewPortfolio/MainViewPorfolio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<MainViewPortfolio />} />
      </Routes>
    </div>
  );
}

export default App;
