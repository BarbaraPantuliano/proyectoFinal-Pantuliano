import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenido a BF Sportswear!" />
    </div>
  );
}

export default App;
