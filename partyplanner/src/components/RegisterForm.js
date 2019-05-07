import React from "react";
import { connect } from "react-redux";
import { Route, Link } from "react-router-dom";

import LoginForm from "./LoginForm";

import { login } from "../actions";
import "./LoginForm.css";

class RegisterForm extends React.Component {
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
        <h2>Enter a username and password to register.</h2>
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
          Register
        </button>

        <h5>
          If you are already registered click <Link to="/login">HERE</Link> to
          log in
        </h5>
        <Route path="/login" component={LoginForm} />

        {/* <ProtectedRoute path="/login" component={LoginForm} /> */}
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(RegisterForm);
