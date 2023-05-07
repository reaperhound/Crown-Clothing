import {
  CheckOutHeaderSTL,
  CheckoutSTL,
  HeaderBlockSTL,
  TotalSTL,
} from "./Checkout.styles.js";
import { useContext } from "react";
import { CartContext } from "../../context/cartdropdown.context";
import CheckoutItem from "../checkout-item/CheckoutItem";

export default function Checkout() {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <>
      <CheckoutSTL>
        <CheckOutHeaderSTL>
          <HeaderBlockSTL>
            <span>Description</span>
          </HeaderBlockSTL>
          <HeaderBlockSTL>
            <span>Product</span>
          </HeaderBlockSTL>
          <HeaderBlockSTL>
            <span>Quantity</span>
          </HeaderBlockSTL>
          <HeaderBlockSTL>
            <span>Price</span>
          </HeaderBlockSTL>
          <HeaderBlockSTL>
            <span>Remove</span>
          </HeaderBlockSTL>
        </CheckOutHeaderSTL>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <TotalSTL>Total : ${cartTotal}</TotalSTL>
      </CheckoutSTL>
    </>
  );
}
