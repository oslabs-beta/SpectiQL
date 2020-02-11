import React, { Component } from 'react'
import { Button, Form, Col } from 'react-bootstrap'

class GenerateTest extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    const editTestSuite = () => {
      if (this.props.testSuiteToggler === true) {
        return (
          <Button
            className='addTestButton'
            variant='outline-primary'
            size='lg'
            block
            style={{ height: '42%', width: '100%', color: 'black', borderColor: 'black' }}
            onClick={this.props.addTestSuite}
          >
          Add to Test Suite
          </Button>
        )
      } else {
        return (
          <Button
            className='updateTest'
            variant='outline-primary'
            size='lg'
            block
            style={{ height: '42%', width: '100%', color: 'black', borderColor: 'black' }}
            onClick={this.props.updateTestSuite}
          >
          Update Test Suite
          </Button>
        )
      }
    }
    return (
      <div className='generateTestBox'>
        {/* <Form className="generate-test"> */}
        {/* <Form.Row> */}
        <Form.Group as={Col} style={{ margin: 0, padding: 3 }}>
          <Button
            className='generateTestButton'
            variant='outline-primary'
            size='lg'
            block
            style={{ height: '42%', width: '100%', color: 'black', borderColor: 'black' }}
            onClick={this.props.handleClick}
          >
              Generate Test
          </Button>
          {/* <Button className="addTestButton"
              variant="outline-primary"
              size="lg"
              block
              style={{ height: "42%", width: "100%", color: "black", borderColor: "black" }}
              onClick={this.props.updateTestSuite}
            >
              Add to Test Suites
            </Button> */}
          {editTestSuite()}
        </Form.Group>

        <Form.Group as={Col} controlId='sample-test'>
          {/* <Form.Label column sm={6}>
              Generated Test:
            </Form.Label> */}
          <Form.Control
            as='textarea'
            placeholder='Generated Test...'
            style={{ width: '100%', height: '17.7rem' }}
            value={this.props.generatedTest}
          />
        </Form.Group>
        {/* </Form.Row> */}
        {/* </Form> */}
      </div>
    )
  }
}

export default GenerateTest
