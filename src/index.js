import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AnimatedCursor
      color=" 51, 255, 206"
      innerSize={12}
      outerSize={24}
      outerScale={2}
    />
    <App />
  </BrowserRouter>
);
