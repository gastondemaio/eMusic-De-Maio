import { addDoc, collection, getFirestore } from 'firebase/firestore';
import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext'
import ItemCart from '../ItemCart/ItemCart';

const Cart = () => {
  const { cart, totalPrice} = useCartContext();
  const { clearCart } = useCartContext()

  const order = {
    buyer: {
      name: 'Gaston',
      email: 'gastondemaio@gmail.com',
      phone: '3624112233',
      addres: 'Calle Siempre Alegre 54'
    },
    item: cart.map(product => ({id: product.id, title: product.title, price: product.price, quantity: product.quantity})),
    total: totalPrice(),
  }

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, 'orders');
    addDoc(ordersCollection, order)
    .then(({id}) => console.log(id))

  }


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
      <button onClick={() => clearCart(product => <ItemCart key={product.id} product={product}/>)}>Eliminar Todo</button>
      <button onClick={handleClick}>Emitir Compra</button>
    </>
  )
}

export default Cart