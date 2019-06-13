import React, {Component} from 'react';
import axios from 'axios';
// import Auth from '../auth/Auth';
// import styled from 'styled-components';



class Users extends React.Component {
    state = {
        users:[]
    };

    render() {
        console.log('You are in the Users page!');
        return (
            <list>
                <h2>Users</h2>
                <p>
                    {this.state.users.map(user => (
                        <p key={user.id}>{user.username}</p>
                    ))}
                </p>
            </list>
        )
    }
 componentDidMount() {
    const endpoint = "http://localhost:4000/api/users";
    const token = localStorage.getItem('jwt')
    const options = {
headers:{
    authorization:token
}
    }
      axios.get(endpoint, options).then(res => {
          console.log('users',res.data)
            this.setState({ users: res.data })
        }) 
        .catch(error => console.log('users error', error.response)) ; 
    }    
}

export default (Users);
