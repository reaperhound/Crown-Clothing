import { useContext } from "react";
import {
  ArrowSTL,
  CheckoutItemSTL,
  ImageContainerSTL,
  ImagesSTL,
  NameSTL,
  QuantitySTL,
  RemoveBtnSTL,
} from "./CheckoutItem.styles.js";
import { CartContext } from "../../context/cartdropdown.context";

export default function CheckoutItem({ cartItem }) {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, removeItemFromCart, addItemToCart } =
    useContext(CartContext);

  return (
    <CheckoutItemSTL>
      <ImageContainerSTL>
        <ImagesSTL src={imageUrl} alt={name} />
      </ImageContainerSTL>
      <NameSTL>{name}</NameSTL>
      <QuantitySTL>
        <ArrowSTL
          onClick={() => {
            removeItemFromCart(cartItem);
          }}
        >
          &lt; &nbsp;
        </ArrowSTL>
        {quantity}
        <ArrowSTL
          onClick={() => {
            addItemToCart(cartItem);
          }}
        >
          &nbsp; &gt;
        </ArrowSTL>
      </QuantitySTL>
      <NameSTL>{price}</NameSTL>
      <RemoveBtnSTL onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveBtnSTL>
    </CheckoutItemSTL>
  );
}
