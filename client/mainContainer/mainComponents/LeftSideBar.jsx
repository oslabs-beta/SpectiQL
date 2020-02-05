import React, { Component } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";


class SideBar extends Component {
  render() {
    return (
      <div classname="leftSideBar">
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
          <Button variant="outline-dark" size="lg">
            Export
          </Button>
          <Button variant="outline-dark" size="lg" onClick = {this.props.clearSuites}>
            Clear
          </Button>
        </ButtonToolbar>
      </div>
    );
  }
}
export default SideBar;
