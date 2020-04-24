import React, { useMemo } from "react";
import { Form, Col } from "react-bootstrap";

function TestMutation({ test, handler }) {
  const { writeTest, writeInput } = test;
  return (
    <div className="writeMutationBox">
      <div className="test-mutation-write">
        <Form.Group
          as={Col}
          controlId="write-mutation"
          className="writeMutationForm"
        >
          <Form.Control
            as="textarea"
            placeholder="Enter Mutation here..."
            style={{ width: "100%", height: "97.5%", marginBottom: "2.5%" }}
            name="writeTest"
            value={writeTest}
            onChange={handler}
          />
        </Form.Group>
      </div>

      <div className="test-mutation-select">
        <Form.Group
          as={Col}
          controlId="select-mutation"
          className="writeMutationForm"
        >
          <Form.Control
            as="textarea"
            placeholder="Insert your input type variable as an object:"
            style={{ width: "100%", height: "97%", marginBottom: "3%" }}
            name="writeInput"
            value={writeInput}
            onChange={handler}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default TestMutation;
