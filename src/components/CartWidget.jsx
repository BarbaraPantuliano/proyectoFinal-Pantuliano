import React from "react";
import { BsCart4 } from "react-icons/bs";
import { useCart } from "../CartContext"; 

function CartWidget() {
  const { cantidadProductos } = useCart(); 

  return (
    <div className="cart-widget">
      <BsCart4 />
      <span>{cantidadProductos}</span>
    </div>
  );
}

export default CartWidget;
