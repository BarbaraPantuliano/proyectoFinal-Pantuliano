import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [cantidad, setCantidad] = useState(initial);

  const increase = () => {
    if (cantidad < stock) setCantidad(cantidad + 1);
  };

  const decrease = () => {
    if (cantidad > 1) setCantidad(cantidad - 1);
  };

  return (
    <div className="item-count">
      <button className="button-count" onClick={decrease}>-</button>
      <span className="cantidad">{cantidad}</span>
      <button className="button-count" onClick={increase}>+</button>
      <button onClick={() => onAdd(cantidad)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;


