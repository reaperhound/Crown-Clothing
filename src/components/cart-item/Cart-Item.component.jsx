import { CartItemImgSTL, CartItemSTL, ItemDetailsSTL, NameSTL} from "./Cart-Item.styles.js"

export default function CartItem({ cartItem }){
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemSTL>
      <CartItemImgSTL src={imageUrl} alt={name} />
      <ItemDetailsSTL>
        <NameSTL>{name}</NameSTL>
        <span className="price">
          {quantity} x {price}
        </span>
      </ItemDetailsSTL>
    </CartItemSTL>
  )
}