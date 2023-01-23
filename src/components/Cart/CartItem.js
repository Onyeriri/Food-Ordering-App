import classes from "./CartItem.module.css";

const CartItem = (props) => {
  // const price = `$${props.item.price.toFixed(2)}`;

  const handleAddCartItem = () => {
    props.onAdd(props.item);
    console.log(props.item);
  };

  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.item.price}</span>
          <span className={classes.amount}>x {props.item.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>−</button>
        <button onClick={handleAddCartItem}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
