import React from 'react';
import { ProductConsumer } from '../context/context';
import styled from 'styled-components';

const SideCart = () => {
  return (
    <ProductConsumer>
      {
        value => {
          const { cartOpen, closeCart, cart } = value;
            return <CartWrapper show={cartOpen} onClick={closeCart}>
              {cart}
          </CartWrapper>
        }
      }
    </ProductConsumer>
  )
}

export default SideCart;

const CartWrapper = styled.div`
  position:fixed;
  top:122px;
  right:0;
  width: 30%;
  height: 100%;
  background: #f1f1f1;
  z-index: 1;
  transition: all .3s cubic-bezier(1, 0, 0, 1);
  transform: ${ props => props.show ? 'translateX(0)' : 'translateX(100%)'};

  @media screen and (max-width: 576px) {
    width: 100%;
  }

`