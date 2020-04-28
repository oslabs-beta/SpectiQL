import React, { useContext, useMemo } from "react";
import { Button, Form, Col } from "react-bootstrap";
import { Context } from "../ContextAPI.jsx";
import { testFunctions } from "../Tests/Tests.jsx";
import { v4 as uuidv4 } from "uuid";

function GenerateTest({ test, setTest }) {
  const {
    addUpdateToggle,
    addTestSuite,
    updateTestSuite,
    setAddUpdateToggle,
  } = useContext(Context);

  const { generatedTest, testType, type } = test;

  // may need refactoring
  const generateTestButton = (e) => {
    e.preventDefault();
    let generated;

    if (document.getElementById("dd-reset").selectedIndex === 0) {
      alert("Please select a test type from the drop-down to Generate Test");
    }

    for (let key in testFunctions) {
      if (testType == key) {
        generated = testFunctions[key](test);
        setTest({
          ...test,
          generatedTest: generated,
        });
      }
    }
  };

  // refactor: abstract out to global to be reused
  const reset = () => {
    document.getElementById("dd-reset").selectedIndex = 0;
    if (type == "query") {
      setTest({
        ...test,
        testSuiteName: "",
        testDescription: "",
        writeTest: "",
        testType: "",
        generatedTest: "",
        id: "",
      });
    } else {
      setTest({
        ...test,
        testSuiteName: "",
        testDescription: "",
        writeTest: "",
        writeInput: "",
        testType: "",
        generatedTest: "",
        id: "",
      });
    }
  };

  const addTest = () => {
    addTestSuite({ ...test, id: uuidv4() });
    reset();
  };

  const updateTest = () => {
    console.log("updating test", test);
    updateTestSuite(test);
    setAddUpdateToggle(true);
    reset();
  };

  const editTestSuite = () => {
    if (addUpdateToggle) {
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
            borderColor: "black",
          }}
          onClick={addTest}
        >
          Add to Test Suite
        </Button>
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
            borderColor: "black",
          }}
          onClick={updateTest}
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
            marginBottom: "1.5%",
          }}
          onClick={generateTestButton}
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
          defaultValue={generatedTest}
        />
      </Form.Group>
    </div>
  );
}

export default GenerateTest;
