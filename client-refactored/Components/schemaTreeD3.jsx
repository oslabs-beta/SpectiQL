import React, { Component } from "react";
import Tree from "react-d3-tree";

class SchemaTreeD3 extends Component {
  constructor(props) {
    super(props);

    //initialDepth sets the initial levels of nodes that will appear by default
    this.state = {
      initialDepth: 1,
    };
  }

  componentDidMount() {
    const dimensions = this.treeContainer.getBoundingClientRect();
    this.setState({
      translate: {
        x: dimensions.width / 10,
        y: dimensions.height / 2,
      },
      initialDepth: 1,
    });
  }

  render() {
    //traverses through object imported in from user's schema file to determine if elements within object are object
    //if element is object, convert into a new parent node and elements within given object into children nodes
    function convertQuerySchema(object) {
      for (const key in object) {
        if (
          typeof object[key] === "object" &&
          object[key].type !== "InputObjectTypeDefinition"
        ) {
          const obj = convertQuerySchema(object[key]);
          obj.key = obj.name ? obj.name : "";
          if (obj.key === "") {
            obj.name = key;
          } else {
            obj.name = obj.key;
          }
          if (!object.children) {
            object.children = [];
          }
          object.children.push(obj);
          delete object[key];
        }
      }
      return object;
    }

    //invokes function to convert imported schema file into object d3 tree can utilize
    const queryTreeData = convertQuerySchema(this.props.schema);

    return (
      <div className="svg-container">
        <div
          id="treeWrapper"
          style={{ width: "100%", height: "100%" }}
          ref={(tc) => (this.treeContainer = tc)}
        >
          <Tree
            data={queryTreeData}
            translate={this.state.translate}
            shouldCollapseNeighborNodes={true}
            initialDepth={this.state.initialDepth}
          />
        </div>
      </div>
    );
  }
}

export default SchemaTreeD3;
