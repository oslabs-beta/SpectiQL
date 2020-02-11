import React, { Component } from "react";
import TestInput from "../Components/TestInput.jsx";
import TestQuery from "../Components/TestQuery.jsx";
import GenerateTest from "../Components/GenerateTest.jsx";
import TestSuites from "../Components/TestSuites.jsx";
import SchemaTreeD3 from "../Components/schemaTreeD3.jsx";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from "react-particles-js";
import { Switch } from "react-router-dom";



class Query extends Component {
  constructor(props) {
    super(props);
  };
  render() {
    console.log('this is props in query:', this.props)
    return (

      <div className="fullscreen">
        <div className="mainContainer">
          <div className="testInput">
            <TestInput
              testSuiteName={this.props.testSuiteName}
              testDescription={this.props.testDescription}
              writeTest={this.props.writeTest}
              selectTest={this.props.selectTest}
              handleChange={this.props.handleChange}
            />
          </div>
          <div className="testQuery">
            <TestQuery
              writeTest={this.props.writeTest}
              handleChange={this.props.handleChange}
              schema={this.props.schema}
            />
          </div>
          <div className="queryVisualizer">
            <SchemaTreeD3 
              schema={this.props.schema}
              schemaData={this.props.schemaData}
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


