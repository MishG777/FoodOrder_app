import React from "react";
import { formatedCurrency } from "../util/formatter.js";

const MealItem = ({ meal }) => {
  return (
    <li className="meal-item">
      <div>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {formatedCurrency.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-item-actions">
          <button>add to Cart</button>
        </p>
      </div>
    </li>
  );
};

export default MealItem;
