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
      testSuiteToggler: true,
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
    this.addTestSuite = this.addTestSuite.bind(this);
    this.updateTestSuite = this.updateTestSuite.bind(this);
    this.selectTest = this.selectTest.bind(this);
    this.deleteTest = this.deleteTest.bind(this);
    this.editTest = this.editTest.bind(this);
    this.dropDownReset = this.dropDownReset.bind(this);
    this.testSuiteToggler = this.testSuiteToggler.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleClick() {
    const value = this.state.testFunctions[this.state.selectedTest](this.state);
    return this.setState({ generatedTest: value });
  }

  selectTest(e) {
    this.setState({
      selectedTest: e.target.value,
      dropDownIndex: e.target.selectedIndex
    });
  }

  addTestSuite() {
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

  updateTestSuite() {
    let testSuites = this.state.testSuites.slice();
    const updatedTestSuite = {
      savedGeneratedTest: this.state.generatedTest,
      savedTestSuiteName: this.state.testSuiteName,
      savedTestDescription: this.state.testDescription,
      savedWriteQuery: this.state.writeQuery,
      savedSelectedTest: this.state.selectedTest,
      savedDropDownIndex: this.state.dropDownIndex,
      testIndex: this.state.testIndex
    };
    testSuites[updatedTestSuite.testIndex - 1] = updatedTestSuite;
    return this.setState({
      testSuiteName: "",
      testDescription: "",
      writeQuery: "",
      generatedTest: "",
      dropDownIndex: 0,
      selectedTest: this.dropDownReset(),
      testSuites,
      testSuiteToggler: true
    })
  }

  editTest(idx) {
    let testSuite = this.state.testSuites[idx - 1];   
    console.log('edit test state', this.state) 
    let dropDownIndex = document.getElementById("dd-reset");
    dropDownIndex.selectedIndex = testSuite.savedDropDownIndex;
    return this.setState({
      testSuiteName: testSuite.savedTestSuiteName,
      testDescription: testSuite.savedTestDescription,
      writeQuery: testSuite.savedWriteQuery,
      selectedTest: this.dropDownReset(),
      generatedTest: testSuite.savedGeneratedTest,
      testIndex: testSuite.testIndex,
      testSuiteToggler: false
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

  testSuiteToggler() {
    return this.setState({
      testSuiteToggler: !this.state.testSuiteToggler
    })
  }
  
  render() {
    return (
      <div className="fullscreen">
        <div className="mainContainer">
          <div className="leftSideBar">
            <LeftSideBar clearSuites = {this.clearSuites}/>
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
              addTestSuite={this.addTestSuite}
              updateTestSuite={this.updateTestSuite}
              selectTest={this.selectTest}
              testSuiteToggler={this.state.testSuiteToggler}
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
