import React, { createContext, useState, useContext } from "react";


export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto) => {
    const existingProduct = cart.find((item) => item.id === producto.id);
    
    if (existingProduct) {
      
      setCart(
        cart.map((item) =>
          item.id === producto.id
            ? { ...item, quantity: item.quantity + producto.cantidad } 
            : item
        )
      );
    } else {
      
      setCart([...cart, { ...producto, quantity: producto.cantidad }]);
    }
  };

  
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  
  const clearCart = () => {
    setCart([]);
  };

  
  const totalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  
  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, totalItems, getTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};


export const useCart = () => useContext(CartContext);
