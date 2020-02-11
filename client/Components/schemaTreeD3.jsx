import React, { Component } from "react";
import Tree from 'react-d3-tree';

class SchemaTreeD3 extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        function convertSchema(object) {
            for (let key in object) {
              if (typeof(object[key]) == "object") {
                let obj = convertJSON(object[key]);
                obj.key = obj.name ? obj.name : "";
                if (obj.key === "") {
                  obj.name = key;
                } else {
                  obj.name = obj.key;
                }
                if (!object["children"])
                  object["children"] = [];
                object["children"].push(obj);
                delete object[key];
              }
            }
            return object;
          }
        //below will convert all of the schema json data
        function convertQuerySchema(object) {
            for (let key in object) {
              if (typeof(object[key]) == "object" && object[key].type !== "InputObjectTypeDefinition") {
                let obj = convertJSON(object[key]);
                obj.key = obj.name ? obj.name : "";
                if (obj.key === "") {
                  obj.name = key;
                } else {
                  obj.name = obj.key;
                }
                if (!object["children"])
                  object["children"] = [];
                object["children"].push(obj);
                delete object[key];
              }
            }
            return object;
          }

          function ConvertMutationSchema(object) {
            for (let key in object) {
              if (typeof(object[key]) == "object" && object[key].type !== "InputObjectTypeDefinition") {
                let obj = convertJSON(object[key]);
                obj.key = obj.name ? obj.name : "";
                if (obj.key === "") {
                  obj.name = key;
                } else {
                  obj.name = obj.key;
                }
                if (!object["children"])
                  object["children"] = [];
                object["children"].push(obj);
                delete object[key];
              }
            }
            return object;
          }
          
          let schemaTreeData = convertSchema(this.props.schema);
          let queryTreeData = convertQuerySchema(this.props.schema);
          console.log(queryTreeData);

        return (
            <div className="treeWrapper" style={{width: '60em', height: '50em'}}>
            <Tree data={queryTreeData} />
          </div>
        )
    }
}

export default SchemaTreeD3;