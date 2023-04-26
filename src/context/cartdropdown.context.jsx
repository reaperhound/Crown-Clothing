import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cartClicked : false,
  setCartClicked: ()=> {},
  cartItems: [],
  addItemToCart : ()=>{},
  cartCount : 0,
});

//helper function
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

  if(existingCartItem) {
    return cartItems.map(item => {
      return item.id === productToAdd.id ?
      {...item, quantity : item.quantity + 1}
      : {...item}
    })
  } else {
    return [...cartItems, {...productToAdd, quantity : 1}]
  }
}


function CartProvider({ children }){
  const [ cartClicked, setCartClicked ] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0 );
    setCartCount(newCartCount);
  },[cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = {cartClicked, setCartClicked, addItemToCart, cartItems, cartCount};
  

  return (
    <CartContext.Provider value={value}>
      { children }
    </CartContext.Provider>
  )

}

export { CartContext, CartProvider}