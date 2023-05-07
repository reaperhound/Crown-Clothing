import DirectoryItem from "../directory-item/directory-item.component";
import { CategoriesSTL } from "./category-list.styles.js";

const CategoryList = ({ categories }) => {
  return (
    <CategoriesSTL className="categories-container">
      {categories.map((category) => {
        const { id } = category;
        return <DirectoryItem key={id} category={category} />;
      })}
    </CategoriesSTL>
  );
};

export default CategoryList;
