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
        cart: [],
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
            singleProduct: this.getStorageProduct(),
            loading: false
        }, () => { // after the CDM , update state with tax, amount . . .  
            this.addTotals()
        });
    }

    // get cart from local storage
    getStorageCart = () => {
        let cart; 
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        else {
            cart = []
        }
        return cart;
    }

    // get product from local storage
    getStorageProduct = () => {
        return localStorage.getItem("singleProduct") ? 
        JSON.parse(localStorage.getItem("singleProduct")) : {}
    }

    // get totals
    getTotals = () => {
        const { cart } = this.state;
        let subTotal = 0;
        let cartItems = 0;
        
        cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.amount;
        });
        
        subTotal = parseFloat(subTotal.toFixed(2));
        let tax = subTotal * 0.2;
        tax = parseFloat(tax.toFixed(2));
        let total = subTotal + tax; 
        total = parseFloat(total.toFixed(2));    
        
        return {
            cartItems, 
            subTotal,
            tax,
            total
        }
    }

    //add totals
    addTotals = () => {
        const totals = this.getTotals();
        this.setState({
            cartItems: totals.cartItems,
            cartSubTotal: totals.subTotal,
            cartTax: totals.tax,
            cartTotal: totals.total
        })
    }

    // sync storage 
    syncStorage = () => {
        localStorage.setItem('cart', JSON.stringify(this.state.cart));
    }

    // add to cart 
    addToCart = id => {
        let tempCart = [...this.state.cart];
        let tempProducts = [...this.state.storeProducts];
        let tempItem = tempCart.find(item => item.id === id);
        if (!tempItem) { // if undefined ; first add 
            tempItem = tempProducts.find(item => item.id === id);
            let total = tempItem.price;
            let cartItem = {...tempItem, amount: 1, total};
            tempCart = [...tempCart, cartItem];
        }
        else {
            tempItem.amount++;
            tempItem.total = tempItem.price * tempItem.amount;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }
        console.log(tempCart)

        this.setState(() => {
            return {cart: tempCart}
        }, () => {
            this.addTotals();
            this.syncStorage();
            this.openCart();
        })
    }

    // set single product
    setSingleProduct = id => {
        let product = this.state.storeProducts.find(item => item.id === id);
        localStorage.setItem("singleProduct", JSON.stringify(product));
        
        this.setState({
            singleProduct: {...product},
            loading: false
        });

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

    // Cart Functionality

    increment = id => {
        console.log(id)
    }

    decrement = id => {
        console.log(id)
    }

    removeItem = id => {
        console.log(id)
    }

    clearCart = () => {
        console.log("clear all Cart")
    }


    render() {
        return (
            <ProductContext.Provider value = {{         
                ...this.state,
                handleSidebar: this.handleSidebar,
                handleCart: this.handleCart,
                closeCart: this.closeCart,
                openCart: this.openCart,
                addToCart: this.addToCart,
                setSingleProduct: this.setSingleProduct,
                increment: this.increment,
                decrement: this.decrement,
                removeItem: this.removeItem,
                clearCart: this.clearCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}

