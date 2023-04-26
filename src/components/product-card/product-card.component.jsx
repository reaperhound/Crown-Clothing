import { CartContext } from "../../context/cartdropdown.context";
import ButtonComponent from "../button/button.component";
import "./product-card.styles.scss";

import React, { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price} = product;
  const { addItemToCart } = useContext(CartContext)

  const addProductToCartHandler = () => addItemToCart(product)

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType={`inverted`} classes={`button-product-style`}
      onClick={addProductToCartHandler}
      >
        Add to Cart
      </ButtonComponent>
    </div>
  );
};

export default ProductCard;
