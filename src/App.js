import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

function App() {
  return (
    <div className="App">
      <>
      <BrowserRouter>
        <CartProvider>  
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes> 
        </CartProvider>
      </BrowserRouter>
      </>
    </div>
  );
}

export default App;
