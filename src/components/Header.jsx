import Button from "./UI/Button";
import logo from "../assets/logo.jpg";

import CartContext from "./store/CartContext.jsx";
import { useContext } from "react";

const Header = () => {
  const cartCtx = useContext(CartContext);

  const totalCartItems = cartCtx.items.reduce(
    (totalCartItems, item) => totalCartItems + item.quantity,
    0
  );

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo img" />
        <h1>TastyFoody</h1>
      </div>
      <nav>
        <Button textOnly>Cart {totalCartItems}</Button>
      </nav>
    </header>
  );
};

export default Header;
