import React, { Component } from 'react'

class EnterInfo extends Component {
  render () {
    return (
      <div className='enterInfoContainer'>

        <div className='enterTestSuiteText'>
                    How do you want to name your test suite?
        </div>

        <div className='enterTestDescText'>
                    What is this test specifically testing?
        </div>

        <div className='selectTestText'>
                    *Please select the type of test
        </div>

      </div>

    )
  }
}

export default EnterInfo;