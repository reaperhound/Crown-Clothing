import "./cart-dropdown.styles.scss"
import ButtonComponent from "../button/button.component";

import React, { useContext } from 'react'
import CartItem from "../cart-item/Cart-Item.component";
import { CartContext } from "../../context/cartdropdown.context";
import { useNavigate } from "react-router-dom";

const CartDropDown = () => {
  const { cartItems } = useContext(CartContext)
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/checkout');
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map((item) => {
            return (
              <CartItem key={item.id} cartItem={item} />
            )
          })
        }
      </div>
        <ButtonComponent onClick={handleNavigate}>CHECKOUT</ButtonComponent>
    </div>
  )
}

export default CartDropDown