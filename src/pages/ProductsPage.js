import React, { Component } from 'react';
import Products from '../components/Products';
import Hero from '../components/Hero';
import productsBcg from '../images/productsBcg.jpeg';

class ProductsPage extends Component {
    render() {
        return (
            <React.Fragment>
                <Hero img = {productsBcg}/>
                <Products />
            </React.Fragment>
        )
    }
}

export default ProductsPage;