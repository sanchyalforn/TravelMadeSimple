import React, { Component } from 'react';
import { Navbar, Nav, Button, Card } from "react-bootstrap";
import './tips.css';

class Tips extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.mytrips = this.mytrips.bind(this);
        this.tips = this.tips.bind(this);
        this.searchtrip = this.searchtrip.bind(this);
        this.newtip = this.newtip.bind(this);
        this.logout = this.logout.bind(this);
    }    
  
    mytrips() {
        this.props.history.push("/home/my-trips");
    }
  
    tips() {
        this.props.history.push("/home/tips");
    }
  
    searchtrip() {
        this.props.history.push("/home/search-trip");
    }
  
    logout() {
        this.props.history.push("/");
    }

    newtip() {
        this.props.history.push("/home/new-tip");
    }
  
    render() {
        return (
            <div>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand style={ {color: "orange"} }>T M S</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link onClick = { this.mytrips } style={ {color: "white"}}>My Trips</Nav.Link> */}
                            <Nav.Link onClick = { this.tips } style={ {color: "blue"}}>My Tips</Nav.Link>
                            <Nav.Link onClick = { this.searchtrip } style={ {color: "white"}}>Search Trip</Nav.Link>
                        </Nav>
                        <Button variant="outline-success" onClick = { this.newtip } className="margin-button">Add Tip</Button>
                        <Button variant="outline-warning" onClick = { this.logout }>Sign Out</Button>
                    </Navbar.Collapse>
                </Navbar>
                <div className="background"/>
                <div className="cards">
                    <Card className="card2">
                        <Card.Body>[Barcelona] TRAVEL: It's faster taking metro than bus. FOOD: non comercial places</Card.Body>
                    </Card>
                    <Card className="card2">
                        <Card.Body>[Madrid] TRAVEL: Take the daily ticket for public transport. FOOD: non comercial places</Card.Body>
                    </Card>
                    <Card className="card2">
                        <Card.Body>[London] TRAVEL: Expensive underground. FOOD: pubs > restaurants </Card.Body>
                    </Card>
                </div>            
            </div>
        );
    }
}

export default Tips;