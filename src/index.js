import React from "react";
import { render } from "react-dom";
import "./index.css";

// Import Components
import Main from "./components/Main";
// import react router deps
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Import store
// default export no curly brackets
// curly brackets are named exports
import store from "./store";

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  </Provider>
);

render(router, document.getElementById("root"));
