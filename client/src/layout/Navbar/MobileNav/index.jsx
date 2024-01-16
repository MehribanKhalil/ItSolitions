import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";

import { FaHeadphones } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { PiBasketLight } from "react-icons/pi";

const MobileNav = () => {

    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  return (
    <div className={` bg-gray-700 block lg:hidden px-5 py-4 absolute top-[70px] left-0 w-full z-20`}>
      <div className="  flex justify-end  text-white uppercase">
        <span className=" bg-black px-4 py-2 rounded-lg flex items-center justify-between w-[100px]">Menu <button  onClick={()=>setIsMobileNavOpen(!isMobileNavOpen)}><FaBars /></button></span>
      </div>
      <div className={` ${isMobileNavOpen ? 'max-h-[900px] transition duration-300' : 'max-h-0 overflow-hidden transition duration-300 ease-in-out'}  flex flex-col gap-6 text-white`}>
        <NavLink to={"/"} className="nav-item">
          Home
        </NavLink>
        <NavLink className="nav-item">About</NavLink>
        <NavLink className="nav-item">Services</NavLink>
        <NavLink to={"/admin"} className="nav-item">
          Admin
        </NavLink>
        <NavLink to={"/wishlist"} className="nav-item">
         Wishlist
        </NavLink>
        <NavLink to={'/basket'} className="nav-item">
         Basket
        </NavLink>
      </div>
    </div>
  );
};

export default MobileNav;
