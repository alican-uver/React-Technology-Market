import React from "react";
import {
  FaTrash,
  FaChevronCircleUp,
  FaChevronCircleDown,
} from "react-icons/fa";

const CartItem = ({ cartItem, increment, decrement, removeItem }) => {

  const { id, title, price, amount, total, image } = cartItem;
  let editTotal = () => {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    return formatter.format(total);
  }

  return (
    <div className="row mt-5 mt-lg-0 text-capitalize d-flex align-items-baseline text-center">
      {/* image */}
      <div className="col-10 mx-auto col-lg-2 pb-2">
        <img src={image} width="60" className="img-fluid" alt="product" />
      </div>
      {/* title */}
      <div className="col-10 mx-auto col-lg-2 pb-2  text-info">
        <span className="d-lg-none text-dark">product : </span>
        {title}
      </div>
      {/* price */}
      <div className="col-10 mx-auto col-lg-2 pb-2 text-danger">
        <span className="d-lg-none text-dark">price : $ </span>
        {price}
      </div>
      {/* amount controls */}
      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <FaChevronCircleDown
              className="text-primary mr-2"
              onClick={() => decrement(id)}
            />
            <span className="text-info"> {amount} </span>
            <FaChevronCircleUp
              className="text-primary ml-2"
              onClick={() => increment(id)}
            />
          </div>
        </div>
      </div>
      {/* end of amount controls */}
      {/* remove item */}
      <div className="col-10 mx-auto col-lg-2">
        <FaTrash className="text-danger" onClick={() => removeItem(id)} />
      </div>
      {/* item total */}
      <div className="col-10 mx-auto col-lg-2">
        <strong className="text-muted">item total: {editTotal()}</strong>
      </div>
    </div>
  );
};

export default CartItem;
