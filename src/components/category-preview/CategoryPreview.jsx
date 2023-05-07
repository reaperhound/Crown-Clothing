import {
  CategoryPreviewSTL,
  PreviewSTL,
  TitleSTL,
} from "./CategoryPreview.styles.js";
import ProductCard from "../product-card/product-card.component";
import { Link } from "react-router-dom";

export default function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewSTL>
      <h2>
        <Link to={`/shop/${title}`}>
          <TitleSTL>
            {title.charAt(0).toUpperCase()}
            {title.slice(1)}
          </TitleSTL>
        </Link>
      </h2>
      <PreviewSTL>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </PreviewSTL>
    </CategoryPreviewSTL>
  );
}
