import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice} = useCartContext();
  const { clearCart } = useCartContext()
  if(cart.length === 0){
    return(
      <>
        <p>No hay elementos en el carrito</p>
        <Link to='/'>Hacer compras</Link>
      </>
    )
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>
        total: {totalPrice()}
      </p>
      <button onClick={() => clearCart(cart.map(product => <ItemCart key={product.id} product={product}/>))}>Eliminar Todo</button>
    </>
  )
}

export default Cart