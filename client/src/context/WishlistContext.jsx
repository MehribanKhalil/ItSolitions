import { createContext } from "react";
import UseLocalStorage from "../hooks/UseLocalStorage";
import toast from "react-hot-toast";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = UseLocalStorage("wishlist");

  const addToWishlist = (product) => {
    const index = wishlist.findIndex((item) => item._id === product._id);
    if (index === -1) {
      setWishlist([...wishlist, { ...product }]);
      toast.success("Added to Wishlist!");
    } else {
      toast.error("Already in Wishlist!");
    }
  };

  const deleteWishlist = (id) => {
    setWishlist(wishlist.filter((item) => item._id !== id));
    toast.success("Deleted from Wishlist!");
  };

  return (
    <WishlistContext.Provider
      value={{ addToWishlist, wishlist, deleteWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
