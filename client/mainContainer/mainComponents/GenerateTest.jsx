import React, { Component } from "react";
import { Button, Form, Col, DropdownButton, Dropdown } from "react-bootstrap";

class GenerateTest extends Component {
  render() {
    return (
      <div className="generateTestBox">
      {/* <Form className="generate-test"> */}
        {/* <Form.Row> */}
          <Form.Group as={Col} style={{ margin: 0, padding: 3 }}>
            {/* <select className="selectType" id="dd-reset" onChange = {this.props.selectTest}>
              <option value ="default" disabled selected>Select Test</option>
              <option value = "validQuery">Valid Query</option>
              <option value= "invalidQuery" >Invalid Query</option>
              <option value= "validArgField" >Valid Argument Field</option>
              <option value = "invalidArgField" >Invalid Argument Field</option>
              <option value= "validArgDataType" >Valid Argument DataType</option>
              <option value = "invalidArgDataType" >Invalid Argument DataType</option>
            </select> */}
            <Button className="generateTestButton"
              variant="outline-primary"
              size="lg"
              block
              style={{ height: "42%", width: "100%", color: "black", borderColor: "black" }}
              onClick={this.props.handleClick}
            >
              Generate Test
            </Button>
            <Button className="addTestButton"
              variant="outline-primary"
              size="lg"
              block
              style={{ height: "42%", width: "100%", color: "black", borderColor: "black" }}
              onClick={this.props.updateTestSuite}
            >
              Add to Test Suite
            </Button>
          </Form.Group>

          <Form.Group as={Col} controlId="sample-test">
            {/* <Form.Label column sm={6}>
              Generated Test:
            </Form.Label> */}
            <Form.Control
              as="textarea"
              placeholder="Generated Test..."
              style={{ width: "100%", height: "17.7rem" }}
              value={this.props.generatedTest}
            />
          </Form.Group>
        {/* </Form.Row> */}
      {/* </Form> */}
      </div>
    );
  }
}

export default GenerateTest;
