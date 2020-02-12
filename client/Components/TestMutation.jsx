import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'

class TestMutation extends Component {
  constructor (props) {
    super(props)
  }
  ;
  render () {
    return (
      <div className='writeMutationBox'>
        <div className='test-mutation-write'>
          <Form.Group as={Col} controlId='write-mutation'>
            {/* <Form.Label column sm={6}>
              Write Mutation:
            </Form.Label> */}
            <Form.Control
              as='textarea'
              placeholder='Enter Mutation here...'
              style={{ width: '100%', height: '97.5%', marginBottom: '2.5%' }}
              name='writeTest'
              value={this.props.writeTest}
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </div>

        <div className='test-mutation-select'>
          <Form.Group as={Col} controlId='select-mutation'>
            {/* <Form.Label column sm={6}>
              Enter Mutation Arguments:
            </Form.Label> */}
            <Form.Control
              as='textarea'
              placeholder='Insert your input type variable as an object:'
              style={{ width: '100%', height: '97%', marginBottom: '3%' }}
              name='writeInput'
              value={this.props.writeInput}
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </div>
      </div>

    )
  }
}

export default TestMutation;