import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer mensaje="¡Bienvenido a BF Sportswear!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer  mensaje="Productos filtrados" />} />
        <Route path="/product/:productId" element={<ItemDetailContainer />} />
        <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
      </Routes>
    </div>
  );
}

export default App;

