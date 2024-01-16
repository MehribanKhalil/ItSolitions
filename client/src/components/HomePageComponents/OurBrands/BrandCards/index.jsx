import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GoHeart } from "react-icons/go";
import { PiBasketLight } from "react-icons/pi";
import { WishlistContext } from '../../../../context/WishlistContext';
import { BasketContext } from '../../../../context/BasketContext';

const BrancCard = ({image,title,category,price,_id,product}) => {
    const {addToWishlist}=useContext(WishlistContext)
    const {addBasket}=useContext(BasketContext)
  return (
    <div>
        <div>
            <img src={image} alt="" className='w-full' />

        </div>
       <div className=' space-y-2 py-4'>
      <Link to={_id}> <h3 className=' cursor-pointer text-dark-color  font-medium text-2xl'>{title}</h3></Link>
        <p className=' text-gray-500'>{category}</p>
        <p className=' text-gray-500'>Price: ${price}</p>
       </div>
       <div className=' flex gap-3'>
        <button className=' border border-main-color  rounded-full px-3 py-1 text-dark-color'><GoHeart size={23} onClick={()=>addToWishlist(product)} /></button>
        <button onClick={()=>addBasket(product)}  className=' border border-main-color  rounded-full px-3 py-1 text-dark-color'> <PiBasketLight size={25} /></button>
       </div>
    </div>
  )
}

export default BrancCard