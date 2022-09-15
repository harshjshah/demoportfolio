import '../css/Footer.css'
import React from 'react'
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <p><FaHome size={20} style={{ color:"white" , marginRight:"2rem"}} /> 123 Housing Society <br /><span>India</span></p>    
                </div>
                <div className='phone'>
                    <p><FaPhone size={20} style={{ color:"white" , marginRight:"2rem"}} />123-321-4532</p>
                </div>
                <div className='email'>
                    <p><FaMailBulk size={20} style={{ color:"white" , marginRight:"2rem"}} />info@gmail.com</p>
                </div>
            </div>
            <div className='right'>
                <h4>About the company</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className='social'>
                    <FaFacebook size={30} style={{ color:"white" , marginRight:"1rem"}} />
                    <FaInstagram size={30} style={{ color:"white" , marginRight:"1rem"}} />
                    <FaLinkedin size={30} style={{ color:"white" , marginRight:"1rem"}} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer