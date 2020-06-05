import React, { Component } from 'react';
import { linkData } from './linkData';
import { socialData } from './socialData';
import { client } from './productsWithContentful';
const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sidebarOpen: false,
        cartOpen: false,
        links: linkData,
        socialIcons: socialData,
        cart: [],
        cartItems: 0,
        cartSubTotal: 0,
        cartTax: 0,
        cartTotal: 0,
        storeProducts: [],
        filteredProducts: [],
        featuredProducts: [],
        singleProduct: {},
        loading: true,
        //filter
        searh: '',
        price: 0,
        min: 0,
        max: 0,
        company: 'all',
        shipping:false
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
                    const { title, price, company, description, featured } = product.fields;
                    const { id } = product.sys;
                    const image = product.fields.image.fields.file.url
                    return { title, price, company, description, featured, id, image }
                })
                this.dividingState(products);
            })
            .catch(err => console.log(err));
    }

    //dividing state 
    dividingState = storeProducts => {
        let featuredProducts = storeProducts.filter(product => product.featured === true);
        // get max price 
        let maxPrice = Math.max(...storeProducts.map(item => item.price));
        // get min price 
        let minPrice = Math.min(...storeProducts.map(item => item.price));

        this.setState({
            featuredProducts,
            storeProducts,
            filteredProducts: storeProducts,
            cart: this.getStorageCart(),
            singleProduct: this.getStorageProduct(),
            loading: false,
            price: maxPrice,
            max: maxPrice,
            min: minPrice,
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
        let formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });

        const { cart } = this.state;
        let subTotal = 0;
        let cartItems = 0;

        cart.forEach(item => {
            subTotal += item.total;
            cartItems += item.amount;
        });


        let tax = subTotal * 0.2;
        let total = subTotal + tax;

        subTotal = formatter.format(subTotal)
        total = formatter.format(total);
        tax = formatter.format(tax)
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
            let cartItem = { ...tempItem, amount: 1, total };
            tempCart = [...tempCart, cartItem];
        }
        else {
            tempItem.amount++;
            tempItem.total = tempItem.price * tempItem.amount;
            tempItem.total = parseFloat(tempItem.total.toFixed(2));
        }

        this.setState(() => {
            return { cart: tempCart }
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
            singleProduct: { ...product },
            loading: false
        });

    }

    // Handle Sidebar
    handleSidebar = () => {
        this.setState({
            sidebarOpen: !this.state.sidebarOpen
        })
    }

    // Handle Cart
    handleCart = () => {
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    }

    // Close Cart
    closeCart = () => {
        this.setState({
            cartOpen: false
        })
    }

    // Open Cart
    openCart = () => {
        this.setState({
            cartOpen: true
        })
    }

    // Cart Functionality


    increment = (id) => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        cartItem.amount++;
        cartItem.total = cartItem.amount * cartItem.price;
        cartItem.total = parseFloat(cartItem.total.toFixed(2))
        this.setState(() => {
            return {
                cart: [...tempCart]
            }
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }

    decrement = id => {
        let tempCart = [...this.state.cart];
        const cartItem = tempCart.find(item => item.id === id);
        cartItem.amount--;
        if (cartItem.amount === 0) {
            this.removeItem(id)
        }
        else {
            cartItem.total = cartItem.amount * cartItem.price;
            cartItem.total = parseFloat(cartItem.total.toFixed(2))
            this.setState(() => {
                return {
                    cart: [...tempCart]
                }
            }, () => {
                this.addTotals();
                this.syncStorage();
            })
        }
    }

    removeItem = id => {
        let tempCart = [...this.state.cart];
        tempCart = tempCart.filter(item => item.id !== id);
        this.setState({
            cart: [...tempCart]
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }

    clearCart = () => {
        this.setState({
            cart: []
        }, () => {
            this.addTotals();
            this.syncStorage();
        })
    }

    // handle filtering
    handleChange = event => {
        console.log(event)
    }

    sortData = () => {

    }


    render() {
        return (
            <ProductContext.Provider value={{
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
                clearCart: this.clearCart,
                handleChange: this.handleChange,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer }

