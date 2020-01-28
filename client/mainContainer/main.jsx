import React, { Component } from "react";
<<<<<<< HEAD
import LeftSideBar from "./mainComponents/LeftSideBar.jsx";
=======
import SideBar from "./mainComponents/LeftSideBar.jsx";
>>>>>>> c23ac976718edef4c19e76bb928d0971cfbda03c
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
<<<<<<< HEAD
      <div>
        <LeftSideBar />
        <TestInput
          testSuiteName={this.state.testSuiteName}
          testDescription={this.state.testDescription}
          writeQuery={this.state.writeQuery}
          onChange={this.handleChange}
        />
        <TestQuery
          writeQuery={this.state.writeQuery}
          onChange={this.handleChange}
        />
        <GenerateTest
          testSuiteName={this.testSuiteName}
          testDescription={this.testDescription}
          writeQuery={this.writeQuery}
          handleClick={this.handleClick}
          generatedTest = {this.state.generatedTest}
        />
=======
      <div className="fullscreen">
        <SideBar />
        <TestInput />
        <TestQuery />
        <GenerateTest />
>>>>>>> c23ac976718edef4c19e76bb928d0971cfbda03c
        <TestSuites />
      </div>
    );
  }
}

export default Main;
