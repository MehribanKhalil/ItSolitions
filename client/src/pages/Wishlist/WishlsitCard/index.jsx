import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { WishlistContext } from '../../../context/WishlistContext'

const WishlistCard = ({image,_id,title,price}) => {
    const {deleteWishlist}=useContext(WishlistContext)
  return (

    <div
      className="block rounded-lg  overflow-hidden bg-gray-200 text-neutral-600">
      <a href="#!">
        <img
          src={image}
          alt=""
            className=' w-full rounded-t-lg'
          />
      </a>
      <div className="p-6">
       <Link to={_id} > <h5
          className="mb-2 text-xl font-medium leading-tight ">
          {title}
        </h5></Link>
        <p className=' text-gray-500'>Price:  ${price}  </p>

        <button
        onClick={()=>deleteWishlist(_id)}
          type="button"
          className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-main-color text-white mt-3 transition duration-150 ease-in-out hover:bg-primary-600">
          delete
        </button>
      </div>
    </div>
  )
}

export default WishlistCard