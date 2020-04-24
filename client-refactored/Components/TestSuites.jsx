import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Context } from "../ContextAPI.jsx";

function TestSuites() {
  const {
    testSuites,
    setEditTest,
    setAddUpdateToggle,
    deleteTestSuite,
  } = useContext(Context);

  const modifyTest = (id) => {
    const testToEdit = testSuites.filter((test) => test.id == id);
    setEditTest(testToEdit);
    setAddUpdateToggle(false);
  };

  const displayTestSuites = testSuites.map((test, index) => {
    const route = test.type == "query" ? "queries" : "mutations";
    return (
      <Card style={{}} key={index}>
        <Card.Body>
          <Card.Title>{test.testSuiteName}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Suite {index + 1}
          </Card.Subtitle>
          <Card.Text>{test.testDescription}</Card.Text>
          <button
            className="testSuiteEditButton"
            onClick={() => modifyTest(test.id)}
          >
            <Link to={route}>Edit Test</Link>
          </button>

          <button
            className="testSuiteDeleteButton"
            onClick={() => deleteTestSuite(test.id)}
          >
            Delete Test
          </button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div className="testSuites">
      <div className="wrapper">
        <h3>Test Suites</h3>
        <div id="sidebar">{displayTestSuites}</div>
      </div>
    </div>
  );
}

export default TestSuites;
