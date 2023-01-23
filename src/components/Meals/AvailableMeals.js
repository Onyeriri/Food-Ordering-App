import React, { useEffect, useState } from "react";
import Cards from "../UI/Cards";
import classes from "./AvailableMeals.module.css";
import MealItem from "./mealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://react-http-d9cc6-default-rtdb.europe-west1.firebasedatabase.app/meals.json"
    );
    const data = await response.json();
    const receivedMeals = [];

    for (const key in data) {
      receivedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMeals(receivedMeals);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className={classes.meals}>
      <Cards>
        <ul>
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </ul>
      </Cards>
    </section>
  );
};

export default AvailableMeals;
