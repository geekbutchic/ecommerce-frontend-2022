import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// npm install react-router-dom@6 - latest version
import './bootstrap.min.css'
// brings in bootswatch file
import App from "./App";
import "./index.css";


// wrap <APP/> with <BrowserRouter />
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
