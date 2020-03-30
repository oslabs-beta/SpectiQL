import React, { Component } from "react";
import { Form, Col } from "react-bootstrap";

class TestInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="testInputContainer">
        <div className="testSuiteInstruction">Query test name ⟶</div>

        <Form className="testSuiteInput">
          <Form.Group controlId="test-suite">
            <Form.Control
              type="text"
              placeholder="Enter test suite here..."
              name="testSuiteName"
              value={this.props.testSuiteName}
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </Form>

        <div className="testDescriptionInstruction">Test description ⟶</div>

        <Form className="testDescriptionInput">
          <Form.Group controlId="test-description">
            <Form.Control
              type="text"
              placeholder="Enter test description here..."
              name="testDescription"
              value={this.props.testDescription}
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </Form>

        <div className="selectTestInstruction">Please select test ⟶</div>

        <select
          className="selectQueryType"
          id="dd-reset"
          onChange={this.props.selectTest}
        >
          <option value="default" disabled selected>
            Select Test
          </option>
          <option value="validQuery">Valid Query</option>
          <option value="invalidQuery">Invalid Query</option>
          <option value="validArgField">Valid Argument Field</option>
          <option value="invalidArgField">Invalid Argument Field</option>
          <option value="validArgDataType">Valid Argument DataType</option>
          <option value="invalidArgDataType">Invalid Argument DataType</option>
        </select>
      </div>
    );
  }
}

export default TestInput;
