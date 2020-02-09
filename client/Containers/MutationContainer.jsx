import React, { Component } from "react";
import LeftSideBar from "../Components/LeftSideBar.jsx";
import TestInput from "../Components/TestInput.jsx";
import TestMutation from "../mainContainer/mutationComponent/TestMutation.jsx";
import GenerateMutationTest from "../mainContainer/mutationComponent/GenerateMutationTest.jsx";
import TestSuites from "../Components/TestSuites.jsx";

class Mutations extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('inside in the mutation props', this.props)
    return (
      <div className="fullscreen">
        <div className="mainContainer">
          <div className="leftSideBar">
            <LeftSideBar />
          </div>
          <div className="testInput">
            <TestInput             
              testSuiteName={this.props.testSuiteName}
              testDescription={this.props.testDescription}
              writeTest={this.props.writeTest}
              onChange={this.handleChange}
              />
          </div>
          <div className="testQuery">
            <TestMutation
              writeTest={this.props.writeTest}
              writeInput={this.props.writeInput}
              onChange={this.props.handleChange}
            />
          </div>
          <div className="generateTest">
            <GenerateMutationTest
              testSuiteName={this.props.testSuiteName}
              testDescription={this.props.testDescription}
              writeTest={this.props.writeTest}
              handleClick={this.props.handleClick}
              generatedTest={this.props.generatedTest}
              updateTestSuite={this.props.updateTestSuite}
              selectTest={this.props.selectTest}
              />
          </div>
          <div className="testSuites">
            <TestSuites
              testSuites={this.props.testSuites}
              deleteTest={this.props.deleteTest}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default Mutations;