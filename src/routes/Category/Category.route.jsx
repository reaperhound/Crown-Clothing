import { useLocation, useParams } from "react-router-dom";
import "./Category.route.styles.scss";
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
      <h1>{category.charAt(0).toUpperCase()}{category.slice(1)}</h1>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
}
