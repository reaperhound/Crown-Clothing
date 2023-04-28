import { createContext, useEffect, useState } from "react";

const CartContext = createContext({
  cartClicked : false,
  setCartClicked: ()=> {},
  cartItems: [],
  addItemToCart : ()=>{},
  cartCount : 0,
  removeItemFromCart : ()=>{},
  clearItemFromCart : ()=>{},
  cartTotal : 0
});

//helper function
const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id)

  if(existingCartItem) {
    return cartItems.map(cartItem => {
      return cartItem.id === productToAdd.id ?
      {...cartItem, quantity : cartItem.quantity + 1}
      : {...cartItem}
    })
  } else {
    return [...cartItems, {...productToAdd, quantity : 1}]
  }
}

const removeCartItem = (cartItems, productToReduce) => {
  // it only comes here if the product exists
 const existingCartItem = cartItems.find(cartItem => (
  cartItem.id === productToReduce.id
 ))

 if(existingCartItem.quantity === 1) {
  return cartItems.filter(cartItem => cartItem.id !== productToReduce.id)
 } 

 return cartItems.map(cartItem => (
    cartItem.id === productToReduce.id
      ? {...cartItem, quantity: cartItem.quantity - 1}
      : cartItem
   ));
}

const clearItem = (cartItems, productToRemove) => {
  return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
}


function CartProvider({ children }){
  const [ cartClicked, setCartClicked ] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0 );
    setCartCount(newCartCount);
  },[cartItems])

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
    setCartTotal(newCartTotal);
  },[cartItems])

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const removeItemFromCart = (productToReduce) => {
    setCartItems(removeCartItem(cartItems, productToReduce))
  }

  const clearItemFromCart = (productToRemove) => {
    setCartItems(clearItem(cartItems, productToRemove))
  }
 

  const value = {cartClicked, setCartClicked, addItemToCart, cartItems, cartCount, removeItemFromCart, clearItemFromCart, cartTotal};

  return (
    <CartContext.Provider value={value}>
      { children }
    </CartContext.Provider>
  )

}

export { CartContext, CartProvider}