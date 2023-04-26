import "./cart-icon.styles.scss"
import cartIcon from "../../assets/shopping-bag.svg"
import { useContext } from "react"
import { CartContext } from "../../context/cartdropdown.context"

const CartIcon = ({ onClick }) => {
  const { cartCount } = useContext(CartContext)
  return (
    <div 
      className="cart-icon-container" 
      onClick={onClick}
    >
      <img src={cartIcon} alt="Cart Icon" className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon