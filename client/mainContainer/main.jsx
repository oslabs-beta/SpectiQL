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
      testFunctions: {
        validQuery,
        invalidQuery,
        validArgField,
        invalidArgField,
        validArgDataType,
        invalidArgDataType,
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.updateTestSuite = this.updateTestSuite.bind(this);
    this.selectTest= this.selectTest.bind(this);
    this.clearSuites = this.clearSuites.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleClick() {
    const value = this.state.testFunctions[this.state.selectedTest](this.state)
    // const value = this.state.selectedTest(this.state);
    return this.setState({ generatedTest: value });
  }

  selectTest(e){
    // console.log(`e.target.value`,e.target.value)
    // console.log('inside selectest')
    this.setState({selectedTest: e.target.value})
  }

  updateTestSuite() {
    //push the generated test value into the test suites array
    const newTestSuite = {
      generatedTest: this.state.generatedTest,
      savedTestSuiteName: this.state.testSuiteName,
      savedTestDescription: this.state.testDescription
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
      testSuites
    });
  }
  clearSuites(){
    this.setState({testSuites: []})
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
              updateTestSuite={this.updateTestSuite}
              selectTest ={this.selectTest}
            />
          </div>
          <div className="testSuites">
            <TestSuites testSuites={this.state.testSuites} />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
