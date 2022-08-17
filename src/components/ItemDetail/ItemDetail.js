import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount'


const ItemDetail = ({data}) => {
  const [goToCart, setGoToCart] = useState(false);

  const onAdd = (quantity) =>{
    setGoToCart(true)
  }

  return (
    <div>
        <img src={data.img}></img>
        <div><h3>{data.title}</h3></div>
        <div><p>{data.descripcion}</p></div>
        <div><p>{data.price}</p></div>
        { goToCart
          ? <Link to='/cart'>Terminar compra</Link>
          : <ItemCount initial={1} stock={5} onAdd={onAdd}/>}
    </div>
  )
}

export default ItemDetail