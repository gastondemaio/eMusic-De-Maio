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
    <div>
        <img src={data.img}></img>
        <div><h3>{data.title}</h3></div>
        <div><p>{data.descripcion}</p></div>
        <div><p>{data.price}</p></div>
        {
          goToCart
              ? <Link to='/cart'>Terminar compra</Link>
              : <ItemCount initial={3} stock={5} onAdd={onAdd}></ItemCount>
        }
    </div>
  )
}

export default ItemDetail