import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({info}) => {
  return (
    <Link to={`/detalle/${info.id}`} className='musica'>
        <img src={info.img} alt=''/>
        <p>{info.title}</p>
        <p>{info.price}</p>
    </Link>
  )
}

export default Item