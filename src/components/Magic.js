import React, { Component } from 'react'

export default class Magic extends Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        Hello
        <button className='button' onClick={e => this.props.changePage('about')}>Start</button>
      </div>
    )
  }
}
