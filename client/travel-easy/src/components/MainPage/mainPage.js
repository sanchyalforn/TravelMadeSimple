import React, { Component } from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import './mainPage.css';

class MainPage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
          
      };
      this.mytrips = this.mytrips.bind(this);
      this.reviews = this.reviews.bind(this);
      this.newtrip = this.newtrip.bind(this);
      this.logout = this.logout.bind(this);
    }    

    mytrips() {
        this.props.history.push("/home/my-trips");
    }

    reviews() {
        this.props.history.push("/home/reviews");
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
                            <Nav.Link onClick = { this.reviews } style={ {color: "white"}}>My Reviews</Nav.Link>
                            <Nav.Link onClick = { this.newtrip } style={ {color: "white"}}>Search Trip</Nav.Link>
                        </Nav>
                        <Button variant="outline-warning" onClick = { this.logout }>Sign Out</Button>
                    </Navbar.Collapse>
                </Navbar>
                <div className="background"/>
            </div>
        );
    }
}

export default MainPage;