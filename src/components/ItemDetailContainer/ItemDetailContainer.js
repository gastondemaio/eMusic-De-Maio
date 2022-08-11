import React, {useEffect, useState} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'

const albums = 
    {id:1, img:"https://indiehoy.com/wp-content/uploads/2017/05/elmato-1200x1200.jpg", banda: "El Mató a un Policía Motorizado", title:"La sintesis O'Konor", price: 1500, descripcion:"La Síntesis O'konor es el tercer álbum de estudio del grupo Él Mató a un Policía Motorizado. Fue grabado en 2017, fue compuesto y escrito principalmente por el bajista y cantante Santiago Motorizado"}

const ItemDetailContainer = () => {
    const [data, setData] = useState({});

    useEffect(() => {
      const getData = new Promise(resolve => {
        setTimeout(() => {
          resolve(albums)
        }, 3000)
      });
      getData.then(res => setData(res))
  
    }, [])

    return (
        <ItemDetail data={data}/>   
  )
}

export default ItemDetailContainer