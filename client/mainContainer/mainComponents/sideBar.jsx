import React, { Component } from "react";
import Button from 'react-bootstrap/Button';
//this is not correct!
import '../../public/styling/index.css';

class SideBar extends Component {
  render() {
    return(
      <ButtonToolbar className = "buttonContainer">
      <Button variant="outline-dark" size="lg">
       Queries
      </Button>
      <Button variant="outline-dark" size="lg">
        Mutations
      </Button>
      <Button variant="outline-dark" size="lg">
        Subscriptions
      </Button>
      <Button variant="outline-dark" size="lg">
        Tester
      </Button>
      <Button variant="outline-dark" size="lg">
        Save
      </Button>
    </ButtonToolbar>
    )
  }
}; 
export default SideBar;