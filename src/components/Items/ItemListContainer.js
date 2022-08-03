import React from 'react'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ({texto}) => {
  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades`)
  }

  return (
    <div>
      <Title greeting={texto}/>
      <ItemCount initial={0} stock={5} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer