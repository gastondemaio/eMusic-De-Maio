import React from 'react'
import Item from '../Item/Item'

const ItemList = ({data = []}) => {
  return (
    <div className='items'>
      {data.map(album => <Item key={album.id} info={album}/>)}
    </div>
     
  )
}

export default ItemList