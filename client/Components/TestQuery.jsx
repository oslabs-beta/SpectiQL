import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import Tree from 'react-d3-tree'

class TestQuery extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    return (
      <div className='writeQueryBox'>
        {/* <Form className="test-query-box"> */}
        {/* <Form.Row> */}
        <div className='test-query-write'>
          <Form.Group as={Col} controlId='write-query'>
            <Form.Label column sm={6}>
              Write Query:
            </Form.Label>
            <Form.Control
              as='textarea'
              placeholder='Enter query here...'
              style={{ width: '100%', height: '17.7rem' }}
              name='writeTest'
              value={this.props.writeTest}
              onChange={this.props.handleChange}
            />
          </Form.Group>
        </div>

        {/* <div className= "test-query-select"> */}

        {/* <div id="treeWrapper" style={{width: '50em', height: '20em'}}>
              <Tree data={queryTreeData} />
            </div> */}
        {/* <Form.Group as={Col} controlId="select-query"> */}
        {/* <Form.Label column sm={6}>
              Select Query:
            </Form.Label> */}
        {/* <Form.Control
              as="textarea"
              placeholder="Sample selected query here..."
              style={{ width: "100%", height: "17.7rem" }}
            /> */}
        {/* </Form.Group> */}

        {/* </div> */}
        {/* </Form.Row> */}
        {/* </Form> */}
      </div>
    )
  }
}

export default TestQuery;