import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'

class MutationTestInput extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='testInputContainer'>
        {/* <Form className="testSuiteInput"> */}
        <Form.Group controlId='test-suite'>
          <Form.Label column sm={6}>
              Mutation Test Name:
            </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              placeholder='Enter test suite here...'
              name='testSuiteName'
              value={this.props.testSuiteName}
              onChange={this.props.handleChange}
            />
          </Col>
        </Form.Group>
        {/* </Form> */}

        {/* <Form className="testDescriptionInput"> */}
        <Form.Group controlId='test-description'>
          <Form.Label column sm={6}>
              Mutation Test Description:
            </Form.Label>
          <Col sm='10'>
            <Form.Control
              type='text'
              placeholder='Enter test description here...'
              name='testDescription'
              value={this.props.testDescription}
              onChange={this.props.handleChange}
            />
          </Col>
        </Form.Group>
        {/* </Form> */}
        <select className='selectQueryType' id='dd-reset' onChange={this.props.selectTest}>
          <option value='default' disabled selected>Select Test</option>
          <option value='validMutation'>Valid Mutation</option>
          <option value='invalidMutation'>Invalid Mutation</option>
          <option value='validArgField'>Valid Argument Field</option>
          <option value='invalidArgField'>Invalid Argument Field</option>
          <option value='validInputType'>Valid Input Type</option>
          <option value='invalidInputType'>Invalid Input Type</option>
          {/* <option  value = "validMutation" >Valid Mutation</option> */}

        </select>
      </div>
    )
  }
}

export default MutationTestInput
