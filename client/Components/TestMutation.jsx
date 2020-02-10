import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class TestMutation extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    console.log('this is inside testmutation:',this.props)
    return (
      <div className="writeQueryBox">
      {/* <Form className="test-query-box"> */}
        {/* <Form.Row> */}
          <div className= "test-query-write">
          <Form.Group as={Col} controlId="write-query">
            {/* <Form.Label column sm={6}>
              Write Query:
            </Form.Label> */}
            <Form.Control
              as="textarea"
              placeholder="Enter Mutation here..."
              style={{ width: "100%", height: "17.7rem" }}
              name = "writeQuery"
              value = {this.props.writeTest}
              onChange = {this.props.handleChange}
            />
          </Form.Group>
          </div>
          
          <div className= "test-query-select">
          <Form.Group as={Col} controlId="select-query">
            {/* <Form.Label column sm={6}>
              Select Query:
            </Form.Label> */}
            <Form.Control
              as="textarea"
              placeholder="Insert your input type variable as an object:"
              style={{ width: "100%", height: "17.7rem" }}
            />
          </Form.Group>
          </div>
        {/* </Form.Row> */}
      {/* </Form> */}
      </div>
     
    );
  }
}

export default TestMutation;
