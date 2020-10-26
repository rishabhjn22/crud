import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import LoginByGoogle from './LoginByGoogle';
import Home from "./components/pages/Home";
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddProduct from './components/Products/AddProduct';
import Product from "./components/Products/Product";
import EditProduct from './components/Products/EditProduct';

function App() {
  return (
    <Router>   
   <div className="App">

   <Navbar />

    <Switch>
          <Route exact path="/" component={LoginByGoogle} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/product/add" component={AddProduct} />
          <Route exact path="/product/edit/:id" component={EditProduct} />
          <Route exact path="/product/:id" component={Product} />
        </Switch>
    
  </div>
  </Router>

    
  );
}

export default App;
