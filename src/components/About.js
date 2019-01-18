import React from 'react'
import Card from './Card'

export default (props) => {
  return (
    <Card>
      <p><b>"</b>Magic Paper is a powerful and magical paper that can read your mind, <br />
    Amaze yourself and your friends with this sorcerer from the Multiverse.<b>"</b></p>
      <button className='button' onClick={e => props.changePage('start')}>Start Game</button>
    </Card>
  )
}
