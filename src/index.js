import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// npm install react-router-dom@6 - LATEST VERSION
import App from "./App";
import "./index.css";


//  WRAP <APP/> WITH <BROWSER ROUTER />
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
