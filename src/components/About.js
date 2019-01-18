import React from 'react'
import Card from './Card'

export default (props) => {
  return (
    <Card>
      <p><b>"</b>Magic Paper is a powerful and magical paper that can read your mind, <br />
    Amazing yourself and your friends with this sorcerer from the Multiverse.<b>"</b></p>
      <p style={{ textAlign: 'left' }}>
        <h4>How To Play:</h4>
        <ul>
          <li>Pick a number between 1 and 99 e.g <strong>54</strong></li>
          <li>Then add the two digits of that number e.g <strong>5 + 4</strong> that's <strong>9</strong></li>
          <li>Then subtract your answer from the original number e.g <strong>54 - 9</strong>, that's <strong>45</strong></li>
          <li>Then look for the Symbols that matches the result of above expression and take note of the Symbol.</li>
        </ul>
        <p>and click the <strong>Continue</strong> button to enter the Multiverse.</p>
      </p>
      <button className='button' onClick={e => props.changePage('start')}>Start Game</button>
    </Card>
  )
}
