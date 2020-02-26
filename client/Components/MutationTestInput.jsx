import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'

//requires refactoring into functional component
class MutationTestInput extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='testInputContainer'>

        <div className="testSuiteInstruction">
          Mutation test name ⟶
        </div>

        <Form className="testSuiteInput">
          <Form.Group controlId='test-suite'>
              <Form.Control
                type='text'
                placeholder='Enter test suite here...'
                name='testSuiteName'
                value={this.props.testSuiteName}
                onChange={this.props.handleChange}
              />
          </Form.Group>
          </Form>

        <div className="testDescriptionInstruction">
          Test description ⟶
        </div>

        <Form className="testDescriptionInput">
          <Form.Group controlId='test-description'>
              <Form.Control
                type='text'
                placeholder='Enter test description here...'
                name='testDescription'
                value={this.props.testDescription}
                onChange={this.props.handleChange}
              />
          </Form.Group>
        </Form>

        <div className="selectTestInstruction">
          Please select test ⟶
        </div>

        <select className='selectQueryType' id='dd-reset' onChange={this.props.selectTest}>
          <option value='default' disabled selected>Select Test</option>
          <option value='validMutationInput'>Valid Mutation Input</option>
          <option value='invalidMutationInput'>Invalid Mutation Input</option>
          <option value='validMutationDataType'>Valid Mutation Data Type</option>
          <option value='invalidMutationDataType'>Invalid Mutation Data Type</option>
        </select>
      </div>
    )
  }
}

export default MutationTestInput;