import React, { Component } from "react";
import { Button, ButtonToolbar } from 'react-bootstrap';
//this is not correct!
import '../../public/styling/index.css';

class SideBar extends Component {
  render() {
    return(
      <div>
      <ButtonToolbar className="buttonContainer">
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
    </div>
    )
  }
}; 
export default SideBar;