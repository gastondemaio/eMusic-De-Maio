import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({info}) => {
  return (
    <div className='card'>
      <Link to={`/detalle/${info.id}`}>
          <img src={info.image} alt='' />
          <div className='container'>
            <p className='item__title'>{info.banda}</p>
            <p className='item__price'>{info.title}</p>
          </div>
      </Link>
    </div> 
  )
}

export default Item