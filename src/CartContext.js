import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export function CartProvider({ children }) {
  const [cantidadProductos, setCantidadProductos] = useState(0);

  const agregarAlCarrito = () => {
    setCantidadProductos((prevCantidad) => prevCantidad + 1); // Incrementar la cantidad de productos
  };

  return (
    <CartContext.Provider value={{ cantidadProductos, agregarAlCarrito }}>
      {children}
    </CartContext.Provider>
  );
}

