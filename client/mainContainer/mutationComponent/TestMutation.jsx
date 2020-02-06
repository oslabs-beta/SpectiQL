import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class TestMutation extends Component {
  render() {
    return (
      <div className="writeQueryBox">
      <Form className="test-query-box">
        <Form.Row>
          <Form.Group as={Col} controlId="write-query">
            <Form.Label column sm={6}>
              Write Mutation:
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter Mutation here..."
              style={{ width: "80%", height: "18rem" }}
              name = "writeMutation"
              value = {this.props.writeMutation}
              onChange = {this.props.onChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="select-query">
            <Form.Label column sm={6}>
              Import Variable Values:
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Insert your input type variable as an object:"
              style={{ width: "80%", height: "18rem" }}
              name = "writeInput"
              value = {this.props.writeInput}
              onChange = {this.props.onChange}
            />
          </Form.Group>
        </Form.Row>
      </Form>
      </div>
    );
  }
}

export default TestMutation;
