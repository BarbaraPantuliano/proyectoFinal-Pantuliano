import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productos from '../data/products'; // Importar productos locales

function ItemDetailContainer() {
  const { productId } = useParams(); // Obtener el ID del producto desde la URL
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    // Buscar el producto por ID
    const productoSeleccionado = productos.find(prod => prod.id === parseInt(productId));
    setProducto(productoSeleccionado);
  }, [productId]); // Se ejecuta cada vez que cambia el productId

  if (!producto) return <p>Producto no encontrado.</p>;

  return (
    <div className="card-container">
      <div className="card">
        <img src={producto.image} alt={producto.name} className="card-img" />
        <div className="card-body">
          <h2 className="card-title">{producto.name}</h2>
          <p className="card-text">{producto.description}</p>
          <p className="card-price"> Precio: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(producto.price)}</p>
          <button onClick={() => alert('Agregado al carrito')} className="card-button">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailContainer;



