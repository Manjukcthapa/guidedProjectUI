import React, { Component } from 'react';
import LogIn from './Auth/logIn.js';
import Users from './users/Users.js';
import {Route, NavLink , withRouter} from 'react-router-dom'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
         <nav>
      <NavLink  to="/login">LogIn</NavLink>
        <NavLink to = '/users'>Users</NavLink>
        </nav>
        <div>
        <Route path="/login" component={LogIn} />
        <Route path="/users" component={Users} />
        </div> 
      </div>
    );
  }
}

export default App;
