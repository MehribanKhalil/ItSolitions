import React, { useContext } from 'react'
import { Helmet } from "react-helmet-async";
import { BasketContext } from '../../context/BasketContext'
import BasketCard from './BasketCard';

const BasketPage = () => {
    const {basket} = useContext(BasketContext)
    const subtotal = basket.reduce((cartTotal, cartItem) => cartTotal + (cartItem.count * cartItem.price), 0);
  return (
    <div className=" page">
    <Helmet>
      <title>Basket</title>
    </Helmet>
    <div className=" section  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6 ">
          {
            basket.length===0 ? <p className=" text-center text-main-color text-lg">Your basket currently empty :/</p> :
              basket && basket.map((product)=>(
                <div key={ product._id}>
                    <BasketCard
                 {...product}
                 product={product}
              />
              
              
                </div>
                 
              ))

          }
    </div>
   {
    basket && 
     <div className='section !py-5 text-2xl text-dark-color'>
    Subtotal: ${subtotal.toFixed(2)}
</div>
   }
   
  </div>
  )
}

export default BasketPage