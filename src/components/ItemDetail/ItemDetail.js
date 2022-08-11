import React from 'react'


const ItemDetail = ({data}) => {
  return (
    <div>
        <img src={data.img}></img>
        <div><h1>{data.title}</h1></div>
    </div>
  )
}

export default ItemDetail