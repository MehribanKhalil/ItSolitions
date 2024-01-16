import React from 'react'
import { GoHeart } from "react-icons/go";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className=' section !py-10'>
        <p className=' flex items-center justify-center text-dark-color gap-2'>Copyright ©2024 All rights reserved | This template is made with <GoHeart size={20} />  by <Link  className=' text-main-color'>Colorlib</Link> </p>
    </footer>
  )
}

export default Footer