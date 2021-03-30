import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  rootElement
);
