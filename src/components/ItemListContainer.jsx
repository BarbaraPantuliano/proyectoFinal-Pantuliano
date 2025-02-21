import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import productos from "../data/products"; 
import { Link } from 'react-router-dom';


function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams(); 
  const [productosFiltrados, setProductosFiltrados] = useState([]);

  useEffect(() => {
   
    if (categoryId) {
      const filtered = productos.filter(producto => producto.category === categoryId);
      setProductosFiltrados(filtered);
    } else {
      
      setProductosFiltrados(productos);
    }
  }, [categoryId]); 

  return (
    <div className="item-list-container">
      <h1>{mensaje}</h1>
      <div className="product-cards">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto) => (
            <div className="card">
            <img src={producto.image} alt={producto.name} className="card-img" />
            <div className="card-body">
              <h2 className="card-title">{producto.name}</h2>
              <p className="card-price"> Precio: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(producto.price)}</p>
              <Link to={`/product/${producto.id}`} className="card-button">Ver detalles</Link>
            </div>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles en esta categoría.</p>
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
