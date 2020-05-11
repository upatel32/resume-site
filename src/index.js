import React from "react";
import ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import resumeApp from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(resumeApp, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppContainer />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
