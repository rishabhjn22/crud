import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  let history = useHistory();
  const [product, setProduct] = useState({
    productname: "",
    category: "",
    size:"",
    price: "",  
    stocks: "",
    desc: ""
  });

  const { productname, category, size, price, stocks, desc } = product;
  const onInputChange = e => {
    setProduct({ ...product, [e.targetname]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:3005/product", product);
    history.push("/home");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Product</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Name"
              name="productname"
              value={productname}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Category"
              name="category"
              value={category}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Product Size"
              name="size"
              value={size}
              onChange={e => onInputChange(e)}
            />
            </div>
          <div className="form-group">
            <input
              type="number"
              className="form-control form-control-lg"
              placeholder="Enter the Price"
              name="price"
              value={price}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the Stocks"
              name="stocks"
              value={stocks}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the Description of Product"
              name="desc"
              value={desc}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
