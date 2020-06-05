import React from "react";
import { ProductConsumer } from "../context/context";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SideCart = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { cartOpen, closeCart, cart, cartTotal } = value;
        return (
          <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
              {cart.map((item) => {
                return (
                  <li key={item.id} className="cart-item mb-4">
                    <img width="100" src={item.image} alt="cart-item" />
                    <div className="mt-3 cart-item-info">
                      <h6 className="text-uppercase">{item.title}</h6>
                      <h6 className="text-title text-capitalize font-weight-bold">
                        amount: {item.amount}
                      </h6>
                    </div>
                  </li>
                );
              })}
            </ul>
            <h4 className="text-capitalize">cart total : {cartTotal} </h4>
            <div className="text-center mt-3">
              <Link to = "/cart" className = "p-2 main-link">cart page</Link>
            </div>
          </CartWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default SideCart;

const CartWrapper = styled.div`
  position: fixed;
  top: 122px;
  right: 0;
  width: 100%;
  height: 100%;
  background: var(--mainGrey);
  z-index: 1;
  transition: all 0.3s cubic-bezier(1, 0, 0, 1);
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  overflow: scroll;
  padding:2rem;
  padding-bottom: 150px;
  ul {
    padding: 0 !important;
  }
  .cart-item {
    list-style-type: none;
    display:flex;
    justify-content: space-between;
    &-info{
      min-width:220px;
    }
    img{
      object-fit: cover;
    }
  }
  @media screen and (min-width: 576px) {
    width: 25rem;
  }
  

`;
