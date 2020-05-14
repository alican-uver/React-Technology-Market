import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';
import { client } from './productsWithContentful';
const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sidebarOpen : false, 
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        cart: [], // for now
        cartItems:0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal:0, 
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true 
    }

    componentDidMount() {
        // From contentfull items
        this.getProductsFromContentful();
    }

    // Set products from contentful
    getProductsFromContentful = () => {
        client.getEntries({
            content_type: 'techStore'
        })
        .then(items => {
            let products = items.items.map(product => {
                const {title, price, company, description, featured} = product.fields;
                const { id }  = product.sys;
                const image = product.fields.image.fields.file.url
                return {title, price, company, description, featured, id, image}
            })
            this.dividingState(products);
        })
        .catch(err => console.log(err));
    }
    
    //dividing state 
    dividingState = storeProducts => {
        let featuredProducts = storeProducts.filter(product => product.featured === true);
        
        this.setState({
            featuredProducts,
            storeProducts,
            filteredProducts: storeProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct()
        });
    }

    // get cart from local storage
    getStorageCart = () => {
        return [];
    }

    // get product from local storage
    getStorageProduct = () => {
        return {};
    }

    // get totals
    getTotals = () => {}

    //add totals
    addTotals = () => {}

    // sync storage 
    syncStorage = () => {}

    // add to cart 
    addToCart = id => {
        console.log(`add to cart`, id)
    }

    // set single product
    setSingleProduct = id => {
        console.log(`set single product`, id)
    }

    // Handle Sidebar
    handleSidebar = () => {
        this.setState({
            sidebarOpen : !this.state.sidebarOpen
        })
    }

    // Handle Cart
    handleCart = () => {
        this.setState({
            cartOpen : !this.state.cartOpen
        })
    }

    // Close Cart
    closeCart = () => {
        this.setState({
            cartOpen : false
        })
    }

    // Open Cart
    openCart = () => {
        this.setState({
            cartOpen : true
        })
    }


    render() {
        return (
            <ProductContext.Provider value = {{         
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addToCart : this.addToCart,
                setSingleProduct: this.setSingleProduct
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}

