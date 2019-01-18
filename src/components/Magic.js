import React, { Component } from 'react'
import MagicSymbol from './MagicSymbol'
import Card from './Card'
import './Magic.css'

export default class Magic extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      uniqueImg: (Math.floor(Math.random() * 48)) + 1,
      selected: false
    }
  }

  componentWillMount () {
    let items = []
    for (let i = 0; i < 99; i++) {
      if ((i + 1) % 9 === 0) { // if index is a multiple of 9
        items[i] = <MagicSymbol index={this.state.uniqueImg} key={i} />
      } else {
        items[i] = <MagicSymbol index={(Math.floor(Math.random() * 48)) + 1} key={i} />
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
              <p style={{ textAlign: 'left', margin: '0 auto', width: '50%' }}>
                <h4>How To Play:</h4>
                <ul>
                  <li>Think of any two digits number e.g <strong>54</strong></li>
                  <li>Then add the two digits of that number e.g <strong>5 + 4</strong> that's <strong>9</strong></li>
                  <li>Then subtract your answer from the original number e.g <strong>54 - 9</strong>, that's <strong>45</strong></li>
                  <li>Then look for the Symbols that matches the result of above expression and take note of the Symbol.</li>
                </ul>
                <p>and click the <strong>Continue</strong> button to enter the Multiverse.</p>
              </p>
              <ul className='Magic__symbols shake'>{this.state.items}</ul>
              <button className='button' onClick={e => (this.setState({ selected: true }))}>Continue</button>
            </div>
          )
          : (
            <div style={{ margin: '15px auto' }} className='slide-in'>
              <h3>And your Magic Symbol is:- </h3>
              <img src={require(`../assets/img/symbols/${this.state.uniqueImg}.png`)} alt='Magic Result' className='Magic__result shake' width='50' height='50' />
              <p>Amazing right? kindly share this with your friends!</p>
              <button className='button' onClick={e => this.props.changePage('about')}>Play Again</button>
            </div>
          )
        }
      </Card>
    )
  }
}
