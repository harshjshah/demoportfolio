import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <Banner heading="About me" info="I'm a Full Stack Developer"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About