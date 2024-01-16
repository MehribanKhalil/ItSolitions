import React, { useContext } from "react";
import { BasketContext } from "../../../context/BasketContext";
import { Link } from "react-router-dom";

const BasketCard = ({ image, title, _id, price, count ,product}) => {
  const { deleteFromBasket,incCount,decCount } = useContext(BasketContext);
  return (
    <div className="block rounded-lg  overflow-hidden bg-gray-200 text-neutral-600">
      <a href="#!">
        <img src={image} alt="" className=" w-full rounded-t-lg" />
      </a>
      <div className="p-6 space-y-4">
        <Link to={_id}>
        
          <h5 className="mb-2 text-xl font-medium leading-tight  ">{title}</h5>
        </Link>
        <p className=" text-gray-500">Price: ${price} </p>
        <p className=" text-gray-500">Total: ${price * count} </p>
        <div className=" flex  gap-3 items-center py-1">
          <button  onClick={()=>decCount(product)} className=" border border-main-color px-3 py-1 text-xl">-</button>
          <p className=" text-gray-500">{count} </p>
          <button onClick={()=>incCount(product)} className=" border border-main-color px-3 py-1 text-xl">+</button>
        </div>

        <button
          onClick={() => deleteFromBasket(_id)}
          type="button"
          className="rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-main-color text-white mt-3 transition duration-150 ease-in-out hover:bg-primary-600"
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default BasketCard;
