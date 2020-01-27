import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class TestInput extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="test-suite">
          <Form.Label column sm={3}>
            Test Suite:
          </Form.Label>
          <Col sm="6">
            <Form.Control type="text" placeholder="Enter test suite here..." />
          </Col>
        </Form.Group>

        <Form.Group controlId="test-description">
          <Form.Label column sm={3}>
            Test Description:
          </Form.Label>
          <Col sm="6">
            <Form.Control
              type="text"
              placeholder="Enter test description here..."
            />
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default TestInput;
