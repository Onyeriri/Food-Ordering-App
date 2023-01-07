import React, { useState } from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const [isClose, setClose] = useState(false);

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "sushi", amount: 2, price: 12.99 }].map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );

  const handleClose = () => {
    !isClose ? setClose(true) : setClose(false);
  };

  return (
    <Modal close={isClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.65</span>
      </div>
      <div className={classes.actions}>
        <button onClick={handleClose} className={classes["button--alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
