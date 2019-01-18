import React from 'react'
import Card from './Card'

export default (props) => {
  return (
    <Card>
      <p>Magic Paper is a powerful and magical paper that can read your mind, <br />
    Amazing yourself and your friends with this sorcerer from the Multiverse.</p>
      <p style={{ textAlign: 'left' }}>
        <strong>Instructions:</strong> Pick a number between 1 and 99 e.g <strong>32</strong>, <br />
        then add the two digits e.g <strong>3 + 2</strong>, <br />
        then subtract your answer from the original number e.g <strong>32 - 5 = 27</strong>, <br />
        then look for the Symbols that matches the result of above expression, take note of it <br />
        and continue to go into the Multiverse.<br />
      </p>
      <button className='button' onClick={e => props.changePage('start')}>Start</button>
    </Card>
  )
}
