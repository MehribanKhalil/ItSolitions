import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FaHeadphones } from "react-icons/fa6";
import { GoHeart } from "react-icons/go";
import { PiBasketLight } from "react-icons/pi";
import "./index.scss";
import Button from "../../components/CommonComponents/Button";
import { WishlistContext } from "../../context/WishlistContext";
import MobileNav from "./MobileNav";
import { BasketContext } from "../../context/BasketContext";

const Navbar = () => {
const {wishlist}=useContext(WishlistContext)
const {basket}=useContext(BasketContext)

  return (
  <>
  
  <nav className=" relative">
      <div className="top-navbar"></div>
      <div className="main-nav flex justify-between bg-white px-12 py-5">
        <div className="flex items-center gap-7 text-lg text-dark-color">
          <NavLink to={"/"}>
            <img
              src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png"
              alt="logo"
            />
          </NavLink>
          

          <div className=" hidden lg:flex  items-center gap-6">
          <NavLink to={"/"} className="nav-item">
            Home
          </NavLink>
          <NavLink className="nav-item">About</NavLink>
          <NavLink className="nav-item">Services</NavLink>
          <NavLink to={"/admin"} className="nav-item">
            Admin
          </NavLink>
          <NavLink to={'/wishlist'} className="nav-item" >
            <button className=" flex items-center justify-center relative">
              <span className="flex items-center justify-center absolute -top-2 -right-2 bg-main-color text-white rounded-full text-[14px] w-4 h-4 ">{wishlist?.length}</span>
              <GoHeart size={23} />
            </button>
          </NavLink>
          <NavLink to={'/basket'} className="nav-item">
           
            <button className=" flex items-center justify-center relative">
              <span className=" flex items-center justify-center absolute -top-2 -right-2 bg-main-color text-white rounded-full text-[14px] w-4 h-4">{basket?.length}</span>
              <PiBasketLight size={25} />
            </button>
          </NavLink>
          </div>
          
        </div>

        <div className=" hidden  sm:flex items-center gap-4">
          <div className=" hidden xl:block">
            <Button>Free Quote</Button>
          </div>
          <div>
            <FaHeadphones size={33} className=" text-neutral-500" />
          </div>
          <div>
            <p className=" text-sm text-gray-400">Have any Question?</p>
            <span className=" text-dark-color font-semibold">
             
              Call: 10 (78) 837 3647
            </span>
          </div>
        </div>
      </div>

    <MobileNav/>

    </nav>

  </>
  );
};

export default Navbar;
