import React, { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import "./CategoriesPreview.route.styles.scss"
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <div className="shop-container">
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return <CategoryPreview products={products} title={title} key={title} />
        })
      }
    </div>
  );
};

export default CategoriesPreview;
