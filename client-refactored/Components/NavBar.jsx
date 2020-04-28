import React, { useContext } from "react";
import { Button, ButtonToolbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { saveAs } from "file-saver";
import { Context } from "../ContextAPI.jsx";

function NavBar({ filePath }) {
  // need to grab test suites from global context
  const { setAddUpdateToggle, testSuites } = useContext(Context);

  const handleExportClick = () => {
    // const beforeAll = `describe('All the tests', () => {
    //   let tester;
    //   beforeAll(() => {
    //     tester = testSchema('${filePath}');
    //   })`;
    // const requiredLibraries = `const { testSchema } = require('spectiql')`;
    // const testArray = [];
    // for (let i = 0; i < testSuites.length; i++) {
    //   testArray.push(testSuites[i].generatedTest + `})`);
    // }
    // var blob = new Blob(
    //   [
    //     `'use strict' \n`,
    //     `${requiredLibraries} \n \n`,
    //     `${beforeAll} \n`,
    //     testArray,
    //     `})`,
    //   ],
    //   { type: "text/plain;charset=utf-8" }
    // );
    // saveAs(blob, "spectiql.test.js");
  };

  return (
    <div className="mainNavBar">
      <ButtonToolbar className="buttonContainer">
        <Link className="queries" to="/queries">
          <Button
            className="queries"
            variant="outline-dark"
            size="lg"
            onClick={() => setAddUpdateToggle(true)}
          >
            Queries
          </Button>
        </Link>

        <Link to="/mutations" className="mutations">
          <Button
            className="mutations"
            variant="outline-dark"
            size="lg"
            onClick={() => setAddUpdateToggle(true)}
          >
            Mutations
          </Button>
        </Link>

        <Button className="subscriptions" variant="outline-dark" size="lg">
          Subscriptions
        </Button>

        <Button
          className="export"
          onClick={handleExportClick}
          className="export"
          variant="outline-dark"
          size="lg"
        >
          Export
        </Button>
      </ButtonToolbar>
    </div>
  );
}

export default NavBar;
