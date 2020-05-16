import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./signin.css";
import smile from "../../../img/maghour.png";

export default class Login extends Component {
  state = {
    userName: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div className="container">
        <img className="smile" src={smile} alt="smiling" />
        <div className="jumbotron-fluid py-5">
          <div className="text-center py-5">
            {/* jumbotron */}
            {/* footer */}
            <div className="chat-form-login">
              <form
                className="py-3 px-5 white"
                autoComplete="off"
                onSubmit={this.handleSubmit}
              >
                <h2 className="grey-text text-darken-3">Login</h2>
                <p className="grey-text text-darken-2">
                  Fill in the form below to login to your account.
                </p>
                <div className="chat-form-login">
                  <div className="input-field">
                    <label htmlFor="username">Username</label>
                    <input
                      name="username"
                      type="text"
                      id="username"
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="input-field">
                    <label htmlFor="password">Password</label>
                    <input
                      id="password"
                      name="password"
                      onChange={this.handleChange}
                      type="password"
                    />
                  </div>

                  <div className="input-field">
                    <button
                      className="btn blue darken-2 text-grey px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>
                </div>

                <p className="already">
                  Don't have an account?
                  <Link className="move" to="/signup">
                    {" "}
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
