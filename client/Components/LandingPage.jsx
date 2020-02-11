import React, { Component } from 'react'
import { HashRouter, Route, Link, Switch } from 'react-router-dom'
import '../public/styling/index.css'
import Particles from 'react-particles-js'
import 'animate.css/animate.min.css'
import ScrollAnimation from 'react-animate-on-scroll'

class LandingPage extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='introscreen'>
        <div className='introContainer'>
          <div className='introHeader'>
            <ScrollAnimation animateIn='fadeIn' delay='3000'>
              <h1>
                    SpectiQL
              </h1>
            </ScrollAnimation>
          </div>

          <div className='introInstruction'>
            <Particles
              className='introAnimate'
              params={{
                particles: {
                  number: {
                    value: 50
                  },
                  size: {
                    value: 3
                  }
                },
                color: {
                  value: '#7a3e3e'
                },
                interactivity: {
                  events: {
                    onhover: {
                      enable: true,
                      mode: 'repulse'
                    }
                  }
                }
              }}
            />
          </div>

          <div className='introNext'>
            <button className='next-button' onClick={this.props.handleNextClick}>Next</button>
          </div>
          <div className='introDoc'>
            <Link to='/documentation' exact>
              <button className='doc-button' onClick={this.props.openDocs}>Docs</button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default LandingPage;
