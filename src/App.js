import React, { Component } from 'react'

import About from './components/About'
import Magic from './components/Magic'
import './App.css'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      page: 'about'
    }
    this.changePage = this.changePage.bind(this)
  }

  changePage (page) {
    this.setState({
      page: page
    })
  }

  render () {
    var pages = {
      start: <Magic changePage={this.changePage} />,
      about: <About changePage={this.changePage} />
    }

    return (
      <div className='App'>
        <header className='App__header slide-in'>
          <h1 className='App__header-title'>React Magic Paper</h1>
          <p className='App__header-tag' >Magical Paper from the Multiverse!</p>
        </header>
        {pages[this.state.page]}
        <footer className='App__footer slide-in'>
          <p>Built by <a href='https://devhammed.github.io' className='App__footer-link'>Hammed Oyedele</a></p>
        </footer>
      </div>
    )
  }
}
