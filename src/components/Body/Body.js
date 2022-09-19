import React from 'react'
import {Routes, Route} from 'react-router-dom';

import ItemListContainer from '.././Items/ItemListContainer';
import ItemDetailContainer from '.././ItemDetailContainer/ItemDetailContainer';
import Cart from '../Cart/Cart';

const Body = () => {
  return (
    <main>
        <Routes>
          <Route path="/" element={<ItemListContainer/>}/>
          <Route path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </main>
    
  )
}

export default Body