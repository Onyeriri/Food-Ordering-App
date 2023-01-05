import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>form input</div>
    </li>
  );
};

export default MealItem;
