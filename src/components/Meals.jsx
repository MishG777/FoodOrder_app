import React, { useState, useEffect } from "react";

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
        <li key={meal.id}>{meal.name}</li>
      ))}
    </ul>
  );
};

export default Meals;
