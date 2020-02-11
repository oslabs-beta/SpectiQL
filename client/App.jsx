import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import "./public/styling/index.css";
import Particles from "react-particles-js"; 
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

//all the components we need
import Main from "./main.jsx";
import Mutations from "./Containers/MutationContainer.jsx"
import LeftSideBar from "./Components/LeftSideBar.jsx";
import SchemaTreeD3 from "./Components/schemaTreeD3.jsx";

//functions imported from test
import {
  validQuery,
  invalidQuery,
  validArgField,
  invalidArgField,
  validArgDataType,
  invalidArgDataType,
  validMutation,
  invalidMutation,
} from "./Tests/Tests.jsx";

let schemaData='what the fk is up!';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      schema: {yes:'hello'},
      testSuiteName: "",
      testDescription: "",
      selectedTest: "",
      writeTest: "", 
      writeInput:"",
      generatedTest: "",
      testFunctions: {
                validQuery,
                invalidQuery,
                validArgField,
                invalidArgField,
                validArgDataType,
                invalidArgDataType,
                validMutation,
                invalidMutation
      },
      testSuites: [],
      testIndex: 0,
      testSuiteToggler: true
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
  }

  openDocs() {
    window.open(
      "https://github.com/oslabs-beta/SpectiQL/blob/master/README.md"
    );
  }
  

  handleNextClick() {
    fetch('/spectiql', {
      method: 'POST',
    })
    .then(response => response.json())
    .then((response) => {
      // console.log('this is schemaData before saving to local variable', schemaData);
      schemaData = response.schema;
      
      // console.log('this is schemaData after saving to local variable', schemaData);
      this.setState({ schema: response.schema});
      // console.log(this.state.schema);
    })
    .catch(err => console.log(err));
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({ [e.target.name]: value });
  }


  handleClick() {
    const value = this.state.testFunctions[this.state.selectedTest](this.state);
    return this.setState({ generatedTest: value });
  }


  selectTest(e) {
    this.setState({
      selectedTest: e.target.value,
      dropDownIndex: e.target.selectedIndex
    });
  }

  addTestSuite() {
    //push the generated test value into the test suites array
    const newTestSuite = {
      savedGeneratedTest: this.state.generatedTest,
      savedTestSuiteName: this.state.testSuiteName,
      savedTestDescription: this.state.testDescription,
      savedWriteTest: this.state.writeTest,
      savedSelectedTest: this.state.selectedTest,
      testIndex: this.state.testIndex + 1
    };
    //shallow copy of array
    let testSuites = this.state.testSuites.slice();
    testSuites.push(newTestSuite);
    return this.setState({
      testSuiteName: "",
      testDescription: "",
      writeTest: "",
      generatedTest: "",
      selectedTest: this.dropDownReset(),
      testIndex: this.state.testIndex + 1,
      testSuites
    });
  }

  updateTestSuite() {
    let testSuites = this.state.testSuites.slice();
    const updatedTestSuite = {
      savedGeneratedTest: this.state.generatedTest,
      savedTestSuiteName: this.state.testSuiteName,
      savedTestDescription: this.state.testDescription,
      savedWriteTest: this.state.writeTest,
      savedSelectedTest: this.state.selectedTest,
      testIndex: this.state.testIndex
    };
    testSuites[updatedTestSuite.testIndex - 1] = updatedTestSuite;
    return this.setState({
      testSuiteName: "",
      testDescription: "",
      writeTest: "",
      generatedTest: "",
      dropDownIndex: 0,
      selectedTest: this.dropDownReset(),
      testSuites,
      testSuiteToggler: true
    })
  }

  editTest(idx) {
    let testSuite = this.state.testSuites[idx - 1];   
    console.log('edit test state', this.state) 
    let dropDownIndex = document.getElementById("dd-reset");
    dropDownIndex.selectedIndex = testSuite.savedDropDownIndex;
    return this.setState({
      testSuiteName: testSuite.savedTestSuiteName,
      testDescription: testSuite.savedTestDescription,
      writeTest: testSuite.savedWriteTest,
      selectedTest: this.dropDownReset(),
      generatedTest: testSuite.savedGeneratedTest,
      testIndex: testSuite.testIndex,
      testSuiteToggler: false
    })
  }

  deleteTest(idx) {
    let testSuites = this.state.testSuites.filter(test => test.testIndex !== idx);
    return this.setState({
      testSuiteName: "",
      testDescription: "",
      writeTest: "",
      generatedTest: "",
      selectedTest: this.dropDownReset(),
      testSuites,
      testIndex: this.state.testIndex - 1,
    });
  }

  dropDownReset() {
    document.getElementById("dd-reset").selectedIndex = 0;
  }

  testSuiteToggler() {
    return this.setState({
      testSuiteToggler: !this.state.testSuiteToggler
    })
  }

  render() {
    return (
        <HashRouter>
        <div className="fullscreen">
          <div className="introContainer">
            <div className="introHeader">
            <ScrollAnimation animateIn="fadeIn" delay="3000" >
            <h1>SpectiQL</h1>
              </ScrollAnimation>
                  </div>
            <div className="introInstruction">
                              <Particles className="introAnimate"
                    params={{
                      "particles": {
                          "number": {
                              "value": 50
                          },
                          "size": {
                              "value": 3
                          }
                      },
                      "color": {
                        "value": "#7a3e3e"
                      },
                      "interactivity": {
                          "events": {
                              "onhover": {
                                  "enable": true,
                                  "mode": "repulse"
                              }
                          }
                      }
                  }} />
            </div>
            
            <div className="introNext">
              <Link to="/main" exact>
                <button className="next-button" onClick={this.handleNextClick}>Next</button>
              </Link>
            </div>
            <div className="introDoc">
              <Link to="/documentation" exact onClick={this.openDocs}>
                <button className="doc-button">Docs</button>
              </Link>
            </div>
            <Switch>
                <Route path="/main" exact>
                  <LeftSideBar/>
                  <Main appstate={this.state} handleChange={this.handleChange} 
                  handleClick={this.handleClick} addTestSuite={this.addTestSuite} updateTestSuite={this.updateTestSuite} 
                  selectTest={this.selectTest} deleteTest={this.deleteTest} editTest={this.editTest}/>
                    <SchemaTreeD3 
                      schema={this.state.schema}
                    />
                </Route>
                

                <Route path="/queries" exact>
                  <LeftSideBar/>
                  <Main appstate={this.state} handleChange={this.handleChange} 
                  handleClick={this.handleClick} addTestSuite={this.addTestSuite} updateTestSuite={this.updateTestSuite} 
                  selectTest={this.selectTest} deleteTest={this.deleteTest} editTest={this.editTest} schemaData={schemaData}/>
                </Route> 

                <Route path="/mutations" exact>
                  <Mutations appstate={this.state} handleChange={this.handleChange} 
                  handleClick={this.handleClick} addTestSuite={this.addTestSuite} updateTestSuite={this.updateTestSuite} 
                  selectTest={this.selectTest} deleteTest={this.deleteTest} editTest={this.editTest}/>
                </Route>

            </Switch>
          </div>
        </div>
        </HashRouter>
    );
  }
}

export default App;