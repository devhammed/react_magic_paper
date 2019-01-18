import React, { Component } from 'react'
import MagicSymbol from './MagicSymbol'
import Card from './Card'
import './Magic.css'

export default class Magic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      uniqueImg: (Math.floor(Math.random() * 6)) + 1,
      selected: false
    }
  }

  componentWillMount () {
    let items = []
    for (let i = 0; i < 99; i++) {
      if ((i + 1) % 9 === 0) { // if index is a multiple of 9
        items[i] = <MagicSymbol index={this.state.uniqueImg} key={i} />
      } else {
        items[i] = <MagicSymbol index={(Math.floor(Math.random() * 6)) + 1} key={i} />
      }
    }
    this.setState({ items: items })
  }

  render () {
    return (
      <Card>
        { !this.state.selected
          ? (
            <div style={{ margin: '15px auto' }}>
              <h3>Look for the Magic Symbol with your number!</h3>
              <ul className='Magic__symbols'>{this.state.items}</ul>
              <button className='button' onClick={e => (this.setState({ selected: true }))}>Continue</button>
            </div>
          )
          : (
            <div style={{ margin: '15px auto' }} className='slide-in'>
              <h3>And your Magic Symbol is:- </h3>
              <img src={require(`../assets/img/symbols/${this.state.uniqueImg}.png`)} width='50' height='50' />
              <p>Don't be amazed alone, Kindly share this with your friends!</p>
            </div>
          )
        }
        <button className='button' onClick={e => this.props.changePage('about')}>Home</button>
      </Card>
    )
  }
}
