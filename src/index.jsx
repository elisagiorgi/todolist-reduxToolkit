import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import store from "./app/store";

import App from "./App";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,

  rootElement
);
