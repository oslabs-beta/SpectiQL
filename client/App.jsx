import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Main from "./mainContainer/main.jsx";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'sodium bloat'
        };
    }

    openDocs() {
        window.open('https://github.com/oslabs-beta/SpectiQL/blob/master/README.md');
    }

        render() {
            return (
                <BrowserRouter> 
                    <div class="introPage">
                        <nav>
                            <ul>
                                    <Link to="/">
                                        <button>Next</button>
                                        </Link>
                                    <Link to="/documentation" onClick={this.openDocs}>
                                        <button>Docs</button>
                                        </Link>
                            </ul>
                        </nav>
                        <Switch>
                            <Route path="/main" component={Main}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            )
        }
};

export default App;

