import React from "react";
import { render } from "react-dom";
import "./index.css";

// Import Components
import Main from "./components/Main";
// import react router deps
import { BrowserRouter, Route } from "react-router-dom";

const router = (
  <BrowserRouter>
    <Main />
  </BrowserRouter>
);

render(router, document.getElementById("root"));
