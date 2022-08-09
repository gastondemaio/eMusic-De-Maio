import React, {useState, useEffect} from 'react'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'

const albums = [
  {id:1, img:"https://indiehoy.com/wp-content/uploads/2017/05/elmato-1200x1200.jpg", banda: "El Mató a un Policía Motorizado", title:"La sintesis O'Konor", price: 1500},
  {id:2, img:"https://f4.bcbits.com/img/a2686965564_10.jpg", banda: "Mi Amigo Invencible", title:"La Danza de los Principiantes", price: 1500},
  {id:3, img:"https://f4.bcbits.com/img/a4246136740_10.jpg", banda: "Las Ligas Menores", title:"Fuego Artificial", price: 1500},
]

const ItemListContainer = ({texto}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(albums)
      }, 3000)
    });
    getData.then(res => setData(res))

  }, [])

  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades`)
  }

  return (
    <div>
      <Title greeting={texto}/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer