import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../src/redux/store.js";
import axios from "axios";
axios.defaults.baseURL = "https://portfolio-1-production.up.railway.app/";
// axios.defaults.baseURL = "http://localhost:3002";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
