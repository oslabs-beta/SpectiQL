import React, { useContext } from "react";
import { Form, Col } from "react-bootstrap";
import { Context } from "../ContextAPI.jsx";

function TestQuery({ test, handler }) {
  const { editTest } = useContext(Context);
  const { writeTest } = test;

  return (
    <div className="writeQueryBox">
      <div className="test-query-write">
        <Form.Group as={Col} controlId="write-query" className="writeQueryForm">
          <Form.Control
            as="textarea"
            placeholder="Enter query here..."
            style={{ width: "100%", height: "98%", marginBottom: "2%" }}
            name="writeTest"
            value={writeTest}
            onChange={handler}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default TestQuery;
