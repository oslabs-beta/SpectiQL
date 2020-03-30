import React, { Component } from "react";
import { Button, Form, Col } from "react-bootstrap";

class GenerateTest extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const editTestSuite = () => {
      if (this.props.testSuiteToggler) {
        return (
          <Form.Group as={Col} style={{ margin: 0, padding: 0 }}>
            <Button
              className="addTestButton"
              variant="outline-primary"
              size="lg"
              block
              style={{
                height: "49.7%",
                width: "100%",
                color: "black",
                borderColor: "black"
              }}
              onClick={this.props.addTestSuite}
            >
              Add to Test Suite
            </Button>
          </Form.Group>
        );
      } else {
        return (
          <Button
            className="addTestButton"
            variant="outline-primary"
            size="lg"
            block
            style={{
              height: "49.7%",
              width: "100%",
              color: "black",
              borderColor: "black"
            }}
            onClick={this.props.updateTestSuite}
          >
            Update Test Suite
          </Button>
        );
      }
    };
    return (
      <div className="generateTestBox">
        <Form.Group as={Col} style={{ margin: 0, padding: 0 }}>
          <Button
            className="generateTestButton"
            variant="outline-primary"
            size="lg"
            block
            style={{
              height: "49%",
              width: "100%",
              color: "black",
              borderColor: "black",
              marginBottom: "1.5%"
            }}
            onClick={this.props.handleClick}
          >
            Generate Test
          </Button>
          {editTestSuite()}
        </Form.Group>

        <Form.Group
          as={Col}
          controlId="sample-test"
          className="generatedTestForm"
        >
          <Form.Control
            className="generatedTestForm"
            as="textarea"
            placeholder="Generated Test..."
            style={{ width: "100%", height: "100%" }}
            value={this.props.generatedTest}
          />
        </Form.Group>
      </div>
    );
  }
}

export default GenerateTest;
