import React, { Component } from "react";
import LeftSideBar from "./mainComponents/LeftSideBar.jsx";
import TestInput from "./mainComponents/TestInput.jsx";
import TestQuery from "./mainComponents/TestQuery.jsx";
import GenerateTest from "./mainComponents/GenerateTest.jsx";
import TestSuites from "./mainComponents/TestSuites.jsx";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testSuiteName: "",
      testDescription: "",
      writeQuery: "",
      generatedTest: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value }, () => {
      console.log(`this.state in handlechange`, this.state);
    });
  }
  handleClick() {
    const value = `Describe ('${this.state.testSuiteName}'), 
    ${this.state.writeQuery} 
    it('${this.state.testDescription}') `;
    console.log('handleClick!!!')
    this.setState({generatedTest: value});
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
          testSuiteName={this.testSuiteName}
          testDescription={this.testDescription}
          writeQuery={this.writeQuery}
          handleClick={this.handleClick}
          generatedTest = {this.state.generatedTest}
        />
        </div>
        <div className="testSuites">
        <TestSuites />
        </div>
        </div>
      </div>
    );
  }
}

export default Main;
