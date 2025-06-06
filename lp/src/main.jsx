import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import StatCounter from "./component/StatCounter";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <StatCounter />
      <App />
    </BrowserRouter>
  </StrictMode>
);
