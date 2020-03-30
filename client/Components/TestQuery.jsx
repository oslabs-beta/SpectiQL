import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class TestQuery extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="writeQueryBox">
        <div className="test-query-write">
          <Form.Group
            as={Col}
            controlId="write-query"
            className="writeQueryForm"
          >
            <Form.Control
              as="textarea"
              placeholder="Enter query here..."
              style={{ width: "100%", height: "98%", marginBottom: "2%" }}
              name="writeTest"
              value={this.props.writeTest}
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </div>
      </div>
    );
  }
}

export default TestQuery;
