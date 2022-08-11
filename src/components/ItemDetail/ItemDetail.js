import React from 'react'


const ItemDetail = ({data}) => {
  return (
    <div>
        <img src={data.img}></img>
        <div><h3>{data.title}</h3></div>
        <div><p>{data.descripcion}</p></div>
        <div><p>{data.price}</p></div>
    </div>
  )
}

export default ItemDetail