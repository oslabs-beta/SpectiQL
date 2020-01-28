import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class TestQuery extends Component {
  render() {
    return (
      <Form className="test-query-box">
        <Form.Row>
          <Form.Group as={Col} controlId="write-query">
            <Form.Label column sm={3}>
              Write Query:
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter query here..."
              style={{ width: "80%", height: "18rem" }}
              name = "writeQuery"
              value = {this.props.writeQuery}
              onChange = {this.props.onChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="select-query">
            <Form.Label column sm={3}>
              Select Query:
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Sample selected query here..."
              style={{ width: "80%", height: "18rem" }}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default TestQuery;
