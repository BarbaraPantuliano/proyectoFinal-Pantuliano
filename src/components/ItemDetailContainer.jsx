import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useCart } from "../context/CartContext"; 
  
  const ItemDetailContainer = () => {
    const { productId } = useParams();
    const [product, setProduct] = useState(null);
    const { addToCart } = useCart(); 
  
    useEffect(() => {
      const getProduct = async () => {
        const docRef = doc(db, "productos", productId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        }
      };
      getProduct();
    }, [productId]);
  
    if (!product) return <p>Cargando...</p>;
  
    const handleAddToCart = () => {
      addToCart(product); 
      alert('Producto agregado al carrito');
    };
  
    return (
      <div className="card-container">
        <div className="card">
          <img src={product.image} alt={product.name} className="card-img" />
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="card-text">{product.detail}</p>
            <p className="card-price">
              Precio:{" "}
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              }).format(product.price)}
            </p>
            <button onClick={handleAddToCart} className="card-button">
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ItemDetailContainer;
  