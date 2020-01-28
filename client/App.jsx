import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./mainContainer/main.jsx";
import './public/styling/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "sodium bloat"
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
                    <div className="introContainer">
                      <div className="introHeader">
                        Deez Nuts
                      </div>
                        <nav> 
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
                        </nav>
                        <Switch>
                            <Route path="/main" component={Main} />
                        </Switch>
                    </div>
                    </div>
                </HashRouter>
            )
        }
};

export default App;
