import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.json";



const ProductContext = createContext()

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const value = {products, setProducts}
  
  useEffect(()=> {
    setProducts(SHOP_DATA)
  },[])


  return (
    <ProductContext.Provider value={value}>
      {children}
    </ProductContext.Provider>
  )
}
export { ProductContext, ProductProvider}