import React from "react";
import { ProductConsumer } from "../../context/context";
import Title from "../Title";
import Product from "../Product";
import ProductFilter from "./ProductFilter";

const Products = () => {
  return (
    <ProductConsumer>
      {(value) => {
        const { filteredProducts } = value;
        return (
          <section className="py-5">
            <div className="container">
              {/* title */}
              <Title center title="our products" />
              {/* prooduct filter */}
              <ProductFilter />
              {/* total count */}
              <div className="row">
                <div className="col-10 mx-auto">
                  <h5 className="text-uppercase text-light bg-dark py-2 text-center" style={{ borderRadius: "5px" }}>total products: {filteredProducts.length} </h5>
                </div>
              </div>
              {/* products */}
              <div className="row py-5">
                {filteredProducts.length === 0 ? (
                  <div className="col text-center text-capitalize">
                    There isn't no items match your search
                  </div>
                ) : (
                    filteredProducts.map((product) => {
                      return <Product key={product.id} product={product} />;
                    })
                  )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default Products;
