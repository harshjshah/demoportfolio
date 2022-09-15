import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import PricingCard from '../components/PricingCard'
import Work from '../components/Work'

const project = () => {
  return (
    <div>
      <Navbar />
      <Banner heading="Projects" info="My recent work"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default project