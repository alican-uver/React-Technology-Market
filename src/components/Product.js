import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context/context";

const Product = ({ product }) => {
  return (
    <ProductConsumer>
      {(value) => {
        const { addToCart, setSingleProduct } = value;
        return (
          <ProductWrapper className="col-10 col-md-6 col-lg-4 mx-auto mt-5">
            <div className="card">
              <div className="card-img-container">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt="product"
                  style={{ height: "320px", objectFit:"cover" }}
                />
                <div className="product-icons">
                  <Link
                    to={`/products/${product.id}`}
                    onClick={() => setSingleProduct(product.id)}
                  >
                    <FaSearch className="product-icon" />
                  </Link>
                  <FaCartPlus
                    className="product-icon"
                    onClick={() => addToCart(product.id)}
                  />
                </div>
              </div>
              <div className = "card-body">
                <p>{product.title}</p>
                <p>{`${product.price}$`}</p>
              </div>
            </div>
          </ProductWrapper>
        );
      }}
    </ProductConsumer>
  );
};

export default Product;

const ProductWrapper = styled.div`
  .card {
    box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.3);
    transition: var(--mainTransition);
    border:0;
    &:hover {
      box-shadow : 7px 10px 5px 0 rgba(0, 0, 0, 0.5);
      cursor:pointer;
      .card-img-top{
        opacity: 0.8;
      }
      .product-icons {
        opacity: 1;
      }
    }

    &-img-top {
      transition: var(--mainTransition);
    }

    &-img-container {
      position:relative;
    }

    &-body {
      background: var(--darkBlue);
      display: flex; 
      justify-content: space-between;
      align-items:center;
      color: var(--mainWhite);
      text-transform: capitalize;
    }

    .product-icons {
        position:absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: var(--mainTransition);
        opacity: 0;
        .product-icon {
          font-size: 2rem;
          margin: 1rem;
          color: var(--mainBlue)
        }
      }
  }

`;
