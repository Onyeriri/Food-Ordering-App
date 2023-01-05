import React from "react";
import classes from "./Card.module.css";

const Cards = (props) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Cards;
