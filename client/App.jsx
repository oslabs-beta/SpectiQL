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

<<<<<<< HEAD
        render() {
            return (
                <HashRouter> 
                    <div className="introPage">
                        <nav>
                            <ul>
                                    <Link to="/main" exact>
                                        <button>Next</button>
                                        </Link>
                                    <Link to="/documentation" onClick={this.openDocs}>
                                        <button>Docs</button>
                                        </Link>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/main" component={Main} />
                        </Switch>
                    </div>
                </HashRouter>
            )
        }
};
=======
  render() {
    return (
      <HashRouter>
        <div class="introPage">
          <nav>
            <ul>
              <Link to="/main" exact>
                <button>Next</button>
              </Link>
              <Link to="/documentation" onClick={this.openDocs}>
                <button>Docs</button>
              </Link>
            </ul>
          </nav>
          <Switch>
            <Route path="/main">
              <Main />
            </Route>
          </Switch>
        </div>
      </HashRouter>
    );
  }
}
>>>>>>> 14cdc878a74b0761093c717abe9d299886538cca

export default App;
