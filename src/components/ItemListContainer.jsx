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


