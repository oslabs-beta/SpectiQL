import React, { Component } from 'react'
import LeftSideBar from './Components/LeftSideBar.jsx'
import QueryContainer from './Containers/QueryContainer.jsx'
import 'animate.css/animate.min.css'


import {
  validQuery,
  invalidQuery,
  validArgField,
  invalidArgField,
  validArgDataType,
  invalidArgDataType
} from './Tests/Tests.jsx'

class Main extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    return (
      <div className="fullscreen">
        <div className="mainContainer">
          <div className="leftSideBar">
            <LeftSideBar
            handleExportClick={this.props.handleExportClick}
            />
          </div>
          <div>
            <QueryContainer 
              testSuiteName={this.props.appstate.testSuiteName}
              testDescription={this.props.appstate.testDescription}
              writeTest={this.props.appstate.writeTest}
              handleChange={this.props.handleChange}
              handleClick={this.props.handleClick}
              generatedTest={this.props.appstate.generatedTest}
              addTestSuite={this.props.addTestSuite}
              updateTestSuite={this.props.updateTestSuite}
              selectTest={this.props.selectTest}
              testSuiteToggler={this.props.appstate.testSuiteToggler}
              testSuites={this.props.appstate.testSuites}
              deleteTest={this.props.deleteTest}
              editTest={this.props.editTest}
              schema={this.props.appstate.schema}
              schemaData={this.props.schemaData}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Main;
