import React from 'react'
import SectionCard from './SectionCard'

const ServicesSection = () => {
  return (
    <div className=' section '>
        <div className=' grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8'>
            <SectionCard/>
            <SectionCard/>
            <SectionCard/>
            <SectionCard/>
        </div>
    </div>
  )
}

export default ServicesSection