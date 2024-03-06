import React, { useState, useEffect } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const resp = await fetch("http://localhost:3000/meals");

      if (!resp.ok) {
        return;
      }

      const mealsData = await resp.json();

      setMeals(mealsData);
    }
    fetchMeals();
  }, []);

  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem meal={meal} key={meal.id} />
      ))}
    </ul>
  );
};

export default Meals;
