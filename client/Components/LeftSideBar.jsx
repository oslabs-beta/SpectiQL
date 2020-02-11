import React, { Component } from 'react'
import { Button, ButtonToolbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  constructor (props) {
    super(props)
  };

  render () {
    return (
      // <div>Hello</div>
      <div className='mainNavBar'>
        <ButtonToolbar className='buttonContainer'>
          {/* <div className="selections">Select</div> */}

          <Button className='queries' variant='outline-dark' size='lg'>
            <Link className='queries' to='/queries'>
            Queries
            </Link>
          </Button>

          <Button className='mutations' variant='outline-dark' size='lg'>
            <Link className='mutations' to='/mutations'>
            Mutations
            </Link>
          </Button>

          <Button className='subscriptions' variant='outline-dark' size='lg'>
            Subscriptions
          </Button>

          <Button className='export' onClick={this.props.handleExportClick} className="export" variant="outline-dark" size="lg">
            Export
          </Button> 

        </ButtonToolbar>
      </div>
    )
  }
}
export default SideBar
