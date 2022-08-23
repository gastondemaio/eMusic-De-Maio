import React, {useState, useEffect} from 'react'
import Title from '../Title/Title'
import ItemCount from '../ItemCount/ItemCount'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const music = [
  {id:1, img:"https://indiehoy.com/wp-content/uploads/2017/05/elmato-1200x1200.jpg", banda: "El Mató a un Policía Motorizado", title:"La sintesis O'Konor", category:"album"},
  {id:2, img:"https://f4.bcbits.com/img/a2686965564_10.jpg", banda: "Mi Amigo Invencible", title:"La Danza de los Principiantes", category:"album"},
  {id:3, img:"https://f4.bcbits.com/img/a4246136740_10.jpg", banda: "Las Ligas Menores", title:"Fuego Artificial", category:"album"},
  {id:4, img:"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/e1/7a/fd/e17afda6-6726-13eb-6764-c9f6db013126/0.jpg/1200x1200bf-60.jpg", banda: "Koino Yokan", title:"Lo Que Hoy Quieras", category:"sencillo"},
  {id:5, img:"https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/dd/bc/12/ddbc129e-d15f-c9e6-2d8d-d785b3ac7a6b/0.jpg/1200x1200bf-60.jpg", banda: "Delfina Campos", title:"El Astronauta", category:"sencillo"},
  {id:6, img:"https://e.snmc.io/i/1200/s/12eb69f81e636c655708d73f33130c57/10111552", banda: "Joji", title:"Glimpse of Us", category:"sencillo"},
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
      getData.then(res => setData(res.filter(album => album.category === categoriaId)))
    }else{
      getData.then(res => setData(res))
    }
  }, [categoriaId])

  const onAdd = (quantity) =>{
    console.log(`Compraste ${quantity} unidades`)
  }

  return (
    <div>
      <Title/>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      <ItemList data={data}/>
    </div>
  )
}

export default ItemListContainer