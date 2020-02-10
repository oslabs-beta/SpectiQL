import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import {  Link } from "react-router-dom";

class SideBar extends Component {
<<<<<<< HEAD:client/mainContainer/mainComponents/LeftSideBar.jsx
=======
  constructor(props) {
    super(props);
  };
>>>>>>> cd1fe22ce4a85aa02dfa333a0c1fc8d18e3f15b7:client/Components/LeftSideBar.jsx

  render() {

    return (
      // <div>Hello</div>
      <div className="leftSideBar">
        <ButtonToolbar className="buttonContainer">
          {/* <div className="selections">Select</div> */}
          <Button className="queries" variant="outline-dark" size="lg">
            <Link to = "/queries">
            Queries
            </Link>
          </Button>
          <Button className="mutations" variant="outline-dark" size="lg">
            <Link to = "/mutations">
            Mutations
            </Link>
          </Button>
          <Button className="subscriptions" variant="outline-dark" size="lg">
            Subscriptions
          </Button>
          {/* <div className="testing">Testing</div>
          <Button className="tester" variant="outline-dark" size="lg">
            Tester
          </Button>
          <Button className="save" variant="outline-dark" size="lg">
            Save
          </Button>
          <Button className="export" variant="outline-dark" size="lg">
            Export
          </Button> */}
          <Button className="clear" variant="outline-dark" size="lg">
            Clear
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
export default SideBar;
