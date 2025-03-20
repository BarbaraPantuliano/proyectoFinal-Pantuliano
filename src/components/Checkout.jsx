import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [orderId, setOrderId] = useState("");
  const [error, setError] = useState("");

  const handleCheckout = async () => {
    if (!buyer.name.trim() || !buyer.email.trim()) {
      setError("Por favor, completa todos los campos.");
      return;
    }

    setError("");
    const order = {
      buyer,
      items: cart,
      total: cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      setError("Hubo un problema al procesar la compra. Inténtalo de nuevo.");
    }
  };

  if (orderId) {
    return <h2>¡Compra realizada con éxito! ID: {orderId}</h2>;
  }

  return (
    <div className="checkout-conatiner">
      <h2>Finalizar compra</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={buyer.name}
        onChange={(e) => setBuyer({ ...buyer, name: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={buyer.email}
        onChange={(e) => setBuyer({ ...buyer, email: e.target.value })}
      />
      {error && <p className="error-message">{error}</p>}
      <button onClick={handleCheckout} className="button">Confirmar compra</button>
    </div>
  );
};

export default Checkout;
