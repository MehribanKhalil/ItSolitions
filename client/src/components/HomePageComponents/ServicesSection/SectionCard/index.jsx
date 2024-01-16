import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";
const SectionCard = () => {
  return (
    <div className='bg-[#F3F8FF]  rounded-lg  text-center py-10 px-16  hover:shadow-2xl transition duration-500 cursor-pointer group'>
       <div className='space-y-6 '>
       <div className=' flex justify-center '>
            <img src="https://preview.colorlib.com/theme/itlock/assets/img/icon/services1.svg" alt="" className=' ' />

        </div>
        <div>
            <h4 className=' cursor-pointer text-xl text-dark-color font-medium '>Industries & Manufacturing</h4>
        </div>
        <div className=' text-main-color  flex justify-center text-lg transition duration-500  group-hover:opacity-100 opacity-0'>
            <Link className=' flex items-center gap-2'> Find Out More  <FaArrowRight /></Link>
        </div>
       </div>
    </div>
  )
}

export default SectionCard