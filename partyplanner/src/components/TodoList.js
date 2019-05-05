import React from "react";
import axios from "axios";

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    axios
      .get(`https://arcane-bayou-55024.herokuapp.com/api/party/1/todos`)
      .then(response => console.log(response.data));
  }

  render() {
    return (
      <div>
        <h1>PLACEHOLDER</h1>
      </div>
    );
  }
}

export default TodoList;
