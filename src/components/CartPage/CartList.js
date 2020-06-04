import React from "react";
import { ProductConsumer } from "../../context";
import CartItem from "./CartItem";

const CartList = () => {
  return (
    <div className="container-fluid">
          <ProductConsumer>
            {(value) => {
              const { cart, increment, decrement, removeItem } = value;
              if (cart.length === 0) {
                return (
                  <h2 className="text-uppercase text-center">
                    cour cart is empty
                  </h2>
                );
              }
              return (
                <React.Fragment>
                  {cart.map((item) => {
                    return (
                      <CartItem
                        key={item.id}
                        cartItem={item}
                        increment={increment}
                        decrement={decrement}
                        removeItem={removeItem}
                      />
                    );
                  })}
                </React.Fragment>
              );
            }}
          </ProductConsumer>
        </div>
  );
};

export default CartList;
