import React, { Component } from "react";
import LeftSideBar from "./Components/LeftSideBar.jsx";
import QueryContainer from "./Containers/QueryContainer.jsx";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import Particles from "react-particles-js";
import { Switch, Route } from "react-router-dom";

import {
  validQuery,
  invalidQuery,
  validArgField,
  invalidArgField,
  validArgDataType,
  invalidArgDataType
} from "./Tests/Tests.jsx";


class Main extends Component {
  constructor(props) {
    super(props);
  };
  
  render() {
    return (
      <div className="fullscreen">
        <div className="mainContainer">
         <div className="leftSideBar">
            <LeftSideBar />
         </div>
         <div>
        <QueryContainer 
              testSuiteName={this.state.testSuiteName}
              testDescription={this.state.testDescription}
              writeTest={this.state.writeTest}
              handleChange={this.handleChange}
              handleClick={this.handleClick}
              generatedTest={this.state.generatedTest}
              addTestSuite={this.addTestSuite}
              updateTestSuite={this.updateTestSuite}
              selectTest={this.selectTest}
              testSuiteToggler={this.state.testSuiteToggler}
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


