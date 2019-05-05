import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import LoginForm from "./components/LoginForm";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LoginForm} />
    </div>
  );
}

export default App;
