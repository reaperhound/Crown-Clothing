import { CartDropDownSTL, CartItemSTL } from "./cart-dropdown.styles";
import ButtonComponent from "../button/button.component";

import React, { useContext } from "react";
import CartItem from "../cart-item/Cart-Item.component";
import { CartContext } from "../../context/cartdropdown.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/checkout");
  };

  return (
    <CartDropDownSTL>
      <CartItemSTL>
        {cartItems.map((item) => {
          return <CartItem key={item.id} cartItem={item} />;
        })}
      </CartItemSTL>
      <ButtonComponent onClick={handleNavigate}>CHECKOUT</ButtonComponent>
    </CartDropDownSTL>
  );
};

export default CartDropDown;
