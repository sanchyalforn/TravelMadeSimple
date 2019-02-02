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
        // Add api call for make the comprovations
        this.props.history.push("/home");
    }

    register() {
        this.props.history.push("/register");
    }

    render() {
        return (
            <div className="Login">
            
            <h1>Welcome to Travel Made Simple</h1>

                <form onSubmit={this.handleSubmit}>                    
                    <FormGroup controlId="username" bsSize="large">
                        <label>Username</label>
                        <FormControl autoFocus value={this.state.email} onChange={this.handleChange}/>
                    </FormGroup>
                    
                    <FormGroup controlId="password" bsSize="large">
                        <label>Password</label>
                        <FormControl type="password" value={this.state.password} onChange={this.handleChange}/>
                    </FormGroup>
                    
                    <Button block bsSize="large" onClick = {this.login} type="submit">Login</Button>
                    <Button block variant="secondary" bsSize="large" onClick = {this.register} type="button">Register</Button>
                </form>
            </div>
        );
      }
    }

export default Login;