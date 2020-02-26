//importing libraries
import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import "./public/styling/index.css";
import "animate.css/animate.min.css";
import FileSaver, { saveAs } from "file-saver";

//importing children components
import Mutation from "./Containers/MutationContainer.jsx";
import Query from "./Containers/QueryContainer.jsx";
import LeftSideBar from "./Components/LeftSideBar.jsx";
import SchemaTreeD3 from "./Components/schemaTreeD3.jsx";
import TestSuites from "./Components/TestSuites.jsx";
import LandingPage from "./Components/LandingPage.jsx";

//boilerplate test functions imported from GUI generated test scripts
import {
  validQuery,
  invalidQuery,
  validArgField,
  invalidArgField,
  validArgDataType,
  invalidArgDataType,
  validMutationInput,
  invalidMutationInput,
  validMutationDataType,
  invalidMutationDataType
} from "./Tests/Tests.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      landingPageState: true,
      filePath: "",
      schema: {},
      testSuiteName: "",
      testDescription: "",
      selectedTest: "",
      writeTest: "",
      writeInput: "",
      generatedTest: "",
      testFunctions: {
        validQuery,
        invalidQuery,
        validArgField,
        invalidArgField,
        validArgDataType,
        invalidArgDataType,
        validMutationInput,
        invalidMutationInput,
        validMutationDataType,
        invalidMutationDataType
      },
      testSuites: [],
      testIndex: 0,
      testSuiteToggler: true,
      testSuiteType: false
    };
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.addTestSuite = this.addTestSuite.bind(this);
    this.updateTestSuite = this.updateTestSuite.bind(this);
    this.selectTest = this.selectTest.bind(this);
    this.deleteTest = this.deleteTest.bind(this);
    this.editTest = this.editTest.bind(this);
    this.dropDownReset = this.dropDownReset.bind(this);
    this.testSuiteToggler = this.testSuiteToggler.bind(this);
    this.handleExportClick = this.handleExportClick.bind(this);
    this.queryPage = this.queryPage.bind(this);
    this.mutationPage = this.mutationPage.bind(this);
    this.pageReset = this.pageReset.bind(this);
  }

  //redirects to doc page when "Doc" button is clicked on landing page
  openDocs() {
    window.open(
      "https://github.com/oslabs-beta/SpectiQL/blob/master/REAMDE.md"
    );
  }

  //retrieving user's schema and schema filepath after they invoke the function from their backend
  handleNextClick() {
    fetch('/spectiql', {
      method: 'POST',
    })
    .then(response => response.json())
    .then((response) => {
      this.setState({ filePath: response.filePath, landingPageState: false, schema: response.schema})
      })
    .catch(err => console.log(err));

    //when testing on development side, uncomment when testing on local server
    //this.setState({ landingPageState: false });
  }

  //handleChange function for any input fields
  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }

  handleClick() {
    if (document.getElementById("dd-reset").selectedIndex === 0) {
      alert('Please select a test type from the drop-down to Generate Test')
    } else {
      const value = this.state.testFunctions[this.state.selectedTest](this.state);
      return this.setState({ generatedTest: value });
    }
  }

  //handleClick function for when user clicks export
  handleExportClick() {
    const beforeAll = `describe('All the tests', () => {
      let tester;
      beforeAll(() => {
        tester = testSchema('${this.state.filePath}');
      })`;
    const requiredLibraries = `const { testSchema } = require('spectiql')`;
    const testArray = [];
    for (let i = 0; i < this.state.testSuites.length; i++) {
      testArray.push(this.state.testSuites[i].savedGeneratedTest + `})`);
    }
    var blob = new Blob(
      [
        `'use strict' \n`,
        `${requiredLibraries} \n \n`,
        `${beforeAll} \n`,
        testArray,
        `})`
      ],
      { type: "text/plain;charset=utf-8" }
    );
    FileSaver.saveAs(blob, "spectiql.test.js");
  }

  //selecting test from dropdown
  selectTest(e) {
    this.setState({
      selectedTest: e.target.value
    });
  }

  addTestSuite() {
    //push the generated test value into the test suites array
    if (document.getElementById("dd-reset").selectedIndex === 0) {
      alert('Please select a test type from the drop-down to Add to Test Suite')
    } else {
      const newTestSuite = {
        savedGeneratedTest: this.state.generatedTest,
        savedTestSuiteName: this.state.testSuiteName,
        savedTestDescription: this.state.testDescription,
        savedWriteTest: this.state.writeTest,
        savedSelectedTest: this.state.selectedTest,
        savedTestSuiteType: this.state.testSuiteType,
        savedWriteInput: this.state.writeInput,
        testIndex: this.state.testIndex + 1
      };
      //shallow copy of array
      let testSuites = this.state.testSuites.slice();
      testSuites.push(newTestSuite);
      return this.setState({
        testSuiteName: "",
        testDescription: "",
        writeTest: "",
        writeInput: "",
        generatedTest: "",
        selectedTest: this.dropDownReset(),
        testIndex: this.state.testIndex + 1,
        testSuites
      });
    }
  }

  updateTestSuite() {
    if (document.getElementById("dd-reset").selectedIndex === 0) {
      alert('Please select a test type from the drop-down to Update Test Suite')
    } else {
      let testSuites = this.state.testSuites.slice();
      const updatedTestSuite = {
        savedGeneratedTest: this.state.generatedTest,
        savedTestSuiteName: this.state.testSuiteName,
        savedTestDescription: this.state.testDescription,
        savedWriteTest: this.state.writeTest,
        savedWriteInput: this.state.writeInput,
        savedSelectedTest: this.state.selectedTest,
        savedTestSuiteType: this.state.testSuiteType,
        testIndex: this.state.testIndex
      };
      testSuites[updatedTestSuite.testIndex - 1] = updatedTestSuite;
      return this.setState({
        testSuiteName: "",
        testDescription: "",
        writeTest: "",
        writeInput: "",
        generatedTest: "",
        selectedTest: this.dropDownReset(),
        testSuites,
        testSuiteToggler: true
      });
    }
  }

  //editTest button from test suites tool bar
  //repopulates the GUI with the current saved test
  editTest(idx) {
    let testSuite = this.state.testSuites[idx - 1];
    return this.setState({
      testSuiteName: testSuite.savedTestSuiteName,
      testDescription: testSuite.savedTestDescription,
      writeTest: testSuite.savedWriteTest,
      writeInput: testSuite.savedWriteInput,
      selectedTest: this.dropDownReset(),
      generatedTest: testSuite.savedGeneratedTest,
      testIndex: testSuite.testIndex,
      testSuiteType: testSuite.savedTestSuiteType,
      testSuiteToggler: false
    });
  }

  deleteTest(idx) {
    let testSuites = this.state.testSuites.filter(
      test => test.testIndex !== idx
    );
    return this.setState({
      selectedTest: this.dropDownReset(),
      testSuiteToggler: true,
      testSuites,
      testIndex: this.state.testIndex - 1
    });
  }

  dropDownReset() {
    document.getElementById("dd-reset").selectedIndex = 0;
  }

  //toggling between queries and mutations when selecting from nav bar
  //true: queries, false: mutations (could use refactoring)
  testSuiteToggler() {
    return this.setState({
      testSuiteToggler: true
    });
  }

  //wipes/clears all fields after clicking generate test
  pageReset() {
    return this.setState({
      testSuiteName: "",
      testDescription: "",
      selectedTest: this.dropDownReset(),
      writeTest: "",
      writeInput: "",
      generatedTest: "",
      testSuiteToggler: true
    });
  }

  queryPage() {
    this.pageReset();
    return this.setState({
      testSuiteType: false
    });
  }

  mutationPage() {
    this.pageReset();
    return this.setState({
      testSuiteType: true
    });
  }

  render() {
    //conditional rendering landing page based on clicking the next button
    let landingPage;
    if (this.state.landingPageState === true) {
      landingPage = (
        <LandingPage
          landingPageState={this.state.landingPageState}
          handleNextClick={this.handleNextClick}
          openDocs={this.openDocs}
        />
      );
    }

    return (
      <HashRouter>
        <div className="fullscreen">
          <div className="mainContainer">
            <div className="landingPage">{landingPage}</div>
            <div className="mainNavBar">
              <LeftSideBar
                queryPage={this.queryPage}
                mutationPage={this.mutationPage}
                handleExportClick={this.handleExportClick}
              />
            </div>

            <div className="queryVisualizer">
              <SchemaTreeD3 schema={this.state.schema} />
            </div>

            <div className="testSuites">
                <TestSuites
                      testSuites={this.state.testSuites}
                      deleteTest={this.deleteTest}
                      editTest={this.editTest}
                />
            </div>

            <Switch>
              <Route path="/queries">
                <Query
                  appstate={this.state}
                  handleChange={this.handleChange}
                  handleClick={this.handleClick}
                  addTestSuite={this.addTestSuite}
                  updateTestSuite={this.updateTestSuite}
                  selectTest={this.selectTest}
                  deleteTest={this.deleteTest}
                  editTest={this.editTest}
                />
              </Route>
              <Route path="/mutations" exact>
                <Mutation
                  appstate={this.state}
                  handleChange={this.handleChange}
                  handleClick={this.handleClick}
                  addTestSuite={this.addTestSuite}
                  updateTestSuite={this.updateTestSuite}
                  selectTest={this.selectTest}
                  deleteTest={this.deleteTest}
                  editTest={this.editTest}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
