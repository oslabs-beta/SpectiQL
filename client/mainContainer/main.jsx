import React, { Component } from "react";
import LeftSideBar from "./mainComponents/LeftSideBar.jsx";
import TestInput from "./mainComponents/TestInput.jsx";
import TestQuery from "./mainComponents/TestQuery.jsx";
import GenerateTest from "./mainComponents/GenerateTest.jsx";
import TestSuites from "./mainComponents/TestSuites.jsx";
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
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleClick() {
    const value = this.state.testFunctions[this.state.selectedTest](this.state);
    // document.getElementById('dd-reset').value('default')
    return this.setState({ generatedTest: value });
  }

  selectTest(e) {
    this.setState({ selectedTest: e.target.value });
  }

  updateTestSuite() {
    //push the generated test value into the test suites array
    const newTestSuite = {
      generatedTest: this.state.generatedTest,
      savedTestSuiteName: this.state.testSuiteName,
      savedTestDescription: this.state.testDescription,
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
      selectedTest: "",
      testIndex: this.state.testIndex + 1,
      testSuites
    });
  }

  deleteTest(idx) {
    let testSuites = this.state.testSuites.filter(test => test.testIndex !== idx);
    return this.setState(
      {
        testSuites,
        testIndex: this.state.testIndex - 1
      }
    );
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
