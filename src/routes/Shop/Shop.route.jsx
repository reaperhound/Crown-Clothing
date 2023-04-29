import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview.route";
import Category from "../Category/Category.route";

export default function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
}
