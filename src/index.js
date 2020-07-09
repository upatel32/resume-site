import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { SiteContextProvider } from "./context";

ReactDOM.render(
  <SiteContextProvider>
    <Router>
      <App />
    </Router>
  </SiteContextProvider>,
  document.getElementById("root")
);
