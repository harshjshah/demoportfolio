import React, { Component } from 'react'
import "../css/Banner.css"

const Banner = (props) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.info}</p>
        </div>
    </div>
  )
}

export default Banner