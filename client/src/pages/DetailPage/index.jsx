import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import Loader from "../../components/CommonComponents/Loader";

const DetailPage = () => {
  const { id } = useParams();
  const [singleProduct, setSingleProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  const getProducts = async () => {
    const res = await axios.get(`http://localhost:8000/product/${id}`);
    setSingleProduct(res.data);
    setIsLoading(false)
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Detail page</title>
      </Helmet>

      <div className="page section">
        {

          isLoading ? <Loader/>
          :
          singleProduct && (
            <div className="  section ">
              <div className="bg-gray-200  gap-4 p-10 flex flex-col md:flex-row rounded-xl">
                <div className=" w-full md:w-1/2">
                  <img src={singleProduct.image} alt="" className=" w-full" />
                </div>
                <div className=" w-full md:w-1/2 ">
                  <div className=" space-y-4">
                    <h3 className=" text-3xl text-main-color">
                      {singleProduct.title}
                    </h3>
                    <p className="text-xl text-dark-color">
                      Category: {singleProduct.category}
                    </p>
                    <p className="text-xl text-dark-color">
                      Price: ${singleProduct.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default DetailPage;
