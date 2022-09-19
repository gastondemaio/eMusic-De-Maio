import React from 'react'
import { useCartContext } from '../../context/CartContext'

const ItemCart = ({product}) => {
    const { removeProduct } = useCartContext()
    
    return (
        <div>
            <div className='card__cart'>
                <img src={product.image} alt={product.title}/>
                <div className='container'>
                    <div><p>Titulo: {product.title}</p></div>
                    <div><p>Cantidad: {product.quantity}</p></div>
                    <div><p>Precio u.: {product.price}</p></div>
                    <div><p>Subtotal: ${product.quantity * product.price}</p></div>
                </div>
                <div>
                    <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                </div>
                <br/>
            </div>
            <br/>
        </div>
  )
}

export default ItemCart