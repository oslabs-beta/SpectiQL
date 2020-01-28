import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./mainContainer/main.jsx";

import './public/styling/index.css';
// const createSchema = require('../spectiql').createSchema
// import { createSchema } from '../spectiql'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "sodium bloat",
      filePath: '',
      schema: [],
    };
  }

  openDocs() {
    window.open(
      "https://github.com/oslabs-beta/SpectiQL/blob/master/README.md"
    );
  }



        render() {
            return (
                <HashRouter> 
                    <div className="fullscreen">
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupFileAddon01">
                          Upload
                        </span>
                      <div className="custom-file">
                        <input
                          type="file"
                          className="custom-file-input"
                          id="inputGroupFile01"
                          aria-describedby="inputGroupFileAddon01"
                          onChange={(e) => {this.setState({filePath: e.target.files[0].name})}}
                        />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">
                          {this.state.filePath}
                        </label>
                        </div>
                      </div>
                   <div className="introContainer">
                      <div className="introHeader">
                        SpectiQL
                      </div>
                                    <div className="introNext">
                                    <Link to="/main" exact>
                                        <button className="next-button">Next</button>
                                        </Link>
                                    </div>
                                    <div className="introDoc">
                                    <Link to="/documentation" exact onClick={this.openDocs}>
                                        <button className="doc-button">Docs</button>
                                        </Link>
                                        </div>
                        <Switch>
                            <Route path="/main" exact component={Main} />
                        </Switch>
                    </div>
                    </div>
                </HashRouter>
            )
        }
};

export default App;
