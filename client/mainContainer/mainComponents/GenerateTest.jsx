import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";

class GenerateTest extends Component {
  render() {
    return (
      <Form className="generate-test">
        <Form.Row>
          <Form.Group as={Col} style={{ margin: 0, padding: 0 }}>
            <Button
              variant="primary"
              size="lg"
              block
              style={{ height: "4rem", width: "80%" }}
              onClick = {this.props.handleClick}
            >
              Generate Test
            </Button>
            <Button
              variant="outline-primary"
              size="lg"
              block
              style={{ height: "4rem", width: "80%" }}
            >
              Add to Test Suite
            </Button>
          </Form.Group>

          <Form.Group as={Col} controlId="sample-test">
            <Form.Label column sm={3}>
              Generated Test:
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Sample Test..."
              style={{ width: "80%", height: "18rem" }}
              value = {this.props.generatedTest}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default GenerateTest;
