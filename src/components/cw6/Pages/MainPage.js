import React from 'react'

import {
  Navbar,
  Hero,
  Info,
  Footer,
  Review,
  PricesPlans,
} from '../Components/index'

const MainPage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Review />
      <PricesPlans />
      <Footer />
    </div>
  )
}

export default MainPage
