import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments } from "../utils/firebase/firabase.utils"

const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const value = {products}

  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}
export { ProductContext, ProductProvider}