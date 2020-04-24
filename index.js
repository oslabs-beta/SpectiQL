import React from "react";
import ReactDOM from "react-dom";
import "./client/public/styling/index.css";
import App from "./client-refactored/App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ContextProvider } from "./client-refactored/ContextAPI.jsx";

ReactDOM.render(
  <BrowserRouter>
    <ContextProvider>
      <App />
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
