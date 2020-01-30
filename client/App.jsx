import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./mainContainer/main.jsx";

import "./public/styling/index.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "sodium bloat",
      filePath: "",
      schema: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  openDocs() {
    window.open(
      "https://github.com/oslabs-beta/SpectiQL/blob/master/README.md"
    );
  }

  handleClick() {
    fetch('/spectiql', {
      method: 'POST',
    })
    .then(response => response.json())
    .then(console.log(response))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <HashRouter>
        <div className="fullscreen">
          <div className="introContainer">
            <div className="introHeader">SpectiQL</div>
            <div className="introNext">
              <Link to="/main" exact>
                <button className="next-button" onClick={this.handleClick}>Next</button>
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
    );
  }
}

export default App;
