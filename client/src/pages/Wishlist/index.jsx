import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { WishlistContext } from "../../context/WishlistContext";
import WishlistCard from "./WishlsitCard";

const Wishlist = () => {

const {wishlist}=useContext(WishlistContext)
  return (
    <div className=" page">
      <Helmet>
        <title>Wishlist</title>
      </Helmet>
      <div className=" section  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 ">
            {
              wishlist.length===0 ? <p className=" text-center text-main-color text-lg">Your Wishlist currently empty :/</p> :
                wishlist && wishlist.map((product)=>(
                  <div key={ product._id}>
                      <WishlistCard
                   {...product}
                />
                  </div>
                ))
            }
      </div>
    </div>
  );
};

export default Wishlist;
