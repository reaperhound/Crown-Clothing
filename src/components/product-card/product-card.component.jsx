import ButtonComponent from "../button/button.component";
import "./product-card.styles.scss"

import React from 'react'

const ProductCard = ({ product }) => {
  const { name, imageUrl, price } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <ButtonComponent buttonType={`inverted`} classes={`button-product-style`}>Add to Cart</ButtonComponent>
    </div>
  )
}

export default ProductCard