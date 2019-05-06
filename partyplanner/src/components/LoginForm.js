import React from "react";
import { connect } from "react-redux";
import Master from "./Master";
import ProtectedRoute from "./ProtectedRoute";

import { login } from "../actions";

import "./LoginForm.css";

class LoginForm extends React.Component {
  state = {
    credentials: {
      username: "",
      password: ""
    }
  };

  handleChanges = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.credentials);
  };

  render() {
    return (
      <div className="login-form">
        <h1 className="login-header">Welcome to PartyPlanner</h1>
        <input
          className="login-input"
          type="text"
          name="username"
          placeholder="Username"
          value={this.state.credentials.username}
          onChange={this.handleChanges}
        />
        <input
          className="login-input"
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.credentials.password}
          onChange={this.handleChanges}
        />
        <button className="login-button" onClick={this.login}>
          Login
        </button>

        <ProtectedRoute path="/user" component={Master} />
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginForm);
