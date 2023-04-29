import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data";
import { addCollectionAndDocuments, getCollectionAndDocuments } from "../utils/firebase/firabase.utils"

const CategoriesContext = createContext({
  categoriesMap : {}
})

const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCollectionAndDocuments();
      console.log(categoryMap);
      setCategoriesMap(categoryMap)
    }

    getCategoriesMap();
  },[])

  const value = {categoriesMap}

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
export { CategoriesContext, CategoriesProvider }