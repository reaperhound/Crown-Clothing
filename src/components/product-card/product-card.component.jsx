import { CartContext } from "../../context/cartdropdown.context";
import ButtonComponent from "../button/button.component";
import {
  ButtonSTL,
  FooterSTL,
  ImageSTL,
  NameSTL,
  PriceSTL,
  ProductCardSTL,
} from "./product-card.styles";

import React, { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;
  const { addItemToCart } = useContext(CartContext);

  const addProductToCartHandler = () => addItemToCart(product);

  return (
    <ProductCardSTL>
      <ImageSTL src={imageUrl} alt={name} />
      <FooterSTL>
        <NameSTL>{name}</NameSTL>
        <PriceSTL>{price}</PriceSTL>
      </FooterSTL>
      <ButtonComponent
        buttonType={`inverted`}
        classes={`button-product-style`}
        onClick={addProductToCartHandler}
      >
        Add to Cart
      </ButtonComponent>
    </ProductCardSTL>
  );
};

export default ProductCard;
