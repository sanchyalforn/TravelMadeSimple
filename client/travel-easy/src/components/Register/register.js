import React, { Component } from 'react';
import { Button, FormGroup, FormControl } from "react-bootstrap";
import './register.css';

class Register extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        register: props.register,
        name: String,
        username: String,
        password: String,
        email: String
      };
      this.submit = this.submit.bind(this);
    }

    submit() {
        this.props.history.push("/home/tips ");
    }

    render() {
        return (
            <div>
                <div className="background"/>
                <div className="Register">
                
                <h1>Sign Up in Travel Made Simple it's too simple</h1>

                    <form onSubmit={this.handleSubmit}>                    
                        <FormGroup controlId="name" bsSize="large">
                            <label>Name</label>
                            <FormControl autoFocus onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup controlId="username" bsSize="large">
                            <label>Username</label>
                            <FormControl autoFocus onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup controlId="email" bsSize="large">
                            <label>Email</label>
                            <FormControl type="email" onChange={this.handleChange}/>
                        </FormGroup>

                        <FormGroup controlId="password" bsSize="large">
                            <label>Password</label>
                            <FormControl onChange={this.handleChange} type="password" />
                        </FormGroup>
                        
                        <Button block bsSize="large" onClick = {this.submit} type="submit">Start planning!</Button>
                    </form>
                </div>
            </div>
        );
      }
    }

export default Register;