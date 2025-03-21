import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ producto }) => {
  const { addToCart } = useContext(CartContext);
  const [agregado, setAgregado] = useState(false);

  const onAdd = (cantidad) => {
    addToCart({ ...producto, cantidad }); 
    setAgregado(true);
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={producto.image} alt={producto.name} className="card-img" />
        <div className="card-body">
          <h2 className="card-title">{producto.name}</h2>
          <p className="card-text">{producto.detail}</p>
          <p className="card-price">
            Precio:{" "}
            {new Intl.NumberFormat("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
            }).format(producto.price)}
          </p>

          {!agregado ? (
            <ItemCount stock={producto.stock} initial={1} onAdd={onAdd} />
          ) : (
            <Link to="/cart" className="card-button">Ir al carrito</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
