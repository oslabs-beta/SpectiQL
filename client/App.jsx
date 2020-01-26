import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'sodium bloat'
        };
    }
        render() {
            return (
                <div>
                    {this.state.text}
                </div>
            )
        }
};

export default App;

