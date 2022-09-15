import "../css/Heroimg.css"
import React from 'react'
import Banner from '../assets/Banner.jpg'
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="banner-img" src = {Banner} alt="Banner Image"/>
        </div>
        <div className="content">
            <p>HELLO, I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/contact" className="btn btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Heroimg