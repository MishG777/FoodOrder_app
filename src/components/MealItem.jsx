import React, { useContext } from "react";
import { formatedCurrency } from "../util/formatter.js";
import Button from "./UI/Button.jsx";
import CartContext from "./store/CartContext.jsx";

const MealItem = ({ meal }) => {
  const cartCtx = useContext(CartContext);

  const AddMealInCart = () => {
    cartCtx.addItem(meal);
  };

  return (
    <li className="meal-item">
      <div className="artice">
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {formatedCurrency.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>

        <p className="meal-item-actions">
          <Button onClick={AddMealInCart}>add to Cart</Button>
        </p>
      </div>
    </li>
  );
};

export default MealItem;
