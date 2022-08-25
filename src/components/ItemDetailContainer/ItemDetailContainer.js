import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const musica = [
  {id:1, image:"https://indiehoy.com/wp-content/uploads/2017/05/elmato-1200x1200.jpg", banda: "El Mató a un Policía Motorizado", title:"La sintesis O'Konor", category:"album", price:"1000"},
  {id:2, image:"https://f4.bcbits.com/img/a2686965564_10.jpg", banda: "Mi Amigo Invencible", title:"La Danza de los Principiantes", category:"album", price:"1000"},
  {id:3, image:"https://f4.bcbits.com/img/a4246136740_10.jpg", banda: "Las Ligas Menores", title:"Fuego Artificial", category:"album", price:"1000"},
  {id:4, image:"https://is2-ssl.mzstatic.com/image/thumb/Music115/v4/e1/7a/fd/e17afda6-6726-13eb-6764-c9f6db013126/0.jpg/1200x1200bf-60.jpg", banda: "Koino Yokan", title:"Lo Que Hoy Quieras", category:"sencillo", price:"200"},
  {id:5, image:"https://is5-ssl.mzstatic.com/image/thumb/Music114/v4/dd/bc/12/ddbc129e-d15f-c9e6-2d8d-d785b3ac7a6b/0.jpg/1200x1200bf-60.jpg", banda: "Delfina Campos", title:"El Astronauta", category:"sencillo", price:"200"},
  {id:6, image:"https://e.snmc.io/i/1200/s/12eb69f81e636c655708d73f33130c57/10111552", banda: "Joji", title:"Glimpse of Us", category:"sencillo", price:"200"},
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