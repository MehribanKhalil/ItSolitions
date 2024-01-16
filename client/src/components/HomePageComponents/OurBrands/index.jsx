import React, { useEffect, useState } from "react";
import SectionTitle from "../../CommonComponents/SectionTitle";
import BrancCard from "./BrandCards";
import axios from "axios";

const OurBrands = () => {


    const [products, setProducts] = useState([]);
    const getProducts = async () => {
      const res = await axios.get("http://localhost:8000/product");
      setProducts(res.data);
    };
  
    useEffect(() => {
      getProducts();
    }, []);

  return (
    <section className=" section  !pb-24">
      <SectionTitle
        title="We work with global brands"
        subTitle="OUR CASE STUDY"
      />

      <div className=" grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-6">
        {
            products && products.map((product)=>(
               <div key={product._id}>
                 <BrancCard
                
                {...product}
                product={product}
              />
               </div>
            ))
        }
       

       
      </div>
    </section>
  );
};

export default OurBrands;
