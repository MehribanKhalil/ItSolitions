import React, { useEffect, useState } from "react";
import FormComponent from "./FormComponent";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { Helmet } from "react-helmet-async";
import Loader from "../../components/CommonComponents/Loader";
const Admin = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [text, setText] = useState('');

  const getProducts = async () => {
    const res = await axios.get("http://localhost:8000/product");
    setProducts(res.data);
    setIsLoading(false);
  };

  const deleteProduct = async (id) => {
    const res = await axios.delete(`http://localhost:8000/product/${id}`);
    getProducts();
  };

  const sortByPrice=(key)=>{
    const sortingProducts=[...products]
    switch (key) {
      case 'inc':
        sortingProducts.sort((a,b)=>a.price - b.price)
        break;
        case 'dec':
          sortingProducts.sort((a,b)=>b.price - a.price)
        
        break;
      default:
        break;
    }
    setProducts(sortingProducts)
  }


  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className=" section page">
      <Helmet>
        <title>Admin</title>
      </Helmet>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="py-4">
            <FormComponent getProducts={getProducts} />
          </div>

          <div className=" pt-10 flex  justify-between items-center">
            <div>
              <input className=" outline-none border border-main-color px-5 py-2" placeholder="Search by Name" type="text" name="" id="" onChange={(e)=>setText(e.target.value)}  />
            </div>
            <div  className=" flex gap-4 items-center">
              <button className="border border-main-color px-5 py-2" onClick={()=>sortByPrice('inc')}>Low to High</button>
              <button className="border border-main-color px-5 py-2" onClick={()=>sortByPrice('dec')} >High to Low</button>
            </div>
          </div>



          <div className=" py-10">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full text-left text-sm font-light">
                      <thead className="border-b font-medium dark:border-neutral-500">
                        <tr>
                          <th scope="col" className="px-6 py-4">
                            Image
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Title
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Category
                          </th>
                          <th scope="col" className="px-6 py-4">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {products &&
                          products.filter(x=>x.title.toLowerCase().includes(text.toLowerCase())).map((product) => (
                            <tr key={product._id} className="border-b dark:border-neutral-500">
                              <td className="whitespace-nowrap px-6 py-4 font-medium">
                                <img
                                  src={product.image}
                                  alt=""
                                  className=" w-[90px]"
                                />
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {product.title}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                {product.category}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                ${product.price}
                              </td>
                              <td className="whitespace-nowrap px-6 py-4">
                                <button
                                  className=" text-dark-color"
                                  onClick={() => deleteProduct(product._id)}
                                >
                                  <MdDelete size={23} />
                                </button>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Admin;

