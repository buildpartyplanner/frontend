import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import { Route } from "react-router-dom";

import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={RegisterForm} />
    </div>
  );
}

export default App;
