import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  // const [] = useState({
  //   productname: localStorage.getItem('myname')
  // });
  // const { productname } = product;
  // var state = ''
  // const [state] = useState({value: localStorage.getItem('myname')});
  //const [name, setName] = localStorage.getItem('myname')
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" href="/">
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <Link className="btn btn-outline-light" to="/product/add">Add Product</Link>

      </div>
    </nav>
  );
};

export default Navbar;