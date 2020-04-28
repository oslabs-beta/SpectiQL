import React, { useState, useContext, useEffect } from "react";
import "animate.css/animate.min.css";

import TestInput from "../Components/TestInput.jsx";
import TestQuery from "../Components/TestQuery.jsx";
import GenerateTest from "../Components/GenerateTest.jsx";
import { Context } from "../ContextAPI.jsx";

function QueryContainer({ schema }) {
  const { editTest } = useContext(Context);
  const [test, setTest] = useState({
    testSuiteName: "",
    testDescription: "",
    writeTest: "",
    testType: "",
    generatedTest: "",
    type: "query",
    id: "",
  });

  useEffect(() => {
    if (editTest.length) {
      const edit = editTest[0];
      setTest({
        ...test,
        testSuiteName: edit.testSuiteName,
        testDescription: edit.testDescription,
        writeTest: edit.writeTest,
        generatedTest: edit.generatedTest,
        id: edit.id,
      });
    }
  }, [editTest]);

  const handler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setTest({
      ...test,
      [name]: value,
    });
  };

  return (
    <div className="testTypeContainer">
      <div className="testInput">
        <TestInput test={test} handler={handler} />
      </div>

      <div className="testQuery">
        <TestQuery test={test} handler={handler} schema={schema} />
      </div>

      <div className="generateTest">
        <GenerateTest test={test} setTest={setTest} />
      </div>
    </div>
  );
}
export default QueryContainer;
