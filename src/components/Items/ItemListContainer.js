import React, {useState, useEffect} from 'react'
import Title from '../Title/Title'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const music = [
  {id:1, img:"https://indiehoy.com/wp-content/uploads/2017/05/elmato-1200x1200.jpg", banda: "El Mató a un Policía Motorizado", title:"La sintesis O'Konor", category:"album"},
  {id:2, img:"https://f4.bcbits.com/img/a2686965564_10.jpg", banda: "Mi Amigo Invencible", title:"La Danza de los Principiantes", category:"album"},
  {id:3, img:"https://f4.bcbits.com/img/a4246136740_10.jpg", banda: "Las Ligas Menores", title:"Fuego Artificial", category:"album"},
]

const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const {categoriaId} = useParams();

  useEffect(() => {
    const getData = new Promise(resolve => {
      setTimeout(() => {
        resolve(music)
      }, 3000)
    });
    if(categoriaId){
      getData.then(res => res.filter(album => album.category === categoriaId))
    }else{
      getData.then(res => setData(res))
    }
  }, [categoriaId])

  return (
    <div>
      <Title/>
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer