import "./cart-icon.styles.scss"
import cartIcon from "../../assets/shopping-bag.svg"

import React from 'react'

const CartIcon = () => {

  return (
    <div className="cart-icon-container">
      <img src={cartIcon} alt="Cart Icon" className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  )
}

export default CartIcon