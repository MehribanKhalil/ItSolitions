import React from 'react'
import HeroSection from '../../components/HomePageComponents/HeroSection'
import OurBrands from '../../components/HomePageComponents/OurBrands'
import OurBenefits from '../../components/HomePageComponents/OurBenefits'
import WorkTogether from '../../components/HomePageComponents/WorkTogether'
import ServicesSection from '../../components/HomePageComponents/ServicesSection'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
   <>
   <Helmet>
        <title>Home page</title>
      </Helmet>
    <HeroSection/>
    <ServicesSection/>
    <OurBenefits/>
    <OurBrands/>
    
    <WorkTogether/>
   </>
  )
}

export default Home