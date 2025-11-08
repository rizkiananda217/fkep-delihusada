// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

// import CSS yang sudah dipecah
import "./styles/base.css";
import "./styles/layout.css";
import "./styles/navbar.css";
import "./styles/hero.css";
import "./styles/components.css";
import "./styles/footer.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
