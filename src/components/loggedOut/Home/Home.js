import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import smile from "../../../img/chatting.jpg";

export default class HomePage extends Component {
  render() {
    return (
      <div className="large">
        <img className="smile" src={smile} alt="smiling" />
        <div className="dashboard start container">
          <section>
            <div className="footer">
              <div className="jumbotron jumbotron-fluid py-5">
                <div className="container text-center py-5">
                  <h1 className="display-4 welcome">Welcome to MagHour</h1>
                  <br />
                  <p className="lead">
                    A great place to share your thoughts with friends
                  </p>
                  <br />
                  <div className="mt-4">
                    <Link
                      className="btn btn-primary px-5 mr-3 create"
                      to="/chat"
                    >
                      Chat
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <br />
          </section>
          <section>
            <div className="footer">
              <div className=" jumbotron jumbotron-fluid py-5">
                <div className="container text-center py-5">
                  <h1 className="display-4 welcome">Welcome to MagHour</h1>
                  <br />
                  <p className="lead">
                    A great place to share your thoughts with friends
                  </p>
                  <br />
                  <div className="mt-4">
                    <Link
                      className="btn btn-primary px-5 mr-3 create"
                      to="/signup"
                    >
                      Create a New Account
                    </Link>

                    <Link className="btn btn-secondary px-5 log" to="/login">
                      Login to Your own Account
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
