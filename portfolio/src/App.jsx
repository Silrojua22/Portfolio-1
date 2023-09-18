import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/commonComponents/nav/nav";
import Home from "./components/mainViewPortfolioFiles/home/home";
import DetailProject from "./components/mainViewPortfolioFiles/detailProject/detailProject";

function App() {
  const location = useLocation();

  const hideNav = location.pathname === "/detailProject/:projectId";

  return (
    <div>
      {!hideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailProject/:id" element={<DetailProject />} />
      </Routes>
    </div>
  );
}

export default App;
