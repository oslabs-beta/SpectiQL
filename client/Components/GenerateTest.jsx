import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";

class GenerateTest extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    console.log('generatetest props:', this.props)
    const editTestSuite = () => {
      if (this.props.testSuiteToggler) {
        return (
          <Button className="addTest"
          variant="outline-primary"
          size="lg"
          block
          style={{ height: "35%", width: "100%" }}
          onClick={this.props.addTestSuite}
        >
          Add to Test Suite
        </Button>
        )
      } else {
        return (
          <Button className="updateTest"
          variant="outline-primary"
          size="lg"
          block
          style={{ height: "35%", width: "100%" }}
          onClick={this.props.updateTestSuite}
        >
          Update Test Suite
        </Button>
        )
      }
    };
    return (
      <Form className="generate-test">
        <Form.Row>
          <Form.Group as={Col} style={{ margin: 0, padding: 0 }}>
            <select className="selectType" id="dd-reset" onChange = {this.props.selectTest}>
              <option value ="default" disabled selected>Select Test</option>
              <option value = "validQuery">Valid Query</option>
              <option value= "invalidQuery" >Invalid Query</option>
              <option value= "validArgField" >Valid Argument Field</option>
              <option value = "invalidArgField" >Invalid Argument Field</option>
              <option value= "validArgDataType" >Valid Argument DataType</option>
              <option value = "invalidArgDataType" >Invalid Argument DataType</option>
            </select>
            <Button className="generateTest"
              variant="primary"
              size="lg"
              block
              style={{ height: "35%", width: "100%" }}
              onClick={this.props.handleClick}
            >
              Generate Test
            </Button>
            {editTestSuite()}
          </Form.Group>

          <Form.Group as={Col} controlId="sample-test">
            <Form.Label column sm={6}>
              Generated Test:
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Sample Test..."
              style={{ width: "80%", height: "18rem" }}
              value={this.props.generatedTest}
            />
          </Form.Group>
        </Form.Row>
      </Form>
    );
  }
}

export default GenerateTest;
