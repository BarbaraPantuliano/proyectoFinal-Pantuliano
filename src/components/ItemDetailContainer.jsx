import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import ItemDetail from "./ItemDetail"; 

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

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

  return (
    <div className="item-detail-container">
      <ItemDetail producto={product} /> 
    </div>
  );
};

export default ItemDetailContainer;

  