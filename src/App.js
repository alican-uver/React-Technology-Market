import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/HomePage";
import About from "./pages/AboutPage";
import Products from "./pages/ProductsPage";
import SingleProduct from "./pages/SingleProductPage";
import Contact from "./pages/ContactPage";
import Cart from "./pages/CartPage";
import Default from "./pages/DefaultPage";

import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import SideCart from './components/SideCart';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <SideBar />
        <SideCart />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/products" exact component={Products} />
        <Route path="/products/:id" component={SingleProduct} />
        <Route path="/cart" exact component={Cart} />
        <Route component={Default} />
      </Switch>
      <Footer />
    </React.Fragment>
  );
}

export default App;
