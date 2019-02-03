import React, { Component } from 'react';
import { FormGroup, FormControl, Button } from "react-bootstrap";
import './newtrip.css';

class NewTip extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
            
        };
        this.add = this.add.bind(this);
        this.cancel = this.cancel.bind(this);
      }    
  
      add() {
          this.props.history.push("/home/my-trips");
      }
  
      cancel() {
          this.props.history.push("/home/my-trips");
      }
  
      render() {
          return (
              <div>
                <div className="background"/>
                
                <div className="newtip">
                
                <h1>I have gone to...</h1>

                    <form onSubmit={this.handleSubmit}>                    
                        <FormGroup controlId="origin" bsSize="large">
                            <label>Place</label>
                            <FormControl autoFocus onChange={this.handleChange}/>
                        </FormGroup>
                        <Button block bsSize="large" onClick = {this.add} type="submit">Add Tip</Button>
                        <Button block variant="danger" bsSize="large" onClick = {this.cancel} type="button">Cancel</Button>
                    </form>
                </div>
                
              </div>
          );
    }
}

export default NewTip;