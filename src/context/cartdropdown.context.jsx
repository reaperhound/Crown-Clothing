import { createContext, useState } from "react";

const CartContext = createContext({
  cartClicked : false,
  setCartClicked: ()=> {}
});

function CartProvider({ children }){
  const [ cartClicked, setCartClicked ] = useState(false);
  const value = {cartClicked, setCartClicked};

  return (
    <CartContext.Provider value={value}>
      { children }
    </CartContext.Provider>
  )

}

export { CartContext, CartProvider}