import React, { Component } from 'react';
import { Navbar, Nav, Button } from "react-bootstrap";
import Trips from '../Trips/trips';
import Reviews from '../Reviews/reviews';
import NewTrip from '../NewTrip/newTrip';
import './mainPage.css';

class MainPage extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
        selected: 'my-trips',
        elements: [ 'my-trips', 'reviews', 'new-trip' ],
      };
      this.changeElement = this.changeElement.bind(this);
    }    

    changeElement(selected) {
        this.setState({ selected: selected });
    }
    
    componentWillReceiveProps(props) {
        this.setState({ selected: props.selected });
    }

    submit() {
        this.props.history.push("/");
    }

    render() {
        var mainContent;

        if (this.selected === 'my-trips') {
            mainContent = (<Trips />);
        } else if (this.selected === 'reviews') {
            mainContent = (<Reviews />);
        } else if (this.selected === 'new-trip') {
            mainContent = (<NewTrip />);
        }

        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand style={ {color: "orange"} }>T M S</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#my-trips" style={ {color: "white"}}>My Trips</Nav.Link>
                            <Nav.Link href="#reviews" style={ {color: "white"}}>My Reviews</Nav.Link>
                            <Nav.Link href="#new-trip" style={ {color: "white"}}>New Trip</Nav.Link>
                        </Nav>
                        <Button variant="outline-warning" onClick = { this.logout }>Sign Out</Button>
                    </Navbar.Collapse>
                </Navbar>
            {mainContent}
            </div>
        );
    }
}

export default MainPage;