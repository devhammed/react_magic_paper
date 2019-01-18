import React from 'react'

export default (props) => {
  return (
    <li className='Magic__symbol'>
      <img
        src={require(`../assets/img/symbols/${props.index}.png`)}
        alt={`Magic Symbol ${props.index}`}
        className='Magic__symbol__img' />
    </li>
  )
}
