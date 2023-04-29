import "./directory-item.styles.scss";

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <>
      <div className="directory-container">
        <div
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
          className="background-image"
        />
        <div className="category-body-container">
          <h2>{title}</h2>
          <p>Shop Now</p>
        </div>
      </div>
    </>
  );
};

export default DirectoryItem;
