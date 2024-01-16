import React from 'react'
import Button from '../../CommonComponents/Button'

const OurBenefits = () => {
  return (
    <section className='section '>
       <div className=' flex py-10 flex-col lg:flex-row'>
       <div  className='   w-full lg:w-1/2 bg-dark-color text-white flex justify-center items-center px-5 lg:px-24'>
          <div className='py-10 space-y-6'>
          <h3 className='text-xl  mg:text-2xl lg:text-4xl'>Insights to help you do what you do better, faster and more profitably.</h3>
            <p>We understand the complexities of modern markets and translate them into real business solutions for automotive, financial, insuranc.</p>
            <button className="border-2 border-white px-5 py-2 text-white font-semibold">Learn More</button>
          </div>
        </div>
        <div className=' w-full lg:w-1/2'>
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/gallery/about1.jpg" alt="" className=' w-full h-full object-cover' />
            
        </div>
       </div>
    </section>
  )
}

export default OurBenefits