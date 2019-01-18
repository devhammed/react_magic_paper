import React from 'react'
import './Card.css'

export default (props) => {
  return (
    <div className='Card slide-in'>
      {props.children}
    </div>
  )
}
