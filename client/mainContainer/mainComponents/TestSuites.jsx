import React, { Component } from "react";
import { Card } from "react-bootstrap";

class TestSuites extends Component {
  render() {
    return (
      <div class="wrapper">
        <nav id="sidebar">
          <div class="sidebar-header">
            <h3>Test Suites:</h3>
          </div>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Test Suite 1:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Test Name
              </Card.Subtitle>
              <Card.Text>Test description</Card.Text>
              <Card.Link href="#">Edit Test</Card.Link>
              <Card.Link href="#">Delete Test</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Test Suite 2:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Test Name
              </Card.Subtitle>
              <Card.Text>Test description</Card.Text>
              <Card.Link href="#">Edit Test</Card.Link>
              <Card.Link href="#">Delete Test</Card.Link>
            </Card.Body>
          </Card>

          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>Test Suite 3:</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Test Name
              </Card.Subtitle>
              <Card.Text>Test description</Card.Text>
              <Card.Link href="#">Edit Test</Card.Link>
              <Card.Link href="#">Delete Test</Card.Link>
            </Card.Body>
          </Card>
        </nav>

        <div id="content">
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
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

/*

      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Test Suite 1:</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Test Name</Card.Subtitle>
            <Card.Text>Test description</Card.Text>
            <Card.Link href="#">Edit Test</Card.Link>
            <Card.Link href="#">Delete Test</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Test Suite 2:</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Test Name</Card.Subtitle>
            <Card.Text>Test description</Card.Text>
            <Card.Link href="#">Edit Test</Card.Link>
            <Card.Link href="#">Delete Test</Card.Link>
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Test Suite 3:</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Test Name</Card.Subtitle>
            <Card.Text>Test description</Card.Text>
            <Card.Link href="#">Edit Test</Card.Link>
            <Card.Link href="#">Delete Test</Card.Link>
          </Card.Body>
        </Card>
      </div>
*/

export default TestSuites;
