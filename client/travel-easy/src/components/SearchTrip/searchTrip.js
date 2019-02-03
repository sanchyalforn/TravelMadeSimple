import React, { Component } from 'react';
import { Navbar, Nav, Button, FormControl, FormGroup } from "react-bootstrap";
import './searchTrip.css';

class NewTrip extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.mytrips = this.mytrips.bind(this);
        this.tips = this.tips.bind(this);
        this.newtrip = this.newtrip.bind(this);
        this.logout = this.logout.bind(this);
      }    
  
      mytrips() {
          this.props.history.push("/home/my-trips");
      }
  
      tips() {
          this.props.history.push("/home/tips");
      }
  
      newtrip() {
          this.props.history.push("/home/search-trip");
      }
  
      logout() {
          this.props.history.push("/");
      }
  
      render() {
          return (
              <div>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand style={ {color: "orange"} }>T M S</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link onClick = { this.mytrips } style={ {color: "white"}}>My Trips</Nav.Link>
                            <Nav.Link onClick = { this.tips } style={ {color: "white"}}>My Tips</Nav.Link>
                            <Nav.Link onClick = { this.newtrip } style={ {color: "white"}}>Search Trip</Nav.Link>
                        </Nav>
                        <Button variant="outline-warning" onClick = { this.logout }>Sign Out</Button>
                    </Navbar.Collapse>
                </Navbar>
                <div className="background"/>

                <div className="Search">
                    <form onSubmit={this.handleSubmit}>                                            
                        <FormGroup controlId="to" bsSize="large">
                            <h1>I want to travel to:</h1>
                            <FormControl type="to" onChange={this.handleChange}/>
                        </FormGroup>
                        <Button block bsSize="large" onClick = {this.login} type="submit">Search</Button>
                        
                    </form>

                </div>
                
              </div>
          );
    }
}

export default NewTrip;