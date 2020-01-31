import React, { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Main from "./mainContainer/main.jsx";
import "./public/styling/index.css";
import Particles from "react-particles-js";
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


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
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
  }

  render() {
    return (
      <HashRouter>
        <div className="fullscreen">
          <div className="introContainer">
            <div className="introHeader">
            <ScrollAnimation animateIn="fadeIn" delay="3000" >
            <h1>SpectiQL</h1>
              </ScrollAnimation>
                  </div>
            <div className="introInstruction">
                              <Particles className="introAnimate"
                    params={{
                      "particles": {
                          "number": {
                              "value": 50
                          },
                          "size": {
                              "value": 3
                          }
                      },
                      "interactivity": {
                          "events": {
                              "onhover": {
                                  "enable": true,
                                  "mode": "repulse"
                              }
                          }
                      }
                  }} />
            </div>
            <div className="introNext">
              <Link to="/main" exact onClick={this.handleClick}>
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
    );
  }
}

export default App;
