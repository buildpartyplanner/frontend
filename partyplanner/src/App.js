import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
// import axios from "axios";

// import sampleData from "./sampleData";

import LoginForm from "./components/LoginForm";
import TodoContainer from "./components/TodoContainer";
import ShoppingList from "./components/ShoppingLIst";
import Users from "./components/Users";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      savedUsers: []
    };
  }

  // componentDidMount() {
  //   const id = this.
  // }

  // getUser = id => {
  //   axios
  //   .get("https://arcane-bayou-55024.herokuapp.com/api/user/1")
  //   .then(response => {
  //     this.setState({ users: response.data });
  //     console.log(response);
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  // }

  // https://arcane-bayou-55024.herokuapp.com/api/shopping
  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // postShoppingItem = shopping => {};

  render() {
    return (
      <div className="App">
        <Route exact path="/" component={LoginForm} />
        <Route path="/user" render={props => <Users {...props} />} />
        <Route
          path="/todos"
          render={props => (
            <TodoContainer {...props} sampleData={this.state.savedUsers} />
          )}
        />
        <Route
          path="/shoppinglist"
          render={props => (
            <ShoppingList {...props} sampleData={this.state.savedUsers} />
          )}
        />
      </div>
    );
  }
}

export default App;
