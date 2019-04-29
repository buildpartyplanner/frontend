import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

// import reducer from "./reducers";

// import { createStore, applyMiddleWare } from "redux";
// import { Provider } from "react-redux";

// const store = createStore(
//   reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
