import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/signin.css";
import smile from "../../../img/maghour.png";

export default class SignUp extends Component {
  state = {
    userName: "",
    password: "",
    email: "",
    firstName: "",
    lastName: "",
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
      <div>
        <img className="smile" src={smile} alt="smiling" />
        <div className="container ">
          <div className="jumbotron-fluid py-5">
            <div className="text-center py-5">
              {/* jumbotron */}
              {/* footer */}
              <div className="chat-form">
                <form
                  className="py-3 px-5 white chat-form"
                  autoComplete="off"
                  onSubmit={this.handleSubmit}
                >
                  <h2 className="grey-text text-darken-3">Sign Up</h2>
                  <p className="grey-text text-darken-2">
                    Fill in the form below to create an account.
                  </p>
                  <div className="chat-form">
                    <div className="input-field">
                      <label htmlFor="userName" className="center">
                        Username
                      </label>
                      <input
                        name="userName"
                        type="text"
                        id="userName"
                        onChange={this.handleChange}
                        value={this.state.username}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="firstName">First Name</label>
                      <input
                        name="firstName"
                        type="text"
                        id="firstName"
                        onChange={this.handleChange}
                        value={this.state.firstname}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        name="lastName"
                        type="text"
                        id="lastName"
                        onChange={this.handleChange}
                        value={this.state.lastname}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="email">Email</label>
                      <input
                        name="firstname"
                        type="email"
                        id="email"
                        onChange={this.handleChange}
                        value={this.state.email}
                      />
                    </div>
                    <div className="input-field">
                      <label htmlFor="password">Password</label>
                      <input
                        id="password"
                        name="password"
                        onChange={this.handleChange}
                        value={this.state.password}
                        type="password"
                      />
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary px-5" type="submit">
                        Sign up
                      </button>
                    </div>
                  </div>

                  <p>
                    Have an account? <Link to="/login">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
