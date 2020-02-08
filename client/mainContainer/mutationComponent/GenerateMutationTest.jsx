// import React, { Component } from "react";
// import { Button, Form, Col, DropdownButton, Dropdown } from "react-bootstrap";

// class GenerateMutationTest extends Component {
//   render() {
//     return (
//       <Form className="generate-test">
//         <Form.Row>
//           <Form.Group as={Col} style={{ margin: 0, padding: 0 }}>
//             <select className="selectType" id="dd-reset" onChange = {this.props.selectTest}>
//               <option value ="default" disabled selected>Select Test</option>
//               <option value = "validMutation">Valid Mutation</option>
//               <option value= "invalidMutation" >Invalid Mutation</option>
//               <option value= "validArgField" >Valid Argument Field</option>
//               <option value = "invalidArgField" >Invalid Argument Field</option>
//               <option value= "validInputType" >Valid Input Type</option>
//               <option value = "invalidInputType" >Invalid Input Type</option>
//             </select>
//             <Button className="generateTest"
//               variant="primary"
//               size="lg"
//               block
//               style={{ height: "35%", width: "100%" }}
//               onClick={this.props.handleClick}
//             >
//               Generate Test
//             </Button>
//             <Button className="addTest"
//               variant="outline-primary"
//               size="lg"
//               block
//               style={{ height: "35%", width: "100%" }}
//               onClick={this.props.updateTestSuite}
//             >
//               Add to Test Suite
//             </Button>
//           </Form.Group>

//           <Form.Group as={Col} controlId="sample-test">
//             <Form.Label column sm={6}>
//               Generated Test:
//             </Form.Label>
//             <Form.Control
//               as="textarea"
//               placeholder="Sample Test..."
//               style={{ width: "80%", height: "18rem" }}
//               value={this.props.generatedTest}
//             />
//           </Form.Group>
//         </Form.Row>
//       </Form>
//     );
//   }
// }

// export default GenerateMutationTest;
