import React, { Fragment } from "react";
import mealsImage from "../../assests/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table ful of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
