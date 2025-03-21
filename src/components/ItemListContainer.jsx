import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { db } from "../firebaseConfig";
import ItemList from "./ItemList";


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
      {productos.length > 0 ? <ItemList productos={productos} /> : <p>Cargando productos...</p>}
    </div>
  );
}

export default ItemListContainer;


