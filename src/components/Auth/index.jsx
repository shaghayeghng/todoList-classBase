import React, { Component } from "react";
import axios from "axios";
import "./Auth.css";
import { Redirect } from "react-router-dom";
import Cookies from "universal-cookie";

class Auth extends Component {
  state = { loginFormShow: true };
  cookies = new Cookies();

  loginHandler = async (event) => {
    event.preventDefault();
    const loginData = {
      username: event.target[0].value,
      password: event.target[1].value,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login/",
        loginData
      );
      this.cookies.set("token", response.data.token);
      this.props.authHandler();
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  signupHandler = async (event) => {
    event.preventDefault();
    const signupData = {
      username: event.target[0].value,
      email: event.target[1].value,
      password: event.target[2].value,
    };
    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/signup/",
        signupData
      );
      this.cookies.set("token", response.data.token);
      this.props.authHandler(); //in bade catch ejra mishe
    } catch (error) {
      return alert(error.response.data.message);
    }
  };

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/todoList" />;
    }
    return (
      <div className="auth">
        <h1 className="title">Log In or Sign Up</h1>
        <div className="auth-container">
          <div className="toggle">
            <h2
              className={this.state.loginFormShow ? "active" : ""}
              onClick={() => this.setState({ loginFormShow: true })}
            >
              Login
            </h2>
            <h2
              className={!this.state.loginFormShow ? "active" : ""}
              onClick={() => this.setState({ loginFormShow: false })}
            >
              SignUp
            </h2>
          </div>
          {this.state.loginFormShow ? (
            <form onSubmit={this.loginHandler} className="auth-form">
              <input
                className="username-input"
                placeholder="username"
                type="text"
              />
              <input
                className="password-input"
                placeholder="password"
                type="password"
              />
              <button className="submit-btn">Log in</button>
            </form>
          ) : (
            <form onSubmit={this.signupHandler} className="auth-form">
              <input
                className="username-input"
                placeholder="username"
                type="text"
              />
              <input className="email-input" placeholder="email" type="email" />
              <input
                className="password-input"
                placeholder="password"
                type="password"
              />
              <button className="submit-btn">Register</button>
            </form>
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
