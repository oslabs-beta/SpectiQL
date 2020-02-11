import React, { Component } from 'react'
import Tree from 'react-d3-tree'

class SchemaTreeD3 extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    // console.log('schema within testquery of schemaTreeD3:', this.props.schema);
    // console.log('RootQuery within testquery of schemaTreeD3:', this.props.schema.Query);
    // function below is for converting entire
    // function convertSchema(object) {
    //     for (let key in object) {
    //       if (typeof(object[key]) == "object") {
    //         let obj = convertJSON(object[key]);
    //         obj.key = obj.name ? obj.name : "";
    //         if (obj.key === "") {
    //           obj.name = key;
    //         } else {
    //           obj.name = obj.key;
    //         }
    //         if (!object["children"])
    //           object["children"] = [];
    //         object["children"].push(obj);
    //         delete object[key];
    //       }
    //     }
    //     return object;
    //   }
    // below will convert all of the schema json data
    function convertQuerySchema (object) {
      for (const key in object) {
        if (typeof (object[key]) === 'object' && object[key].type !== 'InputObjectTypeDefinition') {
          const obj = convertQuerySchema(object[key])
          obj.key = obj.name ? obj.name : ''
          if (obj.key === '') {
            obj.name = key
          } else {
            obj.name = obj.key
          }
          if (!object.children) { object.children = [] }
          object.children.push(obj)
          delete object[key]
        }
      }
      return object
    }

    function convertMutationSchema (object) {
      for (const key in object) {
        if (typeof (object[key]) === 'object' && object[key].type === 'InputObjectTypeDefinition') {
          const obj = convertMutationSchema(object[key])
          obj.key = obj.name ? obj.name : ''
          if (obj.key === '') {
            obj.name = key
          } else {
            obj.name = obj.key
          }
          if (!object.children) { object.children = [] }
          object.children.push(obj)
          delete object[key]
        }
      }
      return object
    }

    //   let schemaTreeData = convertSchema(this.props.schema);
    const queryTreeData = convertQuerySchema(this.props.schema)
    // let mutationTreeData = convertMutationSchema(this.props.schema);
    console.log('this is queryTreeData from schemaTreeD3.jsx:', queryTreeData)

    return (
    // <div>Hello!</div>
      <div id='treeWrapper' style={{ width: '60em', height: '50em' }}>
        <Tree data={queryTreeData} />
      </div>
    )
  }
}

export default SchemaTreeD3
