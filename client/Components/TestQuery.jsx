import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class TestQuery extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div className="writeQueryBox">
      <Form className="test-query-box">
        <Form.Row>
          <Form.Group as={Col} controlId="write-query">
            <Form.Label column sm={6}>
              Write Query:
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Enter query here..."
              style={{ width: "80%", height: "18rem" }}
              name="writeTest"
              value={this.props.writeTest}
              onChange={this.props.handleChange}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="select-query">
            <Form.Label column sm={6}>
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
      </div>
    );
  }
}

export default TestQuery;
