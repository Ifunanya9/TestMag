import React, { Component } from "react";
import "./search.css";

export default class SignUp extends Component {
  render() {
    return (
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Results of what you searched ""</h1>
        <div id="search-container">
          <input type="text" placeholder="Search" />
        </div>
        <div className="section">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title"></span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
