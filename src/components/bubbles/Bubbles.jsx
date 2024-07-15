import React from 'react'
import './Bubbles.css'
import bubble from '../../assets/bubble.png'

const Bubbles = () => {
  return (
    <div className='bubbles'>
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
        <img src={bubble} alt="" />
    </div>
  )
}

export default Bubbles