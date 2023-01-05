import React from "react";
import Cards from "../UI/Cards";
import classes from "./AvailableMeals.module.css";
import MealItem from "./mealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const AvaliableMeals = () => {
  return (
    <section className={classes.meals}>
      <Cards>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Cards>
    </section>
  );
};

export default AvaliableMeals;
