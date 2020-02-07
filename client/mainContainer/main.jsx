import React, { Component } from "react";
import LeftSideBar from "./mainComponents/LeftSideBar.jsx";
import TestInput from "./mainComponents/TestInput.jsx";
import TestQuery from "./mainComponents/TestQuery.jsx";
import GenerateTest from "./mainComponents/GenerateTest.jsx";
import TestSuites from "./mainComponents/TestSuites.jsx";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from "react-particles-js";

import {
  validQuery,
  invalidQuery,
  validArgField,
  invalidArgField,
  validArgDataType,
  invalidArgDataType
} from "./tests/Tests.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testSuiteName: "",
      testDescription: "",
      writeQuery: "",
      generatedTest: "",
      testSuites: [],
      selectedTest: "",
      dropDownIndex: 0,
      testIndex: 0,
      testFunctions: {
        validQuery,
        invalidQuery,
        validArgField,
        invalidArgField,
        validArgDataType,
        invalidArgDataType
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateTestSuite = this.updateTestSuite.bind(this);
    this.selectTest = this.selectTest.bind(this);
    this.deleteTest = this.deleteTest.bind(this);
    this.editTest = this.editTest.bind(this);
    this.dropDownReset = this.dropDownReset.bind(this);
    this.handleExportClick = this.handleExportClick.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleClick() {
    const value = this.state.testFunctions[this.state.selectedTest](this.state);
    return this.setState({ generatedTest: value });
  }


  //onClick: user downloads a JSON object that has their test suites.
  handleExportClick() {
    console.log('helloBruh')
    let newNew = {};
    newNew.schema = this.state.schema;
    var blob = new Blob([JSON.stringify(newNew)], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "hello.test.js");
  }

  selectTest(e) {
    this.setState({
      selectedTest: e.target.value,
      dropDownIndex: e.target.selectedIndex
    });
  }

  updateTestSuite() {
    //push the generated test value into the test suites array
    const newTestSuite = {
      savedGeneratedTest: this.state.generatedTest,
      savedTestSuiteName: this.state.testSuiteName,
      savedTestDescription: this.state.testDescription,
      savedWriteQuery: this.state.writeQuery,
      savedSelectedTest: this.state.selectedTest,
      savedDropDownIndex: this.state.dropDownIndex,
      testIndex: this.state.testIndex + 1
    };
    //shallow copy of array
    let testSuites = this.state.testSuites.slice();
    testSuites.push(newTestSuite);
    return this.setState({
      testSuiteName: "",
      testDescription: "",
      writeQuery: "",
      generatedTest: "",
      dropDownIndex: 0,
      selectedTest: this.dropDownReset(),
      testIndex: this.state.testIndex + 1,
      testSuites
    });
  }

  editTest(idx) {
    let testSuite = this.state.testSuites[idx - 1];
    console.log('testSuite', testSuite)
    let dropDownIndex = document.getElementById("dd-reset");
    dropDownIndex.selectedIndex = testSuite.savedDropDownIndex;
    return this.setState({
      testSuiteName: testSuite.savedTestSuiteName,
      testDescription: testSuite.savedTestDescription,
      writeQuery: testSuite.savedWriteQuery,
      selectedTest: dropDownIndex.selectedIndex,
      generatedTest: testSuite.savedGeneratedTest
    })
  }

  deleteTest(idx) {
    let testSuites = this.state.testSuites.filter(test => test.testIndex !== idx);
    return this.setState({
      testSuiteName: "",
      testDescription: "",
      writeQuery: "",
      generatedTest: "",
      selectedTest: this.dropDownReset(),
      testSuites,
      testIndex: this.state.testIndex - 1,
    });
  }

  dropDownReset() {
    document.getElementById("dd-reset").selectedIndex = 0;
  }
  
  render() {
    return (
      <div className="fullscreen">
        <div className="mainContainer">
          <div className="leftSideBar">
            <LeftSideBar />
          </div>
          <div className="testInput">
            <TestInput
              testSuiteName={this.state.testSuiteName}
              testDescription={this.state.testDescription}
              writeQuery={this.state.writeQuery}
              onChange={this.handleChange}
            />
          </div>
          <div className="testQuery">
            <TestQuery
              writeQuery={this.state.writeQuery}
              onChange={this.handleChange}
            />
          </div>
          <div className="generateTest">
            <GenerateTest
              testSuiteName={this.state.testSuiteName}
              testDescription={this.state.testDescription}
              writeQuery={this.state.writeQuery}
              handleClick={this.handleClick}
              generatedTest={this.state.generatedTest}
              updateTestSuite={this.updateTestSuite}
              selectTest={this.selectTest}
            />
          </div>
          <div className="testSuites">
            <TestSuites
              testSuites={this.state.testSuites}
              deleteTest={this.deleteTest}
              editTest={this.editTest}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
