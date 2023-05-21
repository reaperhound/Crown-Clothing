import { useNavigate } from "react-router-dom";
import {
  BackgroundImageSTL,
  CategoryBodySTL,
  DirectorySTL,
  H2STL,
  PSTL,
} from "./directory-item.styles.js";

const DirectoryItem = ({ category }) => { 
  const { imageUrl, title, route } = category;
  const navigate = useNavigate()

  const onNavigateHandler = () => navigate(route);

  return (
    <>
      <DirectorySTL onClick={onNavigateHandler}>
        <BackgroundImageSTL
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        />
        <CategoryBodySTL>
          <H2STL>{title}</H2STL>
          <PSTL>Shop Now</PSTL>
        </CategoryBodySTL>
      </DirectorySTL>
    </>
  );
};

export default DirectoryItem;
