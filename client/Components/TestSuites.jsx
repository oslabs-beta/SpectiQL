import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class TestSuites extends Component {
  render () {
    const testSuite = this.props.testSuites.map((test, index) => {
      const route = test.savedTestSuiteType ? "mutations" : "queries";
      return (
      <Card style={{ }} key={index}>
        <Card.Body>
          <Card.Title>Test Suite {index + 1}</Card.Title>
          <Card.Subtitle className='mb-2 text-muted'>
            {test.savedTestSuiteName}
          </Card.Subtitle>
          <Card.Text>{test.savedTestDescription}</Card.Text>

          {/* <Link className='testSuiteEditButton' to={route}> */}
                <button className='testSuiteEditButton'
                    // className='testSuiteEditButton'
                    onClick={() => this.props.editTest(test.testIndex)}
                  >
                  <Link to={route}>
                    Edit Test
                  </Link>
                </button>
          {/* </Link> */}

          <button
              className='testSuiteDeleteButton'
              onClick={() => this.props.deleteTest(test.testIndex)}
            >
              Delete Test
          </button>

        </Card.Body>
      </Card>
    )})
    return (
      <div className="testSuites">
        <div className='wrapper'>

        <h3>Test Suites</h3>

                <div id='sidebar'>
                  {/* <div class='sidebar-header'>
                    </div> */}
                  {testSuite}
                </div>
            </div>
          </div>
    )
  }
}

export default TestSuites;