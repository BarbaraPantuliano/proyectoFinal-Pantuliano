/*import React, { useEffect, useState } from "react";
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

export default ItemListContainer;*/

/*import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig"; // Importar Firestore
import { Link } from "react-router-dom";


function ItemListContainer({ mensaje }) {

  const { categoryId } = useParams();
  console.log("Categoría seleccionada:", categoryId);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      setLoading(true);
      try {
        
        let productosRef = collection(db, "productos");

        // Si hay una categoría, filtrar por ella
        const q = categoryId ? query(productosRef, where("category", "==", categoryId)) : productosRef;

        const querySnapshot = await getDocs(q);
        const productosFirestore = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
       

        setProductosFiltrados(productosFirestore);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{mensaje}</h1>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <div className="product-cards">
          {productosFiltrados.length > 0 ? (
            productosFiltrados.map((producto) => (
              <div key={producto.id} className="card">
                <img src={producto.image} alt={producto.name} className="card-img" />
                <div className="card-body">
                  <h2 className="card-title">{producto.name}</h2>
                  <p className="card-price">
                    Precio: {new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 0 }).format(producto.price)}
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
      )}
    </div>
  );
}

export default ItemListContainer;*/
import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import { Link } from "react-router-dom";

function ItemListContainer({ mensaje }) {
  const { categoryId } = useParams();
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    console.log("Category ID:", categoryId);
    const fetchProductos = async () => {
      try {
        let productosRef = collection(db, "productos");

        let q;
        if (categoryId) {
          console.log("Filtrando por categoría:", categoryId);
          q = query(productosRef, where("category", "==", categoryId));
        } else {
          console.log("No hay categoría, trayendo todos los productos");
          q = query(productosRef);
        }

        const querySnapshot = await getDocs(q);
        const productosFirestore = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        console.log("Productos obtenidos:", productosFirestore);
        setProductos(productosFirestore);
      } catch (error) {
        console.error("Error obteniendo productos:", error);
      }
    };

    fetchProductos();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1>{mensaje}</h1>
      <div className="product-cards">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div className="card" key={producto.id}>
              <img src={producto.image} alt={producto.name} className="card-img" />
              <div className="card-body">
                <h2 className="card-title">{producto.name}</h2>
                <p className="card-price">
                  {new Intl.NumberFormat("es-AR", {
                    style: "currency",
                    currency: "ARS",
                    minimumFractionDigits: 0
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
    </div>
  );
}

export default ItemListContainer;


