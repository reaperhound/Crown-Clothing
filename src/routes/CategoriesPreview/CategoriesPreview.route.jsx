import React, { Fragment, useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import {ProductSTL} from "./CategoriesPreview.route.styles.js"
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext)

  return (
    <ProductSTL>
      {
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title]
          return <CategoryPreview products={products} title={title} key={title} />
        })
      }
    </ProductSTL>
  );
};

export default CategoriesPreview;
