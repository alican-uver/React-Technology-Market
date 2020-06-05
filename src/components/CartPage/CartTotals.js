import React from "react";
import { ProductConsumer } from "../../context";

const CartTotals = () => {
  return (
    <div className="container">
      <div className="row">
        <ProductConsumer>
          {(value) => {
            const { clearCart, cartSubTotal, cartTax, cartTotal } = value;
            return (
              <div className="col text-center my-4 ">
                <button className="btn btn-outline-danger text-capitalize mb-4"
                onClick = {clearCart}
                >
                Clear Cart
                </button>
                <h3>Subtotal: {cartSubTotal} </h3>
                <h3>CartTax: {cartTax} </h3>
                <h3>CartTotal: {cartTotal} </h3>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default CartTotals;
