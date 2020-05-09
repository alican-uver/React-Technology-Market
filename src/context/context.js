import React, { Component } from 'react';

const ProductContext = React.createContext();

class ProductProvider extends Component {

    state = {
        sidebarOpen : false, 
        cartOpen: false,
        cartItems: 0,
    }

    // Handle Sidebar
    handleSidebar = () => {
        this.setState({
            sidebarOpen : !this.state.sidebarOpen
        })
    }

    //Handle Cart
    handleCart = () => {
        this.setState({
            cartOpen : !this.state.cartOpen
        })
    }

    //Close Cart
    closeCart = () => {
        this.setState({
            cartOpen : false
        })
    }

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
                openCart: this.openCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}
 
const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}