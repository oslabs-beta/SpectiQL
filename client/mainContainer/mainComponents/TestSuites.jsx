import React, { Component } from "react";
import { Card } from "react-bootstrap";

class TestSuites extends Component {
  render() {
    // console.log(`this.props`,this.props)
    const testSuite = this.props.testSuites.map((test, idx) => (
      // console.log(`test`, test)
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Test Suite {idx + 1}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {test.savedTestSuiteName}
          </Card.Subtitle>
          <Card.Text>{test.savedTestDescription}</Card.Text>
          <Card.Link href="#">Edit Test</Card.Link>
          <Card.Link href="#">Delete Test</Card.Link>
        </Card.Body>
      </Card>
    ));
    return (
      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>Test Suites</h3>
          </div>
          {testSuite}
        </nav>

        <div id="content">
          <nav id="content" class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
              <button type="button" id="sidebarCollapse" class="btn btn-info">
                <i class="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default TestSuites;
