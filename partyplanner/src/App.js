import React from "react";
import { Route } from "react-router-dom";
import "./App.css";

import sampleData from "./sampleData";

import LoginForm from "./components/LoginForm";
import TodoContainer from "./components/TodoContainer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sampleData: []
    };
  }

  componentDidMount() {
    this.setState({ sampleData: sampleData });
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <Route
          path="/Todos"
          component={TodoContainer}
          sampleData={this.state.sampleData}
        />
      </div>
    );
  }
}

export default App;
