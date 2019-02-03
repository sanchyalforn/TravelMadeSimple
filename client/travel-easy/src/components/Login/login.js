import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './login.css';

class Login extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        login: props.login,
        email: String,
        password: String
      };
      this.login = this.login.bind(this);
      this.register = this.register.bind(this);
    }

    login() {
        // event.preventDefault()
        // var data = {
        //     username: this.state.username,
        //     password: this.state.password
        // }
        // var string = 'http://34.73.1.166/login/' + username + '/' + password; 
        // fetch(string) {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data)
        // }).then(function(response) {
        //     if (response.status >= 400) {
        //         throw new Error("Bad response from server");
        //     }
        //     return response.json();
        // }).then(function(data) {
        //     console.log(data)
        //     if (data === "success") {
        //         this.props.history.push("/home/tips");
        //     }
        // }).catch(function(err) {
        //     console.log(err)
        // });   
        this.props.history.push("/home/tips");
    }

    register() {
        this.props.history.push("/register");
    }

    render() {
        return (
            <div>
                <div className="background"/>
                <div className="Login">
                
                <h1>Welcome to Travel Made Simple</h1>

                    <form onSubmit={this.handleSubmit}>                    
                        <FormGroup controlId="username" bsSize="large">
                            <label>Username</label>
                            <FormControl autoFocus onChange={this.handleChange}/>
                        </FormGroup>
                        
                        <FormGroup controlId="password" bsSize="large">
                            <label>Password</label>
                            <FormControl type="password" onChange={this.handleChange}/>
                        </FormGroup>
                        
                        <Button block bsSize="large" onClick = {this.login} type="submit">Login</Button>
                        <Button block variant="secondary" bsSize="large" onClick = {this.register} type="button">Register</Button>
                    </form>
                </div>
            </div>
            
        );
      }
    }

export default Login;