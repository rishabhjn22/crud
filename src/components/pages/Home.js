import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    const result = await axios.get("http://localhost:3005/product");
    setProduct(result.data.reverse());
  };

  const deleteProduct = async id => {
    await axios.delete(`http://localhost:3005/product/${id}`);
    loadProduct();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Home Page</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category </th>
              <th scope="col">Size</th>
              <th scope="col">Price</th>
              <th scope="col">Stocks</th>
              <th scope="col">Desc</th>

              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {product.map((product, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.productname}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.stocks}</td>
                <td>{product.desc}</td>
                <td>{product.size}</td>



                <td>
                  <Link className="btn btn-primary mr-2" to={`/product/${product.id}`}>
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/product/edit/${product.id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-danger"
                    onClick={() => deleteProduct(product.id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;