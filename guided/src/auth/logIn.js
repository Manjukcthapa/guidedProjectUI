import React, { Component } from "react";
import axios from "axios";
class LogIn extends Component {
  constructor() {
    super();

    this.state = {
      username: "students",
      password: "hired"
    };
  }

  handleChange = e => {
    let target = e.target;
    let name = target.name;
    this.setState({ [name]: target.value });
  };
  
  submitForm = event => {
    event.preventDefault();
    const endpoint = "http://localhost:4000/api/auth/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem('jwt', res.data.token)
      })
      .catch(err => {
        console.error("login error", err);
      });
  };

  render() {
    return (
      <div>
        <h1>logIn</h1>
        <form onSubmit={this.submitForm}>
          <input
            id="username"
            type="text"
            placeholder="UserName"
            name="username"
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

          <button className="button1" type="submit">
            Sign In
          </button>
        </form>
      </div>
    );
  }
}

export default LogIn;
