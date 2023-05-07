import { useLocation, useParams } from "react-router-dom";
import {CategorySTL,CatgTitleSTL} from "./Category.route.styles.js";
import { useContext, useEffect, useState } from "react";
import { CategoriesContext } from "../../context/categories.context";
import ProductCard from "../../components/product-card/product-card.component";

export default function Category() {
  // const location = useLocation()
  // const category = new URLSearchParams(location.search).get('category');
  const { category } = useParams();
  console.log("params", category);
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]); //initially it would be empty because its a async

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CatgTitleSTL>{category.charAt(0).toUpperCase()}{category.slice(1)}</CatgTitleSTL>
      <CategorySTL>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategorySTL>
    </>
  );
}
