import React from "react";
import { Link } from "react-router-dom";

const ItemList = ({ productos }) => {
  return (
    <div className="product-cards">
      {productos.length > 0 ? (
        productos.map((producto) => (
          <div key={producto.id} className="card">
            <img src={producto.image} alt={producto.name} className="card-img" />
            <div className="card-body">
              <h2 className="card-title">{producto.name}</h2>
              <p className="card-price">
                {new Intl.NumberFormat("es-AR", {
                  style: "currency",
                  currency: "ARS",
                  minimumFractionDigits: 0,
                }).format(producto.price)}
              </p>
              <Link to={`/product/${producto.id}`} className="card-button">
                Ver detalles
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};

export default ItemList;
