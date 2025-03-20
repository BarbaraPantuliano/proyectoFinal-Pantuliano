import React, { useContext } from "react"
import { Link, } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

function NavBar() {
 
  const { totalItems } = useContext(CartContext); 

  return (
    <nav>
      <div className="logo">
        <img src="/assets/bfLogo.png" alt="Logo tienda" className="logo" />
      </div>
      <ul>
        <li><Link to="/">INICIO</Link></li>
        <li><Link to="/category/hombre">ROPA HOMBRE</Link></li>
        <li><Link to="/category/mujer">ROPA MUJER</Link></li>
        <li><Link to="/category/accesorios">ACCESORIOS</Link></li>
        <li><Link to="/contacto">CONTACTO</Link></li>
        <li><Link to="/cart" className="cart-widget">
                🛒 <span>{totalItems()}</span>
            </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
