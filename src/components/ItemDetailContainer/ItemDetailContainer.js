import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const musica = [
  {id:1, img:"https://indiehoy.com/wp-content/uploads/2017/05/elmato-1200x1200.jpg", banda: "El Mató a un Policía Motorizado", title:"La sintesis O'Konor", category:"album"},
  {id:2, img:"https://f4.bcbits.com/img/a2686965564_10.jpg", banda: "Mi Amigo Invencible", title:"La Danza de los Principiantes", category:"album"},
  {id:3, img:"https://f4.bcbits.com/img/a4246136740_10.jpg", banda: "Las Ligas Menores", title:"Fuego Artificial", category:"album"},
]

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    const {detalleId} = useParams();

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(musica)
        }, 3000)
      });
      getData.then(res => setData(res.find(album => album.id === parseInt(detalleId))))
  
    }, [])

    return (
        <ItemDetail data={data}/>   
  )
}

export default ItemDetailContainer