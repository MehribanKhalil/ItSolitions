import { createContext } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";
import toast from "react-hot-toast";

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = UseLocalStorage("basket");

  const addBasket = (product) => {
    const index = basket.findIndex((item) => item._id === product._id);
    if (index === -1) {
      setBasket([...basket, { ...product, count: 1 }]);
      toast.success("Added to basket!");
    } else {
      basket[index].count++;
      toast.success("Count increase");
    }
  };

  const incCount = (product) => {
    const index = basket.findIndex((item) => item._id === product._id);
    if (index !== -1) {
      basket[index].count++;
      setBasket([...basket]);
      toast.success("Count increase");
      return
    }
  };

  const decCount = (product) => {
    const index = basket.findIndex((item) => item._id === product._id);
    if (index !== -1) {
     if (basket[index].count===1) {
        deleteFromBasket(product._id)
     }
     else{
        basket[index].count--
        setBasket([...basket])
        toast.success("Count decrease");

     }
    }
  };

  const deleteFromBasket = (id) => {
    setBasket(basket.filter((item) => item._id !== id));
    toast.success("Deleted from basket!");
  };

  return (
    <BasketContext.Provider
      value={{ addBasket, basket, deleteFromBasket, incCount,decCount }}
    >
      {children}
    </BasketContext.Provider>
  );
};
