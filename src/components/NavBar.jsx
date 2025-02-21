import React from "react";
import { Link, } from 'react-router-dom';
import CartWidget from "./CartWidget";

function NavBar() {
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
      </ul>
      <CartWidget />
    </nav>
  );
}

export default NavBar;
