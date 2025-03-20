import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, totalItems, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) return <h2>El carrito está vacío 🛒</h2>;

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <div className="cart-item-image">
            <img src={item.image} alt={item.name} />
          </div>
          <div className="cart-item-details">
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>
              Precio unitario:{" "}
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              }).format(item.price)}
            </p>
            <p>
              Total:{" "}
              {new Intl.NumberFormat("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              }).format(item.price * item.quantity)}
            </p>
            <button onClick={() => removeFromCart(item.id)} className="button">Eliminar</button>
          </div>
        </div>
      ))}

      <h3>Total de productos: {totalItems()}</h3>
      <h3>
        Total:{" "}
        {new Intl.NumberFormat("es-AR", {
          style: "currency",
          currency: "ARS",
          minimumFractionDigits: 0,
        }).format(getTotalPrice())}
      </h3>

      <button onClick={clearCart} className="button">Vaciar Carrito</button>
      <Link to='/checkout'>
        <button className="button">Checkout</button>
      </Link>
    </div>
  );
};

export default Cart;


