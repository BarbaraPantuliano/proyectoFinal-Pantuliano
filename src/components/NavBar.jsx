import React from 'react';
import CartWidget from './CartWidget';

function NavBar(){
  return (
    <nav>
        <div className="logo">
            <img src="/assets/bfLogo.png" alt="Logo tienda" className="logo"/> 
        </div>
        <ul>
            <li><a href="#home">INICIO</a></li>
            <li><a href="#hombre">ROPA HOMBRE</a></li>
            <li><a href="#mujer">ROPA MUJER</a></li>
            <li><a href="#accesorios">ACCESORIOS</a></li>
            <li><a href="#contacto">CONTACTO</a></li>
        </ul>
        <CartWidget /> 
    </nav>
  );
};

export default NavBar;