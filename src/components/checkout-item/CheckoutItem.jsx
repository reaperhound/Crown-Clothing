import { useContext } from "react"
import "./CheckoutItem.styles.scss"
import { CartContext } from "../../context/cartdropdown.context"


export default function CheckoutItem ({cartItem}){
  const { name, imageUrl, price, quantity } = cartItem
  const {clearItemFromCart, removeItemFromCart, addItemToCart } = useContext(CartContext)

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => {removeItemFromCart(cartItem)}}>&lt; &nbsp;</div>
        {quantity}
        <div className="arrow" onClick={() => {addItemToCart(cartItem)}}>&nbsp; &gt;</div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItemFromCart(cartItem)} className="remove-button">&#10005;</div>
    </div>
  )
}