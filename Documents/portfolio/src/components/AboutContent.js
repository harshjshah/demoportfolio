import "../css/AboutContent.css"
import React from 'react'
import { Link } from 'react-router-dom'
import Lap from "../assets/Lap.jpg"
import react from "../assets/react.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
           <h1>Who am I?</h1>
           <p> I'm a Full Stack Developer. I create responsive and secure websites for my clients.</p>
           <Link to="/contact" className='btn'>Contact</Link>         
        </div> 
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={Lap} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent