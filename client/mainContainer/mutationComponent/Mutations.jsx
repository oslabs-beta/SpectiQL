// import React, { Component } from "react";
// import LeftSideBar from "../../Components/LeftSideBar.jsx/index.js";
// import TestInput from "../../Components/TestInput.jsx/index.js";
// import TestMutation from "./TestMutation.jsx";
// import GenerateMutationTest from "./GenerateMutationTest.jsx";
// import TestSuites from "../../Components/TestSuites.jsx/index.js";
// import { validMutation, invalidMutation} from "../../Tests/MutationTests.jsx/index.js"
// class Mutations extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       testSuiteName: "",
//       testDescription: "",
//       writeMutation: "",
//       writeInput:"",
//       generatedTest: "",
//       testSuites: [],
//       selectedTest: "",
//       testIndex: 0, 
//       testFunctions: {
//         validMutation,
//         invalidMutation
//       }
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.updateTestSuite = this.updateTestSuite.bind(this);
//     this.selectTest = this.selectTest.bind(this);
//   }
//   handleChange(e) {
//     const value = e.target.value;
//     this.setState({ [e.target.name]: value });
//   }

//   handleClick() {
//     const value = this.state.testFunctions[this.state.selectedTest](this.state);
//     // document.getElementById('dd-reset').value('default')
//     return this.setState({ generatedTest: value })
//   }
//   selectTest(e) {
//     this.setState({ selectedTest: e.target.value });
//   }
//   updateTestSuite() {
//     //push the generated test value into the test suites array
//     const newTestSuite = {
//       generatedTest: this.state.generatedTest,
//       savedTestSuiteName: this.state.testSuiteName,
//       savedTestDescription: this.state.testDescription,
//       testIndex: this.state.testIndex + 1
//     };
//     //shallow copy of array
//     let testSuites = this.state.testSuites.slice();
//     testSuites.push(newTestSuite);
//     return this.setState({
//       testSuiteName: "",
//       testDescription: "",
//       writeMutation: "",
//       generatedTest: "",
//       selectedTest: "",
//       testIndex: this.state.testIndex + 1,
//       testSuites
//     });
//   }
//   render() {
//     return (
//       <div className="fullscreen">
//         <div className="mainContainer">
//           <div className="leftSideBar">
//             <LeftSideBar />
//           </div>
//           <div className="testInput">
//             <TestInput             
//               testSuiteName={this.state.testSuiteName}
//               testDescription={this.state.testDescription}
//               writeMutation={this.state.writeMutation}
//               onChange={this.handleChange}
//               />
//           </div>
//           <div className="testQuery">
//             <TestMutation
//               writeMutation={this.state.writeMutation}
//               writeInput={this.state.writeInput}
//               onChange={this.handleChange}
//             />
//           </div>
//           <div className="generateTest">
//             <GenerateMutationTest
//               testSuiteName={this.state.testSuiteName}
//               testDescription={this.state.testDescription}
//               writeMutation={this.state.writeMutation}
//               handleClick={this.handleClick}
//               generatedTest={this.state.generatedTest}
//               updateTestSuite={this.updateTestSuite}
//               selectTest={this.selectTest}
//               />
//           </div>
//           <div className="testSuites">
//             <TestSuites
//               testSuites={this.state.testSuites}
//               deleteTest={this.deleteTest}
//             />
//           </div>

//         </div>
//       </div>
//     );
//   }
// }

// export default Mutations;