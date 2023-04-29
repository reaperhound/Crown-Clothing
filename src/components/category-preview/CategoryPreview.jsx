import "./CategoryPreview.styles.scss"
import ProductCard from "../product-card/product-card.component"
import { Link } from "react-router-dom"

export default function CategoryPreview({ title, products }) {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`/shop/${title}`}>
        <span className="title">
          {title.charAt(0).toUpperCase()}{title.slice(1)}
        </span>
        </Link>
      </h2>
      <div className="preview">
        {
          products
            .filter((_, idx) => idx < 4 )
            .map((product) => (
              <ProductCard product={product} key={product.id} />
            ))
        }
      </div>
    </div>
  )
}