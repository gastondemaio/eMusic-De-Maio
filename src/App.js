import './App.css';
import React from 'react';
import { BrowserRouter} from 'react-router-dom';

import NavBar from './components/navbar/NavBar';

import CartProvider from './context/CartContext';
import Body from './components/Body/Body';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartProvider>  
        <NavBar/>
        <Body/>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
