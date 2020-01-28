import React from "react";
import ReactDOM from "react-dom";
import "./client/public//styling/index.css";
import App from "./client/App.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
