import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(producto, quantity);
  };

  return (
    <div className="item-detail">
      <h2>{producto.name}</h2>
      <img src={producto.image} alt={producto.name} />
      <p>{producto.description}</p>
      <p>
        Precio:{" "}
        {new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: 0,
        }).format(producto.price)}
      </p>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(parseInt(e.target.value))}
        min="1"
      />
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
