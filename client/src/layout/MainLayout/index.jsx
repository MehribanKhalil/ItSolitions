import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import toast, { Toaster } from 'react-hot-toast';

const MainLayout = () => {
  return (
   <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    <Toaster/>
   </>
  )
}

export default MainLayout