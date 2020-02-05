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
      schema: {}
    };
    this.handleNextClick = this.handleNextClick.bind(this);
  }

  openDocs() {
    window.open(
      "https://github.com/oslabs-beta/SpectiQL/blob/master/README.md"
    );
  }

  handleNextClick() {
    fetch('/spectiql', {
      method: 'POST',
    })
    .then(response => response.json())
    .then((response) => {
      this.setState({ schema: response.schema});
      console.log(this.state.schema);
    })
    .catch(err => console.log(err));
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
                      "color": {
                        "value": "#7a3e3e"
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
              <Link to="/main" exact>
                <button className="next-button" onClick={this.handleNextClick}>Next</button>
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
