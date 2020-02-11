import React, { Component } from 'react'
import Tree from 'react-d3-tree'

class SchemaTreeD3 extends Component {
  constructor (props) {
    super(props)

    this.state = {}
  };

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 10,
        y: dimensions.height / 2
      },
      depth: 1
    });
  }

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
    <div className="svg-container">
      <div id='treeWrapper' style={{ width: '100%', height: '100%' }} ref={tc => (this.treeContainer = tc)} >
        <Tree 
          data={queryTreeData} 
          translate={this.state.translate}
          initialDepth={this.state.depth}
          />
      </div>
      </div>
    )
  }
}

export default SchemaTreeD3
