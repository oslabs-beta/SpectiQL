import React, { Component } from "react";
import TestInput from "../Components/TestInput.jsx";
import TestQuery from "../Components/TestQuery.jsx";
import GenerateTest from "../Components/GenerateTest.jsx";
import TestSuites from "../Components/TestSuites.jsx";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from "react-particles-js";



class Query extends Component {
  render() {
    return (

      <div className="fullscreen">
        <div className="mainContainer">
     
          <div className="testInput">
            <TestInput
              testSuiteName={this.props.testSuiteName}
              testDescription={this.props.testDescription}
              writeTest={this.props.writeTest}
              handleChange={this.props.handleChange}
            />
          </div>
          <div className="testQuery">
            <TestQuery
              writeTest={this.props.writeTest}
              handleChange={this.props.handleChange}
            />
          </div>
          <div className="generateTest">
            <GenerateTest
              testSuiteName={this.props.testSuiteName}
              testDescription={this.props.testDescription}
              writeTest={this.props.writeTest}
              handleClick={this.props.handleClick}
              generatedTest={this.props.generatedTest}
              addTestSuite={this.props.addTestSuite}
              updateTestSuite={this.props.updateTestSuite}
              selectTest={this.props.selectTest}
              testSuiteToggler={this.props.testSuiteToggler}
            />
          </div>
          <div className="testSuites">
            <TestSuites
                   testSuiteName={this.props.testSuiteName}
                   testDescription={this.props.testDescription}
                   writeTest={this.props.writeTest}
                   handleChange={this.props.handleChange}
                   handleClick={this.props.handleClick}
                   generatedTest={this.props.generatedTest}
                   addTestSuite={this.props.addTestSuite}
                   updateTestSuite={this.props.updateTestSuite}
                   selectTest={this.props.selectTest}
                   testSuiteToggler={this.props.testSuiteToggler}
                   testSuites={this.props.testSuites}
                   deleteTest={this.props.deleteTest}
                   editTest={this.props.editTest}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Query;


