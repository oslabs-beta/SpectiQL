import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'

class MutationTestInput extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='testInputContainer'>
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
        <select className='selectQueryType' id='dd-reset' onChange={this.props.selectTest}>
          <option value='default' disabled selected>Select Test</option>
          <option value='validMutationInput'>Valid Mutation Input</option>
          <option value='invalidMutationInput'>Invalid Mutation Input</option>
          <option value='validMutationDataType'>Valid Data Type</option>
          <option value='invalidMutationDataType'>Invalid Data Type</option>
        </select>
      </div>
    )
  }
}

export default MutationTestInput;