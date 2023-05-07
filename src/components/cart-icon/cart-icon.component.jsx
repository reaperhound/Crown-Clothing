import {
  CartIconSTL,
  ItemCountSTL,
  ShoppingIconSTL,
} from "./cart-icon.styles.js";
import cartIcon from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../context/cartdropdown.context";

const CartIcon = ({ onClick }) => {
  const { cartCount } = useContext(CartContext);
  return (
    <CartIconSTL onClick={onClick}>
      <ShoppingIconSTL src={cartIcon} alt="Cart Icon" />
      <ItemCountSTL>{cartCount}</ItemCountSTL>
    </CartIconSTL>
  );
};

export default CartIcon;
