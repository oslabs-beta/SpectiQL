import React from "react";
import { Form } from "react-bootstrap";

function TestInput({ test, handler }) {
  const { testSuiteName, testDescription, type } = test;

  const dropDown = () => {
    if (type == "query") {
      return (
        <select
          className="selectQueryType"
          id="dd-reset"
          name="testType"
          onChange={handler}
          defaultValue="0"
        >
          <option value="default" disabled value="0">
            Select Test
          </option>
          <option value="validQuery">Valid Query</option>
          <option value="invalidQuery">Invalid Query</option>
          <option value="validArgField">Valid Argument Field</option>
          <option value="invalidArgField">Invalid Argument Field</option>
          <option value="validArgDataType">Valid Argument DataType</option>
          <option value="invalidArgDataType">Invalid Argument DataType</option>
        </select>
      );
    } else {
      return (
        <select
          className="selectQueryType"
          id="dd-reset"
          name="testType"
          onChange={handler}
          defaultValue="0"
        >
          <option value="default" disabled value="0">
            Select Test
          </option>
          <option value="validMutationInput">Valid Mutation Input</option>
          <option value="invalidMutationInput">Invalid Mutation Input</option>
          <option value="validMutationDataType">
            Valid Mutation Data Type
          </option>
          <option value="invalidMutationDataType">
            Invalid Mutation Data Type
          </option>
        </select>
      );
    }
  };

  return (
    <div className="testInputContainer">
      <div className="testSuiteInstruction">
        {type == "query" ? "Query" : "Mutation"} test name ⟶
      </div>

      <Form className="testSuiteInput">
        <Form.Group controlId="test-suite">
          <Form.Control
            type="text"
            placeholder="Enter test suite here..."
            name="testSuiteName"
            value={testSuiteName}
            onChange={handler}
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
            value={testDescription}
            onChange={handler}
          />
        </Form.Group>
      </Form>

      <div className="selectTestInstruction">Please select test ⟶</div>
      {dropDown()}
    </div>
  );
}

export default TestInput;
