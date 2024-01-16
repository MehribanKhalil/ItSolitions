import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

const FormComponent = ({getProducts}) => {

    const createProduct = async (data) => {
      const res = await axios.post("http://localhost:8000/product",data);
      getProducts()
    };


  return (
    <div>
      <Formik
        initialValues={{ image: "", title: "", category: "", price: "" }}
        validationSchema={Yup.object({
          image: Yup.string().required("Required"),
          title: Yup.string().required("Required"),
          category: Yup.string().required("Required"),
          price: Yup.number().required("Required").positive("Price must be greater than zero"),
        })}
        onSubmit={(values, { resetForm }) => {
            createProduct(values)
          resetForm();
        }}
      >
        <Form className=" bg-gray-200 py-6 px-12 space-y-3 max-w-[700px] rounded-xl mx-auto">
          <div className=" flex flex-col gap-1">
            <label htmlFor="image">Image</label>
            <Field
              name="image"
              type="text"
              className=" border border-gray-400 rounded-full  outline-none px-4 py-2"
            />
            <div className=" text-red-600 text-sm font-medium">
              <ErrorMessage name="image" />
            </div>
          </div>

          <div className=" flex flex-col gap-1">
            <label htmlFor="title">Title</label>
            <Field
              name="title"
              type="text"
              className=" border border-gray-400 rounded-full outline-none px-4 py-2"
            />
            <div className=" text-red-600 text-sm font-medium">
              <ErrorMessage name="title" />
            </div>
          </div>

          <div className=" flex flex-col gap-1">
            <label htmlFor="category">Category</label>
            <Field
              name="category"
              type="text"
              className=" border border-gray-400 rounded-full outline-none px-4 py-2"
            />
            <div className=" text-red-600 text-sm font-medium">
              <ErrorMessage name="category" />
            </div>
          </div>

          <div className=" flex flex-col gap-1">
            <label htmlFor="price">Price</label>
            <Field
              name="price"
              type="number"
              className=" border border-gray-400 rounded-full outline-none px-4 py-2"
            />
            <div className=" text-red-600 text-sm font-medium">
              <ErrorMessage name="price" />
            </div>
          </div>

          <div className=" flex justify-center">
            <button
              type="submit"
              className="border rounded-full border-dark-color  px-6 py-2  "
            >
              Add
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormComponent;
