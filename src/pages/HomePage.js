import React, { Component } from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';
import Services from '../components/HomePage/Services';
import Featured from '../components/HomePage/Featured';
class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero title = "Awesome Gadgets" max = "true">  {/* !Todo** Gelecek Sayfaya göre değişecek */}
          <Link to = "/products" className= "main-link mt-2"> Our Products</Link>
        </Hero>
        <Services />
        <Featured />
      </React.Fragment>
    )
  }
}

export default HomePage;