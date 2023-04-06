import CategoryItem from "../category-item/category-item.component";
import "./category-list.styles.scss";

const CategoryList = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        const { id } = category;
        return <CategoryItem key={id} category={category} />;
      })}
      Ola olllaaaa
    </div>
  );
};

export default CategoryList;
