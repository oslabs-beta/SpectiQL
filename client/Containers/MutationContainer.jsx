import React, { Component } from "react";

import MutationTestInput from "../Components/MutationTestInput.jsx";
import TestMutation from "../Components/TestMutation.jsx";
import GenerateTest from "../Components/GenerateTest.jsx";

//requires refactoring to convert into functional component
class Mutations extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="testTypeContainer">
        <div className="testInput">
          <MutationTestInput
            testSuiteName={this.props.appstate.testSuiteName}
            testDescription={this.props.appstate.testDescription}
            writeTest={this.props.appstate.writeTest}
            selectTest={this.props.selectTest}
            handleChange={this.props.handleChange}
          />
        </div>

        <div className="testQuery">
          <TestMutation
            writeTest={this.props.appstate.writeTest}
            writeInput={this.props.appstate.writeInput}
            handleChange={this.props.handleChange}
            schema={this.props.appstate.schema}
          />
        </div>

        <div className="generateTest">
          <GenerateTest
            testSuiteName={this.props.appstate.testSuiteName}
            testDescription={this.props.appstate.testDescription}
            writeTest={this.props.appstate.writeTest}
            handleClick={this.props.handleClick}
            generatedTest={this.props.appstate.generatedTest}
            addTestSuite={this.props.addTestSuite}
            updateTestSuite={this.props.updateTestSuite}
            selectTest={this.props.selectTest}
            testSuiteToggler={this.props.appstate.testSuiteToggler}
          />
        </div>
      </div>
    );
  }
}

export default Mutations;