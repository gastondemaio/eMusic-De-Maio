import React, {useState} from 'react'
import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);
  const {addProduct} = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);
    addProduct(data, quantity);
  }

  return (
    <div >
      <div className='card'>
        <img src={data.image} alt={data.title}></img>
        <div className='container'>
          <div><p>{data.descripcion}</p></div>
          <div><p>Precio unitario: {data.price}</p></div>
        </div>
      </div>
      <br/>
      {
        goToCart
            ? <Link to='/cart'>Terminar compra</Link>
            : <ItemCount initial={1} stock={5} onAdd={onAdd}></ItemCount>
      }
    </div>
    
  )
}

export default ItemDetail