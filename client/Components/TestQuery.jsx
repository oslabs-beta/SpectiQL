import React, { Component } from 'react'
import { Form, Col } from 'react-bootstrap'
import Tree from 'react-d3-tree'

class TestQuery extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    // console.log('schema within testquery of Query:', this.props.schema);
    // console.log('RootQuery within testquery of Query:', this.props.schema.Query);

    // function convertJSON(object) {
    //   for (let key in object) {
    //     if (typeof(object[key]) == "object" && object[key].type !== "InputObjectTypeDefinition") {
    //       let obj = convertJSON(object[key]);
    //       obj.key = obj.name ? obj.name : "";
    //       if (obj.key === "") {
    //         obj.name = key;
    //       } else {
    //         obj.name = obj.key;
    //       }
    //       if (!object["children"])
    //         object["children"] = [];
    //       object["children"].push(obj);
    //       delete object[key];
    //     }
    //   }
    //   return object;
    // }

    // let queryTreeData = convertJSON(this.props.schema);
    // console.log(queryTreeData);

    return (
      <div className='writeQueryBox'>
        {/* <Form className="test-query-box"> */}
        {/* <Form.Row> */}
        <div className='test-query-write'>
          <Form.Group as={Col} controlId='write-query'>
            {/* <Form.Label column sm={6}>
              Write Query:
            </Form.Label> */}
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

export default TestQuery
