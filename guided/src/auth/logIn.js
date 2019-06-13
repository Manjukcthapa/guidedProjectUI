import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  render() {
    return (
      <div>
        <h1>logIn</h1>
        <form>
          <input
            className="inputform"
            type="username"
            id="username"
            placeholder="UserName"
            name="name"
            value={this.state.username}
            onChange={this.handleChange}
          />

          <input
            className="inputform"
            type="password"
            id="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
