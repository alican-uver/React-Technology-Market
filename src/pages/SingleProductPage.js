import React, { Component } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import singleProductBcg from "../images/singleProductBcg.jpeg";
import { ProductConsumer } from "../context/context";
class SingleProductPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Hero img={singleProductBcg} title="single product" />
        <ProductConsumer>
          {(value) => {
            const { singleProduct, addToCart, loading } = value;
            if (loading) {
              console.log("hello from loading");
              return <h1>product loading... </h1>;
            }
            const { company, description, id, price, title, image, } = singleProduct;
                              
            return (
              <section className="py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3">
                      <img
                        src={image}
                        alt="single-product"
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-10 mx-auto col-sm-8 col-md-6 my-3 ">
                      <h5 className="text-uppercase mb-4"> model: {title}</h5>
                      <h5 className = "text-capitalize text-muted"> company: {company}</h5>
                      <h5 className = "text-capitalize mb-4">price: ${price}</h5>
                      <p className = "text-capitalize mt-3"> Some Info About Product:</p>
                      <p className = "text-muted">{description}</p>
                      <button type = "button" 
                      className = "main-link mr-5" 
                      style = {{margin: '.75rem'}}
                      onClick = {() => addToCart(id)}> 
                      add to cart
                      </button>
                      <Link to = "/products" className = "main-link">back to products</Link>
                    </div>
                  </div>
                </div>
              </section>
            );
          }}
        </ProductConsumer>
      </React.Fragment>
    );
  }
}

export default SingleProductPage;
