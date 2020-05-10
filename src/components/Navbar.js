import React from 'react';
import { FaBars, FaCartPlus } from 'react-icons/fa';
import styled from 'styled-components';
import { ProductConsumer } from '../context/context';
import logo from '../images/tech-store-logo.svg';

const Navbar = () => {
  return (
    <React.Fragment>
      <ProductConsumer>
        {
          value => {
            const { cartItems, handleSidebar, handleCart } = value;
            return <NavWrapper>
              <div className="nav-center">
                  <FaBars className="nav-icon" onClick={handleSidebar} />
                  <img src={logo} className="logo-img" alt="store logo" />
                <div className="nav-cart">
                  <FaCartPlus className="nav-icon" onClick={handleCart} />
                  <div className="cart-items">{cartItems}</div>
                </div>
              </div>
            </NavWrapper>
          }
        }
      </ProductConsumer>
    </React.Fragment>
  )
}
export default Navbar;

const NavWrapper = styled.nav`
  position: sticky;
  position: -webkit-sticky;
  top:0;
  width: 100%;
  padding: 0px 20px;
  background: #fff;
  border-bottom: 2px solid #f1f1f1;
  z-index: 1;
.nav-center {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.nav-icon {
  font-size: 1.7rem;
  cursor: pointer;
}

.nav-cart {
  position: relative;
}

.cart-items {
    position: absolute;
    top:-18px;
    left: 17px;
    font-size: 18px;
    font-weight: 600;
    background-color: gray;
    padding: 0 3px;
    color: #fff;
    border-radius: 50%;
}

.logo-img {
    width: 150px;
    height: 120px;
}



`;