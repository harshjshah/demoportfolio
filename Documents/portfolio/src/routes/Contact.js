import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ContactForm from '../components/ContactForm'

const contact = () => {
  return (
    <div>
      <Navbar />
      <Banner heading="Contact" info="Let's have a chat"/>
      <ContactForm />
      <Footer />
    </div>
  )
}

export default contact