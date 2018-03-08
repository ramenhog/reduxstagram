import React from "react";
import { render } from "react-dom";
import "./index.css";

// Import Components
import App from "./components/App";

// import react router deps
// https://codeburst.io/react-router-v4-unofficial-migration-guide-5a370b8905a
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Import store
// default export no curly brackets
// curly brackets are named exports
import store from "./store";

const router = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(router, document.getElementById("root"));
