import React, { Component } from "react";
import SideBar from "./mainComponents/LeftSideBar.jsx";
import TestInput from "./mainComponents/TestInput.jsx";
import TestQuery from "./mainComponents/TestQuery.jsx";
import GenerateTest from "./mainComponents/GenerateTest.jsx";
import TestSuites from "./mainComponents/TestSuites.jsx";

class Main extends Component {
  render() {
    return (
      <div className="fullscreen">
        <SideBar />
        <TestInput />
        <TestQuery />
        <GenerateTest />
        <TestSuites />
      </div>
    );
  }
}

export default Main;
