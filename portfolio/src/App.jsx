import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/commonComponents/nav/nav";
import Home from "./components/mainViewPortfolioFiles/home/home";
import DetailProject from "./components/mainViewPortfolioFiles/detailProject/detailProject";
import Footer from "./components/commonComponents/footer/footer";

function App() {
  const location = useLocation();

  // Corregimos la condición para ocultar la navegación en "/detailProject"
  const hideNav = location.pathname.startsWith("/detailProject/");

  return (
    <div>
      {!hideNav && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detailProject/:id" element={<DetailProject />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
