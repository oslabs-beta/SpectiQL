import React, { useState, useContext, useEffect } from "react";

import TestMutation from "../Components/TestMutation.jsx";
import GenerateTest from "../Components/GenerateTest.jsx";
import TestInput from "../Components/TestInput.jsx";
import { Context } from "../ContextAPI.jsx";

function MutationContainer({ schema }) {
  const { editTest } = useContext(Context);

  const [test, setTest] = useState({
    testSuiteName: "",
    testDescription: "",
    writeTest: "",
    writeInput: "",
    testType: "",
    generatedTest: "",
    type: "mutation",
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
        writeInput: edit.writeInput,
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
        <TestMutation
          test={test}
          handler={handler}
          schema={schema}
        />
      </div>

      <div className="generateTest">
        <GenerateTest test={test} setTest={setTest} />
      </div>
    </div>
  );
}

export default MutationContainer;
